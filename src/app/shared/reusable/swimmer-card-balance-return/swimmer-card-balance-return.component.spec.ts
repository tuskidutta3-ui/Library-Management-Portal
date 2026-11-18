import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwimmerCardBalanceReturnComponent } from './swimmer-card-balance-return.component';
describe('SwimmerCardBalanceReturnComponent', () => {
  let component: SwimmerCardBalanceReturnComponent;
  let fixture: ComponentFixture<SwimmerCardBalanceReturnComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwimmerCardBalanceReturnComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(SwimmerCardBalanceReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
