import { Component, OnInit } from '@angular/core';
import { CodexPerson } from "../model/codex-person.class";
import { PeopleService } from "../people.service";

@Component({
  selector: 'app-people-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class PeopleListComponent implements OnInit {
  private people: CodexPerson[] = [];
  private selectedPerson: CodexPerson;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.getPeople();
  }

  onSelect(person: CodexPerson): void {
    this.selectedPerson = person;
  }

  getPeople(): void {
    this.peopleService.getGroups()
      .subscribe(people => this.people = people);
  }

}
