import { Component, OnInit } from '@angular/core';
import { MainService, SecurityService } from "security";

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'test-ngx';

  constructor(
    private securitySVC: SecurityService,
    private MainSVC: MainService
  ) {}

  ngOnInit(): void {
    this.MainSVC.getAllEnvConfig(environment);
    this.securitySVC.isAuthenticated();
  }
}
