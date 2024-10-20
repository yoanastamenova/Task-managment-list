import { Component, EventEmitter, Input, Output, output } from '@angular/core';
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
@Input({ required: true }) id!: string;
 @Input({required: true}) avatar!: string;
 @Input({required: true}) name!: string;
//  @Output() select = new EventEmitter();     //EventEmiter object allows us to emit custom values throught that select property we issued
select = output<string>();              //using generic type again

 get imagePath() {
  return 'assets/users/' + this.avatar;
 }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
