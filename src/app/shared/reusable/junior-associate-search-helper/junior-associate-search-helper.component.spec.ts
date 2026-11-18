import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuniorAssociateSearchHelperComponent } from './junior-associate-search-helper.component';
describe('JuniorAssociateSearchHelperComponent', () => {
  let component: JuniorAssociateSearchHelperComponent;
  let fixture: ComponentFixture<JuniorAssociateSearchHelperComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuniorAssociateSearchHelperComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(JuniorAssociateSearchHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
