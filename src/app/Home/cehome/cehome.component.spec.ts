import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CEHomeComponent } from './cehome.component';

describe('CEHomeComponent', () => {
  let component: CEHomeComponent;
  let fixture: ComponentFixture<CEHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CEHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CEHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
