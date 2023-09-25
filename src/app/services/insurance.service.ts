import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// TYPES
import { clvInputs } from "../types/insurance.type";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class InsuranceService {
    constructor(private http: HttpClient) { }

    private clvPrediction !: number;
    private clvPredictionUpdated = new Subject<number>();

    makeClvPrediction(inputs: clvInputs) {
        this.http.post('https://api.artisansforkids.com/insClv', { inputs: inputs })
        .subscribe((response: any) => {
            this.clvPrediction = response['result'];
            this.clvPredictionUpdated.next(this.clvPrediction);
          });
    }
    clvPredictionUpdatedListner() {
        return this.clvPredictionUpdated.asObservable();
    }
}