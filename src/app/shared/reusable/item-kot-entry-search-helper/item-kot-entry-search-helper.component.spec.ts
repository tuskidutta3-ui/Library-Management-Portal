import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemKotEntrySearchHelperComponent } from './item-kot-entry-search-helper.component';
describe('ItemKotEntrySearchHelperComponent', () => {
  let component: ItemKotEntrySearchHelperComponent;
  let fixture: ComponentFixture<ItemKotEntrySearchHelperComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemKotEntrySearchHelperComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ItemKotEntrySearchHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
