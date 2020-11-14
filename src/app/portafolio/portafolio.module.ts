import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { PortafolioBodyComponent } from './components/portafolio-body/portafolio-body.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RealProyectsComponent } from './components/real-proyects/real-proyects.component';
import { CardGitComponent } from './components/card-git/card-git.component';


@NgModule({
  declarations: [PortafolioBodyComponent, SideBarComponent, RealProyectsComponent, CardGitComponent],
  imports: [
    CommonModule,
    PortafolioRoutingModule
  ]
})
export class PortafolioModule { }
