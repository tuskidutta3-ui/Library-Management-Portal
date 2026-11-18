import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillConfirmBoxComponent } from './bill-confirm-box.component';
describe('BillConfirmBoxComponent', () => {
  let component: BillConfirmBoxComponent;
  let fixture: ComponentFixture<BillConfirmBoxComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillConfirmBoxComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(BillConfirmBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
