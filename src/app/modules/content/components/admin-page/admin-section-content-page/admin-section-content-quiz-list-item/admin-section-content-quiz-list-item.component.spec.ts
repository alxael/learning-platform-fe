import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSectionContentQuizListItemComponent } from './admin-section-content-quiz-list-item.component';

describe('AdminSectionContentQuizListItemComponent', () => {
  let component: AdminSectionContentQuizListItemComponent;
  let fixture: ComponentFixture<AdminSectionContentQuizListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSectionContentQuizListItemComponent]
    });
    fixture = TestBed.createComponent(AdminSectionContentQuizListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
