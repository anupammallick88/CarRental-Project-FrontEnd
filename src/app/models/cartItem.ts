import { FormControl } from '@angular/forms';
import { CarDetailDto } from './complex-types/carDetailDto';
import { CreditCard } from './creditCard';

export class CartItem {
  car: CarDetailDto;
  dateControlStart = new FormControl(new Date());
  dateControlEnd = new FormControl(Date);
  totalDate: number = 0;
}
