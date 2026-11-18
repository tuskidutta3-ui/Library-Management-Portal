import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OnlyPrimaryMemberSearchHelperComponent } from './only-primary-member-search-helper.component';
describe('OnlyPrimaryMemberSearchHelperComponent', () => {
  let component: OnlyPrimaryMemberSearchHelperComponent;
  let fixture: ComponentFixture<OnlyPrimaryMemberSearchHelperComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlyPrimaryMemberSearchHelperComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(OnlyPrimaryMemberSearchHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
