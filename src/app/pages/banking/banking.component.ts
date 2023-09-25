import { Component } from '@angular/core';
import descriptions from 'src/assets/content/banking.json'

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['../../styles/styles-pages.scss']
})
export class BankingComponent {
  content = descriptions;
}
