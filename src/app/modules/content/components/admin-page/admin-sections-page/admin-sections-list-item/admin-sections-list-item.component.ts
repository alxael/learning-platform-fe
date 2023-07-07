import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';
import { MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, MatExpansionPanelDefaultOptions } from '@angular/material/expansion';
import { SectionDto } from 'src/app/modules/api/models';

export const myOptions: MatExpansionPanelDefaultOptions = {
  collapsedHeight: '7rem',
  expandedHeight: '',
  hideToggle: false
}

@Component({
  selector: 'app-admin-sections-list-item',
  templateUrl: './admin-sections-list-item.component.html',
  styleUrls: ['./admin-sections-list-item.component.scss'],
  providers: [{
    provide: MAT_EXPANSION_PANEL_DEFAULT_OPTIONS,
    useValue: myOptions
  }]
})
export class AdminSectionsListItemComponent {
  matches = false;
  @Input() data: SectionDto;
  @Input() parentSectionId: string | null;

  constructor (private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe((value) => {
      this.matches = value.matches;
    })
  }
}
