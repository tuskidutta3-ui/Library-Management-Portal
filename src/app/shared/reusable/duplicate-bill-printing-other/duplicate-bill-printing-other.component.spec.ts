import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DuplicateBillPrintingOtherComponent } from './duplicate-bill-printing-other.component';
describe('DuplicateBillPrintingOtherComponent', () => {
  let component: DuplicateBillPrintingOtherComponent;
  let fixture: ComponentFixture<DuplicateBillPrintingOtherComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuplicateBillPrintingOtherComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(DuplicateBillPrintingOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
