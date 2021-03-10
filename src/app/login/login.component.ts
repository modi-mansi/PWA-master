import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from '../services/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isDarkTheme: Observable<boolean>;
  constructor(private themeService: ThemeService, private router: Router) { }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
    localStorage.clear();
  }

  onLoginClick = () => {
    // dummy login token and user
    localStorage.setItem('access-token', btoa('mysecureandlongaccesstoken'));
    localStorage.setItem('user', JSON.stringify({ firstName: 'Ketan', lastName: 'Patel' }));
    this.router.navigate(['/home']);
  }

}
