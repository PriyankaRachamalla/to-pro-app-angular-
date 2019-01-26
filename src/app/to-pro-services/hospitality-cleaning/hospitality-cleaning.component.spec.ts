import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalityCleaningComponent } from './hospitality-cleaning.component';

describe('HospitalityCleaningComponent', () => {
  let component: HospitalityCleaningComponent;
  let fixture: ComponentFixture<HospitalityCleaningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalityCleaningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalityCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
