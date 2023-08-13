import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoints } from '../app.endpoints';
import { RentalDetailDto } from '../models/complex-types/rentalDetailDto';

import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = endpoints.apiUrl;
  constructor(private httpClient: HttpClient) {}

  getRentalsDetail(): Observable<ListResponseModel<RentalDetailDto>> {
    let newPath = this.apiUrl + 'rentals/getallrentaldetails';
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(newPath);
  }
}
