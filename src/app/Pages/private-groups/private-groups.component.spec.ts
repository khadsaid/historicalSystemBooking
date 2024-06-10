import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateGroupsComponent } from './private-groups.component';

describe('PrivateGroupsComponent', () => {
  let component: PrivateGroupsComponent;
  let fixture: ComponentFixture<PrivateGroupsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivateGroupsComponent]
    });
    fixture = TestBed.createComponent(PrivateGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
