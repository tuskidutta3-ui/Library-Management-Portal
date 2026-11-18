import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DuplicateBillSwimmerComponent } from './duplicate-bill-swimmer.component';
describe('DuplicateBillSwimmerComponent', () => {
  let component: DuplicateBillSwimmerComponent;
  let fixture: ComponentFixture<DuplicateBillSwimmerComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuplicateBillSwimmerComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(DuplicateBillSwimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
