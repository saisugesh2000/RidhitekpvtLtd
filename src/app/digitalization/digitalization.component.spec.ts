import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalizationComponent } from './digitalization.component';

describe('DigitalizationComponent', () => {
  let component: DigitalizationComponent;
  let fixture: ComponentFixture<DigitalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DigitalizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigitalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
