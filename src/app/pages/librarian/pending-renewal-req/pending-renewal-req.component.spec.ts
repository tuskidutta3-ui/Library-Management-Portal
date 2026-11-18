import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PendingRenewalReqComponent } from './pending-renewal-req.component';
describe('PendingRenewalReqComponent', () => {
  let component: PendingRenewalReqComponent;
  let fixture: ComponentFixture<PendingRenewalReqComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingRenewalReqComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(PendingRenewalReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
