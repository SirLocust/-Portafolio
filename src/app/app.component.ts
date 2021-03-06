import { PersonaDataService } from './core/persona-data.service';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLandscape = false;
  gitHubRepos = [];

  constructor(
    private render2: Renderer2,
    public personalDataService: PersonaDataService
  ) {
    this.isLandScape();
  }

  ngOnInit(): void {
    
    this.render2.listen('window', 'orientationchange', (event) => {
      this.isLandScape();
    });
  }
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
