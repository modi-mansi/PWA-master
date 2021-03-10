import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { LoginComponent } from './login/login.component';
import { GetPhotos } from './shared/resolve/getPhotos';
import { AuthGuard } from './shared/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
        resolve: {
          photos: GetPhotos
        }
      },
      {
        path: 'posts',
        loadChildren: './post/post.module#PostModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'users',
        loadChildren: './user/user.module#UserModule',
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
