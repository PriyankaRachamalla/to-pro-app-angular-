import { async, TestBed } from '@angular/core/testing';
import { RetailCleaningComponent } from './retail-cleaning.component';
describe('RetailCleaningComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RetailCleaningComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RetailCleaningComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=retail-cleaning.component.spec.js.map