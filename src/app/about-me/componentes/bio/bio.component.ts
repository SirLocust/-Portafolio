import { Subscription } from 'rxjs';
import { BioInfo } from './../../../core/models/bio-info.model';
import { PersonaDataService } from './../../../core/persona-data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonalData } from 'src/app/core/models/personal-data.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss'],
})
export class BioComponent implements OnInit {
  title = '';
  textWelcome = 'Bienvenido a mi sitio Web...';
  bioVisible = false;
  soundTyping = new Audio('assets/typewriter.mp3');
  constructor(public personalDataService: PersonaDataService) {}

  ngOnInit(): void {
    this.typeEffect(this.textWelcome);
  }
  typeEffect(txt: string): void {
    this.soundTyping.load();
    const intervalo = setInterval(() => {
      this.soundTyping.play();
      this.title += txt.charAt(this.title.length);
      if (this.title.length >= txt.length) {
        clearInterval(intervalo);
        this.soundTyping.pause();
        setTimeout(() => {
          this.bioVisible = true;
        }, 1000);
      }
    }, 100);
  }
}
