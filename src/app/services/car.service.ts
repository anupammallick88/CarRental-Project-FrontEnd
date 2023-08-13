import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoints } from '../app.endpoints';
import { CarDetailDto } from '../models/complex-types/carDetailDto';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = endpoints.apiUrl;
  constructor(private httpClient: HttpClient) {}

  getCarsDetail(): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'cars/getallcardetails';
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarsBrand(brandId: number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath =
      this.apiUrl + 'cars/getallcardetailsbybrand?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarsColor(colorId: number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath =
      this.apiUrl + 'cars/getallcardetailsbycolor?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarDetailById(carId: number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'cars/getbyid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
}
