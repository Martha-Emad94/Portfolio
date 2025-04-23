import { Component } from '@angular/core';
import { MessageComponent } from "../message/message.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MessageComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
