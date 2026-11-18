import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VoidBillForSwimmerComponent } from './void-bill-for-swimmer.component';
describe('VoidBillForSwimmerComponent', () => {
  let component: VoidBillForSwimmerComponent;
  let fixture: ComponentFixture<VoidBillForSwimmerComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoidBillForSwimmerComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(VoidBillForSwimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
