import { ExerciseCourseComponent } from './components/exercise-course/exercise-course.component';
import { RealProyectsComponent } from './components/real-proyects/real-proyects.component';
import { PortafolioBodyComponent } from './components/portafolio-body/portafolio-body.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PortafolioBodyComponent,
    children: [
      {
        path: 'realProyects',
        component: RealProyectsComponent
      },
      {
        path: 'CourseAndExercise',
        component: ExerciseCourseComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortafolioRoutingModule { }
