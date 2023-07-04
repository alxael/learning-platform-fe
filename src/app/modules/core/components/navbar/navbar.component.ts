import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isDarkTheme: Observable<boolean>;

  @ViewChild('darkModeSwitch', { read: ElementRef }) element:
    | ElementRef
    | undefined;

  constructor(
    private router: Router,
    private themeService: ThemeService,
    private renderer: Renderer2
  ) {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  sun =
    'M15.125 12a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z M19.5 12.75a.75.75 0 0 0 0-1.5v1.5Zm-1.75-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-10.5 1.5a.75.75 0 0 0 0-1.5v1.5Zm-1.75-1.5a.75.75 0 0 0 0 1.5v-1.5ZM13.25 5a.75.75 0 0 0-1.5 0h1.5Zm-1.5 1.75a.75.75 0 0 0 1.5 0h-1.5Zm1.5 10.5a.75.75 0 0 0-1.5 0h1.5ZM11.75 19a.75.75 0 0 0 1.5 0h-1.5Zm6.23-11.42a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-2.298.178a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm-6.364 8.484a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-2.298.178a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm1.06-9.9a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm.178 2.298a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm8.485 6.365a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm.177 2.297a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm2.58-6.23h-1.75v1.5h1.75v-1.5Zm-12.25 0H5.5v1.5h1.75v-1.5ZM11.75 5v1.75h1.5V5h-1.5Zm0 12.25V19h1.5v-1.75h-1.5Zm5.17-10.73-1.238 1.238 1.06 1.06L17.98 7.58l-1.06-1.06Zm-8.662 8.662L7.02 16.42l1.06 1.06 1.238-1.238-1.06-1.06ZM7.02 7.58l1.238 1.238 1.06-1.06L8.08 6.52 7.02 7.58Zm8.663 8.663 1.237 1.237 1.06-1.06-1.237-1.237-1.06 1.06Z';
  moon =
    'M7.5 12a7.348 7.348 0 0 1 1.1-3.888 6.664 6.664 0 0 1 2.943-2.578 6.157 6.157 0 0 1 3.784-.4l.182.042a6.77 6.77 0 0 0-1.993 2.06 7.347 7.347 0 0 0-1.1 3.889 7.252 7.252 0 0 0 1.918 4.95c.85.92 1.951 1.57 3.166 1.875A6.24 6.24 0 0 1 14.05 19a6.342 6.342 0 0 1-4.632-2.05A7.252 7.252 0 0 1 7.5 12Z';
  ngAfterViewInit() {
    if (this.element) {
      this.element.nativeElement
        .querySelector('.mdc-switch__icon--on')
        .firstChild.setAttribute('d', this.moon);
      this.element.nativeElement
        .querySelector('.mdc-switch__icon--off')
        .firstChild.setAttribute('d', this.sun);
    }
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
