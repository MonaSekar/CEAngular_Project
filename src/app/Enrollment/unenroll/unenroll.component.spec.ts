import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnenrollComponent } from './unenroll.component';

describe('UnenrollComponent', () => {
  let component: UnenrollComponent;
  let fixture: ComponentFixture<UnenrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnenrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnenrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
