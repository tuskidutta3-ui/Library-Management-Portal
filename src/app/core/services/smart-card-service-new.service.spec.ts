import { TestBed } from '@angular/core/testing';
import { SmartCardServiceNewService } from './smart-card-service-new.service';
describe('SmartCardServiceNewService', () => {
  let service: SmartCardServiceNewService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartCardServiceNewService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
