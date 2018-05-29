import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBTableComponent } from './child-b-table/child-b-table.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildAComponent,
    ChildBTableComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
