import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  public routeData = {
    path: '/about-us',
    component: 'AboutusComponent',
    data: {
        name: 'about-us'
    }
};

  constructor() { }

  ngOnInit() {
  }

}
