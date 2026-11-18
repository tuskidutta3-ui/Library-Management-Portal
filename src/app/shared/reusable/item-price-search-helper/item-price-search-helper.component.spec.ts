import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemPriceSearchHelperComponent } from './item-price-search-helper.component';
describe('ItemPriceSearchHelperComponent', () => {
  let component: ItemPriceSearchHelperComponent;
  let fixture: ComponentFixture<ItemPriceSearchHelperComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemPriceSearchHelperComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ItemPriceSearchHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
