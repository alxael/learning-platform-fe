import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSectionContentAddDialogComponent } from './admin-section-content-add-dialog.component';

describe('AdminSectionContentAddDialogComponent', () => {
  let component: AdminSectionContentAddDialogComponent;
  let fixture: ComponentFixture<AdminSectionContentAddDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSectionContentAddDialogComponent]
    });
    fixture = TestBed.createComponent(AdminSectionContentAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
