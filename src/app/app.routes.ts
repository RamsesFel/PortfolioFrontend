import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'About', component: AboutMeComponent},
    {path: 'Project', component: ProjectsComponent},

];
