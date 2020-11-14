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
  constructor(private gitService: GitServiceService) {}

  ngOnInit(): void {
    this.gitService.getCommitsRepo(this.nameRepo).subscribe((commitsLength) => {
      this.lengthCommits = commitsLength;
    });
  }
}
