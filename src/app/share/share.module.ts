import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { SectionComponent } from './section/section.component';
import { ButtonScrollToComponent } from './button-scroll-to/button-scroll-to.component';



@NgModule({
  declarations: [NavbarComponent, NavButtonComponent, SectionComponent, ButtonScrollToComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    NavButtonComponent,
    SectionComponent,
    ButtonScrollToComponent
  ]
})
export class ShareModule { }
