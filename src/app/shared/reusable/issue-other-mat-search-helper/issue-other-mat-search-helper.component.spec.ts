import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IssueOtherMatSearchHelperComponent } from './issue-other-mat-search-helper.component';
describe('IssueOtherMatSearchHelperComponent', () => {
  let component: IssueOtherMatSearchHelperComponent;
  let fixture: ComponentFixture<IssueOtherMatSearchHelperComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssueOtherMatSearchHelperComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(IssueOtherMatSearchHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
