import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SvgRectComponent } from './svg-rect/svg-rect.component';
import { SvgSegmentComponent } from './svg-segment/svg-segment.component';

@NgModule({
  declarations: [AppComponent, SvgRectComponent, SvgSegmentComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
