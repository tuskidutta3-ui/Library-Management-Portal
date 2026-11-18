import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MemberOpeningBalSearchHelperComponent } from './member-opening-bal-search-helper.component';
describe('MemberOpeningBalSearchHelperComponent', () => {
  let component: MemberOpeningBalSearchHelperComponent;
  let fixture: ComponentFixture<MemberOpeningBalSearchHelperComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberOpeningBalSearchHelperComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(MemberOpeningBalSearchHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
