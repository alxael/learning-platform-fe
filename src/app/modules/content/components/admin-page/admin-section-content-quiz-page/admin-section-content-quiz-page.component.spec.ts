import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSectionContentQuizPageComponent } from './admin-section-content-quiz-page.component';

describe('AdminSectionContentQuizPageComponent', () => {
  let component: AdminSectionContentQuizPageComponent;
  let fixture: ComponentFixture<AdminSectionContentQuizPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSectionContentQuizPageComponent]
    });
    fixture = TestBed.createComponent(AdminSectionContentQuizPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
