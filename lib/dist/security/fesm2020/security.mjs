import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import Swal from 'sweetalert2';
import * as i1 from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import * as i3 from '@angular/router';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i5 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

// import { environment } from '../environment';
class MainService {
    constructor(http) {
        this.http = http;
        this.loginflag = false;
        this.logoutflag = false;
        this.allAccounts = [];
        this.componentCode = {};
        this.selectedAccount = null;
        this.api_key = 'c6504fdd-0ca9-11ed-9c12-0200cd936042';
    }
    ngOnInit() { }
    async getAllEnvConfig(object) {
        this.apiHost = object.apiHost;
        this.apiPort = object.apiPort;
        this.loginWithPassword = object.loginWithPassword;
        this.hostWithReturnUrl = object.hostApp;
        this.httpUrl = this.apiHost + ':' + this.apiPort;
        console.log('SECURITY-API @ ' + this.httpUrl + ' is being used.');
    }
    async getRetuenUrlWithAcctID(acct, returnUrl) {
        console.log('Url pass acct ID:', acct);
        this.urlPassAcctID = acct;
        this.urlPassReturnfpath = returnUrl;
    }
    async getCurrentLegalEntity(party) {
        const resp = await this.http
            .get(this.httpUrl + '/systemdata/legalentity/getcurrentlegalentity' + party)
            .toPromise()
            .then((res) => {
            return res;
        });
        return resp;
    }
    validatePhoneNumber(input_str) {
        var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return re.test(input_str);
    }
    validateEmail(input_str) {
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/im;
        return re.test(input_str);
    }
    async getAllCurrentAccoutns() {
        const resp = await this.http
            .get(this.httpUrl + '/systemdata/legalentity/getcurrentAccounts')
            .toPromise()
            .then((res) => {
            return res;
        });
        //console.log(resp)
        return resp;
    }
    async loginERP(obj) {
        const resp = await this.http
            .post(this.httpUrl + '/systemdata/authentication/login', obj)
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
    async generateTokens(data) {
        const resp = await this.http
            .post(this.httpUrl + '/jwt/generateTokens', data)
            .toPromise()
            .then((res) => {
            return res;
        });
        return resp;
    }
    async verfiyTokens(obj) {
        const resp = await this.http
            .post(this.httpUrl + '/jwt/VerifyTokens', obj)
            .toPromise()
            .then((res) => {
            return res;
        });
        return resp;
    }
    async getresourcebyrolecd(obj) {
        const resp = await this.http
            .get(this.httpUrl + '/admin/resource/getresourcebyrolecd' + obj)
            .toPromise()
            .then((res) => {
            return res;
        });
        return resp;
    }
    async getaccountmodule(obj) {
        const resp = await this.http
            .get(this.httpUrl + '/systemdata/legalentity/getaccountmodule' + obj)
            .toPromise()
            .then((res) => {
            return res;
        });
        return resp;
    }
    async getAllAssignedComponents(acct_id) {
        const resp = await this.http
            .get(this.httpUrl + '/md/resource/getresourcebyrolecd' + acct_id)
            .toPromise()
            .then((res) => {
            return res;
        });
        return resp;
    }
    async getCurrentUserFromAdmin(obj) {
        const resp = await this.http
            .get(this.httpUrl + '/admin/user/getcurrentuser' + obj)
            .toPromise()
            .then((res) => {
            return res;
        });
        return resp;
    }
    async createloginInfo(obj) {
        const resp = await this.http
            .post(this.httpUrl + '/systemdata/loginInfo/createloginInfo', obj)
            .toPromise()
            .then((res) => {
            return res;
        });
        return resp;
    }
    async getCurrentUserFromMD(obj) {
        const resp = await this.http
            .get(this.httpUrl + '/md/user/getcurrentuser' + obj)
            .toPromise()
            .then((res) => {
            return res;
        });
        return resp;
    }
    async sendMsg(mobile) {
        // var str = "https://2factor.in/API/V1/f5b33455-838a-11ea-9fa5-0200cd936042/SMS/" + mobile + "/" + otp + "/ERPUPDA"
        var str = 'https://2factor.in/API/V1/' +
            this.api_key +
            '/SMS/' +
            mobile +
            '/AUTOGEN';
        const resp = await this.http
            .get(str)
            .toPromise()
            .then((res) => {
            return res;
        });
        return resp;
    }
    async verifyMsg(otp_entered_by_user, session_id) {
        var str = 'https://2factor.in/API/V1/' +
            this.api_key +
            '/SMS/VERIFY/' +
            session_id +
            '/' +
            otp_entered_by_user;
        const resp = await this.http
            .get(str)
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
MainService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: MainService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
MainService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: MainService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: MainService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });

var CheckBoxType;
(function (CheckBoxType) {
    CheckBoxType[CheckBoxType["APPLY_FOR_JOB"] = 0] = "APPLY_FOR_JOB";
    CheckBoxType[CheckBoxType["MODIFY_A_JOB"] = 1] = "MODIFY_A_JOB";
    CheckBoxType[CheckBoxType["NONE"] = 2] = "NONE";
})(CheckBoxType || (CheckBoxType = {}));
class LoginComponent {
    constructor(mainService, http, router, route) {
        this.mainService = mainService;
        this.http = http;
        this.router = router;
        this.route = route;
        this.check_box_type = CheckBoxType;
        this.isChecked = 0;
        this.accountlist = [];
        this.select_acct = false;
        this.openOTP = false;
        this.userdetails = {
            phone_no: undefined,
            password: '',
            email: undefined,
            verify_method: '',
        };
        this.login = {
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
            party_type: ''
        };
        this.allComponentCode = [];
        this.audit_info_obj = {
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
        this.otpuser = {
            mobile_number: '',
            otp_no: '',
        };
        this.otp_flag = false;
        this.loginpass_flag = false;
        this.verfiy_token_obj = { authtoken: '' };
    }
    ngOnInit() {
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
            .subscribe((res) => {
            this.ipAddress = res.ip;
            this.audit_info_obj['login_ip'] = this.ipAddress;
        });
    }
    //list of browser name
    UserBrowserName() {
        const agent = window.navigator.userAgent.toLowerCase();
        switch (true) {
            case agent.indexOf('edge') > -1:
                return 'edge';
            case agent.indexOf('opr') > -1 && !!window.opr:
                return 'opera';
            case agent.indexOf('chrome') > -1 && !!window.chrome:
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
        }
        else {
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
    selectCheckBox(targetType) {
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
        var resp = await this.mainService.getCurrentLegalEntity(JSON.stringify(party_details));
        if (resp['error'] == false) {
            this.legalentityrecord = resp.data;
        }
        else {
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
    changeaccount(b_acct_id) {
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
            var mobile_valid = this.mainService.validatePhoneNumber(this.userdetails['phone_no']);
            var email_valid = this.mainService.validateEmail(this.userdetails['email']);
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
                                .filter((x) => x.b_acct_id === 0)
                                .forEach((x) => resp['data'].splice(resp['data'].indexOf(x), 1));
                        }
                        else {
                            resp['data']
                                .filter((x) => x.b_acct_id != 0)
                                .forEach((x) => resp['data'].splice(resp['data'].indexOf(x), 1));
                        }
                        if (resp['data'].length == 0) {
                            if (this.currentOrigin == this.solnHostUrl) {
                                Swal.fire('Error', 'The Solution Admin is not accessible to you', 'error');
                                return;
                            }
                            else {
                                Swal.fire('Error', 'The application you are trying to access is not accessible to you', 'error');
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
                        }
                        else {
                            await this.selectOneAccount();
                        }
                    }
                    else {
                        function acctExists(a) {
                            return resp['data'].some(function (el) {
                                return el.b_acct_id === a;
                            });
                        }
                        if (acctExists(this.urlPassAcctID) == true) {
                            this.selectedaccount = resp['data'].find((o) => o.b_acct_id === this.urlPassAcctID);
                            this.b_acct_id = this.urlPassAcctID;
                            await this.SubmitAccount();
                        }
                        else {
                            Swal.fire('Error', 'You must select the correct account which you have access', 'error');
                            if (this.pubHostUrl == this.currentOrigin) {
                                if (this.urlPassReturnfpath == undefined || null || '') {
                                    this.router.navigate(['./' + this.fpath]);
                                }
                                else {
                                    this.router.navigate(['./' + this.urlPassReturnfpath]);
                                }
                            }
                            else {
                                if (this.urlPassReturnfpath == undefined || null || '') {
                                    this.router.navigate(['./' + this.urlPassReturnfpath]);
                                }
                            }
                        }
                    }
                }
                else if (resp['data'].length == 0) {
                    this.audit_info_obj['status'] = 'FAIL';
                    this.audit_info_obj['user_id'] = '';
                    this.audit_info_obj['message'] = 'failed to login account';
                    await this.audit_insert(this.audit_info_obj);
                    Swal.fire('Error', 'Failed', 'error');
                }
                else {
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
                                .filter((x) => x.b_acct_id === 0)
                                .forEach((x) => resp['data'].splice(resp['data'].indexOf(x), 1));
                        }
                        else {
                            resp['data']
                                .filter((x) => x.b_acct_id != 0)
                                .forEach((x) => resp['data'].splice(resp['data'].indexOf(x), 1));
                        }
                        if (resp['data'].length == 0) {
                            if (this.currentOrigin == this.solnHostUrl) {
                                Swal.fire('Error', 'The Solution Admin is not accessible to you', 'error');
                                return;
                            }
                            else {
                                Swal.fire('Error', 'The application you are trying to access is not accessible to you', 'error');
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
                        }
                        else {
                            await this.selectOneAccount();
                        }
                    }
                    else {
                        function acctExists(a) {
                            return resp['data'].some(function (el) {
                                return el.b_acct_id === a;
                            });
                        }
                        if (acctExists(this.urlPassAcctID) == true) {
                            this.selectedaccount = resp['data'].find((o) => o.b_acct_id === this.urlPassAcctID);
                            this.b_acct_id = this.urlPassAcctID;
                            await this.SubmitAccount();
                        }
                        else {
                            Swal.fire('Error', 'You must select the correct account which you have access', 'error');
                            if (this.pubHostUrl == this.currentOrigin) {
                                if (this.urlPassReturnfpath == undefined || null || '') {
                                    this.router.navigate(['./' + this.fpath]);
                                }
                                else {
                                    this.router.navigate(['./' + this.urlPassReturnfpath]);
                                }
                            }
                            else {
                                if (this.urlPassReturnfpath == undefined || null || '') {
                                    this.router.navigate(['./' + this.urlPassReturnfpath]);
                                }
                            }
                        }
                    }
                }
                else if (resp['data'].length == 0) {
                    this.audit_info_obj['status'] = 'FAIL';
                    this.audit_info_obj['user_id'] = '';
                    this.audit_info_obj['message'] = 'failed to login account';
                    await this.audit_insert(this.audit_info_obj);
                    Swal.fire('Oops...', 'Failed to login account', 'error');
                }
                else {
                    this.audit_info_obj['status'] = 'FAIL';
                    this.audit_info_obj['user_id'] = '';
                    this.audit_info_obj['message'] = resp['data'];
                    await this.audit_insert(this.audit_info_obj);
                    Swal.fire('Error...', resp['data'], 'error');
                }
            }
            else {
                Swal.fire('Error...', 'Invalid Credentials', 'error');
            }
        }
        else {
            Swal.fire('Warning', ' Please Select An Option For Login', 'warning');
        }
    }
    // Account moduleinfo
    async getAccountModule(b_acct_id) {
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
            resp = await this.mainService.getCurrentUserFromAdmin(JSON.stringify(empid));
        }
        else {
            resp = await this.mainService.getCurrentUserFromMD(JSON.stringify(empid));
        }
        if (resp['error'] == false) {
            this.AllUserRole = resp.data;
            for (let i = 0; i < this.AllUserRole.length; i++) {
                this.assigned_User_Roles.push(this.AllUserRole[i]['role_cd']);
            }
            await this.finalSubmit();
        }
        else {
            Swal.fire('Error...', resp['data'], 'error');
        }
    }
    //user system details insert
    async audit_insert(audit_info_obj) {
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
        this.login['assigned_component'] = await this.getAllAssignedComponent(this.b_acct_id, this.assigned_User_Roles);
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
        }
        else {
            this.router.navigate(['./' + this.urlPassReturnfpath]);
        }
    }
    //assigned component of employee
    async getAllAssignedComponent(b_acct_id, role_cd) {
        var assign = { b_acct_id: b_acct_id, role_cd: role_cd };
        if (this.b_acct_id == 0) {
            var resp = await this.mainService.getresourcebyrolecd(JSON.stringify(assign));
        }
        else {
            var resp = await this.mainService.getAllAssignedComponents(JSON.stringify(assign));
        }
        this.assigned_user_modules = [];
        if (resp['error'] == false) {
            // this.spinner.hide();
            for (let i = 0; i < resp['data'].length; i++) {
                if (!this.assigned_user_modules.includes(resp['data'][i]['module_cd'])) {
                    this.assigned_user_modules.push(resp['data'][i]['module_cd']);
                }
                this.allComponentCode.push(resp['data'][i]['resource_cd']);
            }
            this.login['module_cd'] = this.assigned_user_modules;
            return this.allComponentCode;
        }
        else {
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
        }
        else {
            partydel['phone_no'] = this.userdetails['phone_no'];
        }
        var resp = await this.mainService.getCurrentLegalEntity(JSON.stringify(partydel));
        if (resp['error'] == false) {
            return resp['data'][0];
        }
        else {
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
            }
            else {
                this.error_flag1 = false;
            }
        }
        else {
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
            if (await this.mainService.verifyMsg(this.otpuser['otp_no'], this.session_id)) {
                var otpuserdata = { ident_to_verify: '', ident_verify_method: '' };
                otpuserdata['ident_to_verify'] = this.otpuser['mobile_number'];
                otpuserdata['ident_verify_method'] = 'OTP';
                var resp = await this.mainService.loginERP(otpuserdata);
                if (resp['error'] == false && resp['data'].length > 0) {
                    if (this.urlPassAcctID == undefined || null || '') {
                        if (this.currentOrigin != this.solnHostUrl) {
                            resp['data']
                                .filter((x) => x.b_acct_id === 0)
                                .forEach((x) => resp['data'].splice(resp['data'].indexOf(x), 1));
                        }
                        else {
                            resp['data']
                                .filter((x) => x.b_acct_id != 0)
                                .forEach((x) => resp['data'].splice(resp['data'].indexOf(x), 1));
                        }
                        if (resp['data'].length == 0) {
                            if (this.currentOrigin == this.solnHostUrl) {
                                Swal.fire('Error', 'The Solution Admin is not accessible to you', 'error');
                                return;
                            }
                            else {
                                Swal.fire('Error', 'The application you are trying to access is not accessible to you', 'error');
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
                        }
                        else {
                            await this.selectOneAccount();
                        }
                    }
                    else {
                        function acctExists(a) {
                            return resp['data'].some(function (el) {
                                return el.b_acct_id === a;
                            });
                        }
                        if (acctExists(this.urlPassAcctID) == true) {
                            this.selectedaccount = resp['data'].find((o) => o.b_acct_id === this.urlPassAcctID);
                            this.b_acct_id = this.urlPassAcctID;
                            await this.SubmitAccount();
                        }
                        else {
                            Swal.fire('Error', 'You must select the correct account which you have access', 'error');
                            if (this.pubHostUrl == this.currentOrigin) {
                                if (this.urlPassReturnfpath == undefined || null || '') {
                                    this.router.navigate(['./' + this.fpath]);
                                }
                                else {
                                    this.router.navigate(['./' + this.urlPassReturnfpath]);
                                }
                            }
                            else {
                                if (this.urlPassReturnfpath == undefined || null || '') {
                                    this.router.navigate(['./' + this.urlPassReturnfpath]);
                                }
                            }
                        }
                    }
                }
                else if (resp['data'].length == 0) {
                    this.audit_info_obj['status'] = 'FAIL';
                    this.audit_info_obj['user_id'] = '';
                    this.audit_info_obj['message'] = 'Failed to Login!';
                    await this.audit_insert(this.audit_info_obj);
                    Swal.fire('Oops', 'User Not Registered!', 'error');
                }
                else if (resp['error'] == true) {
                    this.audit_info_obj['status'] = 'FAIL';
                    this.audit_info_obj['user_id'] = '';
                    this.audit_info_obj['message'] = 'Login Failed due to api error true';
                    await this.audit_insert(this.audit_info_obj);
                    Swal.fire('Error...', 'Login Failed', 'error');
                }
            }
            else {
                this.audit_info_obj['status'] = 'FAIL';
                this.audit_info_obj['user_id'] = '';
                this.audit_info_obj['message'] = 'OTP Not Match!';
                await this.audit_insert(this.audit_info_obj);
                Swal.fire('Error...', 'OTP Not Match!', 'error');
            }
        }
        else {
            Swal.fire('Error...', 'Invalid Credentials', 'error');
        }
    }
    //Login to Social Login
    async Social_login(goggle) {
        // this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => console.log(x));
        // this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
    }
    async goback() {
        this.select_acct = false;
    }
}
LoginComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: LoginComponent, deps: [{ token: MainService }, { token: i1.HttpClient }, { token: i3.Router }, { token: i3.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component });
LoginComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: LoginComponent, selector: "lib-login", ngImport: i0, template: "<div class=\"container-md1\">\r\n  <br />\r\n  <div\r\n    class=\"row\"\r\n    style=\"margin: 1%; color: white\"\r\n    *ngIf=\"select_acct == false\"\r\n  >\r\n    <div class=\"col-6\">\r\n      <div>\r\n        <h6>LOGIN WITH OTP</h6>\r\n        <br />\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">Enter Mobile:</div>\r\n          <div class=\"col-6\">\r\n            <input\r\n              type=\"number\"\r\n              name=\"mobile_number\"\r\n              placeholder=\"Enter Mobile Number\"\r\n              autocomplete=\"off\"\r\n              class=\"form-control\"\r\n              [(ngModel)]=\"otpuser['mobile_number']\"\r\n            />\r\n          </div>\r\n          <div class=\"col-2\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"sendOtp()\">\r\n              Send\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <br />\r\n        <div class=\"row\" *ngIf=\"openOTP\" style=\"font-size: smaller\">\r\n          <div class=\"col-3\">Enter OTP:</div>\r\n          <div class=\"col-7\">\r\n            <input\r\n              class=\"form-control\"\r\n              id=\"text\"\r\n              type=\"password\"\r\n              name=\"otp\"\r\n              autocomplete=\"off\"\r\n              placeholder=\"Enter OTP\"\r\n              [(ngModel)]=\"otpuser['otp_no']\"\r\n            />\r\n          </div>\r\n          <div class=\"col-2\">\r\n            <button type=\"button\" (click)=\"sendOtp()\" class=\"btn btn-warning\">\r\n              Resend\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <br />\r\n        <div class=\"row\" style=\"font-size: smaller\">\r\n          <div class=\"col-1\"></div>\r\n          <div class=\"col-10\">\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-info btn-block\"\r\n              (click)=\"LoginWithOtp()\"\r\n            >\r\n              LOGIN\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"loginpass_flag\" class=\"col-6\">\r\n      <h6>LOGIN WITH PASSWORD</h6>\r\n      <br />\r\n      <div class=\"row\">\r\n        <div class=\"col-1\"></div>\r\n        <div class=\"col-11\" style=\"font-size: smaller\">\r\n          LOGIN WITH MOBILE:\r\n          <input\r\n            type=\"checkbox\"\r\n            style=\"margin-right: 2%; margin-top: 4px\"\r\n            name=\"test\"\r\n            [checked]=\"isChecked === check_box_type.APPLY_FOR_JOB\"\r\n            (click)=\"selectCheckBox(check_box_type.APPLY_FOR_JOB)\"\r\n          />LOGIN WITH EMAIL:\r\n          <input\r\n            type=\"checkbox\"\r\n            style=\"margin-right: 2%; margin-top: 4px\"\r\n            name=\"test\"\r\n            [checked]=\"isChecked === check_box_type.MODIFY_A_JOB\"\r\n            (click)=\"selectCheckBox(check_box_type.MODIFY_A_JOB)\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <br />\r\n      <div class=\"row\">\r\n        <div class=\"col-1\"></div>\r\n        <div class=\"col-10\">\r\n          <div class=\"form-group\">\r\n            <input\r\n              *ngIf=\"isChecked == 0\"\r\n              class=\"form-control\"\r\n              type=\"number\"\r\n              placeholder=\"Enter Mobile Number\"\r\n              [(ngModel)]=\"userdetails['phone_no']\"\r\n            />\r\n            <input\r\n              *ngIf=\"isChecked != 0\"\r\n              class=\"form-control\"\r\n              type=\"email\"\r\n              placeholder=\"Enter Email\"\r\n              [(ngModel)]=\"userdetails['email']\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-1\"></div>\r\n        <div class=\"col-10\">\r\n          <input\r\n            class=\"form-control\"\r\n            type=\"password\"\r\n            autocomplete=\"off\"\r\n            placeholder=\"Enter Password \"\r\n            [(ngModel)]=\"userdetails['password']\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <br />\r\n      <div class=\"row\">\r\n        <div class=\"col-1\"></div>\r\n        <div class=\"col-10\">\r\n          <button\r\n            class=\"btn btn-info btn-block\"\r\n            type=\"submit\"\r\n            (click)=\"submit()\"\r\n          >\r\n            LOGIN\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <h6>LOG IN USING YOUR GOOGLE ACCOUNT</h6>\r\n      <div class=\"row\">\r\n        <div class=\"col text-center\">\r\n          <a class=\"btn btn-social-icon btn-google\">\r\n            <div>\r\n              <svg\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                width=\"16\"\r\n                height=\"16\"\r\n                fill=\"currentColor\"\r\n                class=\"bi bi-google\"\r\n                viewBox=\"0 0 16 16\"\r\n              >\r\n                <path\r\n                  d=\"M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z\"\r\n                />\r\n              </svg>\r\n            </div>\r\n          </a>\r\n          <!-- &nbsp;&nbsp; -->\r\n          <!-- <a  >\r\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-facebook\" viewBox=\"0 0 16 16\">\r\n  <path d=\"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z\"/>\r\n</svg>\r\n</a>     &nbsp;&nbsp;       <a  >\r\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-linkedin\" viewBox=\"0 0 16 16\">\r\n  <path d=\"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z\"/>\r\n</svg>\r\n</a>     &nbsp;&nbsp;       <a  >\r\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-whatsapp\" viewBox=\"0 0 16 16\">\r\n  <path d=\"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z\"/>\r\n</svg>\r\n</a> -->\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" style=\"margin: 1%; color: white\" *ngIf=\"select_acct == true\">\r\n    <div class=\"col-12 text-right\">\r\n      <button\r\n        style=\"\r\n        margin-top: -3%;\r\n          border: 1px solid #ffff;\r\n          box-shadow: 0px 5px 10px 0px #20b2aa;\r\n          cursor: pointer;\r\n          border-radius: 50%;\r\n          font-size: 16px;\r\n        \"\r\n        type=\"button\"\r\n        (click)=\"goback()\"\r\n        class=\"btn btn-danger\"\r\n      >\r\n        X\r\n      </button>\r\n    </div>\r\n\r\n\r\n    <div class=\"col-12 text-center\" style=\"padding-left: 10%; padding-right: 10%\">\r\n      <br>\r\n      <h6>SELECT YOUR ACCOUNT ID :</h6>\r\n      <br />\r\n      <select\r\n        style=\"text-align: center;\r\n          border: 1px solid #ffff;\r\n          box-shadow: 0px 5px 10px 0px #20b2aa;\r\n          cursor: pointer;\r\n        \"\r\n        [(ngModel)]=\"b_acct_id\"\r\n        class=\"form-control\"\r\n        (change)=\"changeaccount(b_acct_id)\"\r\n      >\r\n        <option\r\n          style=\"background-color: rgb(241 205 248 / 30%); color: black\"\r\n          *ngFor=\"let item of accountlist\"\r\n          [value]=\"item.b_acct_id\"\r\n        >\r\n          {{ item[\"acct_desc\"] }}\r\n        </option>\r\n      </select>\r\n      <br /><br />\r\n      <button\r\n        style=\"\r\n          border: 1px solid #ffff;\r\n          box-shadow: 0px 5px 10px 0px #20b2aa;\r\n          cursor: pointer;\r\n        \"\r\n        type=\"button\"\r\n        class=\"btn btn-primary\"\r\n        (click)=\"SubmitAccount()\"\r\n      >\r\n        Submit</button\r\n      >&nbsp;&nbsp;&nbsp;&nbsp;\r\n      <button\r\n        style=\"\r\n          border: 1px solid #ffff;\r\n          box-shadow: 0px 5px 10px 0px #20b2aa;\r\n          cursor: pointer;\r\n        \"\r\n        type=\"button\"\r\n        (click)=\"goback()\"\r\n        class=\"btn btn-danger\"\r\n      >\r\n        Cancel\r\n      </button>\r\n     \r\n\r\n    </div>\r\n  </div>\r\n   <br />\r\n</div>\r\n", styles: ["body{font-family:Arial,Helvetica,sans-serif}h6:before,h6:after{content:\"\";flex:1 1;border-bottom:2px solid #d6dee4;margin:auto}h6{display:flex;flex-direction:row}h3:before,h3:after{content:\"\";flex:1 1;border-bottom:2px solid #d6dee4;margin:auto}h3{display:flex;flex-direction:row}.vl{border-left:2px solid black;height:200px}.card{margin:5%}.container-md1{margin-top:5%;margin-right:15%;margin-left:15%;border:1px solid #ffff;box-shadow:0 5px 10px #20b2aa;border-radius:40px;background-color:#0a140a;background:linear-gradient(to right,#2C5364,#203A43,#0F2027)}.container-md{min-height:100%;min-width:1024px;width:100%;height:auto;background-size:cover;top:0;left:0;position:fixed;padding-bottom:50px;background-color:#0a140a;background:linear-gradient(to right,#2C5364,#203A43,#0F2027)}.container-md2{margin-top:1%;margin-right:15%;margin-left:15%;color:#fff;text-align:center;border:1px solid #ffff;box-shadow:0 5px 10px #20b2aa;border-radius:40px;background-color:#0a140a;background:linear-gradient(to right,#2C5364,#203A43,#0F2027)}\n"], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i5.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i5.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i5.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { type: i5.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: LoginComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-login', template: "<div class=\"container-md1\">\r\n  <br />\r\n  <div\r\n    class=\"row\"\r\n    style=\"margin: 1%; color: white\"\r\n    *ngIf=\"select_acct == false\"\r\n  >\r\n    <div class=\"col-6\">\r\n      <div>\r\n        <h6>LOGIN WITH OTP</h6>\r\n        <br />\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">Enter Mobile:</div>\r\n          <div class=\"col-6\">\r\n            <input\r\n              type=\"number\"\r\n              name=\"mobile_number\"\r\n              placeholder=\"Enter Mobile Number\"\r\n              autocomplete=\"off\"\r\n              class=\"form-control\"\r\n              [(ngModel)]=\"otpuser['mobile_number']\"\r\n            />\r\n          </div>\r\n          <div class=\"col-2\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"sendOtp()\">\r\n              Send\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <br />\r\n        <div class=\"row\" *ngIf=\"openOTP\" style=\"font-size: smaller\">\r\n          <div class=\"col-3\">Enter OTP:</div>\r\n          <div class=\"col-7\">\r\n            <input\r\n              class=\"form-control\"\r\n              id=\"text\"\r\n              type=\"password\"\r\n              name=\"otp\"\r\n              autocomplete=\"off\"\r\n              placeholder=\"Enter OTP\"\r\n              [(ngModel)]=\"otpuser['otp_no']\"\r\n            />\r\n          </div>\r\n          <div class=\"col-2\">\r\n            <button type=\"button\" (click)=\"sendOtp()\" class=\"btn btn-warning\">\r\n              Resend\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <br />\r\n        <div class=\"row\" style=\"font-size: smaller\">\r\n          <div class=\"col-1\"></div>\r\n          <div class=\"col-10\">\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-info btn-block\"\r\n              (click)=\"LoginWithOtp()\"\r\n            >\r\n              LOGIN\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"loginpass_flag\" class=\"col-6\">\r\n      <h6>LOGIN WITH PASSWORD</h6>\r\n      <br />\r\n      <div class=\"row\">\r\n        <div class=\"col-1\"></div>\r\n        <div class=\"col-11\" style=\"font-size: smaller\">\r\n          LOGIN WITH MOBILE:\r\n          <input\r\n            type=\"checkbox\"\r\n            style=\"margin-right: 2%; margin-top: 4px\"\r\n            name=\"test\"\r\n            [checked]=\"isChecked === check_box_type.APPLY_FOR_JOB\"\r\n            (click)=\"selectCheckBox(check_box_type.APPLY_FOR_JOB)\"\r\n          />LOGIN WITH EMAIL:\r\n          <input\r\n            type=\"checkbox\"\r\n            style=\"margin-right: 2%; margin-top: 4px\"\r\n            name=\"test\"\r\n            [checked]=\"isChecked === check_box_type.MODIFY_A_JOB\"\r\n            (click)=\"selectCheckBox(check_box_type.MODIFY_A_JOB)\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <br />\r\n      <div class=\"row\">\r\n        <div class=\"col-1\"></div>\r\n        <div class=\"col-10\">\r\n          <div class=\"form-group\">\r\n            <input\r\n              *ngIf=\"isChecked == 0\"\r\n              class=\"form-control\"\r\n              type=\"number\"\r\n              placeholder=\"Enter Mobile Number\"\r\n              [(ngModel)]=\"userdetails['phone_no']\"\r\n            />\r\n            <input\r\n              *ngIf=\"isChecked != 0\"\r\n              class=\"form-control\"\r\n              type=\"email\"\r\n              placeholder=\"Enter Email\"\r\n              [(ngModel)]=\"userdetails['email']\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-1\"></div>\r\n        <div class=\"col-10\">\r\n          <input\r\n            class=\"form-control\"\r\n            type=\"password\"\r\n            autocomplete=\"off\"\r\n            placeholder=\"Enter Password \"\r\n            [(ngModel)]=\"userdetails['password']\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <br />\r\n      <div class=\"row\">\r\n        <div class=\"col-1\"></div>\r\n        <div class=\"col-10\">\r\n          <button\r\n            class=\"btn btn-info btn-block\"\r\n            type=\"submit\"\r\n            (click)=\"submit()\"\r\n          >\r\n            LOGIN\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <h6>LOG IN USING YOUR GOOGLE ACCOUNT</h6>\r\n      <div class=\"row\">\r\n        <div class=\"col text-center\">\r\n          <a class=\"btn btn-social-icon btn-google\">\r\n            <div>\r\n              <svg\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                width=\"16\"\r\n                height=\"16\"\r\n                fill=\"currentColor\"\r\n                class=\"bi bi-google\"\r\n                viewBox=\"0 0 16 16\"\r\n              >\r\n                <path\r\n                  d=\"M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z\"\r\n                />\r\n              </svg>\r\n            </div>\r\n          </a>\r\n          <!-- &nbsp;&nbsp; -->\r\n          <!-- <a  >\r\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-facebook\" viewBox=\"0 0 16 16\">\r\n  <path d=\"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z\"/>\r\n</svg>\r\n</a>     &nbsp;&nbsp;       <a  >\r\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-linkedin\" viewBox=\"0 0 16 16\">\r\n  <path d=\"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z\"/>\r\n</svg>\r\n</a>     &nbsp;&nbsp;       <a  >\r\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-whatsapp\" viewBox=\"0 0 16 16\">\r\n  <path d=\"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z\"/>\r\n</svg>\r\n</a> -->\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" style=\"margin: 1%; color: white\" *ngIf=\"select_acct == true\">\r\n    <div class=\"col-12 text-right\">\r\n      <button\r\n        style=\"\r\n        margin-top: -3%;\r\n          border: 1px solid #ffff;\r\n          box-shadow: 0px 5px 10px 0px #20b2aa;\r\n          cursor: pointer;\r\n          border-radius: 50%;\r\n          font-size: 16px;\r\n        \"\r\n        type=\"button\"\r\n        (click)=\"goback()\"\r\n        class=\"btn btn-danger\"\r\n      >\r\n        X\r\n      </button>\r\n    </div>\r\n\r\n\r\n    <div class=\"col-12 text-center\" style=\"padding-left: 10%; padding-right: 10%\">\r\n      <br>\r\n      <h6>SELECT YOUR ACCOUNT ID :</h6>\r\n      <br />\r\n      <select\r\n        style=\"text-align: center;\r\n          border: 1px solid #ffff;\r\n          box-shadow: 0px 5px 10px 0px #20b2aa;\r\n          cursor: pointer;\r\n        \"\r\n        [(ngModel)]=\"b_acct_id\"\r\n        class=\"form-control\"\r\n        (change)=\"changeaccount(b_acct_id)\"\r\n      >\r\n        <option\r\n          style=\"background-color: rgb(241 205 248 / 30%); color: black\"\r\n          *ngFor=\"let item of accountlist\"\r\n          [value]=\"item.b_acct_id\"\r\n        >\r\n          {{ item[\"acct_desc\"] }}\r\n        </option>\r\n      </select>\r\n      <br /><br />\r\n      <button\r\n        style=\"\r\n          border: 1px solid #ffff;\r\n          box-shadow: 0px 5px 10px 0px #20b2aa;\r\n          cursor: pointer;\r\n        \"\r\n        type=\"button\"\r\n        class=\"btn btn-primary\"\r\n        (click)=\"SubmitAccount()\"\r\n      >\r\n        Submit</button\r\n      >&nbsp;&nbsp;&nbsp;&nbsp;\r\n      <button\r\n        style=\"\r\n          border: 1px solid #ffff;\r\n          box-shadow: 0px 5px 10px 0px #20b2aa;\r\n          cursor: pointer;\r\n        \"\r\n        type=\"button\"\r\n        (click)=\"goback()\"\r\n        class=\"btn btn-danger\"\r\n      >\r\n        Cancel\r\n      </button>\r\n     \r\n\r\n    </div>\r\n  </div>\r\n   <br />\r\n</div>\r\n", styles: ["body{font-family:Arial,Helvetica,sans-serif}h6:before,h6:after{content:\"\";flex:1 1;border-bottom:2px solid #d6dee4;margin:auto}h6{display:flex;flex-direction:row}h3:before,h3:after{content:\"\";flex:1 1;border-bottom:2px solid #d6dee4;margin:auto}h3{display:flex;flex-direction:row}.vl{border-left:2px solid black;height:200px}.card{margin:5%}.container-md1{margin-top:5%;margin-right:15%;margin-left:15%;border:1px solid #ffff;box-shadow:0 5px 10px #20b2aa;border-radius:40px;background-color:#0a140a;background:linear-gradient(to right,#2C5364,#203A43,#0F2027)}.container-md{min-height:100%;min-width:1024px;width:100%;height:auto;background-size:cover;top:0;left:0;position:fixed;padding-bottom:50px;background-color:#0a140a;background:linear-gradient(to right,#2C5364,#203A43,#0F2027)}.container-md2{margin-top:1%;margin-right:15%;margin-left:15%;color:#fff;text-align:center;border:1px solid #ffff;box-shadow:0 5px 10px #20b2aa;border-radius:40px;background-color:#0a140a;background:linear-gradient(to right,#2C5364,#203A43,#0F2027)}\n"] }]
        }], ctorParameters: function () { return [{ type: MainService }, { type: i1.HttpClient }, { type: i3.Router }, { type: i3.ActivatedRoute }]; } });

class SecurityService {
    constructor(router, mainSVC) {
        this.router = router;
        this.mainSVC = mainSVC;
    }
    async isAuthenticated() {
        this.hostWithReturnUrls = this.mainSVC.hostWithReturnUrl;
        this.currentOrigin = location.protocol + '//' + location.hostname;
        console.table(this.hostWithReturnUrls);
        this.getHostFpath();
        const urlSearchParams = new URLSearchParams(window.location.search);
        this.param_jwt = urlSearchParams.get('id');
        this.module_index = urlSearchParams.get('fpath');
        if (this.param_jwt == undefined || this.param_jwt == null) {
            if (sessionStorage.getItem('svm_jwt') == undefined ||
                sessionStorage.getItem('svm_jwt') == null) {
                this.router.navigate(['/login']);
            }
            else {
                this.router.navigate(['./' + this.fpath]);
            }
        }
        else {
            var obj = { jwt: this.param_jwt };
            var resp = await this.mainSVC.verfiyTokens(obj);
            if (resp['error'] == false) {
                sessionStorage.setItem('erpUser', JSON.stringify(resp['erpUser']));
                sessionStorage.setItem('svm_jwt', JSON.stringify(resp['jwt']));
                if (this.module_index == undefined || this.module_index == null) {
                    this.router.navigate(['./' + this.fpath]);
                }
                else {
                    if (resp['erpUser']['b_acct_id'] == 0) {
                        this.router.navigate(['./' + this.module_index]);
                    }
                    else {
                        this.router.navigate(['./' + this.module_index]);
                    }
                }
            }
            else {
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
SecurityService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SecurityService, deps: [{ token: i3.Router }, { token: MainService }], target: i0.ɵɵFactoryTarget.Injectable });
SecurityService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SecurityService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SecurityService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i3.Router }, { type: MainService }]; } });

class SecurityComponent {
    constructor() { }
    ngOnInit() { }
}
SecurityComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SecurityComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SecurityComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: SecurityComponent, selector: "svm-security", ngImport: i0, template: ` <lib-login></lib-login> `, isInline: true, components: [{ type: LoginComponent, selector: "lib-login" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SecurityComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'svm-security',
                    template: ` <lib-login></lib-login> `,
                    styles: [],
                }]
        }], ctorParameters: function () { return []; } });

// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';
// import { NgxSpinnerModule } from 'ngx-spinner';
class SecurityModule {
}
SecurityModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SecurityModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SecurityModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SecurityModule, declarations: [SecurityComponent, LoginComponent], imports: [FormsModule,
        HttpClientModule,
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule], exports: [SecurityComponent, LoginComponent] });
SecurityModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SecurityModule, imports: [[
            FormsModule,
            HttpClientModule,
            BrowserModule,
            CommonModule,
            BrowserAnimationsModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SecurityModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SecurityComponent, LoginComponent],
                    imports: [
                        FormsModule,
                        HttpClientModule,
                        BrowserModule,
                        CommonModule,
                        BrowserAnimationsModule,
                    ],
                    exports: [SecurityComponent, LoginComponent],
                }]
        }] });

/*
 * Public API Surface of security
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LoginComponent, MainService, SecurityComponent, SecurityModule, SecurityService };
//# sourceMappingURL=security.mjs.map
