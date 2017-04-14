import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'app/data.service';
import { Card } from 'app/model';

@Component({
  selector: 'hs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  cards: Card[];
  selectedCard: Card;
  @Output() selectCard = new EventEmitter<Card>();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.cards = this.dataService.getCards();
  }

  searchCard(str: string) {
    const searched = this.cards.map( (card) => {
      if (str.toLowerCase().includes( card.name.toLowerCase() )) {
        this.selectedCard = card;
        return card;
      }
    });
    this.selectCard.emit(this.selectedCard);
  }
}
