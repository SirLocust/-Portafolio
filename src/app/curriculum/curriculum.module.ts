import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurriculumRoutingModule } from './curriculum-routing.module';
import { CurriculumVitaeComponent } from './componets/curriculum-vitae/curriculum-vitae.component';
import { SliderCvComponent } from './componets/slider-cv/slider-cv.component';


@NgModule({
  declarations: [CurriculumVitaeComponent, SliderCvComponent],
  imports: [
    CommonModule,
    CurriculumRoutingModule
  ]
})
export class CurriculumModule { }
