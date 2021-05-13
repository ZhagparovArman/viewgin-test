import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth-service.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  login: string;

  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo(){
     this.authService.getInfo().subscribe(data => this.login = data.login)
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
}

}
