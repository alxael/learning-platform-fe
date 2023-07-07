import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserProfileDto } from 'src/app/modules/api/models';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-edit-profile-dialog',
  templateUrl: './edit-profile-dialog.component.html',
  styleUrls: ['./edit-profile-dialog.component.scss'],
  providers: [],
})
export class EditProfileDialogComponent {
  matches = false;
  minDate: Date;
  maxDate: Date;

  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialogRef: MatDialogRef<EditProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserProfileDto
  ) {
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe((value) => {
      this.matches = value.matches;
    });
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 125, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  getDate = (dateString: string | undefined) => {
    if (dateString === '0001-01-01T00:00:00' || dateString === undefined) {
      return '';
    }
    const date = new Date(dateString);
    return date.toLocaleDateString('en-uk');
  };
}
