import { Component } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  isSidenavOpen: Observable<boolean>;

  constructor(private sidenavService: SidenavService) {
    this.isSidenavOpen = this.sidenavService.isSidenavOpen;
  }

  change = (opened: boolean) => {
    this.sidenavService.setSidenavOpen(opened);
  };
}
