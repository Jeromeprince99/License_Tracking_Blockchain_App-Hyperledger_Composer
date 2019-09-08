import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryLicenseDetailsComponent } from './query-license-details.component';

describe('QueryLicenseDetailsComponent', () => {
  let component: QueryLicenseDetailsComponent;
  let fixture: ComponentFixture<QueryLicenseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryLicenseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryLicenseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
