import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinHomeComponent } from './min-home.component';

describe('MinHomeComponent', () => {
  let component: MinHomeComponent;
  let fixture: ComponentFixture<MinHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
