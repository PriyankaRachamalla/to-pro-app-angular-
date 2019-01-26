import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToProServicesComponent } from './to-pro-services.component';

describe('ToProServicesComponent', () => {
  let component: ToProServicesComponent;
  let fixture: ComponentFixture<ToProServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToProServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToProServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
