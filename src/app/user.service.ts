import { Injectable } from '@angular/core';

type User = {
  id: number;
  email: string
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers(): User[] {
    return USERS
  }

  postUser(email: string) {
    const newUser: User = {id: USERS.length + 1, email: email};
    USERS.push(newUser);
  }

  constructor() { }
}

const USERS = [
  {
    id: 1,
    email: 'joe@gmail.com',
  },
  {
    id: 2,
    email: 'ian@gmail.com',
  },
  {
    id: 3,
    email: 'mark@gmail.com',
  }

]
