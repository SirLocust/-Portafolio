import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { GitServiceService } from 'src/app/core/git-service.service';
import { RepositoryGit } from 'src/app/core/models/repository-git.model';

@Component({
  selector: 'app-exercise-course',
  templateUrl: './exercise-course.component.html',
  styleUrls: ['./exercise-course.component.scss'],
})
export class ExerciseCourseComponent implements OnInit, OnDestroy {
  repos: RepositoryGit[] = [];
  subscribeService: Subscription;

  constructor(public gitService: GitServiceService) {}

  ngOnInit(): void {
    this.subscribeService = this.gitService
      .getAllRespositories()
      .pipe(
        map((repositories: RepositoryGit[]) => {
          return repositories.filter((repository: RepositoryGit) => {
            return repository.name.charAt(0) !== '-';
          });
        })
      )
      .subscribe((repositories: RepositoryGit[]) => {
        this.repos = repositories;
      });
  }
  ngOnDestroy(): void{
    this.subscribeService.unsubscribe();
  }
}
