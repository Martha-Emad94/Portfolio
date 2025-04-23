import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', percentage: 90 },
    { name: 'React.js', percentage: 85 },
    { name: 'JavaScript/TypeScript', percentage: 95 },
    { name: 'HTML5 & CSS3', percentage: 95 },
    { name: 'Bootstrap', percentage: 90 },
    { name: 'REST APIs', percentage: 85 }
  ];
  transferableSkills = [
    'Problem Solving',
    'Teamwork (Agile)',
    'Attention to Detail',
    'Communication',
    'Leadership'
  ];
}
