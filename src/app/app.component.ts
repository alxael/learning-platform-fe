import { Component, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from './modules/core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDarkTheme: Observable<boolean>;
  
  constructor(private themeService: ThemeService) {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }
}
