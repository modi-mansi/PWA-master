import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PostRoutingModule
  ]
})
export class PostModule { }
