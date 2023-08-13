import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoints } from '../app.endpoints';
import { ListResponseModel } from '../models/ListResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  apiUrl = endpoints.apiUrl;
  constructor(private httpClient: HttpClient) {}

  pay(payment: any): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'rentals/add';

    return this.httpClient.post<ResponseModel>(newPath, payment);
  }
  getall(): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + 'rentals/getall';
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
}
