import { Component } from '@angular/core';
import descriptions from 'src/assets/content/retail.json'

@Component({
  selector: 'app-retail',
  templateUrl: './retail.component.html',
  styleUrls: ['../../styles/styles-pages.scss']
})
export class RetailComponent {
  content = descriptions;
}
