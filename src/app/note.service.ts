import { Injectable } from '@angular/core';
import {NoteLinkComponent} from "./note-link/note-link.component";
import {HttpClient} from "@angular/common/http";

export interface Note {
  title: string
  body: string
  author: string
  lastUpdated: string;
  id: number


}

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notesUrl = 'http://localhost:8080/notes';

  getNotes() {
    return this.http.get<Note[]>(this.notesUrl);
  }

  getNote(id: number) {
    return this.http.get<Note>(`${this.notesUrl}/${id}`);
  }

  constructor(private http: HttpClient) {}
}
