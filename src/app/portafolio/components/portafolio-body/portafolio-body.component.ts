import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio-body',
  templateUrl: './portafolio-body.component.html',
  styleUrls: ['./portafolio-body.component.scss']
})
export class PortafolioBodyComponent implements OnInit {
  @HostBinding('class.container_with') container = true;
  constructor() { }

  ngOnInit(): void {
  }

}
