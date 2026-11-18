import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddRegisterNewMemberComponent } from './add-register-new-member.component';
describe('AddRegisterNewMemberComponent', () => {
  let component: AddRegisterNewMemberComponent;
  let fixture: ComponentFixture<AddRegisterNewMemberComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRegisterNewMemberComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AddRegisterNewMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
