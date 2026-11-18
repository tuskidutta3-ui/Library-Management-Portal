import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WhyRegisterComponent } from './why-register.component';
describe('WhyRegisterComponent', () => {
  let component: WhyRegisterComponent;
  let fixture: ComponentFixture<WhyRegisterComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyRegisterComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(WhyRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
