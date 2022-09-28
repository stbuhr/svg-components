import { Component, Input, OnInit } from '@angular/core';

export interface SegmentPart {
  importance: number;
}

export interface Segment {
  value: number;
  text: string;
  radius: number;
  startAngle: number;
  endAngle: number;
  parts: SegmentPart[];
}

export interface Point {
  x: number;
  y: number;
}

const lowColor = '#93bdff';
const middleColor = '#4381ff';
const highColor = '#054dc2';
const veryHighColor = '#001a7d';

export const EMPTY_PART: SegmentPart = {
  importance: 0,
};

@Component({
  selector: 'app-svg-segment',
  templateUrl: './svg-segment.component.svg',
  styleUrls: ['./svg-segment.component.scss'],
})
export class SvgSegmentComponent implements OnInit {
  @Input() width = 200;
  @Input() height = 200;

  cornerCount = 10;
  colors = [
    'rgba(0, 0, 0, 0)',
    lowColor,
    middleColor,
    highColor,
    veryHighColor,
  ];
  texts = [
    'der Begeisterer',
    'der Aktive',
    'der Koordinator',
    'der Experte',
    'der fachliche Vermittler',
    'der Teamplayer',
    'der Initiator',
    'der Unterstützer',
    'der Verantwortliche',
    'der ruhende Pol, das stille Vorbild',
  ];

  segments: Segment[] = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < this.cornerCount; i++) {
      const segment = this.initSegment(i, this.texts[i], 100);
      this.segments.push(segment);
    }

    this.segments[0].value = 2;
    this.segments[1].value = 2;
    this.segments[2].value = 1;
    this.segments[3].value = 1;
    this.segments[4].value = 2;
    this.segments[5].value = 4;
    this.segments[6].value = 3;
    this.segments[7].value = 3;
    this.segments[8].value = 1;
    this.segments[9].value = 2;
  }

  initSegment(index: number, text: string, radius: number): Segment {
    return {
      value: 0,
      text: text,
      radius: radius,
      startAngle: (index * 2 * Math.PI) / this.cornerCount,
      endAngle: ((index + 1) * 2 * Math.PI) / this.cornerCount,
      parts: [
        {
          ...EMPTY_PART,
          importance: 4,
        },
        {
          ...EMPTY_PART,
          importance: 3,
        },
        {
          ...EMPTY_PART,
          importance: 2,
        },
        {
          ...EMPTY_PART,
          importance: 1,
        },
      ],
    };
  }

  getPoint(radius: number, angle: number): Point {
    const x = Math.sin(angle) * radius;
    const y = -Math.cos(angle) * radius;
    return { x, y };
  }

  getPath(segment: Segment, part: SegmentPart): string {
    const radius = (segment.radius * part.importance) / 4;
    const firstPoint = this.getPoint(radius, segment.startAngle);
    const secondPoint = this.getPoint(radius, segment.endAngle);
    return `M 0 0 L ${firstPoint.x} ${firstPoint.y} L ${secondPoint.x} ${secondPoint.y} Z`;
  }

  getFillColor(segment: Segment, part: SegmentPart): string {
    if (segment.value < part.importance) {
      return 'rgba(0, 0, 0, 0)';
    }
    return this.colors[segment.value];
  }

  getTextX(segment: Segment): number {
    return (
      Math.sin((segment.startAngle + segment.endAngle) / 2) *
      (segment.radius + 20)
    );
  }

  getTextY(segment: Segment): number {
    return (
      -Math.cos((segment.startAngle + segment.endAngle) / 2) *
        (segment.radius + 20) +
      4
    );
  }

  highlight(part: SegmentPart) {
    // part.fillColor = 'rgb(0, 255, 0)';
  }
}
