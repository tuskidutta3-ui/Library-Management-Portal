import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MemberSearchHelperForCardIssueSwimmerComponent } from './member-search-helper-for-card-issue-swimmer.component';
describe('MemberSearchHelperForCardIssueSwimmerComponent', () => {
  let component: MemberSearchHelperForCardIssueSwimmerComponent;
  let fixture: ComponentFixture<MemberSearchHelperForCardIssueSwimmerComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberSearchHelperForCardIssueSwimmerComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(MemberSearchHelperForCardIssueSwimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
