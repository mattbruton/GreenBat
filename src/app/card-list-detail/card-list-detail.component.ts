import { Component, Input } from '@angular/core';
import { Card } from "app/model";

@Component({
  selector: 'hs-card-list-detail',
  templateUrl: './card-list-detail.component.html',
  styleUrls: ['./card-list-detail.component.scss']
})
export class CardListDetailComponent {
  @Input() card: Card;
  showImage: boolean;
}
