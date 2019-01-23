import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  archives= [{year:2019,month:1} , {year:2019,month:2}] ];

  constructor() {
  }

  ngOnInit() {
  }

}
