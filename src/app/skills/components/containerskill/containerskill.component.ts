import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-containerskill',
  templateUrl: './containerskill.component.html',
  styleUrls: ['./containerskill.component.scss']
})
export class ContainerskillComponent implements OnInit {
  @HostBinding('class.flex_center') flexCenter = true;
  @Input()  logoUrl: string = '/';
  isOnLogo: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleIsOnLogo(): void{
    this.isOnLogo = !this.isOnLogo;
  }

}
