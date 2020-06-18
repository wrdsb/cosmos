import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeopleSetDefinition, PeopleSetDefinitionQuery } from '@cosmos/types';
import { Subscription } from 'rxjs';
import { PeopleSetDefinitionsService } from '../people-set-definitions.service';

@Component({
  selector: 'app-people-set-definitions-layout',
  templateUrl: './people-set-definitions-layout.component.html',
  styleUrls: ['./people-set-definitions-layout.component.scss']
})
export class PeopleSetDefinitionsLayoutComponent implements OnInit {
  pageTitle = 'People Set Definitions';

  constructor(private peopleSetDefinitionsService: PeopleSetDefinitionsService) { }

  ngOnInit(): void {
  }
}
