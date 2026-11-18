import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemGodownToRestaurantComponent } from './item-godown-to-restaurant.component';
describe('ItemGodownToRestaurantComponent', () => {
  let component: ItemGodownToRestaurantComponent;
  let fixture: ComponentFixture<ItemGodownToRestaurantComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemGodownToRestaurantComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ItemGodownToRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
