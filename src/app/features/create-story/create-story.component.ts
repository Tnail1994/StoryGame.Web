import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CreateStoryRequest } from '../models/create-story-request';
import { StoryService } from '../services/story.service';

@Component({
  selector: 'app-create-story',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-story.component.html',
  styleUrl: './create-story.component.css'
})
export class CreateStoryComponent {
  model: CreateStoryRequest;
  createStorySubscribtion?: Subscription;

  constructor(private storyService: StoryService, private router: Router) {
    this.model = {
      title: '',
      topic: '',
      amountOfSentences: 5
    }
  }

  onFormSubmit(form: NgForm) {
    if (!form.valid)
      return;
    this.createStorySubscribtion = this.storyService.createStory(this.model).subscribe({
      next: (response) => {
        console.log("Submitting form was successful.");
        this.router.navigateByUrl('');
      },
      error: (error) => {
        console.error("Submitting form error.");
      }
    });
  }
}


