import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PricingService {
  toggleValue: Subject<boolean> = new Subject<boolean>();
  emitToggleValue = (val: boolean) => {
    this.toggleValue.next(val);
  };
}
