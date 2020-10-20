import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerskillComponent } from './containerskill.component';

describe('ContainerskillComponent', () => {
  let component: ContainerskillComponent;
  let fixture: ComponentFixture<ContainerskillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerskillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
