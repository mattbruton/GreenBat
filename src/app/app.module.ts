import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClarityModule } from 'clarity-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardListComponent } from './primary/card-list/card-list.component';
import { CardDetailComponent } from './primary/card-detail/card-detail.component';
import { HeaderComponent } from './header/header.component';
import { PrimaryComponent } from './primary/primary.component';
import { FooterComponent } from './footer/footer.component';

import { DataService } from 'app/shared/data.service';
import { LandingComponent } from './primary/landing/landing.component';
import { HeaderBrandingComponent } from './header/header-branding/header-branding.component';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardDetailComponent,
    HeaderComponent,
    PrimaryComponent,
    FooterComponent,
    LandingComponent,
    HeaderBrandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FlexLayoutModule,
    ClarityModule.forRoot()
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
