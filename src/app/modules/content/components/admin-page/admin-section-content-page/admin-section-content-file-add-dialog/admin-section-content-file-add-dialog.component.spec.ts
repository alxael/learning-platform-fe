import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSectionContentFileAddDialogComponent } from './admin-section-content-file-add-dialog.component';

describe('AdminSectionContentFileAddDialogComponent', () => {
  let component: AdminSectionContentFileAddDialogComponent;
  let fixture: ComponentFixture<AdminSectionContentFileAddDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSectionContentFileAddDialogComponent]
    });
    fixture = TestBed.createComponent(AdminSectionContentFileAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
