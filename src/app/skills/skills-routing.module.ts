import { OtherTiComponent } from './components/other-ti/other-ti.component';
import { JavaComponent } from './components/java/java.component';
import { AngularComponent } from './components/angular/angular.component';
import { JavaScriptComponent } from './components/java-script/java-script.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // redirectTo:'/skills/javascript',
    component: SkillsComponent,
   
    children: [
      {
        path: 'javascript',
        // loadChildren: () => import('../skills/components/java-script/java-script.component').then( (m) => m.JavaScriptComponent )
        component: JavaScriptComponent,
      },
      {
        path: 'angular',
        component: AngularComponent,
      },
      {
        path: 'java',
        component: JavaComponent,
      },
      {
        path: 'others',
        component: OtherTiComponent,
      },
      { path: '**', redirectTo: '/skills/javascript' , pathMatch: 'full' },
    ],

  },
  { path: '**', pathMatch: 'full', redirectTo: '' },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillsRoutingModule {}
