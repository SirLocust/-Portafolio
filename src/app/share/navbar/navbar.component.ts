import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBriefcase, faMale, faScroll, faTools } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private iconLibrary: FaIconLibrary) {
    iconLibrary.addIcons(
      faMale,
      faTools,
      faBriefcase,
      faScroll
    );
   }

  ngOnInit(): void {
  }

}
