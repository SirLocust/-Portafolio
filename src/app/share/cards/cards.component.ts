import { Component,  Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  @Input() boxShadowColor: string = '';
  constructor() { }
  ngOnInit(): void {
  }

}
