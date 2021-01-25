import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefFriendComponent } from './ref-friend.component';

describe('RefFriendComponent', () => {
  let component: RefFriendComponent;
  let fixture: ComponentFixture<RefFriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefFriendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
