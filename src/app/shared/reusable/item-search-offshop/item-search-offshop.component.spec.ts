import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemSearchOffshopComponent } from './item-search-offshop.component';
describe('ItemSearchOffshopComponent', () => {
  let component: ItemSearchOffshopComponent;
  let fixture: ComponentFixture<ItemSearchOffshopComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemSearchOffshopComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ItemSearchOffshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
