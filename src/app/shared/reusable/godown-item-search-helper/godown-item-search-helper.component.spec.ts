import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GodownItemSearchHelperComponent } from './godown-item-search-helper.component';
describe('GodownItemSearchHelperComponent', () => {
  let component: GodownItemSearchHelperComponent;
  let fixture: ComponentFixture<GodownItemSearchHelperComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GodownItemSearchHelperComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(GodownItemSearchHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
