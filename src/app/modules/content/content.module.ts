import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../auth/auth.module';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

import { PresentationPageComponent } from './components/presentation-page/presentation-page.component';
import { FeedPageComponent } from './components/feed-page/feed-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { EditProfileDialogComponent } from './components/profile-page/edit-profile-dialog/edit-profile-dialog.component';
import { AdminSectionPageComponent } from './components/admin-page/admin-section-page/admin-section-page.component';
import { AdminSectionListItemComponent } from './components/admin-page/admin-section-page/admin-section-list-item/admin-section-list-item.component';
import { AdminSectionAddDialogComponent } from './components/admin-page/admin-section-page/admin-section-add-dialog/admin-section-add-dialog.component';
import { AdminSectionDeleteDialogComponent } from './components/admin-page/admin-section-page/admin-section-delete-dialog/admin-section-delete-dialog.component';
import { AdminSectionEditDialogComponent } from './components/admin-page/admin-section-page/admin-section-edit-dialog/admin-section-edit-dialog.component';
import { AdminSectionContentPageComponent } from './components/admin-page/admin-section-content-page/admin-section-content-page.component';
import { AdminSectionContentDeleteDialogComponent } from './components/admin-page/admin-section-content-page/admin-section-content-delete-dialog/admin-section-content-delete-dialog.component';
import { AdminSectionContentAddDialogComponent } from './components/admin-page/admin-section-content-page/admin-section-content-add-dialog/admin-section-content-add-dialog.component';
import { AdminSectionContentEditDialogComponent } from './components/admin-page/admin-section-content-page/admin-section-content-edit-dialog/admin-section-content-edit-dialog.component';
import { AdminSectionContentQuizListItemComponent } from './components/admin-page/admin-section-content-page/admin-section-content-quiz-list-item/admin-section-content-quiz-list-item.component';
import { AdminSectionContentQuizAddDialogComponent } from './components/admin-page/admin-section-content-page/admin-section-content-quiz-add-dialog/admin-section-content-quiz-add-dialog.component';
import { AdminSectionContentQuizEditDialogComponent } from './components/admin-page/admin-section-content-page/admin-section-content-quiz-edit-dialog/admin-section-content-quiz-edit-dialog.component';
import { AdminSectionContentQuizDeleteDialogComponent } from './components/admin-page/admin-section-content-page/admin-section-content-quiz-delete-dialog/admin-section-content-quiz-delete-dialog.component';
import { AdminSectionContentFileAddDialogComponent } from './components/admin-page/admin-section-content-page/admin-section-content-file-add-dialog/admin-section-content-file-add-dialog.component';
import { AdminSectionContentFileDeleteDialogComponent } from './components/admin-page/admin-section-content-page/admin-section-content-file-delete-dialog/admin-section-content-file-delete-dialog.component';
import { AdminSectionContentFileListItemComponent } from './components/admin-page/admin-section-content-page/admin-section-content-file-list-item/admin-section-content-file-list-item.component';
import { SectionPageComponent } from './components/section-page/section-page.component';
import { SectionContentQuizAnswerAddDialogComponent } from './components/section-page/section-content-quiz-answer-add-dialog/section-content-quiz-answer-add-dialog.component';
import { SectionContentQuizAnswerDeleteDialogComponent } from './components/section-page/section-content-quiz-answer-delete-dialog/section-content-quiz-answer-delete-dialog.component';
@NgModule({
  declarations: [
    PresentationPageComponent,
    FeedPageComponent,
    ProfilePageComponent,
    AdminPageComponent,
    EditProfileDialogComponent,
    AdminSectionPageComponent,
    AdminSectionListItemComponent,
    AdminSectionAddDialogComponent,
    AdminSectionDeleteDialogComponent,
    AdminSectionEditDialogComponent,
    AdminSectionContentPageComponent,
    AdminSectionContentDeleteDialogComponent,
    AdminSectionContentAddDialogComponent,
    AdminSectionContentEditDialogComponent,
    AdminSectionContentQuizListItemComponent,
    AdminSectionContentQuizAddDialogComponent,
    AdminSectionContentQuizEditDialogComponent,
    AdminSectionContentQuizDeleteDialogComponent,
    AdminSectionContentFileAddDialogComponent,
    AdminSectionContentFileDeleteDialogComponent,
    AdminSectionContentFileListItemComponent,
    SectionPageComponent,
    SectionContentQuizAnswerAddDialogComponent,
    SectionContentQuizAnswerDeleteDialogComponent,
  ],
  imports: [
    CommonModule,
    AuthModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule,
  ],
  exports: [
    PresentationPageComponent,
    FeedPageComponent,
    ProfilePageComponent,
    AdminPageComponent,
    AdminSectionPageComponent,
    AdminSectionPageComponent,
    AdminSectionContentPageComponent,
  ],
})
export class ContentModule {}
