import { Component, OnInit, Input } from '@angular/core';
import { GitServiceService } from 'src/app/core/git-service.service';

@Component({
  selector: 'app-card-git',
  templateUrl: './card-git.component.html',
  styleUrls: ['./card-git.component.scss'],
})
export class CardGitComponent implements OnInit {
  @Input() nameRepo = '';
  @Input() descriptionRepo: string;
  @Input() urlRepo: string;
  lengthCommits: number;
  urlImg: string;
  ;
  constructor(private gitService: GitServiceService) {}

  ngOnInit(): void {
    
    
    // this.gitService.getCommitsRepo(this.nameRepo).subscribe((commitsLength) => {
    //   this.lengthCommits = commitsLength;
    // });
    this.gitService.getReadmeRepo(this.nameRepo).subscribe( (readmeTxt: string) =>{
      this.urlImg = this.extractUrlImgInReadme(readmeTxt);
    })
  }

  extractUrlImgInReadme(readmeTxt: string){
    if(!readmeTxt.match(/(<img src=").+(">)/g)){
      return undefined;
    }
    let arraySplit = readmeTxt.split(/<img src="/);
    arraySplit.shift();
    const tempString  = arraySplit.join();
    arraySplit = tempString.split(/" alt/);
    return arraySplit[0];
  }
}
