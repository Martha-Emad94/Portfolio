import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./component/header/header.component";
import { HomeComponent } from "./component/home/home.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AboutComponent } from "./component/about/about.component";
import { SkillsComponent } from "./component/skills/skills.component";
import { ProjectsComponent } from "./component/projects/projects.component";
import { ContactComponent } from "./component/contact/contact.component";
import { FooterComponent } from "./component/footer/footer.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HomeComponent, CommonModule, AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  
}
