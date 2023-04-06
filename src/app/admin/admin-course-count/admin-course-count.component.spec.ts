import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCourseCountComponent } from './admin-course-count.component';

describe('AdminCourseCountComponent', () => {
  let component: AdminCourseCountComponent;
  let fixture: ComponentFixture<AdminCourseCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCourseCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCourseCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
