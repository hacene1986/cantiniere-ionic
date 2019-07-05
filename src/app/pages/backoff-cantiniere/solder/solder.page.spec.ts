import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolderPage } from './solder.page';

describe('SolderPage', () => {
  let component: SolderPage;
  let fixture: ComponentFixture<SolderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
