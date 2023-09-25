import { Component } from '@angular/core';
import descriptions from 'src/assets/content/about.json'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../../styles/styles-pages.scss']
})
export class AboutComponent {
  content = descriptions;
 }
