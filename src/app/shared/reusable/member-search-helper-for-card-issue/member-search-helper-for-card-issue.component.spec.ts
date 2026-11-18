import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MemberSearchHelperForCardIssueComponent } from './member-search-helper-for-card-issue.component';
describe('MemberSearchHelperForCardIssueComponent', () => {
  let component: MemberSearchHelperForCardIssueComponent;
  let fixture: ComponentFixture<MemberSearchHelperForCardIssueComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberSearchHelperForCardIssueComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(MemberSearchHelperForCardIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
