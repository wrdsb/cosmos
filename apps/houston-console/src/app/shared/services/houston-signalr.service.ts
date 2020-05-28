import { Injectable } from '@angular/core';
import { SignalRConnection } from "../models/signalr-connection.model";
import * as SignalR from "@aspnet/signalr";

@Injectable({
  providedIn: 'root'
})
export class HoustonSignalrService {
  messages = [];

  //private hubConnection: SignalR.HubConnection;

  constructor() { }

  init() {
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
