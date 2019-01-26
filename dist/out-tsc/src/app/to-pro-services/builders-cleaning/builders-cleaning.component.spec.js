import { async, TestBed } from '@angular/core/testing';
import { BuildersCleaningComponent } from './builders-cleaning.component';
describe('BuildersCleaningComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BuildersCleaningComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BuildersCleaningComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=builders-cleaning.component.spec.js.map