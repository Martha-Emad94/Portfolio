import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { SkillsComponent } from './component/skills/skills.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:'', component:AppComponent},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'skill',component:SkillsComponent}
];
