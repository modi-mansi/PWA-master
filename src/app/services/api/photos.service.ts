import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiBaseUrl } from 'src/app/shared/config';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhotos = (albumId: number = 1) => {
    return this.http.get(`${apiBaseUrl}/photos?albumId=${albumId}`);
  }
}
