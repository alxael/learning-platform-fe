import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SectionDto } from 'src/app/modules/api/models';
import { SectionService } from 'src/app/modules/api/services';
import { AdminSectionsService } from 'src/app/modules/content/services/admin-sections.service';

@Component({
  selector: 'app-admin-section-edit-dialog',
  templateUrl: './admin-section-edit-dialog.component.html',
  styleUrls: ['./admin-section-edit-dialog.component.scss'],
})
export class AdminSectionEditDialogComponent {
  matches = false;
  formGroup = new FormGroup({
    title: new FormControl(this.data.sectionData.title),
  });

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sectionService: SectionService,
    private adminSectionsService: AdminSectionsService,
    @Inject(MAT_DIALOG_DATA)
    public data: { sectionData: SectionDto; parentSectionId: string | null }
  ) {
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe((value) => {
      this.matches = value.matches;
    });
  }

  onClickSubmit = () => {
    if (this.formGroup.valid) {
      this.sectionService
        .apiSectionAdminPut({
          body: {
            title: this.formGroup.value.title,
            id: this.data.sectionData.id,
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
