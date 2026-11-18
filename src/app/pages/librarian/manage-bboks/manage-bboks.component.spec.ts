import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageBboksComponent } from './manage-bboks.component';
describe('ManageBboksComponent', () => {
  let component: ManageBboksComponent;
  let fixture: ComponentFixture<ManageBboksComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageBboksComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ManageBboksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
