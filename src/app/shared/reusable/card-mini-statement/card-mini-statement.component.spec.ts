import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardMiniStatementComponent } from './card-mini-statement.component';
describe('CardMiniStatementComponent', () => {
  let component: CardMiniStatementComponent;
  let fixture: ComponentFixture<CardMiniStatementComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMiniStatementComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CardMiniStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
