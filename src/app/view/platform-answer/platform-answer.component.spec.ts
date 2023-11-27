import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformAnswerComponent } from './platform-answer.component';

describe('PlatformAnswerComponent', () => {
  let component: PlatformAnswerComponent;
  let fixture: ComponentFixture<PlatformAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlatformAnswerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlatformAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
