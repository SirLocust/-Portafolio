import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.scss']
})
export class CurriculumVitaeComponent implements OnInit {
  isViewCv = false;
  isViewCv1 = false;


  constructor() { }

  ngOnInit(): void {
  }

  toggleCv(){
    this.isViewCv = !this.isViewCv;
  }

  
  toggleCv1(){
    this.isViewCv1 = !this.isViewCv1;
  }

}
