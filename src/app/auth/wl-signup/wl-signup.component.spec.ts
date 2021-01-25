import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WlSignupComponent } from './wl-signup.component';

describe('WlSignupComponent', () => {
  let component: WlSignupComponent;
  let fixture: ComponentFixture<WlSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WlSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WlSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
