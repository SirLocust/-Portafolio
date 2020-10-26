import { InfoSkills } from './../../models/InfoSkills.model';
import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-containerskill',
  templateUrl: './containerskill.component.html',
  styleUrls: ['./containerskill.component.scss']
})
export class ContainerskillComponent implements OnInit {
  @HostBinding('class.flex_center') flexCenter = true;
  @Input()  logoUrl: string = '/';
  @Input()  skillsInfoLeft: InfoSkills[];
  @Input()  skillsInfoRigth: InfoSkills[];
  @Input()  backgroundColorInfos = '0,0,0';

  isOnLogo: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleIsOnLogo(): void{
    this.isOnLogo = !this.isOnLogo;
  }

}
