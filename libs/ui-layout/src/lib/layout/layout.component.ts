import { Component, OnInit } from '@angular/core';
import { UILayoutService } from "../ui-layout.service";

@Component({
  selector: 'cosmos-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  showNav = false;

  constructor(
    private layoutService: UILayoutService
  ) { }

  ngOnInit(): void {
  }

}
