import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MrpPerMlHelperComponent } from './mrp-per-ml-helper.component';
describe('MrpPerMlHelperComponent', () => {
  let component: MrpPerMlHelperComponent;
  let fixture: ComponentFixture<MrpPerMlHelperComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MrpPerMlHelperComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(MrpPerMlHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
