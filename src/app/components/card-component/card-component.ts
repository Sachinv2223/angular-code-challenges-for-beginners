import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-component',
  imports: [],
  templateUrl: './card-component.html',
  styleUrl: './card-component.css'
})
export class CardComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() icon: string = '';
  @Input() showFooter: boolean = false;

  // Optional: Add a method to handle icon click if needed
  onIconClick() {
    console.log('Icon clicked!');
  }
}
