import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationColumnComponent } from './navigation-column.component';

describe('NavigationColumnComponent', () => {
  let component: NavigationColumnComponent;
  let fixture: ComponentFixture<NavigationColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationColumnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
