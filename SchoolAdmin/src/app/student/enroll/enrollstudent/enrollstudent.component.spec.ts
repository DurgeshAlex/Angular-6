import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollstudentComponent } from './enrollstudent.component';

describe('EnrollstudentComponent', () => {
  let component: EnrollstudentComponent;
  let fixture: ComponentFixture<EnrollstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
