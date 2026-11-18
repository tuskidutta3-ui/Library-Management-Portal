import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwimmerMemberSearchHelperComponent } from './swimmer-member-search-helper.component';
describe('SwimmerMemberSearchHelperComponent', () => {
  let component: SwimmerMemberSearchHelperComponent;
  let fixture: ComponentFixture<SwimmerMemberSearchHelperComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwimmerMemberSearchHelperComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(SwimmerMemberSearchHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
