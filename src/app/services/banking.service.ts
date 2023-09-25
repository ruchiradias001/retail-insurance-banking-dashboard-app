import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// TYPES
import { clvInputs } from "../types/banking.type";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class BankingService {
    constructor(private http: HttpClient) { }

    private clvPrediction !: number;
    private clvPredictionUpdated = new Subject<number>();

    makeClvPrediction(inputs: clvInputs) {
        this.http.post('https://api.artisansforkids.com/banClv', { inputs: inputs })
        .subscribe((response: any) => {
            this.clvPrediction = response['result'];
            this.clvPredictionUpdated.next(this.clvPrediction);
          });
    }
    clvPredictionUpdatedListner() {
        return this.clvPredictionUpdated.asObservable();
    }
}