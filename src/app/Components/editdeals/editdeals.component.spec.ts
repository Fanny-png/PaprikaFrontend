import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdealsComponent } from './editdeals.component';

describe('EditdealsComponent', () => {
  let component: EditdealsComponent;
  let fixture: ComponentFixture<EditdealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
