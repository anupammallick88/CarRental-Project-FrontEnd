import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoints } from '../app.endpoints';
import { CarImage } from '../models/carImages';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  apiUrl = endpoints.apiUrl;
  constructor(private httpClient: HttpClient) {}

  getCarImagesById(imageId: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + 'CarImages/getbyid?imageId=' + imageId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
