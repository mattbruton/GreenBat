import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderBrandingComponent } from './layout/header/header-branding/header-branding.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
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
export class SharedModule { }
