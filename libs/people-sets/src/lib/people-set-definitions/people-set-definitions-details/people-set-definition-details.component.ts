import { Component, OnInit, Input } from '@angular/core';
import { tap, catchError, map, filter } from 'rxjs/operators';
import { PeopleSetDefinition } from "@cosmos/types";
import { PeopleSetDefinitionsService } from '../people-set-definitions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-people-set-definition-details',
  templateUrl: './people-set-definition-details.component.html',
  styleUrls: ['./people-set-definition-details.component.scss']
})
export class PeopleSetDefinitionDetailsComponent implements OnInit {
  pageTitle = 'Product Detail';
  errorMessage: string;

  constructor(private peopleSetDefinitionsService: PeopleSetDefinitionsService) { }

  ngOnInit(): void {
  }

  displayDefinition(definition: PeopleSetDefinition): void {
    // Display the appropriate heading
    if (definition) {
      this.pageTitle = `Product Detail for: ${definition.id}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }
}
