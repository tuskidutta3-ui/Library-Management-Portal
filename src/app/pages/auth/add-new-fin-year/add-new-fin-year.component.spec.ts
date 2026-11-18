import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNewFinYearComponent } from './add-new-fin-year.component';
describe('AddNewFinYearComponent', () => {
  let component: AddNewFinYearComponent;
  let fixture: ComponentFixture<AddNewFinYearComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewFinYearComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AddNewFinYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
