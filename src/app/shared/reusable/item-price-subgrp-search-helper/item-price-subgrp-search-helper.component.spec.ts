import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemPriceSubgrpSearchHelperComponent } from './item-price-subgrp-search-helper.component';
describe('ItemPriceSubgrpSearchHelperComponent', () => {
  let component: ItemPriceSubgrpSearchHelperComponent;
  let fixture: ComponentFixture<ItemPriceSubgrpSearchHelperComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemPriceSubgrpSearchHelperComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ItemPriceSubgrpSearchHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
