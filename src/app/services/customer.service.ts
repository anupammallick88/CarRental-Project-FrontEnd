import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoints } from '../app.endpoints';
import { CustomerDetailDto } from '../models/complex-types/customerDetailDto';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = endpoints.apiUrl;
  constructor(private httpClient: HttpClient) {}
  getCustomersDetail(): Observable<ListResponseModel<CustomerDetailDto>> {
    let newPath = this.apiUrl + 'customers/getallcustomerDetails';
    return this.httpClient.get<ListResponseModel<CustomerDetailDto>>(newPath);
  }
}
