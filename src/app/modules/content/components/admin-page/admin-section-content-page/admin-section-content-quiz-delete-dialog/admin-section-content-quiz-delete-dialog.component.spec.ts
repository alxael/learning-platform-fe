import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSectionContentQuizDeleteDialogComponent } from './admin-section-content-quiz-delete-dialog.component';

describe('AdminSectionContentQuizDeleteDialogComponent', () => {
  let component: AdminSectionContentQuizDeleteDialogComponent;
  let fixture: ComponentFixture<AdminSectionContentQuizDeleteDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSectionContentQuizDeleteDialogComponent]
    });
    fixture = TestBed.createComponent(AdminSectionContentQuizDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
