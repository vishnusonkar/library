import { HttpClient, HttpEventType } from '@angular/common/http';
import { Inject, Injectable, OnInit } from '@angular/core';
import { Socket, io } from 'socket.io-client';

import { Observable } from 'rxjs';

// import { environment } from '../environment';

@Injectable({
  providedIn: 'root',
})
export class MainService implements OnInit {
  production: any;
  apiHost: any;
  apiPort: any;
  socketPort: any;
  loginWithPassword: any;
  httpUrl: any;
  hostWithReturnUrl:any
  urlPassAcctID:any;
  urlPassReturnfpath:any;
  constructor(
    private http: HttpClient
   
  ) {

  }
  ngOnInit(): void {}
  loginflag = false;
  logoutflag = false;
  b_acct_id: any;
  allAccounts = [];
  componentCode = {};
  selectedAccount = null;

  async getAllEnvConfig(object: {
    apiHost: string;
    apiPort: number;
    loginWithPassword: boolean;
    hostApp: any
  }) {
    this.apiHost = object.apiHost;
    this.apiPort = object.apiPort;
    this.loginWithPassword = object.loginWithPassword;
    this.hostWithReturnUrl = object.hostApp;
    this.httpUrl = this.apiHost + ':' + this.apiPort;
    console.log('SECURITY-API @ ' + this.httpUrl + ' is being used.');
  }

async getRetuenUrlWithAcctID(acct:Number,returnUrl:String){
  console.log('Url pass acct ID:', acct);
  
this.urlPassAcctID = acct;
this.urlPassReturnfpath= returnUrl;

}

  async getCurrentLegalEntity(party: any) {
    const resp = await this.http
      .get<any>(
        this.httpUrl + '/systemdata/legalentity/getcurrentlegalentity' + party
      )
      .toPromise()
      .then((res) => {
        return res;
      });
    return resp;
  }
  validatePhoneNumber(input_str: any) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(input_str);
  }
  validateEmail(input_str: any) {
    var re =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/im;
    return re.test(input_str);
  }
  async getAllCurrentAccoutns() {
    const resp = await this.http
      .get<any>(this.httpUrl + '/systemdata/legalentity/getcurrentAccounts')
      .toPromise()
      .then((res) => {
        return res;
      });
    //console.log(resp)
    return resp;
  }
  async loginERP(obj: any) {
    const resp = await this.http
      .post<any>(this.httpUrl + '/systemdata/authentication/login', obj)
      .toPromise()
      .then((res) => {
        return res;
      });
    return resp;
  }
  // async Gentoken(data:any) {
  // const resp = await this.http.post<any>(this.httpUrl + '/systemdata/authloginjwt/generateToken', data).toPromise().then(res => {
  //   return res;

  //   });
  // return resp;

  async generateTokens(data: any) {
    const resp = await this.http
      .post<any>(this.httpUrl + '/jwt/generateTokens', data)
      .toPromise()
      .then((res) => {
        return res;
      });
    return resp;
  }
  async verfiyTokens(obj: any) {
    const resp = await this.http
      .post<any>(this.httpUrl + '/jwt/VerifyTokens', obj)
      .toPromise()
      .then((res) => {
        return res;
      });
    return resp;
  }

  async getresourcebyrolecd(obj: any) {
    const resp = await this.http
      .get<any>(this.httpUrl + '/admin/resource/getresourcebyrolecd' + obj)
      .toPromise()
      .then((res) => {
        return res;
      });
    return resp;
  }
  async getaccountmodule(obj: any) {
    const resp = await this.http
      .get<any>(this.httpUrl + '/systemdata/legalentity/getaccountmodule' + obj)
      .toPromise()
      .then((res) => {
        return res;
      });
    return resp;
  }
  async getAllAssignedComponents(acct_id: any) {
    const resp = await this.http
      .get<any>(this.httpUrl + '/md/resource/getresourcebyrolecd' + acct_id)
      .toPromise()
      .then((res) => {
        return res;
      });
    return resp;
  }

  async getCurrentUserFromAdmin(obj: any) {
    const resp = await this.http
      .get<any>(this.httpUrl + '/admin/user/getcurrentuser' + obj)
      .toPromise()
      .then((res) => {
        return res;
      });
    return resp;
  }
  async createloginInfo(obj: any) {
    const resp = await this.http
      .post<any>(this.httpUrl + '/systemdata/loginInfo/createloginInfo', obj)
      .toPromise()
      .then((res) => {
        return res;
      });
    return resp;
  }

  async getCurrentUserFromMD(obj: any) {
    const resp = await this.http
      .get<any>(this.httpUrl + '/md/user/getcurrentuser' + obj)
      .toPromise()
      .then((res) => {
        return res;
      });
    return resp;
  }
  async sendMsg(mobile: any) {
    // var str = "https://2factor.in/API/V1/f5b33455-838a-11ea-9fa5-0200cd936042/SMS/" + mobile + "/" + otp + "/ERPUPDA"
    var str =
      'https://2factor.in/API/V1/' +
      this.api_key +
      '/SMS/' +
      mobile +
      '/AUTOGEN';
    const resp = await this.http
      .get<any>(str)
      .toPromise()
      .then((res) => {
        return res;
      });
    return resp;
  }

  api_key = 'c6504fdd-0ca9-11ed-9c12-0200cd936042';
  async verifyMsg(otp_entered_by_user: any, session_id: any) {
    var str =
      'https://2factor.in/API/V1/' +
      this.api_key +
      '/SMS/VERIFY/' +
      session_id +
      '/' +
      otp_entered_by_user;
    const resp = await this.http
      .get<any>(str)
      .toPromise()
      .then((res) => {
        return true;
      })
      .catch((err) => {
        return false;
      });
    return resp;
  }
}
