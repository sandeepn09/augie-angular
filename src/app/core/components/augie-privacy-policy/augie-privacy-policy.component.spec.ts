import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AugiePrivacyPolicyComponent } from './augie-privacy-policy.component';

describe('AugiePrivacyPolicyComponent', () => {
  let component: AugiePrivacyPolicyComponent;
  let fixture: ComponentFixture<AugiePrivacyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AugiePrivacyPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AugiePrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
