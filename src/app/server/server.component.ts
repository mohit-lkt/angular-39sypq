import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  allowServer = false;
  allowbutton = false;
  servername = '';
  
  serverCreated = false;
  serverStatus = 'online';
  servers = ['server 1','server 2'];
  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 2000);
    this.serverStatus = Math.random()>0.5?'online':'offline';
  }

  ngOnInit(): void {}
  onClick() {
    
    this.serverCreated = true;
  }
  onUpdateServername(event : Event){
    this.servername = (<HTMLInputElement>event.target).value;
  }
  getServerStatus(){
    return this.serverStatus;
  }
  getColor(){
    return this.serverStatus==='online'?'green':'red';
  }
}
