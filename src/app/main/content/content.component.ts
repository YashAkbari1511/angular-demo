import { Component } from '@angular/core';
import { data } from './content';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  data = data;
}
