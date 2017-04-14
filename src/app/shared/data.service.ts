import { Injectable } from '@angular/core';
import { createCardList } from '../hs-data';

@Injectable()
export class DataService {
  getCards() {
    return createCardList();
  }
}
