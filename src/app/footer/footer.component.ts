import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {


  emailstring = "mailto:schneiderniklas@gmx.de?Subject=Hello&body=links:  %0D http://link1.com  %0D http://link1.com";

  goToLink(url: string) {
    window.open(url, "_blank")
  }
}
