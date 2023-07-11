import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSectionContentQuizEditDialogComponent } from './admin-section-content-quiz-edit-dialog.component';

describe('AdminSectionContentQuizEditDialogComponent', () => {
  let component: AdminSectionContentQuizEditDialogComponent;
  let fixture: ComponentFixture<AdminSectionContentQuizEditDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSectionContentQuizEditDialogComponent]
    });
    fixture = TestBed.createComponent(AdminSectionContentQuizEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
