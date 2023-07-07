import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSectionAddDialogComponent } from './admin-section-add-dialog.component';

describe('AdminSectionAddDialogComponent', () => {
  let component: AdminSectionAddDialogComponent;
  let fixture: ComponentFixture<AdminSectionAddDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSectionAddDialogComponent]
    });
    fixture = TestBed.createComponent(AdminSectionAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
