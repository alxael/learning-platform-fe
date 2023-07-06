import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { first } from 'rxjs';
import { AuthService } from 'src/app/modules/api/services';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
})
export class SignUpPageComponent {
  matches = false;
  hidePassword = true;
  completed = false;
  error: string | null = null;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) {
    this.breakpointObserver.observe(Breakpoints.XSmall).subscribe(result => {
      this.matches = result.matches;
    })
  }

  onSubmit = (form: NgForm) => {
    if (form.valid) {
      this.authService
        .apiAuthRegisterPost({
          body: {
            email: form.value.email,
            userName: form.value.email,
            password: form.value.password,
          },
        })
        .pipe(first())
        .subscribe({
          error: (error) => {
            this._snackBar.open(
              'An error has occurred. Please ensure that your credentials are valid.',
              'Close',
              {
                duration: 3000,
              }
            );
          },
          complete: () => {
            this.completed = true;
          },
        });
      form.resetForm();
    }
  };

  onResetError = () => {
    this.error = null;
  };
}
