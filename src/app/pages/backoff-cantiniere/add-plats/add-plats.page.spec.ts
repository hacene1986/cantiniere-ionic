import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlatsPage } from './add-plats.page';

describe('AddPlatsPage', () => {
  let component: AddPlatsPage;
  let fixture: ComponentFixture<AddPlatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlatsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
