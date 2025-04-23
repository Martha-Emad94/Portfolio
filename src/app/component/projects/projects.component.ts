import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Shopping Project',
      category: 'Angular | E-Commerce',
      image: 'assets/images/shopping.png',
      link: 'https://github.com/Martha-Emad94/Shopping.git'
    },
    {
      title: 'Restaurant Menu',
      category: 'Angular | Material',
      image: 'assets/images/restaurant.png',
      link: 'https://github.com/Martha-Emad94/Menu-Of-Restaurant.git'
    },
    {
      title: 'User Dashboard',
      category: 'Angular | State Management',
      image: 'assets/images/dashboard.png',
      link: 'https://github.com/Martha-Emad94/user_dashboard.git'
    },
    {
      title: 'Movies App',
      category: 'React | Redux',
      image: 'assets/images/movies.png',
      link: 'https://github.com/Martha-Emad94/Movies-project.git'
    }
  ];

}
