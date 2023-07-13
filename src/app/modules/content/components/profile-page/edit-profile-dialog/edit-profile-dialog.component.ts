import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  UserProfileDto,
  UserProfileForUpdateDto,
} from 'src/app/modules/api/models';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { FileService, ProfileService } from 'src/app/modules/api/services';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as moment from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';

export const EN_UK_FORMAT = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-edit-profile-dialog',
  templateUrl: './edit-profile-dialog.component.html',
  styleUrls: ['./edit-profile-dialog.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: EN_UK_FORMAT },
  ],
})
export class EditProfileDialogComponent {
  getDate = (dateString: string | undefined) => {
    if (dateString === '0001-01-01T00:00:00' || dateString === undefined) {
      return moment('');
    }
    const date = moment(dateString);
    return date;
  };

  emailFormControl = new FormControl(this.data.email, [
    Validators.required,
    Validators.email,
  ]);
  formGroup = new FormGroup({
    firstName: new FormControl(this.data.firstName),
    lastName: new FormControl(this.data.lastName),
    email: this.emailFormControl,
    dateOfBirth: new FormControl(this.getDate(this.data.dateOfBirth)),
    photo: new FormControl(),
  });
  matches = false;
  minDate: Date;
  maxDate: Date;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private profileService: ProfileService,
    private fileService: FileService,
    public _matSnackBar: MatSnackBar,
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

  onSubmit = () => {
    if (this.formGroup.valid) {
      this.profileService
        .apiProfilePut({
          body: {
            firstName: this.formGroup.value.firstName,
            lastName: this.formGroup.value.lastName,
            dateOfBirth: (this.formGroup.value.dateOfBirth as any).toISOString(true),
          } as UserProfileForUpdateDto,
        })
        .subscribe((value) => {});
    }
    if(this.formGroup.value.photo !== null) {
      this.fileService.apiFileProfilePhotoPut({
        body: {
          file: this.formGroup.value.photo
        }
      }).subscribe((value) => {});
    }
    window.location.reload();
    this.formGroup.reset();
  };

  onFileSelected = (event: any) => {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.formGroup.patchValue({
        photo: file,
      });
      this._matSnackBar.open('Photo uploaded!', 'Close', { duration: 3000 });
    }
  };

  onProfilePictureDelete = () => {
    this.fileService.apiFileProfilePhotoDelete().subscribe((value) => {
      this.data.photoUrl = null;
    });
    this._matSnackBar.open('Photo deleted!', 'Close', { duration: 3000 });
  }
}
