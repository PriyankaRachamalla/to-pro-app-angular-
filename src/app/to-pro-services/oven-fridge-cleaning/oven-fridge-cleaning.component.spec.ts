import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvenFridgeCleaningComponent } from './oven-fridge-cleaning.component';

describe('OvenFridgeCleaningComponent', () => {
  let component: OvenFridgeCleaningComponent;
  let fixture: ComponentFixture<OvenFridgeCleaningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvenFridgeCleaningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvenFridgeCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
