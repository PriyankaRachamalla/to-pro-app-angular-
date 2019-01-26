import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamCarpetCleaningComponent } from './stream-carpet-cleaning.component';

describe('StreamCarpetCleaningComponent', () => {
  let component: StreamCarpetCleaningComponent;
  let fixture: ComponentFixture<StreamCarpetCleaningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamCarpetCleaningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamCarpetCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
