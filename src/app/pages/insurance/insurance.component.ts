import { Component } from '@angular/core';
import descriptions from 'src/assets/content/insurance.json'

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['../../styles/styles-pages.scss']
})
export class InsuranceComponent {
  content = descriptions;
}
