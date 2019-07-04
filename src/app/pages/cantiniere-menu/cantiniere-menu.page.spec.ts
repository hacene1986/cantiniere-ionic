import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantiniereMenuPage } from './cantiniere-menu.page';

describe('CantiniereMenuPage', () => {
  let component: CantiniereMenuPage;
  let fixture: ComponentFixture<CantiniereMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantiniereMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantiniereMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
