import { Component,  Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  @Input() boxShadowColor: string = '';
  @Input() encabezadoCard: string = 'Mi Vida Como Programador';
  @Input() textoCard: string = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta eum est odio necessitatibus voluptatem magni molestiae fugit nisi ratione voluptas impedit laborum modi suscipit repudiandae facere, ex vel. Quisquam, quo.';
  @Input() urlImage1 : string
  @Input() urlImage2 : string

  showImg : boolean = false;
  constructor() { }
  ngOnInit(): void {
  }


  
}
