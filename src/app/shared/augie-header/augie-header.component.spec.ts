import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AugieHeaderComponent } from './augie-header.component';

describe('AugieHeaderComponent', () => {
  let component: AugieHeaderComponent;
  let fixture: ComponentFixture<AugieHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AugieHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AugieHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
