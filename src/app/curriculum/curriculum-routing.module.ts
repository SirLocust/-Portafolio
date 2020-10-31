import { CurriculumVitaeComponent } from './componets/curriculum-vitae/curriculum-vitae.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CurriculumVitaeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurriculumRoutingModule { }
