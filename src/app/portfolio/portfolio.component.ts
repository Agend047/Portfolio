import { Component } from '@angular/core';
import { SharedService } from '../app.shared_services'

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  constructor(private sharedService: SharedService) { }


  // Helper function, to open link
  goToLink(url: string) {
    this.sharedService.openLink(url);
  }
}
