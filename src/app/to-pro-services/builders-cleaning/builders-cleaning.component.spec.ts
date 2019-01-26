import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildersCleaningComponent } from './builders-cleaning.component';

describe('BuildersCleaningComponent', () => {
  let component: BuildersCleaningComponent;
  let fixture: ComponentFixture<BuildersCleaningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildersCleaningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildersCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
