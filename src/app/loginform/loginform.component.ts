import { Component } from '@angular/core';
import{FormsModule} from '@angular/forms';

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css'
})
export class LoginformComponent {
  userLogin(item:any)
  {
    console.warn(item);
  }

}
