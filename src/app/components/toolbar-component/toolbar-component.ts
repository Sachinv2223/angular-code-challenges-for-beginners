import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-toolbar-component',
  imports: [],
  templateUrl: './toolbar-component.html',
  styleUrl: './toolbar-component.css'
})
export class ToolbarComponent {
  @Input() title = '';
}
