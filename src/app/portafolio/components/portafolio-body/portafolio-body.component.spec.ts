import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioBodyComponent } from './portafolio-body.component';

describe('PortafolioBodyComponent', () => {
  let component: PortafolioBodyComponent;
  let fixture: ComponentFixture<PortafolioBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortafolioBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafolioBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
