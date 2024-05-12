import { Injectable } from '@angular/core';
import {NoteLinkComponent} from "./note-link/note-link.component";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import * as database from "../db.json"
import {error} from "@angular/compiler-cli/src/transformers/util";

export interface Note {
  title: string | null
  body: string | null
  author: string | null
  lastUpdated: string | null;
  id: string
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  errorNote: Note = {id: "-1", title: null, body: null, author: null, lastUpdated: null};

  getNotes() {

    return NOTES;
  }

  getNote(id: number) {
    for (let note of NOTES ){
      if (note.id === id.toString()) {
        return note;
      }
    }
    return this.errorNote;
  }

  postNote(note: any) {
    note.id = (NOTES.length + 1).toString()
    let currentDate = new Date(Date.now());
    note.lastUpdated = currentDate.toISOString();
    NOTES.push(note);
  }

  patchNote(note: any) {
    for(let i = 0; i < NOTES.length; i++) {
      if (note.id === NOTES[i].id) {
        NOTES[i] = note
      }
    }
  }

  deleteNote(id: number) {
    for (let note of NOTES ){
      if (note.id === id.toString()) {
         NOTES.splice(NOTES.indexOf(note), 1);
      }
    }
    return this.errorNote
  }

  // methods for interacting with the API
  /*
  url = "http:localhost:8080/notes

  getNotes() {
    return this.http.get(`${this.url}`)
  }

  getNote(id: number) {
    return this.http.get(`${this.url}/{id}`)
  }

  postNote(note: any){
    return this.http.post(`${this.url}`, note)
  }

  deleteNote(id: number) {
    return this.http.delete(`${this.url}}/${id}`)
  }

  patchNote(id: number, note: any) {
    return this.http.patch(`${this.url}/{${id}`, note)


   */





  constructor(private http: HttpClient) {
    console.log(NOTES)
  }
}

const NOTES: Note[] = [
  {
    "id": "1",
    "title": "Hello World",
    "body": "Hello World",
    "author": "John Doe",
    "lastUpdated": "Jan 2 15:04:05 2008 MST"
  },
  {
    "id": "2",
    "title": "Hello World",
    "body": "Lorum Ipsum",
    "author": "James Smith",
    "lastUpdated": "Jan 2 15:04:05 2006 MST"
  },
  {
    "id": "3",
    "title": "Hello World",
    "body": "Weddings are expensive",
    "author": "Ian Broyles",
    "lastUpdated": "Jan 2 15:04:05 2024 MST"
  }
]
