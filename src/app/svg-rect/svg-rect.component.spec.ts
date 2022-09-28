import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgRectComponent } from './svg-rect.component';

describe('SvgRectComponent', () => {
  let component: SvgRectComponent;
  let fixture: ComponentFixture<SvgRectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgRectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgRectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
