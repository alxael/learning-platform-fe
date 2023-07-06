import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from './modules/core/services/theme.service';
import IdentityService from './modules/auth/services/identity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDarkTheme: Observable<boolean>;

  constructor(
    private themeService: ThemeService,
    private identityService: IdentityService
  ) {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  ngOnInit() {
    this.identityService.refreshToken();
  }
}
