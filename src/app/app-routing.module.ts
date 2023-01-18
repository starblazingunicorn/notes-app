import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { HomeComponent } from './pages/home/home.component';
import { NoteCardDetailsComponent } from './pages/note-card-details/note-card-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: NotesListComponent },
      { path: 'new', component: NoteCardDetailsComponent },
      { path: ':id', component: NoteCardDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
