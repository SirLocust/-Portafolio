import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseCourseComponent } from './exercise-course.component';

describe('ExerciseCourseComponent', () => {
  let component: ExerciseCourseComponent;
  let fixture: ComponentFixture<ExerciseCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
