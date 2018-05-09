import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddReview } from './add-review';

@NgModule({
  declarations: [
    AddReview,
  ],
  imports: [
    IonicPageModule.forChild(AddReview),
  ],
})
export class AddReviewPageModule {}
