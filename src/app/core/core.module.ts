import { PersonaDataService } from './persona-data.service';
import { GitServiceService } from './git-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    GitServiceService,
    PersonaDataService
  ]
  
})
export class CoreModule { }
