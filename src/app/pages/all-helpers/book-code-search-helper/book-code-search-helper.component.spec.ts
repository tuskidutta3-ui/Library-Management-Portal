import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookCodeSearchHelperComponent } from './book-code-search-helper.component';
describe('BookCodeSearchHelperComponent', () => {
  let component: BookCodeSearchHelperComponent;
  let fixture: ComponentFixture<BookCodeSearchHelperComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookCodeSearchHelperComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(BookCodeSearchHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
