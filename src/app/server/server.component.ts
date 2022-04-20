import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})

export class ServerComponent{
  serverId=10;
  status ='success'

  getServerStatus(){
    return this.status;
  }

}
