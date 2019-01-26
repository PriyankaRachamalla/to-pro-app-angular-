import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule } from '@angular/forms';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ToProServicesComponent } from './to-pro-services/to-pro-services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { SlotBookingComponent } from './slot-booking/slot-booking.component';
import { DropDownSelectComponent } from './directives/dropdown-select/dropdown-select.component';
import { OfficeCleaningComponent } from './to-pro-services/office-cleaning/office-cleaning.component';
import { EducationalCleaningComponent } from './to-pro-services/educational-cleaning/educational-cleaning.component';
import { HospitalityCleaningComponent } from './to-pro-services/hospitality-cleaning/hospitality-cleaning.component';
import { RetailCleaningComponent } from './to-pro-services/retail-cleaning/retail-cleaning.component';
import { BuildersCleaningComponent } from './to-pro-services/builders-cleaning/builders-cleaning.component';
import { StreamCarpetCleaningComponent } from './to-pro-services/stream-carpet-cleaning/stream-carpet-cleaning.component';
import { WindowCleaningComponent } from './to-pro-services/window-cleaning/window-cleaning.component';
import { OvenFridgeCleaningComponent } from './to-pro-services/oven-fridge-cleaning/oven-fridge-cleaning.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                HomepageComponent,
                AboutusComponent,
                ToProServicesComponent,
                ContactUsComponent,
                HomeContentComponent,
                SlotBookingComponent,
                DropDownSelectComponent,
                OfficeCleaningComponent,
                EducationalCleaningComponent,
                HospitalityCleaningComponent,
                RetailCleaningComponent,
                BuildersCleaningComponent,
                StreamCarpetCleaningComponent,
                WindowCleaningComponent,
                OvenFridgeCleaningComponent
            ],
            imports: [
                BrowserModule,
                MaterializeModule,
                AppRoutingModule,
                FormsModule,
                MultiselectDropdownModule,
                HttpClientModule
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map