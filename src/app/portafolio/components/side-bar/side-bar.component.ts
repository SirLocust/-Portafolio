import { UserGit } from './../../../core/models/user-git.model';
import { GitServiceService } from './../../../core/git-service.service';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  user: UserGit;
  constructor(private gitservice: GitServiceService) {}

  ngOnInit(): void {
    this.gitservice.getUser().subscribe((user: UserGit) => {
      this.user = user;
    });
  }
}
