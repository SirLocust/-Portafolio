import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PersonaDataService } from 'src/app/core/persona-data.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  

  constructor(public personalDataService: PersonaDataService) { }

  ngOnInit(): void {

    
  }


}
