import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialbuttonGroupComponent } from './socialbutton-group.component';

describe('SocialbuttonGroupComponent', () => {
  let component: SocialbuttonGroupComponent;
  let fixture: ComponentFixture<SocialbuttonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialbuttonGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialbuttonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
