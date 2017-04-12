import { Component, OnInit } from '@angular/core';
import { DataService } from "app/data.service";
import { Card } from "app/model";

@Component({
  selector: 'hs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  cards: Card[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.cards = this.dataService.getCards();
  }

}
