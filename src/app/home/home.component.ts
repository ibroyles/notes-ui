import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {NoteLinkComponent} from "../note-link/note-link.component";
import {Note, NoteService} from "../note.service";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        NgForOf,
        NoteLinkComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'notes-ui';
  notesData: Note[] = [];
  constructor(private notesService: NoteService) {
  }

  ngOnInit(): void {
    this.showNotes()
    console.log(this.notesData)
  }

  showNotes() {
    this.notesService.getNotes().subscribe(notes => {
      for (let note of notes) {
        this.notesData.push(note);
      }
    })
  }
}
