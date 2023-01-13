import { Component } from '@angular/core';
import { AddButtonComponent } from '../../components/add-button/add-button.component';
import { SearchComponent } from '../../components/search/search.component';
import { NoteCardComponent } from '../../components/note-card/note-card.component';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';
@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent {
  notes: Note[] = new Array<Note>();

  constructor(private notesService: NotesService) {}
  ngOnInit() {
   this.notes= this.notesService.getAll();
  }
}
