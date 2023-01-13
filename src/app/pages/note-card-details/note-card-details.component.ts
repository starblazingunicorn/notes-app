import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-note-card-details',
  templateUrl: './note-card-details.component.html',
  styleUrls: ['./note-card-details.component.scss'],
})
export class NoteCardDetailsComponent {
  note: Note;

  constructor(private notesService: NotesService) {}
  ngOnInit() {
    this.note = new Note();
  }
  onSubmit(form: NgForm) {
    // console.log(form);
    this.notesService.add(form.value);
  }
}
