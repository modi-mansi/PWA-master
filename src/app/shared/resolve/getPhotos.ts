import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PhotosService } from 'src/app/services/api/photos.service';

@Injectable({
  providedIn: 'root'
})
export class GetPhotos implements Resolve<any> {
  constructor(private service: PhotosService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.getPhotos();
  }
}
