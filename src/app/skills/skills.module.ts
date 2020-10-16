import { SkillsRoutingModule } from './skills-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillsNavBarComponent } from './components/skills-nav-bar/skills-nav-bar.component';



@NgModule({
  declarations: [SkillsComponent, SkillsNavBarComponent],
  imports: [
    CommonModule,
    SkillsRoutingModule,
  ]
})
export class SkillsModule{}
