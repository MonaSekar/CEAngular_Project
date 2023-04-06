import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEnrollListComponent } from './admin-enroll-list.component';

describe('AdminEnrollListComponent', () => {
  let component: AdminEnrollListComponent;
  let fixture: ComponentFixture<AdminEnrollListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEnrollListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEnrollListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
