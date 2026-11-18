import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardMiniStatementSwimmerComponent } from './card-mini-statement-swimmer.component';
describe('CardMiniStatementSwimmerComponent', () => {
  let component: CardMiniStatementSwimmerComponent;
  let fixture: ComponentFixture<CardMiniStatementSwimmerComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMiniStatementSwimmerComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CardMiniStatementSwimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
