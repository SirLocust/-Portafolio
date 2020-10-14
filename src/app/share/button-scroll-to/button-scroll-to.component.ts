import {
  Component,
  OnInit,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-button-scroll-to',
  templateUrl: './button-scroll-to.component.html',
  styleUrls: ['./button-scroll-to.component.scss'],
})
export class ButtonScrollToComponent implements OnInit {
  @Input() idToScroll: HTMLElement;

  // @ViewChild('bioSec1' , {static: true}) biosection1: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  goTo(): void{
    this.idToScroll.scrollIntoView({ behavior: 'smooth' });
  }
}
