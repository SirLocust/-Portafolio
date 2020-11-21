import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-ti',
  templateUrl: './other-ti.component.html',
  styleUrls: ['./other-ti.component.scss']
})
export class OtherTiComponent implements OnInit {
  @HostBinding('class') containerWith = 'container_with';


  constructor() { }

  ngOnInit(): void {
  }

}
