import { SkillsRoutingModule } from './skills-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillsNavBarComponent } from './components/skills-nav-bar/skills-nav-bar.component';
import { ContainerskillComponent } from './components/containerskill/containerskill.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JavaScriptComponent } from './components/java-script/java-script.component';
import { AngularComponent } from './components/angular/angular.component';
import { JavaComponent } from './components/java/java.component';
import { OtherTiComponent } from './components/other-ti/other-ti.component';



@NgModule({
  declarations: [SkillsComponent, SkillsNavBarComponent, ContainerskillComponent, JavaScriptComponent, AngularComponent, JavaComponent, OtherTiComponent],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    FontAwesomeModule
  ]
})
export class SkillsModule{}
