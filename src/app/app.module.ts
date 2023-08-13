import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/cars/car/car.component';
import { NaviComponent } from './components/navi/navi.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import { RentalComponent } from './components/rentals/rental/rental.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarDetailsComponent } from './components/cars/car-details/car-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { RentalAddComponent } from './components/rentals/rental-add/rental-add.component';
import { CartSummaryComponent } from './components/rentals/cart-summary/cart-summary.component';
import { PaymentComponent } from './components/rentals/payment/payment.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { CarFilterPipePipe } from './pipes/car-filter-pipe.pipe';
import { ColorFilterPipePipe } from './pipes/color-filter-pipe.pipe';
import { BrandFilterPipePipe } from './pipes/brand-filter-pipe.pipe';
import { CarColorPipePipe } from './pipes/car-color-pipe.pipe';
import { CarBrandPipePipe } from './pipes/car-brand-pipe.pipe';

import { ToastrModule } from 'ngx-toastr';
import { NgxPaymentCardModule } from 'ngx-payment-card';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    NaviComponent,
    ColorComponent,
    BrandComponent,
    RentalComponent,
    CustomerComponent,
    CarDetailsComponent,
    FooterComponent,
    SidebarComponent,
    CarFilterPipePipe,
    ColorFilterPipePipe,
    BrandFilterPipePipe,
    RentalAddComponent,
    CartSummaryComponent,
    PaymentComponent,
    CarColorPipePipe,
    CarBrandPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
    BrowserAnimationsModule,

    ReactiveFormsModule,

    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,

    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatFileInputModule,
    NgxMatNativeDateModule,

    NgxPaymentCardModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
