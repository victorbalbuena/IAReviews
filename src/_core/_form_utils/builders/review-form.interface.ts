import { FormGroup } from '@angular/forms';
import { Review } from '../../_models/review';

export interface ReviewFormInterface {
  // @ts-ignore
  addControls(reviewForm: FormGroup, review: Review);

  // @ts-ignore
  removeControls(reviewForm: FormGroup, review: Review);
}
