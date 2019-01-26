import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ToProServicesComponent } from './to-pro-services/to-pro-services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SlotBookingComponent } from './slot-booking/slot-booking.component';
import { BuildersCleaningComponent } from './to-pro-services/builders-cleaning/builders-cleaning.component';
import { WindowCleaningComponent } from './to-pro-services/window-cleaning/window-cleaning.component';
import { OfficeCleaningComponent } from './to-pro-services/office-cleaning/office-cleaning.component';
import { OvenFridgeCleaningComponent } from './to-pro-services/oven-fridge-cleaning/oven-fridge-cleaning.component';
import { RetailCleaningComponent } from './to-pro-services/retail-cleaning/retail-cleaning.component';
import { EducationalCleaningComponent } from './to-pro-services/educational-cleaning/educational-cleaning.component';
import { HospitalityCleaningComponent } from './to-pro-services/hospitality-cleaning/hospitality-cleaning.component';
import { StreamCarpetCleaningComponent } from './to-pro-services/stream-carpet-cleaning/stream-carpet-cleaning.component';

import { AuthGuardService } from './auth-guard-service.service';
import { from } from 'rxjs';

const routes: Routes = [{


path: '',component: HomepageComponent,
        children: [
          { path: '', component: HomeContentComponent,pathMatch: 'full' },
      { path: 'about-us', component: AboutusComponent},
      { path: 'contact-us', component: ContactUsComponent},
      { path: 'services', component: ToProServicesComponent},
      { path: 'book-your-slot', component: SlotBookingComponent},
      { path: 'builders-cleaning', component: BuildersCleaningComponent},
      { path: 'stream-carpet-cleaning', component: StreamCarpetCleaningComponent},
      { path: 'hospitality-cleaning', component: HospitalityCleaningComponent},
      { path: 'educational-cleaning', component: EducationalCleaningComponent},
      { path: 'retail-cleaning', component: RetailCleaningComponent},
      { path: 'oven-fridge-cleaning', component: OvenFridgeCleaningComponent},
      { path: 'office-cleaning', component: OfficeCleaningComponent},
      { path: 'window-cleaning', component: WindowCleaningComponent},
        ]
      }
    ]

const routes1: Routes = [
  {
    path: 'home', 
    component: HomepageComponent,
    canActivate: [ AuthGuardService ],
    children: [
      {
        path: '',
        canActivateChild: [ AuthGuardService ],
        children: [
          { path: '', component: HomeContentComponent },
      { path: 'about-us', component: AboutusComponent},
      { path: 'contact-us', component: ContactUsComponent},
      { path: 'services', component: ToProServicesComponent},
        ]
      },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]
  }
]; 

// const routes: Routes = [
//   { 
//     path: 'home', 
//     component: HomepageComponent,
//     canActivate:[AuthGuardService],
//     children: [
//       { path: '', component: HomeContentComponent },
//       { path: 'about-us', component: AboutusComponent},
//       { path: 'contact-us', component: ContactUsComponent},
//       { path: 'services', component: ToProServicesComponent},
//     ]
//   },
    
//   { path: '', redirectTo: '/home', pathMatch: 'full' }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
