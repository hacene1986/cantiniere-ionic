import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerPlatsPage } from './editer-plats.page';

describe('EditerPlatsPage', () => {
  let component: EditerPlatsPage;
  let fixture: ComponentFixture<EditerPlatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerPlatsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerPlatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
