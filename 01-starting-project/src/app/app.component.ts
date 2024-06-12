import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-user';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string; // the initial/default value for the name that changes upon clicking the user

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId); //.find() allows us to find a specific element in an array of elements
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
