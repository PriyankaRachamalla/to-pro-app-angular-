import { async, TestBed } from '@angular/core/testing';
import { OvenFridgeCleaningComponent } from './oven-fridge-cleaning.component';
describe('OvenFridgeCleaningComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [OvenFridgeCleaningComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(OvenFridgeCleaningComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=oven-fridge-cleaning.component.spec.js.map