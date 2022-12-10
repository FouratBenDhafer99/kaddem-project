import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniversiteListComponent } from './universite-list/universite-list.component';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import {NgbCollapseModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    UniversiteListComponent,
    HomeComponent,
    SideBarComponent,
    NavbarComponent,
    AdminLayoutComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbCollapseModule,
        NgbModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
