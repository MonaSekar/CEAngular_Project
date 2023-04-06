import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModifyCourseComponent } from './admin-modify-course.component';

describe('AdminModifyCourseComponent', () => {
  let component: AdminModifyCourseComponent;
  let fixture: ComponentFixture<AdminModifyCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminModifyCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminModifyCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
