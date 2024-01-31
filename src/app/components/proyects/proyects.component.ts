import { Component, Input, OnInit } from '@angular/core';
import { ExperienceModel } from '../../models/experience.model';
import { ExperienceListService } from '../../services/experience-list.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.css'
})

export class ProyectsComponent implements OnInit {
  @Input() title : string = 'Proyects';

  experience: ExperienceModel[] = [];

  constructor(private experienceService : ExperienceListService) {};

  ngOnInit(): void {
      this.getExperienceList();
  }


  getExperienceList() : void {
    this.experienceService.getExperience().subscribe(experience => this.experience = experience);
  }
}
