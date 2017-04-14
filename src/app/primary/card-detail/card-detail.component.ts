import { Component, Input } from '@angular/core';
import { Card } from 'app/shared/model';

@Component({
  selector: 'hs-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent {
  @Input() selectedCard: Card;
}
