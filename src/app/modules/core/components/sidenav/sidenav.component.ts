import { Component } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { Observable } from 'rxjs';
import IdentityService from 'src/app/modules/auth/services/identity.service';
import { SectionService } from 'src/app/modules/api/services';
import { SectionDto } from 'src/app/modules/api/models';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  token: Observable<string | null>;
  sections: Observable<SectionDto[]>;
  isSidenavOpen: Observable<boolean>;
  treeControl = new NestedTreeControl<SectionDto>((node) => node.childSections);
  dataSource = new MatTreeNestedDataSource<SectionDto>();

  constructor(
    private sidenavService: SidenavService,
    private identityService: IdentityService,
    private sectionService: SectionService
  ) {
    this.isSidenavOpen = this.sidenavService.isSidenavOpen;
    this.token = this.identityService.token.asObservable();
    this.sections = this.sectionService.apiSectionGet$Json();
    this.sections.subscribe((value) => {
      this.dataSource.data = value
    });
  }

  change = (opened: boolean) => {
    this.sidenavService.setSidenavOpen(opened);
  };

  onSignOut = () => {
    this.identityService.removeToken();
  };

  hasChild = (_: number, node: SectionDto) =>
    !!node.childSections && node.childSections.length > 0;
}
