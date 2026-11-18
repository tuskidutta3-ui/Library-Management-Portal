import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OtherItemSearchComponent } from './other-item-search.component';
describe('OtherItemSearchComponent', () => {
  let component: OtherItemSearchComponent;
  let fixture: ComponentFixture<OtherItemSearchComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherItemSearchComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(OtherItemSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
