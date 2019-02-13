import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LegoService {
  private legos = ['Clive', 'Rachel', 'Sonya', 'Punky'];
  constructor() { }
  getLegoOfTheDay(): Observable<string> {
    return from(new Promise((resolve, reject) => {
        setTimeout(() => resolve(this.legos[Math.floor(Math.random() * 4)]), 3000);
    }));
  }
}
