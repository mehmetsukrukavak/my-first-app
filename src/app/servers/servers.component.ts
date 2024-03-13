import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
 /* template:`
  <app-server></app-server>
  <app-server></app-server>`,*/
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No Server was Created!';
  serverName = 'Testserver';
  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    },2000);
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was Created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: Event){

    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

