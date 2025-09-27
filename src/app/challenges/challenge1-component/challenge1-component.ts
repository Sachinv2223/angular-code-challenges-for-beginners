import {Component, signal} from '@angular/core';
import {ToolbarComponent} from '../../components/toolbar-component/toolbar-component';

@Component({
  selector: 'app-challenge1-component',
  imports: [ToolbarComponent],
  templateUrl: './challenge1-component.html',
  styleUrl: './challenge1-component.css'
})
export class Challenge1Component {
  protected readonly title = signal('Challenge 1');
}
