import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillRegisterForRegenerateComponent } from './bill-register-for-regenerate.component';
describe('BillRegisterForRegenerateComponent', () => {
  let component: BillRegisterForRegenerateComponent;
  let fixture: ComponentFixture<BillRegisterForRegenerateComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillRegisterForRegenerateComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(BillRegisterForRegenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
