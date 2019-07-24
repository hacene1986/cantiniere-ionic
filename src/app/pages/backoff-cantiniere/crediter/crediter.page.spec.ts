import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CrediterPage } from "./crediter.page";

describe("CrediterPage", () => {
  let component: CrediterPage;
  let fixture: ComponentFixture<CrediterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrediterPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrediterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
