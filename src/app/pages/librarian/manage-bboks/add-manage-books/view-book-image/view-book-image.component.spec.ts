import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewBookImageComponent } from './view-book-image.component';
describe('ViewBookImageComponent', () => {
  let component: ViewBookImageComponent;
  let fixture: ComponentFixture<ViewBookImageComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewBookImageComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ViewBookImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
