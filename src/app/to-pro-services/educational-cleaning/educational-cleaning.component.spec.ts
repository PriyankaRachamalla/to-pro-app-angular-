import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalCleaningComponent } from './educational-cleaning.component';

describe('EducationalCleaningComponent', () => {
  let component: EducationalCleaningComponent;
  let fixture: ComponentFixture<EducationalCleaningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationalCleaningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationalCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
