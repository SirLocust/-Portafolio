import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLandscape = false;
  texto = 's';

  constructor(private render2: Renderer2) {}

  ngOnInit(): void {
    this.isLandScape();
    this.render2.listen('window', 'orientationchange', (event) => {
      this.isLandScape();
    });
  }
  change() {
    console.log('s');
    document.documentElement.requestFullscreen();
    screen.orientation.lock('landscape-primary');
  }
  isLandScape(): void {
    // this.texto = window.screen.orientation.type;
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
