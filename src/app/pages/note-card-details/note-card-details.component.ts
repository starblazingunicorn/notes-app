import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-note-card-details',
  templateUrl: './note-card-details.component.html',
  styleUrls: ['./note-card-details.component.scss'],
})
export class NoteCardDetailsComponent  implements OnInit{
  note: Note;
  noteId: number;
  new: boolean;
  constructor(
    private notesService: NotesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.note = new Note();
      if (params['id']) {
        this.notesService.get(params['id']).subscribe((note: Note) => {
          this.note = note;
        });
        this.new = false;
      } else {
        this.new = true;
      }
    })
    
 

  }
  onSubmit(form: NgForm) {
    if (this.new) {
      this.notesService.add(form.value);
      this.router.navigateByUrl('/');
    } else {
      this.notesService.update(this.noteId, form.value.title, form.value.body);
    }
  }
  cancel() {
    this.router.navigateByUrl('/');
  }
}
