import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CanteenGrnItemSearchHelperComponent } from './canteen-grn-item-search-helper.component';
describe('CanteenGrnItemSearchHelperComponent', () => {
  let component: CanteenGrnItemSearchHelperComponent;
  let fixture: ComponentFixture<CanteenGrnItemSearchHelperComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanteenGrnItemSearchHelperComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CanteenGrnItemSearchHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
