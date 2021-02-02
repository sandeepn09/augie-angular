import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AugieFaqComponent } from './augie-faq.component';

describe('AugieFaqComponent', () => {
  let component: AugieFaqComponent;
  let fixture: ComponentFixture<AugieFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AugieFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AugieFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
