import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditRunModalComponent } from './edit-run-modal.component';

describe('EditRunModalComponent', () => {
  let component: EditRunModalComponent;
  let fixture: ComponentFixture<EditRunModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EditRunModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditRunModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
