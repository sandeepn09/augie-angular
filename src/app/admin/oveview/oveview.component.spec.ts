import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OveviewComponent } from './oveview.component';

describe('OveviewComponent', () => {
  let component: OveviewComponent;
  let fixture: ComponentFixture<OveviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OveviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OveviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
