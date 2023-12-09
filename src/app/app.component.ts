import { Component, HostListener, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { PricingService } from './pricing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  toggle = true;
  pricingLabel = 'Our Pricing';
  mobileView!: boolean;
  constructor(private pricingService: PricingService) {}
  ngOnInit(): void {
    this.onResize();
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log(window.innerWidth);
    if (window.innerWidth < 678) {
      this.mobileView = true;
    } else {
      this.mobileView = false;
    }
  }

  onToggle = () => {
    this.toggle = !this.toggle;
    this.pricingService.emitToggleValue(this.toggle);
  };
}
