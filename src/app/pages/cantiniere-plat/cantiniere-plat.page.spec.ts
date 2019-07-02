import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantinierePlatPage } from './cantiniere-plat.page';

describe('CantinierePlatPage', () => {
  let component: CantinierePlatPage;
  let fixture: ComponentFixture<CantinierePlatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantinierePlatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantinierePlatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
