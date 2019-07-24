import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DebiterPage } from "./debiter.page";

describe("DebiterPage", () => {
  let component: DebiterPage;
  let fixture: ComponentFixture<DebiterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DebiterPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebiterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
