import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListContainerComponent } from './user-list-container.component';

describe('UserListContainerComponent', () => {
  let component: UserListContainerComponent;
  let fixture: ComponentFixture<UserListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
