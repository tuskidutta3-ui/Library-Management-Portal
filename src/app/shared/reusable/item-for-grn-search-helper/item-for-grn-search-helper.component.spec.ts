import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemForGrnSearchHelperComponent } from './item-for-grn-search-helper.component';
describe('ItemForGrnSearchHelperComponent', () => {
  let component: ItemForGrnSearchHelperComponent;
  let fixture: ComponentFixture<ItemForGrnSearchHelperComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemForGrnSearchHelperComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ItemForGrnSearchHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
