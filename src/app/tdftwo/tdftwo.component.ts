import { Component } from '@angular/core';
import { User } from '../shared/subscriberClass';
@Component({
  selector: 'app-tdftwo',
  templateUrl: './tdftwo.component.html',
  styleUrls: ['./tdftwo.component.css']
})
export class TdftwoComponent {
  topics: string[] = ['angular', 'react', 'vue'];
  user = new User("", "", "", "", "", "default", "morning", false);
}
