import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemGoodsReturnNoteSearchHelperComponent } from './item-goods-return-note-search-helper.component';
describe('ItemGoodsReturnNoteSearchHelperComponent', () => {
  let component: ItemGoodsReturnNoteSearchHelperComponent;
  let fixture: ComponentFixture<ItemGoodsReturnNoteSearchHelperComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemGoodsReturnNoteSearchHelperComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ItemGoodsReturnNoteSearchHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
