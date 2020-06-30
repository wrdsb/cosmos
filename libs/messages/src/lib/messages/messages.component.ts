import { Component, OnInit } from '@angular/core';
import { MessagesService } from "../messages.service";

@Component({
  selector: 'cosmos-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public messagesService: MessagesService) { }

  ngOnInit(): void {
  }

}
