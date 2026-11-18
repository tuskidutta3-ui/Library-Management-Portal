import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwimmerMemberCardBalanceReturnSearchHelperComponent } from './swimmer-member-card-balance-return-search-helper.component';
describe('SwimmerMemberCardBalanceReturnSearchHelperComponent', () => {
  let component: SwimmerMemberCardBalanceReturnSearchHelperComponent;
  let fixture: ComponentFixture<SwimmerMemberCardBalanceReturnSearchHelperComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwimmerMemberCardBalanceReturnSearchHelperComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(SwimmerMemberCardBalanceReturnSearchHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
