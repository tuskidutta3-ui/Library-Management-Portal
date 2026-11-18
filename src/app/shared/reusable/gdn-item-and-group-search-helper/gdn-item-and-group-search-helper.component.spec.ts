import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GdnItemAndGroupSearchHelperComponent } from './gdn-item-and-group-search-helper.component';
describe('GdnItemAndGroupSearchHelperComponent', () => {
  let component: GdnItemAndGroupSearchHelperComponent;
  let fixture: ComponentFixture<GdnItemAndGroupSearchHelperComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GdnItemAndGroupSearchHelperComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(GdnItemAndGroupSearchHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
