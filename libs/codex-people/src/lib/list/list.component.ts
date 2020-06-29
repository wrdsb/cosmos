import { Component, OnInit } from '@angular/core';
import { CodexPerson } from "../../../../types/src/lib/codex-person.class";
import { CodexPeopleService } from "../codex-people.service";

@Component({
  selector: 'cosmos-codex-people-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class CodexPeopleListComponent implements OnInit {
  private people: CodexPerson[] = [];
  private selectedPerson: CodexPerson;

  constructor(private peopleService: CodexPeopleService) { }

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
