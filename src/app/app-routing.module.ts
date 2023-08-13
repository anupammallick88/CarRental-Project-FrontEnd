import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailsComponent } from './components/cars/car-details/car-details.component';
import { CarComponent } from './components/cars/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { PaymentComponent } from './components/rentals/payment/payment.component';
import { RentalAddComponent } from './components/rentals/rental-add/rental-add.component';
import { RentalComponent } from './components/rentals/rental/rental.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/cars' },
  { path: 'cars', component: CarComponent },
  { path: 'brand/:brandId', component: CarComponent },
  { path: 'color/:colorId', component: CarComponent },

  { path: 'carDetail/:carId', component: CarDetailsComponent },

  { path: 'rentals', component: RentalComponent },

  { path: 'rental-add', component: RentalAddComponent },

  { path: 'customers', component: CustomerComponent },

  { path: 'colors', component: ColorComponent },

  { path: 'brands', component: BrandComponent },

  { path: 'payment', component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
