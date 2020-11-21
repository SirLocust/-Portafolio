import { Component, HostBinding, OnInit } from '@angular/core';
import { PersonaDataService } from 'src/app/core/persona-data.service';
import { InfoSkills } from '../../models/InfoSkills.model';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {
  @HostBinding('class') containerWith = 'container_with';
  colorBackground = '195,14,46';
  logoAngularUrl = 'assets/angular.png';

  constructor( public personalDataService: PersonaDataService ) { }

  ngOnInit(): void {
  }

}
