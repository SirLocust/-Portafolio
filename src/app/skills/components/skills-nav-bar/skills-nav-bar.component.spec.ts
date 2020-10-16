import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsNavBarComponent } from './skills-nav-bar.component';

describe('SkillsNavBarComponent', () => {
  let component: SkillsNavBarComponent;
  let fixture: ComponentFixture<SkillsNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
