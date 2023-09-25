import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { BankingService } from 'src/app/services/banking.service';
import {  clvInputs } from 'src/app/types/banking.type'
import descriptions from 'src/assets/content/banking.json'

@Component({
  selector: 'app-ban-clv-prediction',
  templateUrl: './ban-clv-prediction.component.html',
  styleUrls: ['../../../styles/styles-pages.scss']
})
export class BanClvPredictionComponent implements OnInit {
  content = descriptions;

  result !: number;
  private resultSub!: Subscription;

  inputs = {
    input1 : new FormControl(null ,Validators.required),
    input2 : new FormControl(null ,Validators.required),
    input3 : new FormControl(null ,Validators.required),
    input4 : new FormControl(null ,Validators.required),
    input5 : new FormControl(null ,Validators.required),
    input6 : new FormControl(null ,Validators.required),
    input7 : new FormControl(null ,Validators.required),
    input8 : new FormControl(null ,Validators.required),
    input9 : new FormControl(null ,Validators.required)
  }

  inputsForm: FormGroup = new FormGroup(this.inputs);

  constructor(private http: HttpClient, private predictionService:  BankingService) {}

  ngOnInit(): void {
    this.resultSub = this.predictionService.clvPredictionUpdatedListner()
    .subscribe(updatedResult => {
      this.result = updatedResult;
    })
  }

  predict() {
    this.inputsForm.markAllAsTouched();
    if (this.inputsForm.invalid) {
      return;
    }
    else {
      const modelInputs: clvInputs = {
        input1: this.inputs.input1.value,
        input2: this.inputs.input2.value,
        input3: this.inputs.input3.value,
        input4: this.inputs.input4.value,
        input5: this.inputs.input5.value,
        input6: this.inputs.input6.value,
        input7: this.inputs.input7.value,
        input8: this.inputs.input8.value,
        input9: this.inputs.input9.value
      }
      this.predictionService.makeClvPrediction(modelInputs);
    }
  }
}
