import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AugieFooterComponent } from './augie-footer.component';

describe('AugieFooterComponent', () => {
  let component: AugieFooterComponent;
  let fixture: ComponentFixture<AugieFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AugieFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AugieFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
