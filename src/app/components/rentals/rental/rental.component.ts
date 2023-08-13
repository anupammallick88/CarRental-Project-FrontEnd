import { Component, OnInit } from '@angular/core';
import { RentalDetailDto } from 'src/app/models/complex-types/rentalDetailDto';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  rentalDetails: RentalDetailDto[] = [];
  dataLoaded = false;

  constructor(private rentalService: RentalService) {}

  ngOnInit(): void {
    this.getRentals();
  }
  getRentals() {
    this.rentalService.getRentalsDetail().subscribe((response) => {
      this.rentalDetails = response.data;
      this.dataLoaded = true;
    });
  }
}
