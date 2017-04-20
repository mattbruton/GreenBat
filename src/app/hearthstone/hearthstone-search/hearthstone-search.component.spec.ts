import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HearthstoneSearchComponent } from './hearthstone-search.component';

describe('HearthstoneSearchComponent', () => {
  let component: HearthstoneSearchComponent;
  let fixture: ComponentFixture<HearthstoneSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HearthstoneSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HearthstoneSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
