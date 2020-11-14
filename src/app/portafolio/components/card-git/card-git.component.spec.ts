import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGitComponent } from './card-git.component';

describe('CardGitComponent', () => {
  let component: CardGitComponent;
  let fixture: ComponentFixture<CardGitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
