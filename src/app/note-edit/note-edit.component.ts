import {Component, OnInit} from '@angular/core';
import {NoteService, Note} from "../note.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Time} from '@angular/common'
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-note-edit',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './note-edit.component.html',
  styleUrl: './note-edit.component.scss'
})
export class NoteEditComponent implements OnInit{
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

  ngOnInit(): void {
    this.editNoteByID()
  }
  saveNote() {
    console.log(this.noteTitle.value);
    console.log(this.noteBody.value);

    let currentDate = new Date(Date.now());

    const newNote: Note = {
      title: this.noteTitle.value,
      body: this.noteBody.value,
      lastUpdated: currentDate.toISOString(),
      author: this.note.author,
      id: this.note.id
    }

    this.noteService.patchNote(newNote)
  }

  editNoteByID()  {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id === null) {
      console.log("create mode")
      return
    }
    this.note = this.noteService.getNote(id);
    this.noteTitle.setValue(this.note.title);
    this.noteBody.setValue(this.note.body);
  }


}
