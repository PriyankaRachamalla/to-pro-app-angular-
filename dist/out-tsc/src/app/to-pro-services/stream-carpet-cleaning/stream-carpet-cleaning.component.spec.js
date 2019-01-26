import { async, TestBed } from '@angular/core/testing';
import { StreamCarpetCleaningComponent } from './stream-carpet-cleaning.component';
describe('StreamCarpetCleaningComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [StreamCarpetCleaningComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(StreamCarpetCleaningComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=stream-carpet-cleaning.component.spec.js.map