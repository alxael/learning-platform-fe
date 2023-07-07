import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSectionsPageComponent } from './admin-sections-page.component';

describe('AdminSectionsPageComponent', () => {
  let component: AdminSectionsPageComponent;
  let fixture: ComponentFixture<AdminSectionsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSectionsPageComponent]
    });
    fixture = TestBed.createComponent(AdminSectionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
