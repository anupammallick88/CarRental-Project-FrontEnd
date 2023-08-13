import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoints } from '../app.endpoints';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { CarDetailDto } from '../models/complex-types/carDetailDto';
import { CreditCard } from '../models/creditCard';
import { Rental } from '../models/rental';
import { RentalItems } from '../models/rentalItem';

@Injectable({
  providedIn: 'root',
})
export class RentalAddService {
  apiUrl = endpoints.apiUrl;
  currentCar: CarDetailDto[];
  nullCar: CarDetailDto[];
  totalDate: number;
  constructor() {}

  addToCart(car: CarDetailDto) {
    let cartItem = new CartItem();
    cartItem.car = car;
    CartItems.push(cartItem);
  }

  rentDate(car: CarDetailDto, dateStart: number, dateEnd: number) {
    let item = CartItems.find((c) => c.car.carId === car.carId);
    let temp = (dateEnd - dateStart) / 86400000;
    item.totalDate = Math.round(temp);

    return item;
  }

  list(): CartItem[] {
    return CartItems;
  }
  removeFromCart(car: CarDetailDto) {
    let item: CartItem = CartItems.find((c) => c.car.carId === car.carId);
    CartItems.splice(CartItems.indexOf(item), 1);
  }

  createRental(CItems?: CartItem[], customerId?: number, card?: CreditCard) {
    CItems.forEach((cart) => {
      let rent: Rental = {
        carId: cart.car.carId,
        rentDate: cart.dateControlStart.value.toJSON(),
        returnDate: cart.dateControlEnd.value.toJSON(),
        customerId: customerId,
      };
      RentalItems.forEach((item) => {
        if (item.carId == cart.car.carId) {
          let index = RentalItems.indexOf(item);
          RentalItems.splice(index, 1);
        }
      });

      RentalItems.push(rent);
    });
  }
  listRental(): Rental[] {
    return RentalItems;
  }
}
