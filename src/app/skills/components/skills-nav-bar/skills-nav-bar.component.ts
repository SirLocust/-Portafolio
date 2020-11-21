import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAngular , faJs, faJava} from '@fortawesome/free-brands-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-skills-nav-bar',
  templateUrl: './skills-nav-bar.component.html',
  styleUrls: ['./skills-nav-bar.component.scss']
})
export class SkillsNavBarComponent implements OnInit {
  // faAngular = faAngular;
  constructor( library: FaIconLibrary) {
      library.addIcons(
        faAngular,
        faJs,
        faJava,
        faPlus
      );
   }

  ngOnInit(): void {

  }

}
