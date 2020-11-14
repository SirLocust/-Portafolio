import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealProyectsComponent } from './real-proyects.component';

describe('RealProyectsComponent', () => {
  let component: RealProyectsComponent;
  let fixture: ComponentFixture<RealProyectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealProyectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealProyectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
