import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LockerForMemberLockerSearchHelperComponent } from './locker-for-member-locker-search-helper.component';
describe('LockerForMemberLockerSearchHelperComponent', () => {
  let component: LockerForMemberLockerSearchHelperComponent;
  let fixture: ComponentFixture<LockerForMemberLockerSearchHelperComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LockerForMemberLockerSearchHelperComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(LockerForMemberLockerSearchHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
