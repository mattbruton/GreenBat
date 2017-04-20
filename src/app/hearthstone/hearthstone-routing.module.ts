import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HearthstoneSearchComponent } from "./components/hearthstone-search/hearthstone-search.component";

const routes: Routes = [
  { path: '', component: HearthstoneSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HearthstoneRoutingModule { }
