import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { GitServiceService } from 'src/app/core/git-service.service';
import { RepositoryGit } from 'src/app/core/models/repository-git.model';

@Component({
  selector: 'app-exercise-course',
  templateUrl: './exercise-course.component.html',
  styleUrls: ['./exercise-course.component.scss'],
})
export class ExerciseCourseComponent implements OnInit {
  repos: RepositoryGit[] = [];
  constructor(public gitService: GitServiceService) {}

  ngOnInit(): void {
    this.gitService
      .getAllRespositories()
      .pipe(
        map((repositories: RepositoryGit[]) => {
          console.log(repositories);
          return repositories.filter((repository: RepositoryGit) => {
            return repository.name.charAt(0) !== '-';
          });
        })
      )
      .subscribe((repositories: RepositoryGit[]) => {
        this.repos = repositories;
      });
  }
}
