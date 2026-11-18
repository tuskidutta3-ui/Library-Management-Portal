import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsernamePatternDialogueComponent } from './username-pattern-dialogue.component';
describe('UsernamePatternDialogueComponent', () => {
  let component: UsernamePatternDialogueComponent;
  let fixture: ComponentFixture<UsernamePatternDialogueComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsernamePatternDialogueComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(UsernamePatternDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
