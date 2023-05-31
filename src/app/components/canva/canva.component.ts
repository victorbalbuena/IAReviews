import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-canva',
  templateUrl: './canva.component.html',
  styleUrls: ['./canva.component.css']
})
export class CanvaComponent implements OnInit {

  @Input()
  finalReview?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
