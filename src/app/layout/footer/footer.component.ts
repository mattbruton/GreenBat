import { Component } from '@angular/core';

@Component({
  selector: 'gb-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear: string = new Date().getFullYear().toString();
}
