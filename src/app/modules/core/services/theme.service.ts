import { OverlayContainer } from '@angular/cdk/overlay';
import { ApplicationRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _darkTheme = new BehaviorSubject<boolean>(true);
  isDarkTheme = this._darkTheme.asObservable();

  addOverlayClass = (darkTheme: boolean) => {
    const overlayContainerClasses =
      this._overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter(
      (item: string) => item.includes('dark-theme') || item.includes('light-theme')
    );
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(darkTheme ? 'dark-theme' : 'light-theme');
  };

  constructor(
    private ref: ApplicationRef,
    private _overlayContainer: OverlayContainer
  ) {
    const darkTheme =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    this._darkTheme.next(darkTheme);
    this.addOverlayClass(darkTheme);
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
    this.addOverlayClass(isDarkTheme);
  };
}
