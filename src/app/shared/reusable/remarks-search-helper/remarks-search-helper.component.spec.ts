import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemarksSearchHelperComponent } from './remarks-search-helper.component';
describe('RemarksSearchHelperComponent', () => {
  let component: RemarksSearchHelperComponent;
  let fixture: ComponentFixture<RemarksSearchHelperComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemarksSearchHelperComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(RemarksSearchHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
