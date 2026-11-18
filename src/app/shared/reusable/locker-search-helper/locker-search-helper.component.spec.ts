import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LockerSearchHelperComponent } from './locker-search-helper.component';
describe('LockerSearchHelperComponent', () => {
  let component: LockerSearchHelperComponent;
  let fixture: ComponentFixture<LockerSearchHelperComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LockerSearchHelperComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(LockerSearchHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
