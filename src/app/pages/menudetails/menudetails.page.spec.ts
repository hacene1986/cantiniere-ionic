import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudetailsPage } from './menudetails.page';

describe('MenudetailsPage', () => {
  let component: MenudetailsPage;
  let fixture: ComponentFixture<MenudetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenudetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenudetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
