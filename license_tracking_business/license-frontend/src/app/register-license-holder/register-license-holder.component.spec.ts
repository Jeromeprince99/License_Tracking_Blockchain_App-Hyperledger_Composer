import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLicenseHolderComponent } from './register-license-holder.component';

describe('RegisterLicenseHolderComponent', () => {
  let component: RegisterLicenseHolderComponent;
  let fixture: ComponentFixture<RegisterLicenseHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterLicenseHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterLicenseHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
