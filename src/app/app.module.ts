import { TableModule } from 'primeng/table';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TreeModule } from 'primeng/tree';


import { AppComponent } from './app.component';
import { PostComponent } from './componentes/post/post.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {OrderListModule} from 'primeng/orderlist';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, OrderListModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
