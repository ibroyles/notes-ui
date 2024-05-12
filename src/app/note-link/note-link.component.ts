import { Component, Input} from '@angular/core';
import {last} from "rxjs";
import {RouterLink} from "@angular/router";
import {Note, NoteService} from "../note.service";

@Component({
  selector: 'app-note-link',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './note-link.component.html',
  styleUrl: './note-link.component.scss'
})
export class NoteLinkComponent {
  @Input() note: any

  protected readonly last = last;

  handleDelete(id: number){
    this.noteService.deleteNote(id)
  }

  constructor(private noteService: NoteService) {}
}
