import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = '';
  textWelcome = 'Bienvenido a mi sitio Web...';

  ngOnInit(): void {
    this.typeEffect(this.textWelcome);
  }

  typeEffect(txt: string): void {
    let count = 0;
    const audio = new Audio('/assets/typewriter.mp3');
    audio.load();
    const intervalo = setInterval(() => {
      
      // console.log(this.title.concat('s'));
      audio.play()
      this.title += txt.charAt(count);

      count++;
      if (count >= txt.length) {
        audio.pause();
        clearInterval(intervalo);
      }
    }, 100);
  }
}
