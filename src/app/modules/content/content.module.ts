import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../auth/auth.module';

import { PresentationPageComponent } from './components/presentation-page/presentation-page.component';

@NgModule({
  declarations: [
    PresentationPageComponent
  ],
  imports: [
    CommonModule,
    AuthModule
  ],
  exports: [
    PresentationPageComponent
  ]
})
export class ContentModule { }
