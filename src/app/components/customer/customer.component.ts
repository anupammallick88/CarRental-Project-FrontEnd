import { Component, OnInit } from '@angular/core';
import { CustomerDetailDto } from 'src/app/models/complex-types/customerDetailDto';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  dataLoaded = false;
  customers: CustomerDetailDto[] = [];

  constructor(private custmerService: CustomerService) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.custmerService.getCustomersDetail().subscribe((response) => {
      this.customers = response.data;
      this.dataLoaded = true;
    });
  }
}
