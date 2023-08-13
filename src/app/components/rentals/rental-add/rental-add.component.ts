import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { CarDetailDto } from 'src/app/models/complex-types/carDetailDto';
import { CreditCard } from 'src/app/models/creditCard';
import { Rental } from 'src/app/models/rental';
import { RentalAddService } from 'src/app/services/rental-add.service';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css'],
})
export class RentalAddComponent implements OnInit {
  rentDate = 'Rent start time';
  returnDate = 'Rent end time';
  CartItems: CartItem[] = [];
  cars: CarDetailDto[];

  totalDate: number;
  totalCar: number;

  today = new Date();
  min = new Date();

  rents: Rental[] = [];
  customerId = 1;

  creditCards: CreditCard = {
    cardBalance: 500,
    cardNumber: '1234567890123456',
    fullName: '1',
    validDate: new Date(),
    cvv: 1,
  };

  constructor(
    private rentalAddService: RentalAddService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.carList();
    this.totalCar = this.rentalAddService.list().length;
  }

  carList() {
    this.CartItems = this.rentalAddService.list();
  }
  setMin(date: Date) {
    this.min = new Date(date);
    this.min.setHours(this.min.getHours() + 12);
  }

  setTotalDate(CItems: CartItem[]) {
    let tempCart: CartItem[] = [];
    CItems.forEach((Item) => {
      let temp = this.rentalAddService.rentDate(
        Item.car,
        Item.dateControlStart.value,
        Item.dateControlEnd.value
      );

      if (temp.totalDate > 0) {
        tempCart.push(temp);
        this.totalDate = tempCart.length;
      }
    });
  }

  createRental(CItems: CartItem[]) {
    this.rentalAddService.createRental(
      CItems,
      this.customerId,
      this.creditCards
    );
    let t = this.rentalAddService.listRental();
    console.log(t);
  }
}
