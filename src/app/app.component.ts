import { GitServiceService } from './core/git-service.service';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLandscape = false;
  gitHubRepos = []

  constructor(private render2: Renderer2,
              private gitService:GitServiceService
              ) {}

  ngOnInit(): void {
    this.isLandScape();
    this.render2.listen('window', 'orientationchange', (event) => {
      this.isLandScape();
    });

    this.gitService.getAllRespositories().subscribe( data => {
      console.log(data[0])
    })
  }
  // change() {
  //   console.log('s');
  //   document.documentElement.requestFullscreen();
  //   screen.orientation.lock('landscape-primary');
  // }
  isLandScape(): void {
    
    const screenOrientation: string = window.screen.orientation.type;

    const isLandScapeAnyType: boolean =
          screenOrientation === 'landscape-primary'
        ? true
        : screenOrientation === 'landscape'
        ? true
        : screenOrientation === 'landscape-secondary'
        ? true
        : false;

    if (!isLandScapeAnyType) {
      this.isLandscape = false;
    }
    if (isLandScapeAnyType) {
      this.isLandscape = true;
    }
  }
}
