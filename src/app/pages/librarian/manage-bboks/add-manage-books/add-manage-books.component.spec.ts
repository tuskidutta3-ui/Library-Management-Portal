import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddManageBooksComponent } from './add-manage-books.component';
describe('AddManageBooksComponent', () => {
  let component: AddManageBooksComponent;
  let fixture: ComponentFixture<AddManageBooksComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddManageBooksComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AddManageBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
