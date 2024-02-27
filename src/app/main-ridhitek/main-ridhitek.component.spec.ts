import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRidhitekComponent } from './main-ridhitek.component';

describe('MainRidhitekComponent', () => {
  let component: MainRidhitekComponent;
  let fixture: ComponentFixture<MainRidhitekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainRidhitekComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainRidhitekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
