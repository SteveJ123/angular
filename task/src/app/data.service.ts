import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  // private messageSource = new Subject<string>();
  // message$ = this.messageSource.asObservable();
  messageSource = new EventEmitter()

  constructor() { }

  sendMessage(message: string) {
    this.messageSource.emit(message);
  }
}
