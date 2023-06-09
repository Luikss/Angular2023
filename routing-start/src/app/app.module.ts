import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from "./app-routing.module";

import { AppComponent } from './app.component';
import { AuthGuardService } from "./auth-guard.service";
import { AuthService } from "./auth.service";
import { HomeComponent } from './home/home.component';
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ServerResolverService } from "./servers/server-resolver.service";
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ServersService,
    AuthService,
    AuthGuardService,
    CanDeactivateGuard,
    ServerResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
