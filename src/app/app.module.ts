import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
//import { ServersComponent } from './servers/servers.component';
import { WarningComponent } from './warningalert/warning.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { BindingsComponent } from './bindings/bindings.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
   // ServersComponent,
    WarningComponent,
    SuccessAlertComponent,
    BindingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
