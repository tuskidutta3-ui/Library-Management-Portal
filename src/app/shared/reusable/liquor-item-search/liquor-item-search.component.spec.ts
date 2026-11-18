import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LiquorItemSearchComponent } from './liquor-item-search.component';
describe('LiquorItemSearchComponent', () => {
  let component: LiquorItemSearchComponent;
  let fixture: ComponentFixture<LiquorItemSearchComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiquorItemSearchComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(LiquorItemSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
