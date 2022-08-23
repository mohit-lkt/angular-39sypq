import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  allowServer = false;
  allowbutton = false;
  username = '';
  password = '';
  serverCreated = false;
  serverStatus = 'online';
  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 2000);
    this.serverStatus = Math.random()>0.5?'online':'offline';
  }

  ngOnInit(): void {}
  onClick() {
    this.username = '';
    this.serverCreated = true;
  }
  getServerStatus(){
    return this.serverStatus;
  }
  getColor(){
    return this.serverStatus==='online'?'green':'red';
  }
}
