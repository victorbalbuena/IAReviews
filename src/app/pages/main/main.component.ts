import {Component, OnInit, Renderer2, ElementRef, ViewChild, OnDestroy} from '@angular/core';
import html2canvas from "html2canvas";
import {ReviewFormBuilder} from "../../../_core/_form_utils/builders/review-form-builder";
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";
import {Review} from "../../../_core/_models/review";
import {SubSink} from "subsink";
import {OpenaiService} from "../../services/openai.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [
    ReviewFormBuilder
  ]
})
export class MainComponent implements OnInit, OnDestroy {

  // html element (equals to select an element with Vanilla JS)
  @ViewChild('canvas') canvas?: ElementRef;

  private subSink = new SubSink();

  reviewForm!: FormGroup;
  review!: Review;
  finalReview?: string;
  isResponding?: boolean = false;

  constructor(private renderer: Renderer2,
              private el: ElementRef,
              private fb: FormBuilder,
              private reviewFormBuilder: ReviewFormBuilder,
              private openaiHttp: OpenaiService
  ) {
    this.review = new Review();

    this.reviewForm = this.fb.group([]);
    this.reviewFormBuilder.addControls(this.reviewForm, this.review);
  }

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

  sendReview() {
    if (this.reviewForm.valid) {
      this.isResponding = true;
      this.finalReview = '';
      this.review.name = this.name?.value;
      this.review.comments = this.comments?.value;

      this.subSink.add(
        this.openaiHttp.getReviewResponse(this.review)
          .subscribe((data) => {
            // @ts-ignore
            console.log(data.text);
            // @ts-ignore
            this.finalReview = data.text;
            this.isResponding = false;
          }, (error) => {
            console.log(error);
          })
      );
    } else {
      this.reviewForm.markAllAsTouched();
    }
  }

  get name() {
    return this.reviewForm.get('name');
  }

  get comments() {
    return this.reviewForm.get('comments');
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

}
