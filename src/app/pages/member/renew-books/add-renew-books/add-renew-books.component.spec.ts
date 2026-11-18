import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddRenewBooksComponent } from './add-renew-books.component';
describe('AddRenewBooksComponent', () => {
  let component: AddRenewBooksComponent;
  let fixture: ComponentFixture<AddRenewBooksComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRenewBooksComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AddRenewBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
