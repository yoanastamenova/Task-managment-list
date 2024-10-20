import { Component, computed, Input, input } from '@angular/core';
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 @Input({required: true}) avatar!: string;
 @Input({required: true}) name!: string;
  // avatar = input.required<string>();            //generic < type >, type that may be recieved
  // name = input.required<string>();              //read-only signals, they get new values if the outside value changes

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar()
  // })

 get imagePath() {
  return 'assets/users/' + this.avatar;
 }

  onSelectUser() {
    console.log("Clicked!");

  }
}
