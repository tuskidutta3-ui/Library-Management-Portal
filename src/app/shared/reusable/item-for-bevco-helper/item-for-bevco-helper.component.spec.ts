import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemForBevcoHelperComponent } from './item-for-bevco-helper.component';
describe('ItemForBevcoHelperComponent', () => {
  let component: ItemForBevcoHelperComponent;
  let fixture: ComponentFixture<ItemForBevcoHelperComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemForBevcoHelperComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ItemForBevcoHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
