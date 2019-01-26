import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-pro-services',
  templateUrl: './to-pro-services.component.html',
  styleUrls: ['./to-pro-services.component.scss']
})
export class ToProServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slotBooking(){
    alert("book now");
  }

}
