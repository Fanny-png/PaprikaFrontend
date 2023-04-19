import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedealsComponent } from './createdeals.component';

describe('CreatedealsComponent', () => {
  let component: CreatedealsComponent;
  let fixture: ComponentFixture<CreatedealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
