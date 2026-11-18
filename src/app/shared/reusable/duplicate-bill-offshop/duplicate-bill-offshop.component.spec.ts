import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DuplicateBillOffshopComponent } from './duplicate-bill-offshop.component';
describe('DuplicateBillOffshopComponent', () => {
  let component: DuplicateBillOffshopComponent;
  let fixture: ComponentFixture<DuplicateBillOffshopComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuplicateBillOffshopComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(DuplicateBillOffshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
