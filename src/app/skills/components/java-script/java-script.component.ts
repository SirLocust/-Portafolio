import { InfoSkills } from './../../models/InfoSkills.model';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-java-script',
  templateUrl: './java-script.component.html',
  styleUrls: ['./java-script.component.scss'],
})
export class JavaScriptComponent implements OnInit {
  @HostBinding('class') containerWith = 'container_with';
  logoJavaScriptUrl = '../../../../assets/javascript-39404.png';
  colorBackground = '247,223,30';
  skillsJavaScriptLeft: InfoSkills[] = [
    {
      title: 'sintaxis basica',
      info:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis assumenda rerum exercitationem ducimus iste expedita, nobis, voluptas ipsam illum delectus similique, est nostrum iusto cupiditate magnam officia incidunt. Dignissimos, quidem?',
    },
    // {
    //   title: 'sintaxis basica',
    //   info:
    //     ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis assumenda rerum exercitationem ducimus iste expedita, nobis, voluptas ipsam illum delectus similique, est nostrum iusto cupiditate magnam officia incidunt. Dignissimos, quidem?',
    // },
    // {
    //   title: 'sintaxis basica',
    //   info:
    //     ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis assumenda rerum exercitationem ducimus iste expedita, nobis, voluptas ipsam illum delectus similique, est nostrum iusto cupiditate magnam officia incidunt. Dignissimos, quidem?',
    // },
  ];
  constructor() {}

  ngOnInit(): void {}
}
