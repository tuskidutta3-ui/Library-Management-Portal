import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllMembersSearchComponent } from './all-members-search.component';
describe('AllMembersSearchComponent', () => {
  let component: AllMembersSearchComponent;
  let fixture: ComponentFixture<AllMembersSearchComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllMembersSearchComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AllMembersSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
