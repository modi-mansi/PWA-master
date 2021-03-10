import { Component, OnInit } from '@angular/core';
import { Photos } from '../shared/models/photos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  panelOpenState: boolean;
  photos: Photos[];
  constructor(private route: ActivatedRoute) {
    this.photos = this.route.snapshot.data[`photos`];
  }

  ngOnInit() {
    console.log('photos => ', this.photos);
  }

}
