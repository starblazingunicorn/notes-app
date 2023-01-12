import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { HomeComponent } from './pages/home/home.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { SearchComponent } from './components/search/search.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { NoteCardDetailsComponent } from './pages/note-card-details/note-card-details.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotesListComponent,
    NoteCardComponent,
    AddButtonComponent,
    SearchComponent,
    NoteCardDetailsComponent,
  
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
