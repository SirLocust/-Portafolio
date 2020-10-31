import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCvComponent } from './slider-cv.component';

describe('SliderCvComponent', () => {
  let component: SliderCvComponent;
  let fixture: ComponentFixture<SliderCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
