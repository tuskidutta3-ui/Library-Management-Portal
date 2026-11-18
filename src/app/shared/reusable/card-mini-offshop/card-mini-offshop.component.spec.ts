import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardMiniOffshopComponent } from './card-mini-offshop.component';
describe('CardMiniOffshopComponent', () => {
  let component: CardMiniOffshopComponent;
  let fixture: ComponentFixture<CardMiniOffshopComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMiniOffshopComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CardMiniOffshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
