import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditMeditationModalComponent } from './edit-meditation-modal.component';

describe('EditMeditationModalComponent', () => {
  let component: EditMeditationModalComponent;
  let fixture: ComponentFixture<EditMeditationModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EditMeditationModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditMeditationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
