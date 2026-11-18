import { TestBed } from '@angular/core/testing';
import { IlssUtilityService } from './ilss-utility.service';
describe('IlssUtilityService', () => {
  let service: IlssUtilityService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IlssUtilityService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
