import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuspenseMemberCodeComponent } from './suspense-member-code.component';
describe('SuspenseMemberCodeComponent', () => {
  let component: SuspenseMemberCodeComponent;
  let fixture: ComponentFixture<SuspenseMemberCodeComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuspenseMemberCodeComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(SuspenseMemberCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
