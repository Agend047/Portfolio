import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { SharedService } from '../app.shared_services'


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  constructor(private sharedService: SharedService,) { }

  emailstring = "mailto:schneiderniklas@gmx.de?Subject=Hello&body=links:  %0D http://link1.com  %0D http://link1.com";

  //Helper function, to open link
  goToLink(url: string) {
    this.sharedService.openLink(url);
  }

  // Helper function, to scroll to target Area
  scrollTo(target: string) {
    this.sharedService.goToArea(target);
  }

}

