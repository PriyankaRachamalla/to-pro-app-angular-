import { async, TestBed } from '@angular/core/testing';
import { OfficeCleaningComponent } from './office-cleaning.component';
describe('OfficeCleaningComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [OfficeCleaningComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(OfficeCleaningComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=office-cleaning.component.spec.js.map