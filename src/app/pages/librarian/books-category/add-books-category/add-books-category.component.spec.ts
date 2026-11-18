import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddBooksCategoryComponent } from './add-books-category.component';
describe('AddBooksCategoryComponent', () => {
  let component: AddBooksCategoryComponent;
  let fixture: ComponentFixture<AddBooksCategoryComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBooksCategoryComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AddBooksCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
