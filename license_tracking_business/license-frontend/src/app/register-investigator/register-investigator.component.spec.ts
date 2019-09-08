import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterInvestigatorComponent } from './register-investigator.component';

describe('RegisterInvestigatorComponent', () => {
  let component: RegisterInvestigatorComponent;
  let fixture: ComponentFixture<RegisterInvestigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterInvestigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterInvestigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
