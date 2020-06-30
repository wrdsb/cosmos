import { Component, OnInit } from '@angular/core';

//import { HoustonSignalrService } from "src/app/shared/services/houston-signalr.service";
import * as SignalR from "@aspnet/signalr";

@Component({
  selector: 'cosmos-user-loop',
  templateUrl: './user-loop.component.html',
  styleUrls: ['./user-loop.component.scss']
})
export class UserLoopComponent implements OnInit {
  messages = [];

  //constructor(private signalRService: HoustonSignalrService) { }
  constructor() { }

  ngOnInit() {
    //this.signalRService.init();
    const connection = new SignalR.HubConnectionBuilder()
      .configureLogging(SignalR.LogLevel.Information)
      .withUrl("https://wrdsb-houston.azurewebsites.net/api")
      .build();

    connection.on('newMessage', this.onNewMessage.bind(this));
    connection.onclose(() => console.log('disconnected'));

    connection.start().then(function () {
      console.log('SignalR Connected!');
    }).catch(function (err) {
      return console.error(err.toString());
    });
  }

  onNewMessage(message) {
    if (!message.sender) {
      message.sender = "anonymous";
    }
    console.log(message);
    this.messages.unshift(message);
  }
}
