import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',

  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @HostBinding('class') containerClass = 'container';
  @Input() refToScroll: HTMLElement;
  constructor() { }

  ngOnInit(): void {
  }

}
