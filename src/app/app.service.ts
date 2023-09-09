import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  isToogled = false;

  toggleButton() {
    this.isToogled = !this.isToogled;
  }
}
