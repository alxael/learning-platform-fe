import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  MAT_EXPANSION_PANEL_DEFAULT_OPTIONS,
  MatExpansionPanelDefaultOptions,
} from '@angular/material/expansion';
import { SectionDto } from 'src/app/modules/api/models';
import { AdminSectionAddDialogComponent } from '../admin-section-add-dialog/admin-section-add-dialog.component';
import { AdminSectionDeleteDialogComponent } from '../admin-section-delete-dialog/admin-section-delete-dialog.component';
import { AdminSectionEditDialogComponent } from '../admin-section-edit-dialog/admin-section-edit-dialog.component';

export const myOptions: MatExpansionPanelDefaultOptions = {
  collapsedHeight: '7rem',
  expandedHeight: '',
  hideToggle: false,
};

@Component({
  selector: 'app-admin-section-list-item',
  templateUrl: './admin-section-list-item.component.html',
  styleUrls: ['./admin-section-list-item.component.scss'],
  providers: [
    {
      provide: MAT_EXPANSION_PANEL_DEFAULT_OPTIONS,
      useValue: myOptions,
    },
  ],
})
export class AdminSectionListItemComponent {
  matches = false;
  @Input() parentSectionId: string | null;
  @Input() data: SectionDto;

  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog
  ) {
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe((value) => {
      this.matches = value.matches;
    });
  }

  onSectionAddClick = (parentSectionId: string | null) => {
    const dialogRef = this.dialog.open(AdminSectionAddDialogComponent, {
      width: 'clamp(25rem, 60%, 50rem)',
      data: { parentSectionId: parentSectionId },
    });
  };

  onSectionDeleteClick = (sectionId: string | null) => {
    const dialogRef = this.dialog.open(AdminSectionDeleteDialogComponent, {
      width: 'clamp(25rem, 60%, 50rem)',
      data: { sectionId: sectionId },
    });
  };

  onSectionEditClick = (data: SectionDto) => {
    const dialogRef = this.dialog.open(AdminSectionEditDialogComponent, {
      width: 'clamp(25rem, 60%, 50rem)',
      data: { sectionData: data, parentSectionId: this.parentSectionId },
    });
  };

}
