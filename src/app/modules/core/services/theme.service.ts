import { ApplicationRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _darkTheme = new BehaviorSubject<boolean>(true);
  isDarkTheme = this._darkTheme.asObservable();

  constructor(private ref: ApplicationRef) {
    const darkTheme =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    this._darkTheme.next(darkTheme);
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        const on = e.matches;
        this._darkTheme.next(on);
        this.ref.tick();
      });
  }

  setDarkTheme = (isDarkTheme: boolean) => {
    this._darkTheme.next(isDarkTheme);
  };
}
