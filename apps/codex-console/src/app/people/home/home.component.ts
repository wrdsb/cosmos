import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class PeopleHomeComponent implements OnInit {
  title = 'Codex - People';

  constructor() { }

  ngOnInit() {
  }

}
