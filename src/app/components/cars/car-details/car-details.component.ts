import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { endpoints } from 'src/app/app.endpoints';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImages';
import { CarDetailDto } from 'src/app/models/complex-types/carDetailDto';
import { CarDetailsService } from 'src/app/services/car-details.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { RentalAddService } from 'src/app/services/rental-add.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent implements OnInit {
  carImages: CarImage[] = [];
  carDetails: CarDetailDto;
  imageUrl = endpoints.staticFilesUrl;

  dataLoaded = false;
  currentCars: CarDetailDto[];

  constructor(
    private carDetailsService: CarDetailsService,
    private activatedRoute: ActivatedRoute,
    private getCarImages: CarImageService,
    private rentalAddService: RentalAddService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getcardetailbyid(params['carId']);
        this.getImagesById(params['carId']);
      }
    });
  }
  getcardetailbyid(carId: number) {
    this.carDetailsService.getCarDetailsById(carId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getImagesById(imageId: number) {
    this.carDetailsService.getImagesById(imageId).subscribe((response) => {
      this.carImages = response.data;
    });
  }
  setData(car: CarDetailDto) {
    let item = this.rentalAddService
      .list()
      .find((c) => c.car.carId == car.carId);

    if (!item) {
      this.rentalAddService.addToCart(car);
      this.toastrService.success('Vehicle added to cart', car.carName);
    } else {
      this.toastrService.error('A vehicle can be rented once.');
    }
  }
}
