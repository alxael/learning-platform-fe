import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _darkTheme = new Subject<boolean>();
  isDarkTheme = this._darkTheme.asObservable();

  constructor() {}

  detectDarkTheme = () => {
    this.setDarkTheme(window.matchMedia('(prefers-color-scheme)').matches);
  };

  setDarkTheme = (isDarkTheme: boolean) => {
    this._darkTheme.next(isDarkTheme);
  };
}
