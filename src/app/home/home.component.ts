import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {NoteLinkComponent} from "../note-link/note-link.component";
import {Note, NoteService} from "../note.service";
import {RouterLink} from "@angular/router";
import {AuthComponent} from "../auth/auth.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NoteLinkComponent,
    RouterLink,
    AuthComponent
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
    this.notesData = this.notesService.getNotes()
  }
}
