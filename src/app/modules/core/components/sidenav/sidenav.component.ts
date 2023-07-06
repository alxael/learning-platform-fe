import { Component } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { Observable } from 'rxjs';
import IdentityService from 'src/app/modules/auth/services/identity.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  token: Observable<string | null>;
  isSidenavOpen: Observable<boolean>;

  constructor(
    private sidenavService: SidenavService,
    private identityService: IdentityService
  ) {
    this.isSidenavOpen = this.sidenavService.isSidenavOpen;
    this.token = this.identityService.token.asObservable();
  }

  change = (opened: boolean) => {
    this.sidenavService.setSidenavOpen(opened);
  };

  onSignOut = () => {
    this.identityService.removeToken();
  }
}
