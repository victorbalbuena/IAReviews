import {Component, OnInit, Renderer2, ElementRef, ViewChild} from '@angular/core';
import html2canvas from "html2canvas";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // html element (equals to select an element with Vanilla JS)
  @ViewChild('canvas') canvas?: ElementRef;

  constructor(private renderer: Renderer2,
              private el: ElementRef) {}

  ngOnInit(): void {
  }

  captureReview() {
    // save html element in a variable to use later with html2canvas
    const element = this.canvas?.nativeElement;

    // html2canvas settings
    html2canvas((element), {
      scale: 2
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');

      const link = this.renderer.createElement('a');
      link.href = imgData;
      // file name
      link.download = 'review';
      link.click();
    })
  }

}
