import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMenusPage } from './add-menus.page';

describe('AddMenusPage', () => {
  let component: AddMenusPage;
  let fixture: ComponentFixture<AddMenusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMenusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMenusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
