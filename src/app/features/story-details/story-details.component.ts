import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Story } from '../models/story.model';
import { StoryService } from '../services/story.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-story-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './story-details.component.html',
  styleUrl: './story-details.component.css'
})
export class StoryDetailsComponent implements OnInit {

  story$?: Observable<Story>;
  paramMapSub: any;
  newSentence: string = '';
  title: string | null = null;

  constructor(private route: ActivatedRoute,
    private storyService: StoryService) { }

  ngOnInit(): void {

    this.paramMapSub = this.route.paramMap.subscribe({
      next: (params) => {
        this.title = params.get('title');
        if (this.title)
          this.story$ = this.storyService.getStory(this.title);
      }
    })
  }

  onSubmitSentence(newSentence: string) {
    if (this.title)
      this.story$ = this.storyService.addSentenceToStory(this.title, newSentence);
  }
}
