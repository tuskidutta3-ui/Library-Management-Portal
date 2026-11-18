import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddRequestBooksComponent } from './add-request-books.component';
describe('AddRequestBooksComponent', () => {
  let component: AddRequestBooksComponent;
  let fixture: ComponentFixture<AddRequestBooksComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRequestBooksComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AddRequestBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
