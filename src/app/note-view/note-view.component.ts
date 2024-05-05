import { Component, Input } from '@angular/core';
import {Note, NoteService} from '../note.service'
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import { switchMap } from 'rxjs/operators'
@Component({
  selector: 'app-note-view',
  standalone: true,
  imports: [],
  templateUrl: './note-view.component.html',
  styleUrl: './note-view.component.scss'
})
export class NoteViewComponent {
  note: any
  @Input()
  set id(noteId: string) {
    this.note.id = noteId;
  }
  constructor(
    private service: NoteService,
    private route: ActivatedRoute,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.showNoteByID()
  }

  showNoteByID()  {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getNote(id)
      .subscribe(note => this.note = note);
    console.log(this.note)
  }

}
