import {Component, Input, OnInit} from '@angular/core';
import {Note, NoteService} from '../note.service'
import {ActivatedRoute, Router, ParamMap, RouterLink} from '@angular/router';
import {FormsModule, FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-note-view',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './note-view.component.html',
  styleUrl: './note-view.component.scss'
})
export class NoteViewComponent implements OnInit{
  note: Note

  editForm = this.formBuilder.group({
    title: '',
    body: ''
  })

  constructor(
    private service: NoteService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}


  ngOnInit() {
    this.showNoteByID()
    this.initForm()
  }

  initForm() {
    this.editForm.controls['title'].setValue(this.note.title);
    this.editForm.controls['body'].setValue(this.note.body);
  }


  showNoteByID()  {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id)
    this.note = this.service.getNote(id);
  }

}
