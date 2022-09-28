import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgSegmentComponent } from './svg-segment.component';

describe('SvgSegmentComponent', () => {
  let component: SvgSegmentComponent;
  let fixture: ComponentFixture<SvgSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgSegmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
