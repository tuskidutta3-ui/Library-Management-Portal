import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPendingRenewalReqComponent } from './add-pending-renewal-req.component';
describe('AddPendingRenewalReqComponent', () => {
  let component: AddPendingRenewalReqComponent;
  let fixture: ComponentFixture<AddPendingRenewalReqComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPendingRenewalReqComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AddPendingRenewalReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
