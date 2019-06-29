import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountModificationsPage } from './account-modifications.page';

describe('AccountModificationsPage', () => {
  let component: AccountModificationsPage;
  let fixture: ComponentFixture<AccountModificationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountModificationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountModificationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
