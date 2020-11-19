import { Component, OnInit } from '@angular/core';
import { FaIconLibrary} from '@fortawesome/angular-fontawesome'
import { faGithub, faLinkedin,faTwitter,faFreeCodeCamp} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-socialbutton-group',
  templateUrl: './socialbutton-group.component.html',
  styleUrls: ['./socialbutton-group.component.scss']
})
export class SocialbuttonGroupComponent implements OnInit {

  constructor( private iconLibrary: FaIconLibrary) { }

  ngOnInit(): void {
    this.iconLibrary.addIcons(
      faGithub,
      faLinkedin,
      faFreeCodeCamp,
      faTwitter
    );
  }

}
