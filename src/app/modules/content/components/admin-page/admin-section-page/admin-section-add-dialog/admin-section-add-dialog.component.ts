import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SectionService } from 'src/app/modules/api/services';
import { AdminSectionsService } from 'src/app/modules/content/services/admin-sections.service';

@Component({
  selector: 'app-admin-section-add-dialog',
  templateUrl: './admin-section-add-dialog.component.html',
  styleUrls: ['./admin-section-add-dialog.component.scss'],
})
export class AdminSectionAddDialogComponent {
  matches = false;
  formGroup = new FormGroup({
    title: new FormControl(),
  });

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sectionService: SectionService,
    private adminSectionsService: AdminSectionsService,
    @Inject(MAT_DIALOG_DATA) public data: { parentSectionId: string | null }
  ) {
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe((value) => {
      this.matches = value.matches;
    });
  }

  onClickSubmit = () => {
    if (this.formGroup.valid) {
      this.sectionService
        .apiSectionAdminPost({
          body: {
            title: this.formGroup.value.title,
            parentSectionId: this.data.parentSectionId,
          },
        })
        .subscribe((value) => {
          this.adminSectionsService.getSectionsList();
        });
    }
    this.formGroup.reset();
  };
}
