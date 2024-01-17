import { Component } from '@angular/core';
import { SharedService } from '../app.shared_services'


@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  constructor(private sharedService: SharedService,) { }


  // Helper function, to scroll to target Area
  scrollTo(target: string) {
    this.sharedService.goToArea(target);
  }

}
