import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemSearchHelperComponent } from './item-search-helper.component';
describe('ItemSearchHelperComponent', () => {
  let component: ItemSearchHelperComponent;
  let fixture: ComponentFixture<ItemSearchHelperComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemSearchHelperComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ItemSearchHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
