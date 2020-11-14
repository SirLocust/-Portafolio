import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { GitServiceService } from 'src/app/core/git-service.service';

@Component({
  selector: 'app-exercise-course',
  templateUrl: './exercise-course.component.html',
  styleUrls: ['./exercise-course.component.scss']
})
export class ExerciseCourseComponent implements OnInit {
  repos = [];
  constructor(public gitService: GitServiceService) { }

  ngOnInit(): void {
    this.gitService.getAllRespositories()
    .pipe(
      map( (data) => {
        return  data.filter( data => {
           return data.name.charAt(0) !== '-';
           })
      })
    )
    .subscribe( (repos) => {
      this.repos = repos;
    });
  }

}
