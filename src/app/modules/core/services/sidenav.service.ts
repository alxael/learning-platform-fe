import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private _sidenavOpen = new BehaviorSubject<boolean>(false);
  isSidenavOpen = this._sidenavOpen.asObservable();

  constructor() { }

  setSidenavOpen = (isSidenavOpen: boolean) => {
    this._sidenavOpen.next(isSidenavOpen);
  }
}
