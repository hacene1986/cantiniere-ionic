import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotdepassoubliePage } from './motdepassoublie.page';

describe('MotdepassoubliePage', () => {
  let component: MotdepassoubliePage;
  let fixture: ComponentFixture<MotdepassoubliePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotdepassoubliePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotdepassoubliePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
