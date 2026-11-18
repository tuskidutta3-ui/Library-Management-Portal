import { TestBed } from '@angular/core/testing';
import { LibrarianDashboardService } from './librarian-dashboard.service';
describe('LibrarianDashboardService', () => {
  let service: LibrarianDashboardService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrarianDashboardService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
