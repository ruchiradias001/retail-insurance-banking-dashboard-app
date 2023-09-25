import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { AIService } from 'src/app/services/ai.service';

@Component({
  selector: 'app-ai-assistant',
  templateUrl: './ai-assistant.component.html',
  styleUrls: ['../../styles/styles-pages.scss']
})
export class AiAssistantComponent {
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
