import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations'

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.scss'],
  animations:[
    trigger('toggleViewCv', [
      state('off', style({
        width : '0'
      })),
      state('on', style({
        width: '62.5em'
      })),
      transition('off => on', animate('700ms ease-in-out')),
      transition('on => off', animate('700ms ease-in-out')),

    ])
  ]
})
export class CurriculumVitaeComponent implements OnInit {
  isViewCv = false;
  isViewCv1 = false;
  animationViewCv = 'on'

  constructor() { }

  ngOnInit(): void {
  }

  toggleCv(): void {
    this.isViewCv = !this.isViewCv;
    // setTimeout(() => {
    this.animationViewCv = (this.animationViewCv === 'off') ? 'on' : 'off'

    // }, 100);
  }

  
  toggleCv1(){
    this.isViewCv1 = !this.isViewCv1;
  }

}
