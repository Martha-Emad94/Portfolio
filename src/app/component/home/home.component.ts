import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('zoomPulse', [
      transition('* => *', [
        animate('1.5s 1s', keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(1.1)', offset: 0.5 }),
          style({ transform: 'scale(1)', offset: 1.0 }),
        ]))
      ])
    ])
  ]
})
export class HomeComponent {

  constructor() {}
}

