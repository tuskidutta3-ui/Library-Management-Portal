import { TestBed } from '@angular/core/testing';
import { HomeShareService } from './home-share.service';
describe('HomeShareService', () => {
  let service: HomeShareService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeShareService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
