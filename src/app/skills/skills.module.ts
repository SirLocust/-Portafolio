import { SkillsRoutingModule } from './skills-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillsNavBarComponent } from './components/skills-nav-bar/skills-nav-bar.component';
import { ContainerskillComponent } from './components/containerskill/containerskill.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [SkillsComponent, SkillsNavBarComponent, ContainerskillComponent],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    FontAwesomeModule
  ]
})
export class SkillsModule{}
