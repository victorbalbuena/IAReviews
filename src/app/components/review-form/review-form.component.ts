import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  @Input()
  reviewForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  get name () {
    return this.reviewForm?.get('name');
  }

  get comments () {
    return this.reviewForm?.get('comments');
  }

}
