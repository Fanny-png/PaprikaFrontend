import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBigPictureComponent } from './home-big-picture.component';

describe('HomeBigPictureComponent', () => {
  let component: HomeBigPictureComponent;
  let fixture: ComponentFixture<HomeBigPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBigPictureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBigPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
