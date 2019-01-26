import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'; 

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  collapse: boolean = true;

  constructor() { }

  ngOnInit() {
    
   
  }

}
