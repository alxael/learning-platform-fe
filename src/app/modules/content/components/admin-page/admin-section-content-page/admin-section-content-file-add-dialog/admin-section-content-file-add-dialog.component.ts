import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileService } from 'src/app/modules/api/services';

@Component({
  selector: 'app-admin-section-content-file-add-dialog',
  templateUrl: './admin-section-content-file-add-dialog.component.html',
  styleUrls: ['./admin-section-content-file-add-dialog.component.scss'],
})
export class AdminSectionContentFileAddDialogComponent {
  matches = false;
  formGroup = new FormGroup({
    file: new FormControl(),
  });

  constructor(
    private breakpointObserver: BreakpointObserver,
    private fileService: FileService,
    private _matSnackbar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: { sectionContentId: string }
  ) {
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe((value) => {
      this.matches = value.matches;
    });
  }

  onFileSelected = (event: any) => {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.formGroup.patchValue({
        file: file,
      });
      this._matSnackbar.open('File uploaded!', 'Close', { duration: 3000 });
    }
  };

  onSubmit = () => {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value.file);
      this.fileService
        .apiFileAdminSectionSectionContentIdPost({
          sectionContentId: this.data.sectionContentId,
          body: {
            file: this.formGroup.value.file,
          },
        })
        .subscribe((value) => {});
    }
    this.formGroup.reset();
  };
}
