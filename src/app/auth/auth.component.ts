import {Component, Output} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {EventEmitter} from "@angular/core";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  loginEmail: FormControl = new FormControl("");
  signupEmail: FormControl = new FormControl("");
  users = this.userService.getUsers()
  @Output() authenticated = new EventEmitter()
  handleLogin() {
    if (this.loginEmail.value === "") {
      alert("Please enter a valid email");
    }
    for(let user of this.users) {
      if (user.email === this.loginEmail.value) {
        alert("Successfully logged in");
        this.router.navigate(['/home'])
        return
      }
    }
    alert("Email not found!");
  }
  handleSignup() {
    if (this.signupEmail.value === "") {
      alert("Please enter a valid email");
    } else {
      this.userService.postUser(this.signupEmail.value)
      alert("Successfully signed up");
      this.router.navigate(['/home']);
    }
  }
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

}
