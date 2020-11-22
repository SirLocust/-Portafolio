import { UserGit } from './../../../core/models/user-git.model';
import { GitServiceService } from './../../../core/git-service.service';
import { faLaptopCode, faChalkboardTeacher} from '@fortawesome/free-solid-svg-icons'
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit, OnDestroy {
  user: UserGit;
  subscribeService: Subscription;
  faLaptoCode = faLaptopCode;
  faChalkboardTeacher = faChalkboardTeacher;
  constructor(private gitservice: GitServiceService) {}

  ngOnInit(): void {
    this.subscribeService = this.gitservice.getUser().subscribe((user: UserGit) => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    this.subscribeService.unsubscribe();
  }
}
