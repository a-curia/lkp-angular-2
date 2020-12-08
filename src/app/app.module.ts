import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AuFaInputComponent } from './lib/au-fa-input/au-fa-input.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ScrollTopComponent } from './components/layout/scroll-top/scroll-top.component';
import { LogoutModalComponent } from './components/layout/logout-modal/logout-modal.component';
import { BottomScriptComponent } from './components/layout/bottom-script/bottom-script.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AuFaInputComponent,
    DashboardComponent,
    ScrollTopComponent,
    LogoutModalComponent,
    BottomScriptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
