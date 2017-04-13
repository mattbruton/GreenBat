import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from "app/data.service";
import { Card } from "app/model";

@Component({
  selector: 'hs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  cards: Card[];
  selectedCard: Card;
  @Output() selectedCardEmitter = new EventEmitter<Card>();
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.cards = this.dataService.getCards();
  }

  selectCard(str: string) {
    const searched = this.cards.map( (card) => {
      if (str.toLowerCase().includes(card.name.toLowerCase())){
        console.log(card);
        this.selectedCard = card;
        return card;
      }
    });

    this.selectedCardEmitter.emit(this.selectedCard);
  }

  log(msg: string) {
    console.log(msg);
  }


}
