import { Component, Input } from '@angular/core';
import { Card } from 'app/model';

@Component({
  selector: 'hs-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent {
  @Input() selectedCard: Card;
}
