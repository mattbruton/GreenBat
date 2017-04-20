import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from 'clarity-angular';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { HearthstoneModule } from './hearthstone/hearthstone.module';

import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

import { DataService } from 'app/shared/data.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ClarityModule.forRoot(),
    FormsModule,
    HearthstoneModule,
    HttpModule,
    LayoutModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
