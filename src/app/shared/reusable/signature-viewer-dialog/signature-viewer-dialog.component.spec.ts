import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignatureViewerDialogComponent } from './signature-viewer-dialog.component';
describe('SignatureViewerDialogComponent', () => {
  let component: SignatureViewerDialogComponent;
  let fixture: ComponentFixture<SignatureViewerDialogComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignatureViewerDialogComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(SignatureViewerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
