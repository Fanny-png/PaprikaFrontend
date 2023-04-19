import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NyheterComponent } from './nyheter.component';

describe('NyheterComponent', () => {
  let component: NyheterComponent;
  let fixture: ComponentFixture<NyheterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NyheterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NyheterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
