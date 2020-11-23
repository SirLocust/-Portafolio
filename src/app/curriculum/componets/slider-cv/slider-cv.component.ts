import { StateAnimatioCv } from './../../models/StateAnimationCv.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-slider-cv',
  templateUrl: './slider-cv.component.html',
  styleUrls: ['./slider-cv.component.scss'],
  animations: [
    trigger('toggleViewCv', [
      state(
        'off',
        style({
          width: '0',
        })
      ),
      state(
        'on',
        style({
          width: '80.5em',
        })
      ),
      transition('off => on', animate('700ms ease-in-out')),
      transition('on => off', animate('700ms ease-in-out')),
    ]),
  ],
})
export class SliderCvComponent implements OnInit {
  @Input() animationViewCv = 'off';
  @Input() viewCvElementPos: number;
  @Input() animationViewCvList: StateAnimatioCv[];
  @Input() nameCv: string;
  @Input() urlImgCv: string;
  @Output() animationViewCvEmitter = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
  toggleCv(): void {
    // setTimeout(() => {
    const cvList = this.animationViewCvList;

    for (let index = 0; index < cvList.length; index++) {
      if (index === this.viewCvElementPos) {
        cvList[index].isViewCvAnimation =
          this.animationViewCv === 'off' ? 'on' : 'off';
      } else {
        cvList[index].isViewCvAnimation = 'off';
      }
    }
    this.animationViewCvEmitter.emit(cvList);
  }
}
