import { Component, Input } from '@angular/core';
import { Card } from 'app/shared/model';

@Component({
  selector: 'gb-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  @Input() selectedCard: Card;

  passCardToDetailView(card) {
    this.selectedCard = card;
  }
}
