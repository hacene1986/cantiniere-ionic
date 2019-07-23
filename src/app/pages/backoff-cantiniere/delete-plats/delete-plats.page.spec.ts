import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePlatsPage } from './delete-plats.page';

describe('DeletePlatsPage', () => {
  let component: DeletePlatsPage;
  let fixture: ComponentFixture<DeletePlatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePlatsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePlatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
