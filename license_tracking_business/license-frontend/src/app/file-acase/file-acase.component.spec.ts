import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileACaseComponent } from './file-acase.component';

describe('FileACaseComponent', () => {
  let component: FileACaseComponent;
  let fixture: ComponentFixture<FileACaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileACaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileACaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
