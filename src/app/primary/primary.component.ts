import { Component, Input } from '@angular/core';
import { Card } from "app/shared/model";

@Component({
  selector: 'hs-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.scss']
})
export class PrimaryComponent {
  @Input() selectedCard: Card;

  passCardToDetailView(card) {
    this.selectedCard = card;
  }
}
