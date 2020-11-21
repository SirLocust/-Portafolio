import { Component, HostBinding, OnInit } from '@angular/core';
import { InfoSkills } from '../../models/InfoSkills.model';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.scss']
})
export class JavaComponent implements OnInit {
  @HostBinding('class') containerWith = 'container_with';
  logoJavaUrl = 'assets/javalogo.png';
  colorBackground = '4,117,188';
  skillsJavaLeft: InfoSkills[] = [
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
