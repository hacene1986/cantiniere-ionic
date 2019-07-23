import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMenusPage } from './delete-menus.page';

describe('DeleteMenusPage', () => {
  let component: DeleteMenusPage;
  let fixture: ComponentFixture<DeleteMenusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMenusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMenusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
