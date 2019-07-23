import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerMenusPage } from './editer-menus.page';

describe('EditerMenusPage', () => {
  let component: EditerMenusPage;
  let fixture: ComponentFixture<EditerMenusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerMenusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerMenusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
