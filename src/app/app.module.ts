import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesListComponent } from './list/notes-list/notes-list.component';
import { LayoutComponent } from './list/layout/layout.component';
import { NoteDetailsComponent } from './list/note-details/note-details.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    LayoutComponent,
    NoteDetailsComponent,
    NoteCardComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
