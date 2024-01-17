import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../app.shared_services'



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private sharedService: SharedService,) { }


  // Helper function, to scroll to target Area
  scrollTo(target: string) {
    this.sharedService.goToArea(target);
  }


}
