import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ReviewFormInterface } from "./review-form.interface";
import { Review } from "../../_models/review";

@Injectable()
export class ReviewFormBuilder implements ReviewFormInterface {

  constructor(private fb: FormBuilder) {
  }

  addControls(reviewForm: FormGroup, review: Review) {
    reviewForm.addControl(
      'name',
      this.fb.control(review.name, [Validators.required])
    );

    reviewForm.addControl(
      'comments',
      this.fb.control(review.comments, [Validators.required])
    );
  }

  disableForm(reviewForm: FormGroup) {
    reviewForm.controls['name'].disable();
    reviewForm.controls['comments'].disable();
  }

  enableForm(reviewForm: FormGroup) {
    reviewForm.controls['name'].enable();
    reviewForm.controls['comments'].enable();
  }

  setValues(reviewForm: FormGroup, review: Review) {
    reviewForm.controls['name'].setValue(review.name);
    reviewForm.controls['comments'].setValue(review.comments);
  }

  removeControls(reviewForm: FormGroup, review: Review) {
    reviewForm.removeControl('name');
    reviewForm.removeControl('comments');
  }

}
