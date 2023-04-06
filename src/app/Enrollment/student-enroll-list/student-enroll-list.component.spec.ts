import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEnrollListComponent } from './student-enroll-list.component';

describe('StudentEnrollListComponent', () => {
  let component: StudentEnrollListComponent;
  let fixture: ComponentFixture<StudentEnrollListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEnrollListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentEnrollListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
