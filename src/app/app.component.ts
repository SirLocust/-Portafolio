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
    // console.log('s');
    this.texto = window.screen.orientation.type;
    console.log(window.screen.orientation.type);
    if (window.screen.orientation.type !== 'landscape-primary') {
      this.isLandscape = false;
    }
    if (window.screen.orientation.type === 'landscape-primary') {
      this.isLandscape = true;
    }
  }
}
