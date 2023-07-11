import { TestBed } from '@angular/core/testing';

import { AdminSectionsService } from './admin-sections.service';

describe('AdminSectionsService', () => {
  let service: AdminSectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminSectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
