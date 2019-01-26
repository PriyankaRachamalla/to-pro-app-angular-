import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowCleaningComponent } from './window-cleaning.component';

describe('WindowCleaningComponent', () => {
  let component: WindowCleaningComponent;
  let fixture: ComponentFixture<WindowCleaningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowCleaningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
