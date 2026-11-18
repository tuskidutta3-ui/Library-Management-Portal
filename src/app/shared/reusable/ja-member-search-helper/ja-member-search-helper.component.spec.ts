import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JaMemberSearchHelperComponent } from './ja-member-search-helper.component';
describe('JaMemberSearchHelperComponent', () => {
  let component: JaMemberSearchHelperComponent;
  let fixture: ComponentFixture<JaMemberSearchHelperComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JaMemberSearchHelperComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(JaMemberSearchHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
