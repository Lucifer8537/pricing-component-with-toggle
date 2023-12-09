import { Component, OnInit } from '@angular/core';
import { PricingService } from '../pricing.service';

interface pricingStructure {
  type: string;
  amount: string;
  storage: string;
  users: string;
  send: string;
  selected: boolean;
}

@Component({
  selector: 'app-pricing-component',
  templateUrl: './pricing-component.component.html',
  styleUrls: ['./pricing-component.component.css'],
})
export class PricingComponentComponent implements OnInit {
  pricing: pricingStructure[] = [
    {
      type: 'Basic',
      amount: '19.99',
      storage: '500 GB ',
      users: '2',
      send: '3 GB',
      selected: false,
    },
    {
      type: 'Professional',
      amount: '24.99',
      storage: '1 TB ',
      users: '5',
      send: '10 GB',
      selected: true,
    },
    {
      type: 'Master',
      amount: '39.99',
      storage: '2 TB ',
      users: '10',
      send: '20 GB',
      selected: false,
    },
  ];
  currency = '$';
  storageTitle = 'Storage';
  userTitle = ' Users Allowed';
  sendTitle = 'Send up to ';
  btnTitle = 'LEARN MORE';
  toggle = true;

  constructor(private pricingService: PricingService) {}

  ngOnInit(): void {
    this.pricingService.toggleValue.subscribe((val) => {
      if (val) {
        this.getMonthly();
      } else {
        this.getYearly();
      }
    });
  }

  getMonthly = () => {
    this.pricing.forEach((price) => {
      if (price.type === 'Basic') {
        price.amount = '19.99';
      } else if (price.type === 'Professional') {
        price.amount = '24.99';
      } else {
        price.amount = '39.99';
      }
    });
  };

  getYearly = () => {
    this.pricing.forEach((price) => {
      if (price.type === 'Basic') {
        price.amount = '199.99';
      } else if (price.type === 'Professional') {
        price.amount = '249.99';
      } else {
        price.amount = '399.99';
      }
    });
  };
}
