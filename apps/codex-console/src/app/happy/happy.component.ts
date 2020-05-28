import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-happy',
  templateUrl: './happy.component.html',
  styleUrls: ['./happy.component.scss']
})
export class HappyComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log('init happy');
  }

}
