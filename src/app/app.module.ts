import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InscritdisabledDirective } from './inscritdisabled.directive';
//import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
//import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
const appRoutes: Routes = [
{
path: 'list',
component: SessionItemListComponent},
{
path: 'admin',
loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
},
{ path: '', redirectTo: '/list', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
   // AppBootstrapModule,
    AppComponent,
    SessionItemComponent,
    SessionItemListComponent,
    InscritdisabledDirective
  ],
  imports: [
    //BsDropdownModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true },),
    //CommonModule
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
