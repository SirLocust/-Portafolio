import {
  animate,
  trigger,
  state,
  style,
  transition,
} from '@angular/animations';
import { InfoSkills } from './../../models/InfoSkills.model';
import { Component, HostBinding, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-containerskill',
  templateUrl: './containerskill.component.html',
  styleUrls: ['./containerskill.component.scss'],
  animations: [
    trigger('activeRotate', [
      state(
        'off',
        style({
          opacity: 0,
          transform: 'rotate(0deg)',
        })
      ),
      state(
        'on',
        style({
          opacity: 1,

          transform: 'rotate(360deg)',
        })
      ),
      transition('off => on', [animate('0.3s')]),
      transition('on => off', [animate('0.3s')]),
    ]),
  ],
})
export class ContainerskillComponent implements OnInit {
  @HostBinding('class.flex_center') flexCenter = true;
  @Input() logoUrl: string = '/';
  @Input() textColor: string = 'black';
  @Input() skillsInfoLeft: string;
  @Input() skillsInfoRigth: string;
  @Input() backgroundColorInfos = '0,0,0';

  isOnLogo: boolean = false;
  isRotate = 'off';
  constructor(private elementRef:ElementRef , private rederer:Renderer2) {
  }

  ngOnInit(): void {
    this.rederer.setStyle(this.elementRef.nativeElement,'color',this.textColor);

  }

  toggleIsOnLogo(): void {
    this.isOnLogo = !this.isOnLogo;
    this.isRotate = this.isRotate === 'off' ? 'on' : 'off';
  }
}
