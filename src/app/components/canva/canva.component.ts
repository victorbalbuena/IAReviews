import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-canva',
  templateUrl: './canva.component.html',
  styleUrls: ['./canva.component.css']
})
export class CanvaComponent implements OnInit {

  @Input()
  finalReview?: string;

  date = new Date();

  dateFormat = this.date.toUTCString().substring(5, 16);

  constructor() { }

  ngOnInit(): void {
  }

}
