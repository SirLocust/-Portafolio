import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { PortafolioBodyComponent } from './components/portafolio-body/portafolio-body.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';


@NgModule({
  declarations: [PortafolioBodyComponent, SideBarComponent],
  imports: [
    CommonModule,
    PortafolioRoutingModule
  ]
})
export class PortafolioModule { }
