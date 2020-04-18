import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatProjectsComponent } from './stat-projects.component';

describe('StatProjectsComponent', () => {
  let component: StatProjectsComponent;
  let fixture: ComponentFixture<StatProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
