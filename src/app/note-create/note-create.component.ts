import {Component, OnInit} from '@angular/core';
import {NoteService, Note} from "../note.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Time} from '@angular/common'
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-note-create',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './note-create.component.html',
  styleUrl: './note-create.component.scss'
})
export class NoteCreateComponent {
  note: Note
  noteTitle = new FormControl('', Validators.required);
  noteBody = new FormControl('', Validators.required);

  constructor(
    private formBuilder: FormBuilder,
    private noteService: NoteService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  saveNote() {
    console.log(this.noteTitle.value);
    console.log(this.noteBody.value);

    const newNote = {
      title: this.noteTitle.value,
      body: this.noteBody.value,
      author: "Ian Broyles",
    }

    this.noteService.postNote(newNote)
  }

  editNoteByID()  {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id === null) {
      console.log("create mode")
      return
    }
    this.note = this.noteService.getNote(id);
  }


}
