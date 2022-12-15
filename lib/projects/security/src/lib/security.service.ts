import { ActivatedRoute, Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  param_jwt: any;
  module_index: any;
  hostWithReturnUrls: any;
  currentOrigin: any;
  fpath: any;
  constructor(private router: Router, private mainSVC: MainService) {}

  async isAuthenticated() {
    this.hostWithReturnUrls = this.mainSVC.hostWithReturnUrl;
    this.currentOrigin = location.protocol + '//' + location.hostname;
    console.table(this.hostWithReturnUrls);
    this.getHostFpath();
    const urlSearchParams = new URLSearchParams(window.location.search);
    this.param_jwt = urlSearchParams.get('id');
    this.module_index = urlSearchParams.get('fpath');

    if (this.param_jwt == undefined || this.param_jwt == null) {
      if (
        sessionStorage.getItem('svm_jwt') == undefined ||
        sessionStorage.getItem('svm_jwt') == null
      ) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['./' + this.fpath]);
      }
    } else {
      var obj = { jwt: this.param_jwt };

      var resp = await this.mainSVC.verfiyTokens(obj);

      if (resp['error'] == false) {
        sessionStorage.setItem('erpUser', JSON.stringify(resp['erpUser']));
        sessionStorage.setItem('svm_jwt', JSON.stringify(resp['jwt']));

        if (this.module_index == undefined || this.module_index == null) {
          this.router.navigate(['./' + this.fpath]);
        } else {
          if (resp['erpUser']['b_acct_id'] == 0) {
            this.router.navigate(['./' + this.module_index]);
          } else {
            this.router.navigate(['./' + this.module_index]);
          }
        }
      } else {
        Swal.fire('Error...', resp['message'], 'error');
        this.router.navigate(['/login']);
      }
    }
  }

  getHostFpath() {
    for (const hostapp of this.hostWithReturnUrls) {
      if (this.currentOrigin == hostapp['host']) {
        this.fpath = hostapp['fpath'];
      }
    }
  }
}
