import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PwaService {

  promptEvent: Event;

  constructor(public swUpdate: SwUpdate) {

    swUpdate.available.subscribe(event => {
      if (this.askUserToUpdate()) {
        window.location.reload();
      }
    });
   }

  private askUserToUpdate(): boolean {
    return true;
  }
}
