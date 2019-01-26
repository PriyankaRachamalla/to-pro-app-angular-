import { async, TestBed } from '@angular/core/testing';
import { HospitalityCleaningComponent } from './hospitality-cleaning.component';
describe('HospitalityCleaningComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [HospitalityCleaningComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(HospitalityCleaningComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=hospitality-cleaning.component.spec.js.map