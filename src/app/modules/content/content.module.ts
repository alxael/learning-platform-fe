import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../auth/auth.module';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

import { PresentationPageComponent } from './components/presentation-page/presentation-page.component';

@NgModule({
  declarations: [
    PresentationPageComponent
  ],
  imports: [
    CommonModule,
    AuthModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    PresentationPageComponent
  ]
})
export class ContentModule { }
