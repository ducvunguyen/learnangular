import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { SpacexComponent } from './spacex/spacex.component';
import { HeroesComponent } from './heroes/heroes.component';
import { InsertComponent } from './insert/insert.component';
import { RowComponent } from './row/row.component';
import { RowListComponent } from './row-list/row-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SpacexComponent,
    HeroesComponent,
    InsertComponent,
    RowComponent,
    RowListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
