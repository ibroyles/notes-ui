import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import {NoteViewComponent} from "./note-view/note-view.component";
import {NoteEditComponent} from "./note-edit/note-edit.component";
import {AuthComponent} from "./auth/auth.component";
import {NoteCreateComponent} from "./note-create/note-create.component";

export const routes: Routes = [
  {path: "", component: AuthComponent},
  {path: "home", component: HomeComponent},
  {path: "view/:id", component: NoteViewComponent},
  {path: "create", component: NoteCreateComponent},
  {path: "view/:id/edit", component: NoteEditComponent}

];
