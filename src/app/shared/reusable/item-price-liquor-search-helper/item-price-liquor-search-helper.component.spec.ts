import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemPriceLiquorSearchHelperComponent } from './item-price-liquor-search-helper.component';
describe('ItemPriceLiquorSearchHelperComponent', () => {
  let component: ItemPriceLiquorSearchHelperComponent;
  let fixture: ComponentFixture<ItemPriceLiquorSearchHelperComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemPriceLiquorSearchHelperComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ItemPriceLiquorSearchHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
