import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseApplyComponent } from './license-apply.component';

describe('LicenseApplyComponent', () => {
  let component: LicenseApplyComponent;
  let fixture: ComponentFixture<LicenseApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenseApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
