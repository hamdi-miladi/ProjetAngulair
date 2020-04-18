import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TosksComponent } from './tosks.component';

describe('TosksComponent', () => {
  let component: TosksComponent;
  let fixture: ComponentFixture<TosksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TosksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TosksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
