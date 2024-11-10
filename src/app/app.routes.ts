import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { StoryListComponent } from './features/story-list/story-list.component';
import { StoryDetailsComponent } from './features/story-details/story-details.component';
import { CreateStoryComponent } from './features/create-story/create-story.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'story-list/:mode', component: StoryListComponent
    },
    {
        path: 'stories/:title', component: StoryDetailsComponent
    },

    {
        path: 'story/create', component: CreateStoryComponent
    },
];
