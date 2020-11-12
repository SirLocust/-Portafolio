import { Component, OnInit, Input, Renderer2, ElementRef, ViewChild } from '@angular/core';
import {faArrowCircleDown} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-button-scroll-to',
  templateUrl: './button-scroll-to.component.html',
  styleUrls: ['./button-scroll-to.component.scss'],
})
export class ButtonScrollToComponent implements OnInit {
  @Input() idToScroll: HTMLDivElement ;
  faLongArrowAltDown = faArrowCircleDown;
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    
  }

  goTo(): void {
    this.idToScroll.scrollIntoView({behavior: 'smooth'})

  }


}
