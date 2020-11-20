import { Observable, of, Subscription } from 'rxjs';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { GitServiceService } from 'src/app/core/git-service.service';

@Component({
  selector: 'app-card-git',
  templateUrl: './card-git.component.html',
  styleUrls: ['./card-git.component.scss'],
})
export class CardGitComponent implements OnInit, OnDestroy {
  @Input() nameRepo = '';
  @Input() descriptionRepo: string;
  @Input() urlRepo: string;
  lengthCommits: number;
  urlImg: Observable<string>;
  subscribeService: Subscription[] = [];
  constructor(private gitService: GitServiceService) {}

  ngOnInit(): void {
    this.subscribeService.push(
      this.gitService
        .getCommitsRepo(this.nameRepo)
        .subscribe((commitsLength: number) => {
          this.lengthCommits = commitsLength;
        })
    );
    this.subscribeService.push(
      this.gitService
        .getReadmeRepo(this.nameRepo)
        .subscribe((readmeTxt: string) => {
          this.urlImg = this.extractUrlImgInReadme(readmeTxt);
        })
    );
  }

  extractUrlImgInReadme(readmeTxt: string): Observable<string> {
    if (!readmeTxt.match(/(<img src=").+(">)/g)) {
      return undefined;
    }
    let arraySplit = readmeTxt.split(/<img src="/);
    arraySplit.shift();
    const tempString = arraySplit.join();
    arraySplit = tempString.split(/" alt/);
    return of(arraySplit[0]);
  }

  ngOnDestroy(): void{
    this.subscribeService.forEach( subs => subs.unsubscribe());
  }
}
