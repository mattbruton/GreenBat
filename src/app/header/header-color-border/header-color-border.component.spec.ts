import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderColorBorderComponent } from './header-color-border.component';

describe('HeaderColorBorderComponent', () => {
  let component: HeaderColorBorderComponent;
  let fixture: ComponentFixture<HeaderColorBorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderColorBorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderColorBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
