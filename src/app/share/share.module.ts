import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavButtonComponent } from './components/nav-button/nav-button.component';



@NgModule({
  declarations: [NavbarComponent, NavButtonComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    NavbarComponent,
    NavButtonComponent
  ]
})
export class ShareModule { }
