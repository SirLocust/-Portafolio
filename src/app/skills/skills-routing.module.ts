import { JavaScriptComponent } from './components/java-script/java-script.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SkillsComponent,
    children: [
      {
        path: 'javascript',
        // loadChildren: () => import('../skills/components/java-script/java-script.component').then( (m) => m.JavaScriptComponent )
        component: JavaScriptComponent,
        
      },
      { path: '**', redirectTo: 'javascript' },

    ]
  },
  // { path: '**', redirectTo: 'javascript', pathMatch: 'full' },
];

@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillsRoutingModule{}
