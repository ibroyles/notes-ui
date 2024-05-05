import { Component, Input} from '@angular/core';
import {last} from "rxjs";
import {RouterLink} from "@angular/router";
import {Note} from "../note.service";

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
}
