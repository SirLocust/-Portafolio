import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',

  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @HostBinding('class') containerClass = 'container';
  constructor() { }

  ngOnInit(): void {
  }

}
