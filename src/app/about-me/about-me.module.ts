import { ShareModule } from './../share/share.module';
import { AboutMeRoutingModule } from './about-me-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { BioComponent } from './componentes/bio/bio.component';



@NgModule({
  declarations: [AboutMeComponent, BioComponent],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    ShareModule
  ],
  exports: [
    AboutMeComponent
  ]


})
export class AboutMeModule { }
