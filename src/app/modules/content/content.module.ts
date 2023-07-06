import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../auth/auth.module';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

import { PresentationPageComponent } from './components/presentation-page/presentation-page.component';
import { FeedPageComponent } from './components/feed-page/feed-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';

@NgModule({
  declarations: [PresentationPageComponent, FeedPageComponent, ProfilePageComponent],
  imports: [CommonModule, AuthModule, MaterialModule, RouterModule],
  exports: [PresentationPageComponent, FeedPageComponent, ProfilePageComponent],
})
export class ContentModule {}
