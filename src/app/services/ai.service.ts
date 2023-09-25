import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class AIService {
    constructor(private http: HttpClient) { }

    getAnswer(input: string) {
        this.http.post('https://api.artisansforkids.com/ai', { input: input }, { responseType: 'arraybuffer' })
            .subscribe((response: ArrayBuffer) => {
                const audioContext = new (window.AudioContext)
                audioContext.decodeAudioData(response, (buffer) => {
                    const source = audioContext.createBufferSource();
                    source.buffer = buffer;
                    source.connect(audioContext.destination);
                    source.start();
                })
            });
    }
}