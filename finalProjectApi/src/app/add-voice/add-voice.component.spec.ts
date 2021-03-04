import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVoiceComponent } from './add-voice.component';

describe('AddVoiceComponent', () => {
  let component: AddVoiceComponent;
  let fixture: ComponentFixture<AddVoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
