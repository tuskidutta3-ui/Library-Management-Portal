import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DuplicateBillPrintingComponent } from './duplicate-bill-printing.component';
describe('DuplicateBillPrintingComponent', () => {
  let component: DuplicateBillPrintingComponent;
  let fixture: ComponentFixture<DuplicateBillPrintingComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuplicateBillPrintingComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(DuplicateBillPrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
