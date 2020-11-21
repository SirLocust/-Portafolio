import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherTiComponent } from './other-ti.component';

describe('OtherTiComponent', () => {
  let component: OtherTiComponent;
  let fixture: ComponentFixture<OtherTiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherTiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherTiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
