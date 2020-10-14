import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonScrollToComponent } from './button-scroll-to.component';

describe('ButtonScrollToComponent', () => {
  let component: ButtonScrollToComponent;
  let fixture: ComponentFixture<ButtonScrollToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonScrollToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonScrollToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
