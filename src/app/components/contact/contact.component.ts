import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  mail:any="spainfo@contact.com";

  activeAccordionIndex: number | null = null;

  toggleAccordion(index: number) {
    if (this.activeAccordionIndex === index) {
      // Close the current panel
      this.activeAccordionIndex = null;
    } else {
      // Open the clicked panel and close others
      this.activeAccordionIndex = index;
    }
  }
}
