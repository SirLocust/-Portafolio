import { InfoSkills } from './../../models/InfoSkills.model';
import { Component, HostBinding, OnInit } from '@angular/core';
import { PersonaDataService } from 'src/app/core/persona-data.service';

@Component({
  selector: 'app-java-script',
  templateUrl: './java-script.component.html',
  styleUrls: ['./java-script.component.scss'],
})
export class JavaScriptComponent implements OnInit {
  @HostBinding('class') containerWith = 'container_with';
  logoJavaScriptUrl = 'assets/javascript-39404.png';
  colorBackground = '247,223,30';
    constructor( public personalDataService: PersonaDataService) {}

  ngOnInit(): void {}
}
