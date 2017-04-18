import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "app/about/about.component";
import { PageNotFoundComponent } from "app/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }
  // {
  //   path: '',
  //   children: []
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
