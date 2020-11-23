import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { SectionComponent } from './section/section.component';
import { ButtonScrollToComponent } from './button-scroll-to/button-scroll-to.component';
import { CardsComponent } from './cards/cards.component';
import { HoverDDirective } from './cards/directives/hover-d.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialbuttonGroupComponent } from './components/socialbutton-group/socialbutton-group.component';
import { SocialButtonComponent } from './components/social-button/social-button.component';
@NgModule({
  declarations: [
    NavbarComponent,
    NavButtonComponent,
    SectionComponent,
    ButtonScrollToComponent,
    CardsComponent,
    HoverDDirective,
    SocialbuttonGroupComponent,
    SocialButtonComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  exports: [
    NavbarComponent,
    NavButtonComponent,
    SectionComponent,
    ButtonScrollToComponent,
    CardsComponent,
    SocialbuttonGroupComponent,
    FontAwesomeModule
  ],
})
export class ShareModule {}
