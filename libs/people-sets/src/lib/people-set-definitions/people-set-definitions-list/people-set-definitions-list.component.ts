import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError, tap } from "rxjs/operators";

import { PeopleSetDefinition, PeopleSetDefinitionQuery } from '../people-set-definition.model';
import { PeopleSetDefinitionsService } from '../people-set-definitions.service';

@Component({
  selector: 'app-people-set-definitions-list',
  templateUrl: './people-set-definitions-list.component.html',
  styleUrls: ['./people-set-definitions-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleSetDefinitionsListComponent implements OnInit {
  pageTitle = 'People Set Definitions';
  errorMessage: string;
  query: PeopleSetDefinitionQuery;

  definitions$ = this.peopleSetDefinitionsService.definitions$.pipe(
    catchError(error => {
      this.errorMessage = error;
      return of(null);
    })
  );
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private peopleSetDefinitionsService: PeopleSetDefinitionsService
    ) { }

  ngOnInit(): void {
  }
}
