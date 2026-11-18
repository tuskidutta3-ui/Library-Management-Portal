import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OfficeLoginComponent } from './office-login.component';
describe('OfficeLoginComponent', () => {
  let component: OfficeLoginComponent;
  let fixture: ComponentFixture<OfficeLoginComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeLoginComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(OfficeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
