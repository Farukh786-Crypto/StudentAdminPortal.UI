import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gender } from '../models/api-models/gender.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenderService {
  private baseUrl = 'https://localhost:44398/api/';
  constructor(private httpClient: HttpClient) { }
  GenderList(): Observable<Gender[]> {
    return this.httpClient.get<Gender[]>(this.baseUrl + 'Genders');
  }
}
