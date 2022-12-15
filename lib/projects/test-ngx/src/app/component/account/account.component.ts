import { Component, OnInit } from '@angular/core';

import { MainService } from 'security';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  partyNmae:any;
  constructor(private MainSVC: MainService, private router: Router) {}

  ngOnInit(): void {}
  myFunction() {
    this.partyNmae='vishnu'
    this.MainSVC.getRetuenUrlWithAcctID(8, 'publi/index');
    this.router.navigate(['/login']);
  }
}
