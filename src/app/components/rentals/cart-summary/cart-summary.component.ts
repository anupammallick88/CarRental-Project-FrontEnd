import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { CarDetailDto } from 'src/app/models/complex-types/carDetailDto';
import { RentalAddService } from 'src/app/services/rental-add.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent implements OnInit {
  CartItems: CartItem[] = [];
  constructor(
    private toastrService: ToastrService,
    private rentalAddService: RentalAddService
  ) {}

  ngOnInit(): void {
    this.carList();
  }

  carList() {
    this.CartItems = this.rentalAddService.list();
  }
  removeFromCart(car: CarDetailDto) {
    this.rentalAddService.removeFromCart(car);
    this.toastrService.warning(
      'The product has been Removed',
      car.carName + 'Removed'
    );
  }
}
