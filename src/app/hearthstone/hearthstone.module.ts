import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HearthstoneSearchComponent } from './hearthstone-search/hearthstone-search.component';
import { Routes, RouterModule } from '@angular/router';
import { HearthstoneRoutingModule } from './hearthstone-routing.module';

@NgModule({
  imports: [
    HearthstoneRoutingModule,
    CommonModule
  ],
  exports: [
    HearthstoneSearchComponent,
    RouterModule
  ],
  declarations: [
    HearthstoneSearchComponent
  ]
})
export class HearthstoneModule { }
