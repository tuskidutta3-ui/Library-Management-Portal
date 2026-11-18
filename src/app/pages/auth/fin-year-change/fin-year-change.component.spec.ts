import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinYearChangeComponent } from './fin-year-change.component';
describe('FinYearChangeComponent', () => {
  let component: FinYearChangeComponent;
  let fixture: ComponentFixture<FinYearChangeComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinYearChangeComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(FinYearChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
