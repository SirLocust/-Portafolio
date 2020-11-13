import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./about-me/about-me.module').then((m) => m.AboutMeModule),
  },
  {
    path: 'skills',
    loadChildren: () =>
      import('./skills/skills.module').then((m) => m.SkillsModule),
  },
  {
    path: 'portafolio',
    loadChildren: () =>
      import('./portafolio/portafolio.module').then((m) => m.PortafolioModule),
  },
  {
    path: 'cv',
    loadChildren: () =>
      import('./curriculum/curriculum.module').then((m) => m.CurriculumModule),
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
