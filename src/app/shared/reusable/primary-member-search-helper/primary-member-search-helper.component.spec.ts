import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimaryMemberSearchHelperComponent } from './primary-member-search-helper.component';
describe('PrimaryMemberSearchHelperComponent', () => {
  let component: PrimaryMemberSearchHelperComponent;
  let fixture: ComponentFixture<PrimaryMemberSearchHelperComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryMemberSearchHelperComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(PrimaryMemberSearchHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
