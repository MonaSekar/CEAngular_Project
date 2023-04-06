import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SloginComponent } from './slogin.component';

describe('SloginComponent', () => {
  let component: SloginComponent;
  let fixture: ComponentFixture<SloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
