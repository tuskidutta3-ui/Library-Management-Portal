import { TestBed } from '@angular/core/testing';
import { DarkModeServicesService } from './dark-mode-services.service';
describe('DarkModeServicesService', () => {
  let service: DarkModeServicesService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkModeServicesService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
