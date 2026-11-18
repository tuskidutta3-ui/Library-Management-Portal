import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterNewMemberComponent } from './register-new-member.component';
describe('RegisterNewMemberComponent', () => {
  let component: RegisterNewMemberComponent;
  let fixture: ComponentFixture<RegisterNewMemberComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterNewMemberComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(RegisterNewMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
