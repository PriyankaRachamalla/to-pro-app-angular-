import { Component, OnInit } from '@angular/core';
import * as Data from './slot-booking.model';
import { IMultiSelectOption,IMultiSelectSettings,IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { NgForm } from '@angular/forms'; 
// import { BookingInfo } from './slot-booking';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-slot-booking',
  templateUrl: './slot-booking.component.html',
  styleUrls: ['./slot-booking.component.scss']
})
export class SlotBookingComponent implements OnInit {

  formElements = Data.formElements;
  form:NgForm;
  showForm = true;
  bookingInfo = {};

  myOptions: IMultiSelectOption[] = [
    { id: '', name: 'Select' },
    { id: 'oneOffCleaning', name: 'One-Off Cleaning' },
    { id: 'springCleaning', name: 'Spring Cleaning' },
    { id: 'endOfLeaseCleaning', name: 'End Of Lease Cleaning' },
    { id: 'airBnbCleaning', name: 'Air Bnb Cleaning' },
    { id: 'steamCarpetCleaning', name: 'Steam Carpet Cleaning' },
    { id: 'windowCleaning', name: 'Window Cleaning' },
    { id: 'ovenFridgeCleaning', name: 'Oven/Fridge Cleaning' },
    { id: 'mouldCleaning', name: 'Mould Cleaning' },
    { id: 'highPressureClean', name: 'High Pressure Clean' },
    { id: 'others', name: 'Others' }
];

  mySettings: IMultiSelectSettings = {
    enableSearch: true,
    checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-default btn-block',
    dynamicTitleMaxItems: 3,
    displayAllSelectedText: true,
    selectionLimit: 1,
    autoUnselect: true,
};
 
// Text configuration
myTexts: IMultiSelectTexts = {
    checkAll: 'Select all',
    uncheckAll: 'Unselect all',
    checked: 'item selected',
    checkedPlural: 'items selected',
    searchPlaceholder: 'Find',
    defaultTitle: 'Select',
    allSelected: 'All selected',
};

// bookingInfo = new BookingInfo();

  constructor(private http:HttpClient) { }

  ngOnInit() {
    console.log(this.formElements);
  }

  confirm(form:NgForm){
    this.showForm = false;
    this.bookingInfo = {
      "firstName": this.formElements.firstName.value,
      "lastName": this.formElements.lastName.value,
      "email": this.formElements.email.value,
      "phoneNum": this.formElements.email.value,
      "address": this.formElements.address.value,
      "postalCode": this.formElements.postalCode.value,
      "cleaningType": this.formElements.cleaningType.id,
      "propertyDetails": form.controls['property'].value,
      "numOfBathrooms": this.formElements.numOfBathrooms.value,
      "numOfBedrooms": this.formElements.numOfBedrooms.value,
      "specialCleanings": this.formElements.specialCleanings.value,
      "startDate": this.formElements.startDate.value,
      "instructionsForCleaners": this.formElements.instructionsForCleaners.value

    }
    // this.bookingInfo.firstName = this.formElements.firstName.value;
    // this.bookingInfo.lastName = this.formElements.lastName.value;
    // this.bookingInfo.email = this.formElements.email.value;
    // this.bookingInfo.phoneNum = this.formElements.phoneNum.value;
    // this.bookingInfo.address = this.formElements.address.value;
    // this.bookingInfo.postalCode = this.formElements.postalCode.value;
    // this.bookingInfo.cleaningType = this.formElements.cleaningType.id;
    // this.bookingInfo.propertyDetails = form.controls['property'].value;
    // this.bookingInfo.numOfBathrooms = this.formElements.numOfBathrooms.value;
    // this.bookingInfo.numOfBedrooms = this.formElements.numOfBedrooms.value;
    // this.bookingInfo.confirmDetails = form.controls['confirmDetails'].value;
    // // this.bookingInfo.postalCode = this.formElements.postalCode.value;
    // this.bookingInfo.specialCleanings = this.formElements.specialCleanings.value;
    // this.bookingInfo.startDate = this.formElements.specialCleanings.value;;
    // this.bookingInfo.instructionsForCleaners = this.formElements.instructionsForCleaners.value;
    
    console.log(this.formElements.firstName.value);
    console.log(this.formElements.cleaningType.id);
    console.log(this.bookingInfo);
    var headers = new HttpHeaders();
    
    this.http.post('/send-email',this.bookingInfo, {headers:headers}).subscribe(data=>{
      if(data) {
        console.log('Sent successfully');
        this.showForm = true;
      }
    })
  }

  // bookNow(){

  //   let bookInfo = JSON.stringify(this.bookingInfo);
    
    

  //   headers.append('Content-Type', 'application/X-www-form-urlencoded');
   
    


  // }

}
