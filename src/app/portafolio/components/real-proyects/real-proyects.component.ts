import { RepositoryGit } from './../../../core/models/repository-git.model';
import { GitServiceService } from './../../../core/git-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-real-proyects',
  templateUrl: './real-proyects.component.html',
  styleUrls: ['./real-proyects.component.scss'],
})
export class RealProyectsComponent implements OnInit, OnDestroy {
  repos: RepositoryGit[] = [];
  subscribeService: Subscription;
  constructor(public gitService: GitServiceService) {}

  ngOnInit(): void {
    this.subscribeService = this.gitService
      .getAllRespositories()
      .pipe(
        map((repositories: RepositoryGit[]) => {
          return repositories.filter((repository: RepositoryGit) => {
            return repository.name.charAt(0) === '-';
          });
        })
      )
      .subscribe((repositories: RepositoryGit[]) => {
        this.repos = repositories;
      });
  }

  ngOnDestroy(): void {
    this.subscribeService.unsubscribe();
  }
}
