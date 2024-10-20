import { Component, EventEmitter, Input, Output, output } from '@angular/core';
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

interface User {
  id: string;
  name: string;
  avatar: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
@Input({ required: true }) user!: User;
 @Output() select = new EventEmitter();     //EventEmiter object allows us to emit custom values throught that select property we issued
// select = output<string>();              //using generic type again

 get imagePath() {
  return 'assets/users/' + this.user.avatar;
 }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
