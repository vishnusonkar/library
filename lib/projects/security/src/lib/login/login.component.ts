import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// import { GoogleLoginProvider } from 'angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { MainService } from '../main.service';
// import { NgxSpinnerService } from 'ngx-spinner';

// import { SocialAuthService } from 'angularx-social-login';
import Swal from 'sweetalert2';
enum CheckBoxType {
  APPLY_FOR_JOB,
  MODIFY_A_JOB,
  NONE,
}
declare var $: any;

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private mainService: MainService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  check_box_type = CheckBoxType;
  isChecked: CheckBoxType = 0;
  accountlist: Array<any> = [];
  b_acct_id: any;
  legalentityrecord: any;
  select_acct: boolean = false;
  openOTP: boolean = false;
  userdetails = {
    phone_no: undefined,
    password: '',
    email: undefined,
    verify_method: '',
  };

  jwtToken: any;
  parms_acct_id: any;

  urlParams: any;
  assigned_user_modules: [] | any;
  login = {
    module_cd: '',
    role_cd: '',
    assigned_component: {},
    party_name: '',
    assigned_product_cd: '',
    user_id: '',
    contact_email: '',
    phone_no: '',
    ident_verify_secret: '',
    party_dob: '',
    party_type:''
  };
  error_flag1: any;
  selectedaccount: any;

  party_name: any;
  assigned_User_Roles: [] | any;
  allComponentCode: Array<any> = [];
  AllUserRole: [] | any;
  product_cd: [] | any;
  legal_mobile_no: any;
  audit_info_obj = {
    user_id: '',
    login_time: null,
    login_ip: null,
    login_browser: null,
    latitude: null,
    longitude: null,
    active_from_time: null,
    logout_time: null,
    login_type: 'ONLOAD',
    status: 'NA',
    login_id: undefined,
    password: null,
    message: 'Login Auth...',
  };
  otpuser = {
    mobile_number: '',
    otp_no: '',
  };
  otp_flag = false;
  ipAddress: any;
  browser: any;
  date: any;
  lat: any;
  lng: any;
  zoom: any;
  session_id: any;
  loginpass_flag = false;
  verfiy_token_obj = { authtoken: '' };
  solnHostUrl: any;
  pubHostUrl: any;
  hostWithReturnUrls: any;
  currentOrigin: any;
  urlPassAcctID: any;
  urlPassReturnfpath: any;
  fpath: any;
  ngOnInit(): void {
    sessionStorage.removeItem('erpUser');
    sessionStorage.removeItem('svm_jwt');
    this.currentOrigin = location.protocol + '//' + location.hostname;
    this.loginpass_flag = this.mainService.loginWithPassword;
    this.hostWithReturnUrls = this.mainService.hostWithReturnUrl;
    this.getHostFpath();
    this.urlPassAcctID = this.mainService.urlPassAcctID;
    this.urlPassReturnfpath = this.mainService.urlPassReturnfpath;
  }
  getHostFpath() {
    for (const hostapp of this.hostWithReturnUrls) {
      if (hostapp['name'] == 'solnAdmin') {
        this.solnHostUrl = hostapp['host'];
      }
      if (hostapp['name'] == 'erppublic') {
        this.pubHostUrl = hostapp['host'];
      }
      if (this.currentOrigin == hostapp['host']) {
        this.fpath = hostapp['fpath'];
      }
    }
  }

  // user ip address
  IPAddressofUser() {
    this.http
      .get('https://api.ipify.org/?format=json')
      .subscribe((res: any) => {
        this.ipAddress = res.ip;
        this.audit_info_obj['login_ip'] = this.ipAddress;
      });
  }

  //list of browser name
  public UserBrowserName() {
    const agent = window.navigator.userAgent.toLowerCase();
    switch (true) {
      case agent.indexOf('edge') > -1:
        return 'edge';
      case agent.indexOf('opr') > -1 && !!(<any>window).opr:
        return 'opera';
      case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
        return 'chrome';
      case agent.indexOf('trident') > -1:
        return 'ie';
      case agent.indexOf('firefox') > -1:
        return 'firefox';
      case agent.indexOf('safari') > -1:
        return 'safari';
      default:
        return 'other';
    }
  }

  // user loaction
  geoLocation() {
    var pos;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 16;
        this.audit_info_obj['latitude'] = this.lat;
        this.audit_info_obj['longitude'] = this.lng;
      });
    } else {
      alert('Browser Does`t Supported');
    }
  }

  //get login time
  async ngAfterContentInit() {
    setTimeout(async () => {
      await this.geoLocation();
    }, 500);
    setTimeout(async () => {
      await this.IPAddressofUser();
    }, 500);

    //browser set

    this.browser = await this.UserBrowserName();
    this.audit_info_obj['login_browser'] = this.browser;

    //active time set
    var current = new Date();
    this.date = current.toLocaleString();
    this.audit_info_obj['active_from_time'] = this.date;
    setTimeout(async () => {
      await this.audit_insert(this.audit_info_obj);
    }, 3000);
  }

  selectCheckBox(targetType: CheckBoxType) {
    // If the checkbox was already checked, clear the currentlyChecked variable
    if (this.isChecked === targetType) {
      this.isChecked = CheckBoxType.NONE;
      return;
    }
    this.isChecked = targetType;
  }

  //Details of employee
  async getCurrentLegalEntity() {
    var party_details = {
      b_acct_id: '',
      phone_no: undefined,
      contact_email: undefined,
    };
    party_details['b_acct_id'] = this.parms_acct_id['acct_id'];
    party_details['phone_no'] = this.userdetails['phone_no'];
    party_details['contact_email'] = this.userdetails['email'];
    var resp = await this.mainService.getCurrentLegalEntity(
      JSON.stringify(party_details)
    );
    if (resp['error'] == false) {
      this.legalentityrecord = resp.data;
    } else {
    }
  }

  async selectOneAccount() {
    this.selectedaccount = this.accountlist[0];
    this.b_acct_id = this.accountlist[0].b_acct_id;
    await this.SubmitAccount();
  }

  async selectMultiAccount() {
    this.select_acct = true;
  }

  //selectbox  of accountlist
  changeaccount(b_acct_id: any) {
    for (var i = 0; i < this.accountlist.length; i++) {
      if (this.accountlist[i]['b_acct_id'] == b_acct_id) {
        this.selectedaccount = this.accountlist[i];
      }
    }
  }

  //submit of choose account
  async SubmitAccount() {
    await this.getAccountModule(this.b_acct_id);
    this.login = this.selectedaccount;
    await this.getUserRoleInfo();
  }

  //Login to Password Process
  async submit() {
    //check login email/phone
    if (this.isChecked == 0 || this.isChecked == 1) {
      if (this.userdetails['password'] == '') {
        Swal.fire('Error', 'Please enter Password', 'error');
        return;
      }
      var mobile_valid = this.mainService.validatePhoneNumber(
        this.userdetails['phone_no']
      );
      var email_valid = this.mainService.validateEmail(
        this.userdetails['email']
      );

      this.audit_info_obj['login_type'] = 'PASSWORD';
      this.audit_info_obj['login_id'] = this.userdetails['phone_no'];
      this.audit_info_obj['password'] = null;

      //check mobile login
      if (mobile_valid == true && this.isChecked == 0) {
        this.userdetails['email'] = undefined;
        var userloginmob = {
          ident_to_verify: undefined,
          ident_verify_method: '',
          ident_verify_secret: '',
        };
        userloginmob['ident_to_verify'] = this.userdetails['phone_no'];
        userloginmob['ident_verify_method'] = 'P-KEY';
        userloginmob['ident_verify_secret'] = this.userdetails['password'];
        var resp = await this.mainService.loginERP(userloginmob);

        if (resp['error'] == false && resp['data'].length > 0) {
          if (this.urlPassAcctID == undefined || null || '') {
            if (this.currentOrigin != this.solnHostUrl) {
              resp['data']
                .filter((x: any) => x.b_acct_id === 0)
                .forEach((x: any) =>
                  resp['data'].splice(resp['data'].indexOf(x), 1)
                );
            } else {
              resp['data']
                .filter((x: any) => x.b_acct_id != 0)
                .forEach((x: any) =>
                  resp['data'].splice(resp['data'].indexOf(x), 1)
                );
            }
            if (resp['data'].length == 0) {
              if (this.currentOrigin == this.solnHostUrl) {
                Swal.fire(
                  'Error',
                  'The Solution Admin is not accessible to you',
                  'error'
                );
                return;
              } else {
                Swal.fire(
                  'Error',
                  'The application you are trying to access is not accessible to you',
                  'error'
                );
                return;
              }
            }
            this.accountlist = resp['data'];
            for (let i = 0; i < this.accountlist.length; i++) {
              this.accountlist[i]['acct_desc'] =
                this.accountlist[i]['b_acct_id'] +
                ' - ' +
                this.accountlist[i]['account_name'];
            }
            if (resp['data'].length > 1) {
              await this.selectMultiAccount();
            } else {
              await this.selectOneAccount();
            }
          } else {
            function acctExists(a: any) {
              return resp['data'].some(function (el: any) {
                return el.b_acct_id === a;
              });
            }
            if (acctExists(this.urlPassAcctID) == true) {
              this.selectedaccount = resp['data'].find(
                (o: any) => o.b_acct_id === this.urlPassAcctID
              );
              this.b_acct_id = this.urlPassAcctID;
              await this.SubmitAccount();
            } else {
              Swal.fire(
                'Error',
                'You must select the correct account which you have access',
                'error'
              );
              if (this.pubHostUrl == this.currentOrigin) {
                if (this.urlPassReturnfpath == undefined || null || '') {
                  this.router.navigate(['./' + this.fpath]);
                } else {
                  this.router.navigate(['./' + this.urlPassReturnfpath]);
                }
              } else {
                if (this.urlPassReturnfpath == undefined || null || '') {
                  this.router.navigate(['./' + this.urlPassReturnfpath]);
                }
              }
            }
          }
        } else if (resp['data'].length == 0) {
          this.audit_info_obj['status'] = 'FAIL';
          this.audit_info_obj['user_id'] = '';
          this.audit_info_obj['message'] = 'failed to login account';
          await this.audit_insert(this.audit_info_obj);
          Swal.fire('Error', 'Failed', 'error');
        } else {
          this.audit_info_obj['status'] = 'FAIL';
          this.audit_info_obj['user_id'] = '';
          this.audit_info_obj['message'] = resp['data'];
          Swal.fire('Error...', resp['data'], 'error');
          await this.audit_insert(this.audit_info_obj);
        }
      }
      //check email login
      else if (email_valid == true && this.isChecked == 1) {
        this.userdetails['phone_no'] = undefined;
        var userloginemail = {
          ident_to_verify: undefined,
          ident_verify_method: '',
          ident_verify_secret: '',
        };
        userloginemail['ident_to_verify'] = this.userdetails['email'];
        userloginemail['ident_verify_method'] = 'E-KEY';
        userloginemail['ident_verify_secret'] = this.userdetails['password'];

        var resp = await this.mainService.loginERP(userloginemail);
        if (resp['error'] == false && resp['data'].length > 0) {
          if (this.urlPassAcctID == undefined || null || '') {
            if (this.currentOrigin != this.solnHostUrl) {
              resp['data']
                .filter((x: any) => x.b_acct_id === 0)
                .forEach((x: any) =>
                  resp['data'].splice(resp['data'].indexOf(x), 1)
                );
            } else {
              resp['data']
                .filter((x: any) => x.b_acct_id != 0)
                .forEach((x: any) =>
                  resp['data'].splice(resp['data'].indexOf(x), 1)
                );
            }
            if (resp['data'].length == 0) {
              if (this.currentOrigin == this.solnHostUrl) {
                Swal.fire(
                  'Error',
                  'The Solution Admin is not accessible to you',
                  'error'
                );
                return;
              } else {
                Swal.fire(
                  'Error',
                  'The application you are trying to access is not accessible to you',
                  'error'
                );
                return;
              }
            }
            this.accountlist = resp['data'];
            for (let i = 0; i < this.accountlist.length; i++) {
              this.accountlist[i]['acct_desc'] =
                this.accountlist[i]['b_acct_id'] +
                ' - ' +
                this.accountlist[i]['account_name'];
            }
            if (resp['data'].length > 1) {
              await this.selectMultiAccount();
            } else {
              await this.selectOneAccount();
            }
          } else {
            function acctExists(a: any) {
              return resp['data'].some(function (el: any) {
                return el.b_acct_id === a;
              });
            }
            if (acctExists(this.urlPassAcctID) == true) {
              this.selectedaccount = resp['data'].find(
                (o: any) => o.b_acct_id === this.urlPassAcctID
              );
              this.b_acct_id = this.urlPassAcctID;
              await this.SubmitAccount();
            } else {
              Swal.fire(
                'Error',
                'You must select the correct account which you have access',
                'error'
              );
              if (this.pubHostUrl == this.currentOrigin) {
                if (this.urlPassReturnfpath == undefined || null || '') {
                  this.router.navigate(['./' + this.fpath]);
                } else {
                  this.router.navigate(['./' + this.urlPassReturnfpath]);
                }
              } else {
                if (this.urlPassReturnfpath == undefined || null || '') {
                  this.router.navigate(['./' + this.urlPassReturnfpath]);
                }
              }
            }
          }
        } else if (resp['data'].length == 0) {
          this.audit_info_obj['status'] = 'FAIL';
          this.audit_info_obj['user_id'] = '';
          this.audit_info_obj['message'] = 'failed to login account';

          await this.audit_insert(this.audit_info_obj);
          Swal.fire('Oops...', 'Failed to login account', 'error');
        } else {
          this.audit_info_obj['status'] = 'FAIL';
          this.audit_info_obj['user_id'] = '';
          this.audit_info_obj['message'] = resp['data'];

          await this.audit_insert(this.audit_info_obj);
          Swal.fire('Error...', resp['data'], 'error');
        }
      } else {
        Swal.fire('Error...', 'Invalid Credentials', 'error');
      }
    } else {
      Swal.fire('Warning', ' Please Select An Option For Login', 'warning');
    }
  }

  // Account moduleinfo
  async getAccountModule(b_acct_id: any) {
    var account = { b_acct_id: b_acct_id };
    var resp = await this.mainService.getaccountmodule(JSON.stringify(account));
    if (resp['error'] == false) {
      this.product_cd = resp['data'][0]['module_cd'].split(',');
    }

    return [];
  }

  //employee related role data

  async getUserRoleInfo() {
    this.assigned_User_Roles = [];
    var empid = {
      user_id: this.selectedaccount['le_id'],
      b_acct_id: this.b_acct_id,
    };
    var resp;
    if (empid.b_acct_id == 0) {
      resp = await this.mainService.getCurrentUserFromAdmin(
        JSON.stringify(empid)
      );
    } else {
      resp = await this.mainService.getCurrentUserFromMD(JSON.stringify(empid));
    }
    if (resp['error'] == false) {
      this.AllUserRole = resp.data;
      for (let i = 0; i < this.AllUserRole.length; i++) {
        this.assigned_User_Roles.push(this.AllUserRole[i]['role_cd']);
      }
      await this.finalSubmit();
    } else {
      Swal.fire('Error...', resp['data'], 'error');
    }
  }

  //user system details insert
  async audit_insert(audit_info_obj: any) {
    var resp = await this.mainService.createloginInfo(audit_info_obj);
  }

  //final submit
  async finalSubmit() {
    this.login['role_cd'] = this.assigned_User_Roles;
    this.login['assigned_product_cd'] = this.product_cd;
    this.login['user_id'] = this.selectedaccount.le_id;

    let partyDetail = await this.getSetPartyName();
    this.login['party_name'] = partyDetail.legal_name;
    this.login['party_dob'] = partyDetail.party_dob;
    this.login['party_type'] = partyDetail.party_type;

    this.login['assigned_component'] = await this.getAllAssignedComponent(
      this.b_acct_id,
      this.assigned_User_Roles
    );
    this.audit_info_obj['status'] = 'PASS';
    this.audit_info_obj['user_id'] =
      'User ID:' +
      this.selectedaccount['le_id'] +
      ' & In Account Id:' +
      this.selectedaccount['b_acct_id'];
    this.audit_info_obj['message'] = 'Login Successfully!';

    await this.audit_insert(this.audit_info_obj);
    Swal.fire('Success', 'Login Successfully! ', 'success');

    /// jwt token generated
    const { ident_verify_secret, ...filterdata } = this.login;
    var resp = await this.mainService.generateTokens(filterdata);
    this.jwtToken = resp['jwt'];

    //storing svm_jwt and erpUser into session storage
    sessionStorage.setItem('erpUser', JSON.stringify(filterdata));
    sessionStorage.setItem('svm_jwt', JSON.stringify(this.jwtToken));
    // veryfy tokens
    // var a = resp;
    // var resp1 = await this.mainService.verfiyTokens(a);
    // console.log(resp1);
    if (this.urlPassReturnfpath == undefined || null || '') {
      this.router.navigate(['./' + this.fpath]);
    } else {
      this.router.navigate(['./' + this.urlPassReturnfpath]);
    }
  }

  //assigned component of employee
  async getAllAssignedComponent(b_acct_id: any, role_cd: any) {
    var assign = { b_acct_id: b_acct_id, role_cd: role_cd };

    if (this.b_acct_id == 0) {
      var resp = await this.mainService.getresourcebyrolecd(
        JSON.stringify(assign)
      );
    } else {
      var resp = await this.mainService.getAllAssignedComponents(
        JSON.stringify(assign)
      );
    }

    this.assigned_user_modules = [];
    if (resp['error'] == false) {
      // this.spinner.hide();
      for (let i = 0; i < resp['data'].length; i++) {
        if (
          !this.assigned_user_modules.includes(resp['data'][i]['module_cd'])
        ) {
          this.assigned_user_modules.push(resp['data'][i]['module_cd']);
        }
        this.allComponentCode.push(resp['data'][i]['resource_cd']);
      }
      this.login['module_cd'] = this.assigned_user_modules;
      return this.allComponentCode;
    } else {
      // this.spinner.hide();
      Swal.fire('Error', 'Error While Getting All Resource', 'error');
      return this.allComponentCode;
    }
  }

  //party name
  async getSetPartyName() {
    let partydel = {
      b_acct_id: undefined,
      contact_email: undefined,
      phone_no: '',
    };
    partydel['b_acct_id'] = this.b_acct_id;
    partydel['contact_email'] = this.userdetails['email'];
    if (this.userdetails['phone_no'] == undefined) {
      partydel['phone_no'] = this.otpuser['mobile_number'];
    } else {
      partydel['phone_no'] = this.userdetails['phone_no'];
    }

    var resp = await this.mainService.getCurrentLegalEntity(
      JSON.stringify(partydel)
    );
    if (resp['error'] == false) {
      return resp['data'][0];
    } else {
      return 'NA';
    }
  }

  //Login to otp process
  async sendOtp() {
    var otpuserobj = { ident_to_verify: '', ident_verify_method: '' };

    if (this.otpuser['mobile_number'] == '') {
      Swal.fire('Error', 'Please Enter Mobile Number', 'error');
      return;
    }
    // this.userdetails['phone_no'] = this.otpuser['mobile_number'];
    otpuserobj['ident_to_verify'] = this.otpuser['mobile_number'];
    otpuserobj['ident_verify_method'] = 'OTP';
    var resp = await this.mainService.loginERP(otpuserobj);
    if (resp['error'] == false) {
      if (resp['data'].length == 0) {
        Swal.fire('Oops', 'Your are not register!', 'error');
        this.error_flag1 = true;
        return;
      } else {
        this.error_flag1 = false;
      }
    } else {
      Swal.fire('Error', 'Not Registered Or Login Failed!', 'error');
      this.error_flag1 = true;
      return;
    }
    //send otp
    this.legal_mobile_no = this.otpuser['mobile_number'];
    var resp = await this.mainService.sendMsg(this.legal_mobile_no);
    if (resp['Status'] == 'Success') {
      this.openOTP = true;
      this.session_id = resp['Details'];
      Swal.fire('Success', 'OTP Generted Successfully', 'success');
    }
  }
  // submit otp
  async LoginWithOtp() {
    //check usermobile number to  registered mobile_no
    this.userdetails['email'] = undefined;
    this.userdetails['phone_no'] = undefined;
    if (this.otpuser['mobile_number'] == this.legal_mobile_no) {
      this.audit_info_obj['login_type'] = 'OTP';
      this.audit_info_obj['login_id'] = this.legal_mobile_no;
      this.audit_info_obj['password'] = null;
      //verfiy otp
      if (
        await this.mainService.verifyMsg(
          this.otpuser['otp_no'],
          this.session_id
        )
      ) {
        var otpuserdata = { ident_to_verify: '', ident_verify_method: '' };
        otpuserdata['ident_to_verify'] = this.otpuser['mobile_number'];
        otpuserdata['ident_verify_method'] = 'OTP';
        var resp = await this.mainService.loginERP(otpuserdata);

        if (resp['error'] == false && resp['data'].length > 0) {
          if (this.urlPassAcctID == undefined || null || '') {
            if (this.currentOrigin != this.solnHostUrl) {
              resp['data']
                .filter((x: any) => x.b_acct_id === 0)
                .forEach((x: any) =>
                  resp['data'].splice(resp['data'].indexOf(x), 1)
                );
            } else {
              resp['data']
                .filter((x: any) => x.b_acct_id != 0)
                .forEach((x: any) =>
                  resp['data'].splice(resp['data'].indexOf(x), 1)
                );
            }
            if (resp['data'].length == 0) {
              if (this.currentOrigin == this.solnHostUrl) {
                Swal.fire(
                  'Error',
                  'The Solution Admin is not accessible to you',
                  'error'
                );
                return;
              } else {
                Swal.fire(
                  'Error',
                  'The application you are trying to access is not accessible to you',
                  'error'
                );
                return;
              }
            }
            this.accountlist = resp['data'];
            for (let i = 0; i < this.accountlist.length; i++) {
              this.accountlist[i]['acct_desc'] =
                this.accountlist[i]['b_acct_id'] +
                ' - ' +
                this.accountlist[i]['account_name'];
            }
            if (resp['data'].length > 1) {
              await this.selectMultiAccount();
            } else {
              await this.selectOneAccount();
            }
          } else {
            function acctExists(a: any) {
              return resp['data'].some(function (el: any) {
                return el.b_acct_id === a;
              });
            }
            if (acctExists(this.urlPassAcctID) == true) {
              this.selectedaccount = resp['data'].find(
                (o: any) => o.b_acct_id === this.urlPassAcctID
              );
              this.b_acct_id = this.urlPassAcctID;
              await this.SubmitAccount();
            } else {
              Swal.fire(
                'Error',
                'You must select the correct account which you have access',
                'error'
              );
              if (this.pubHostUrl == this.currentOrigin) {
                if (this.urlPassReturnfpath == undefined || null || '') {
                  this.router.navigate(['./' + this.fpath]);
                } else {
                  this.router.navigate(['./' + this.urlPassReturnfpath]);
                }
              } else {
                if (this.urlPassReturnfpath == undefined || null || '') {
                  this.router.navigate(['./' + this.urlPassReturnfpath]);
                }
              }
            }
          }
        } else if (resp['data'].length == 0) {
          this.audit_info_obj['status'] = 'FAIL';
          this.audit_info_obj['user_id'] = '';
          this.audit_info_obj['message'] = 'Failed to Login!';

          await this.audit_insert(this.audit_info_obj);
          Swal.fire('Oops', 'User Not Registered!', 'error');
        } else if (resp['error'] == true) {
          this.audit_info_obj['status'] = 'FAIL';
          this.audit_info_obj['user_id'] = '';
          this.audit_info_obj['message'] = 'Login Failed due to api error true';

          await this.audit_insert(this.audit_info_obj);
          Swal.fire('Error...', 'Login Failed', 'error');
        }
      } else {
        this.audit_info_obj['status'] = 'FAIL';
        this.audit_info_obj['user_id'] = '';
        this.audit_info_obj['message'] = 'OTP Not Match!';

        await this.audit_insert(this.audit_info_obj);

        Swal.fire('Error...', 'OTP Not Match!', 'error');
      }
    } else {
      Swal.fire('Error...', 'Invalid Credentials', 'error');
    }
  }

  //Login to Social Login
  async Social_login(goggle: any) {
    // this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => console.log(x));
    // this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
  }
  async goback() {
    this.select_acct = false;
  }
}
