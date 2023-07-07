import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSectionsListItemComponent } from './admin-sections-list-item.component';

describe('AdminSectionsListItemComponent', () => {
  let component: AdminSectionsListItemComponent;
  let fixture: ComponentFixture<AdminSectionsListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSectionsListItemComponent]
    });
    fixture = TestBed.createComponent(AdminSectionsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
