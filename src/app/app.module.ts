import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from 'clarity-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardDetailComponent } from './content/card-detail/card-detail.component';
import { CardListComponent } from './content/card-list/card-list.component';
import { ContentComponent } from './content/content.component';
import { FooterColorBorderComponent } from './footer/footer-color-border/footer-color-border.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderBrandingComponent } from './header/header-branding/header-branding.component';
import { HeaderColorBorderComponent } from './header/header-color-border/header-color-border.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './content/sidenav/sidenav.component';

import { DataService } from 'app/shared/data.service';

@NgModule({
  declarations: [
    AppComponent,
    CardDetailComponent,
    CardListComponent,
    ContentComponent,
    FooterColorBorderComponent,
    FooterComponent,
    HeaderBrandingComponent,
    HeaderColorBorderComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ClarityModule.forRoot(),
    FlexLayoutModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
