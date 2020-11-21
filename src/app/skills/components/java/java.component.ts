import { Component, HostBinding, OnInit } from '@angular/core';
import { PersonaDataService } from 'src/app/core/persona-data.service';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.scss']
})
export class JavaComponent implements OnInit {
  @HostBinding('class') containerWith = 'container_with';
  logoJavaUrl = 'assets/javalogo.png';
  colorBackground = '4,117,188';
  
  constructor(public personalDataService: PersonaDataService ) { }

  ngOnInit(): void {
  }

}
