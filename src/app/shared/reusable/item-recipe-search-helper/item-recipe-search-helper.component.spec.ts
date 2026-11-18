import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemRecipeSearchHelperComponent } from './item-recipe-search-helper.component';
describe('ItemRecipeSearchHelperComponent', () => {
  let component: ItemRecipeSearchHelperComponent;
  let fixture: ComponentFixture<ItemRecipeSearchHelperComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemRecipeSearchHelperComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ItemRecipeSearchHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
