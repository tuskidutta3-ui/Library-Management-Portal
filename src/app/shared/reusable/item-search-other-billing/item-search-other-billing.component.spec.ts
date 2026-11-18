import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemSearchOtherBillingComponent } from './item-search-other-billing.component';
describe('ItemSearchOtherBillingComponent', () => {
  let component: ItemSearchOtherBillingComponent;
  let fixture: ComponentFixture<ItemSearchOtherBillingComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemSearchOtherBillingComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ItemSearchOtherBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
