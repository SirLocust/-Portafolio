import { RepositoryGit } from './../../../core/models/repository-git.model';
import { GitServiceService } from './../../../core/git-service.service';
import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-real-proyects',
  templateUrl: './real-proyects.component.html',
  styleUrls: ['./real-proyects.component.scss'],
})
export class RealProyectsComponent implements OnInit {
  repos: RepositoryGit[] = [];
  constructor(public gitService: GitServiceService) {}

  ngOnInit(): void {
    this.gitService
      .getAllRespositories()
      .pipe(
        map((repositories: RepositoryGit[]) => {
          console.log(repositories);
          return repositories.filter((repository: RepositoryGit) => {
            return repository.name.charAt(0) === '-';
          });
        })
      )
      .subscribe((repositories: RepositoryGit[]) => {
        this.repos = repositories;
      });
  }
}
