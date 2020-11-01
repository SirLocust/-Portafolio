import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations'

@Component({
  selector: 'app-slider-cv',
  templateUrl: './slider-cv.component.html',
  styleUrls: ['./slider-cv.component.scss'],
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
export class SliderCvComponent implements OnInit {
  @Input() animationViewCv = 'off'
  @Input() viewCvElementPos :number
  @Input() animationViewCvList 
  @Output() animationViewCvEmitter = new EventEmitter<any>()
  

  constructor() { }

  ngOnInit(): void {
    console.log(this.animationViewCvList)
  }

  toggleCv(): void {
    
    // setTimeout(() => {
    let arr = this.animationViewCvList

    for (let index = 0; index < arr.length; index++) {
      if( index === this.viewCvElementPos){
        arr[index].isViewCvAnimation = (this.animationViewCv === 'off') ? 'on' : 'off'
      }else{
        arr[index].isViewCvAnimation = 'off'
      }

      
    }
    this.animationViewCvEmitter.emit(arr)
    // this.animationViewCv = (this.animationViewCv === 'off') ? 'on' : 'off'
    
    // }, 100);
  }

}
