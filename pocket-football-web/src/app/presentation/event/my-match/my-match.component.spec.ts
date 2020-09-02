import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMatchComponent } from './my-match.component';

describe('EventComponent', () => {
  let component: MyMatchComponent;
  let fixture: ComponentFixture<MyMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
