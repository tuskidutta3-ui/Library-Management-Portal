import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CancelBillConfirmComponent } from './cancel-bill-confirm.component';
describe('CancelBillConfirmComponent', () => {
  let component: CancelBillConfirmComponent;
  let fixture: ComponentFixture<CancelBillConfirmComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelBillConfirmComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CancelBillConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
