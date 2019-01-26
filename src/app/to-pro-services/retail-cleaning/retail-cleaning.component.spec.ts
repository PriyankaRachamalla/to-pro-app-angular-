import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailCleaningComponent } from './retail-cleaning.component';

describe('RetailCleaningComponent', () => {
  let component: RetailCleaningComponent;
  let fixture: ComponentFixture<RetailCleaningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailCleaningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
