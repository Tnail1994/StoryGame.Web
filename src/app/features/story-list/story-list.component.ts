import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { StoryService } from '../services/story.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-story-list',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './story-list.component.html',
  styleUrl: './story-list.component.css'
})
export class StoryListComponent {

  ongoingMode: string = 'ongoing';
  completedMode: string = 'completed';

  paramMapSub?: Subscription;
  mode: string | null = '';
  stories$?: Observable<string[]>;

  constructor(private route: ActivatedRoute, private storyService: StoryService) { }

  ngOnInit(): void {
    this.paramMapSub = this.route.paramMap.subscribe({
      next: (params) => {
        this.mode = params.get('mode');

        if (this.mode === this.ongoingMode) {
          this.stories$ = this.storyService.getStoryNames(false);
        }
        else {
          this.stories$ = this.storyService.getStoryNames(true);
        }
      }
    })
  }

}
