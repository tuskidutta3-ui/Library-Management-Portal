import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BevcoItemHelperComponent } from './bevco-item-helper.component';
describe('BevcoItemHelperComponent', () => {
  let component: BevcoItemHelperComponent;
  let fixture: ComponentFixture<BevcoItemHelperComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BevcoItemHelperComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(BevcoItemHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
