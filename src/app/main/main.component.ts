import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  emailstring = "mailto:schneiderniklas@gmx.de?Subject=Hello&body=links:  %0D http://link1.com  %0D http://link1.com";

  goToLink(url: string) {
    window.open(url, "_blank")
  }

}

