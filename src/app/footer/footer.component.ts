import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedService } from '../app.shared_services'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {


  emailstring = "mailto:schneiderniklas@gmx.de?Subject=Hello&body=links:  %0D http://link1.com  %0D http://link1.com";

  constructor(private sharedService: SharedService,) { }

  // Helper function, to scroll to target Area
  scrollTo(target: string) {
    this.sharedService.goToArea(target);
  }

  // Helper function, to open link
  goToLink(url: string) {
    this.sharedService.openLink(url);
  }
}
