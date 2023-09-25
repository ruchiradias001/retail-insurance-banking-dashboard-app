import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { InsuranceService } from 'src/app/services/insurance.service';
import {  clvInputs } from 'src/app/types/insurance.type'
import descriptions from 'src/assets/content/insurance.json'

@Component({
  selector: 'app-ins-clv-prediction',
  templateUrl: './ins-clv-prediction.component.html',
  styleUrls: ['../../../styles/styles-pages.scss']
})
export class InsClvPredictionComponent implements OnInit {
  content = descriptions;

  result !: number;
  private resultSub!: Subscription;

  inputs = {
    input1 : new FormControl(null ,Validators.required),
    input2 : new FormControl(null ,Validators.required),
    input3 : new FormControl(null ,Validators.required),
    input4 : new FormControl(null ,Validators.required),
    input5 : new FormControl(null ,Validators.required),
    input6 : new FormControl(null ,Validators.required)
  }

  inputsForm: FormGroup = new FormGroup(this.inputs);
  errorMsg: string = '';

  constructor(private http: HttpClient, private predictionService:  InsuranceService) {}

  ngOnInit(): void {
    this.resultSub = this.predictionService.clvPredictionUpdatedListner()
    .subscribe(updatedResult => {
      this.result = updatedResult;
    })
  }

  predict() {
    if (this.inputsForm.invalid) {
      this.errorMsg = 'Input Required';
    }
    else {
      const modelInputs: clvInputs = {
        input1: this.inputs.input1.value,
        input2: this.inputs.input2.value,
        input3: this.inputs.input3.value,
        input4: this.inputs.input4.value,
        input5: this.inputs.input5.value,
        input6: this.inputs.input6.value
      }
      this.predictionService.makeClvPrediction(modelInputs);
    }
  }
}
