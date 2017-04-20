import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderBrandingComponent } from './header/header-branding/header-branding.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FooterComponent,
    HeaderBrandingComponent,
    HeaderComponent,
    SidenavComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SidenavComponent
  ]
})
export class LayoutModule { }
