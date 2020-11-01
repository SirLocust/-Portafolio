import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations'

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.scss'],
  
})
export class CurriculumVitaeComponent implements OnInit {
  isViewCvAnimationList = [
    {
      isViewCvAnimation : 'off'
    } ,
    {
      isViewCvAnimation : 'off'
    } ,
    {
      isViewCvAnimation : 'on'
    } 
    
  ]
 
  constructor() { }

  ngOnInit(): void {
    console.log(screen.width)
    console.log(screen.height)

  }

  toggleCv(): void {
   console.log(this.isViewCvAnimationList)
    // setTimeout(() => {
   

    // }, 100);
  }

  
  toggleCv1(){
   
  }

}
