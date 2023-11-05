import { Component } from '@angular/core';
import { Data } from './sidebar.data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  sidebarData = Data;
}
