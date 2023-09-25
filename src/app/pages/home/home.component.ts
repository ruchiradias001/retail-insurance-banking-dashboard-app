import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { AIService } from 'src/app/services/ai.service';

import descriptions from 'src/assets/content/home.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../styles/styles-pages.scss']
})
export class HomeComponent {
  content = descriptions;

  input = new FormControl(null); 
  isResult: boolean = false;

  source !: any;

  constructor(private aiService:  AIService) {}

  enter() {
    this.input.markAsTouched();
    if (!this.input.value) {
      return;
    }
    else {
      this.aiService.getAnswer(this.input.value);
    }
  }
}
