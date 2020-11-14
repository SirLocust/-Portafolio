import { GitServiceService } from './../../../core/git-service.service';
import { Component, OnInit } from '@angular/core';
import { filter, map} from 'rxjs/operators';
@Component({
  selector: 'app-real-proyects',
  templateUrl: './real-proyects.component.html',
  styleUrls: ['./real-proyects.component.scss']
})
export class RealProyectsComponent implements OnInit {
  repos = []
  constructor(public gitService: GitServiceService) { }

  ngOnInit(): void {
    this.gitService.getAllRespositories()
    .pipe(
      map( (data) => {
        return  data.filter( data => {
           return data.name.charAt(0) === '-';
           })
      })
    )
    .subscribe( (repos) => {
      console.log(repos)
      this.repos = repos;
    });
  }

}
