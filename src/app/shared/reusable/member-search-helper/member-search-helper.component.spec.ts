import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MemberSearchHelperComponent } from './member-search-helper.component';
describe('MemberSearchHelperComponent', () => {
  let component: MemberSearchHelperComponent;
  let fixture: ComponentFixture<MemberSearchHelperComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberSearchHelperComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(MemberSearchHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
