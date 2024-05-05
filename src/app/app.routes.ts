import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import {NoteViewComponent} from "./note-view/note-view.component";

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "view/:id", component: NoteViewComponent},
  // {path: "/edit/:id", component: NoteEditComponent}

];
