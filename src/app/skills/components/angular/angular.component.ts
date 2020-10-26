import { Component, HostBinding, OnInit } from '@angular/core';
import { InfoSkills } from '../../models/InfoSkills.model';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {
  @HostBinding('class') containerWith = 'container_with';
  colorBackground = '195,14,46';
  logoAngularUrl = '../../../../assets/angular.png';
  skillsAngularLeft: InfoSkills[] = [
    {
      title: 'sintaxis basica',
      info:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis assumenda rerum exercitationem ducimus iste expedita, nobis, voluptas ipsam illum delectus similique, est nostrum iusto cupiditate magnam officia incidunt. Dignissimos, quidem?',
    },
    {
      title: 'sintaxis basica',
      info:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis assumenda rerum exercitationem ducimus iste expedita, nobis, voluptas ipsam illum delectus similique, est nostrum iusto cupiditate magnam officia incidunt. Dignissimos, quidem?',
    },
    {
      title: 'sintaxis basica',
      info:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis assumenda rerum exercitationem ducimus iste expedita, nobis, voluptas ipsam illum delectus similique, est nostrum iusto cupiditate magnam officia incidunt. Dignissimos, quidem?',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
