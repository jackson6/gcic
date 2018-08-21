import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Alert1Service {
  public _subject = new Subject<boolean>();
  public event = this._subject.asObservable();

  constructor() { }

  public publish(data: boolean) {
    this._subject.next(data);
  }
}
