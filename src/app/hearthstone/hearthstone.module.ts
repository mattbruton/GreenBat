import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HearthstoneSearchComponent } from './hearthstone-search/hearthstone-search.component';
import { HearthstoneRoutingModule } from './hearthstone-routing.module';

@NgModule({
  imports: [
    HearthstoneRoutingModule,
    CommonModule
  ],
  exports: [
    HearthstoneSearchComponent
  ],
  declarations: [
    HearthstoneSearchComponent
  ]
})
export class HearthstoneModule { }
