import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from 'clarity-angular';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidenavComponent } from './shared/layout/sidenav/sidenav.component';

import { DataService } from 'app/shared/data.service';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    AboutComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ClarityModule.forRoot(),
    FormsModule,
    HttpModule,
    SharedModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
