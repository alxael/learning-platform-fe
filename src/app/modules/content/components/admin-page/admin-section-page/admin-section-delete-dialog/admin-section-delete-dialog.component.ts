import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SectionService } from 'src/app/modules/api/services';
import { AdminSectionsService } from 'src/app/modules/content/services/admin-sections.service';

@Component({
  selector: 'app-admin-section-delete-dialog',
  templateUrl: './admin-section-delete-dialog.component.html',
  styleUrls: ['./admin-section-delete-dialog.component.scss'],
})
export class AdminSectionDeleteDialogComponent {
  matches = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sectionService: SectionService,
    private adminSectionsService: AdminSectionsService,
    @Inject(MAT_DIALOG_DATA) public data: { sectionId: string }
  ) {
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe((value) => {
      this.matches = value.matches;
    });
  }

  onClickConfirm = () => {
    this.sectionService
      .apiSectionAdminSectionIdDelete({ sectionId: this.data.sectionId })
      .subscribe((value) => {
        this.adminSectionsService.getSectionsList();
      });
  };
}
