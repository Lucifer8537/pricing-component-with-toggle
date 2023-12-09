import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PricingComponentComponent } from './pricing-component/pricing-component.component';
import { PricingService } from './pricing.service';

@NgModule({
  declarations: [AppComponent, PricingComponentComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [PricingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
