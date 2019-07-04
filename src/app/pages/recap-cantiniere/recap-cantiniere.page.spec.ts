import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapCantinierePage } from './recap-cantiniere.page';

describe('RecapCantinierePage', () => {
  let component: RecapCantinierePage;
  let fixture: ComponentFixture<RecapCantinierePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecapCantinierePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapCantinierePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
