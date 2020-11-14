import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss'],
})
export class BioComponent implements OnInit {
  title = '';
  textWelcome = 'Bienvenido a mi sitio Web...';
  bioVisible = false;
  constructor() {}

  ngOnInit(): void {
   this.typeEffect(this.textWelcome);
  }
  typeEffect(txt: string): void {
    const soundTyping = new Audio('assets/typewriter.mp3');
    soundTyping.load();
    const intervalo = setInterval(() => {
      soundTyping.play();
      this.title += txt.charAt(this.title.length);
      if (this.title.length >= txt.length) {
        clearInterval(intervalo);
        soundTyping.pause();
        setTimeout(()=>{

          this.bioVisible = true;
        }, 1000);
      }
    }, 100);
  }
}
