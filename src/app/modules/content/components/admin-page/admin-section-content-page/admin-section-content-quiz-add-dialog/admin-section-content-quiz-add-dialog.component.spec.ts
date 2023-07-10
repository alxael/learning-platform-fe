import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSectionContentQuizAddDialogComponent } from './admin-section-content-quiz-add-dialog.component';

describe('AdminSectionContentQuizAddDialogComponent', () => {
  let component: AdminSectionContentQuizAddDialogComponent;
  let fixture: ComponentFixture<AdminSectionContentQuizAddDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSectionContentQuizAddDialogComponent]
    });
    fixture = TestBed.createComponent(AdminSectionContentQuizAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
