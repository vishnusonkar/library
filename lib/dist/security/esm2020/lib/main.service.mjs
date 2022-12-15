import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
// import { environment } from '../environment';
export class MainService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc2VjdXJpdHkvc3JjL2xpYi9tYWluLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFVLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7O0FBSzNELGdEQUFnRDtBQUtoRCxNQUFNLE9BQU8sV0FBVztJQVV0QixZQUNVLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFNMUIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5CLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBa0t2QixZQUFPLEdBQUcsc0NBQXNDLENBQUM7SUF6S2pELENBQUM7SUFDRCxRQUFRLEtBQVUsQ0FBQztJQVFuQixLQUFLLENBQUMsZUFBZSxDQUFDLE1BS3JCO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUM5QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1FBQ2xELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUgsS0FBSyxDQUFDLHNCQUFzQixDQUFDLElBQVcsRUFBQyxTQUFnQjtRQUN2RCxPQUFPLENBQUMs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QkFBbUIsQ0FBQztRQUN0QixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJO2FBQ3pCLEdBQUcsQ0FBTSxHQUFHLENBQUM7YUFDYixTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNaLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDYixPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO1FBQ0wsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzt3R0EzTVUsV0FBVzs0R0FBWCxXQUFXLGNBRlYsTUFBTTsyRkFFUCxXQUFXO2tCQUh2QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFdmVudFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNvY2tldCwgaW8gfSBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbi8vIGltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vZW52aXJvbm1lbnQnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1haW5TZXJ2aWNlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwcm9kdWN0aW9uOiBhbnk7XHJcbiAgYXBpSG9zdDogYW55O1xyXG4gIGFwaVBvcnQ6IGFueTtcclxuICBzb2NrZXRQb3J0OiBhbnk7XHJcbiAgbG9naW5XaXRoUGFzc3dvcmQ6IGFueTtcclxuICBodHRwVXJsOiBhbnk7XHJcbiAgaG9zdFdpdGhSZXR1cm5Vcmw6YW55XHJcbiAgdXJsUGFzc0FjY3RJRDphbnk7XHJcbiAgdXJsUGFzc1JldHVybmZwYXRoOmFueTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudFxyXG4gICBcclxuICApIHtcclxuXHJcbiAgfVxyXG4gIG5nT25Jbml0KCk6IHZvaWQge31cclxuICBsb2dpbmZsYWcgPSBmYWxzZTtcclxuICBsb2dvdXRmbGFnID0gZmFsc2U7XHJcbiAgYl9hY2N0X2lkOiBhbnk7XHJcbiAgYWxsQWNjb3VudHMgPSBbXTtcclxuICBjb21wb25lbnRDb2RlID0ge307XHJcbiAgc2VsZWN0ZWRBY2NvdW50ID0gbnVsbDtcclxuXHJcbiAgYXN5bmMgZ2V0QWxsRW52Q29uZmlnKG9iamVjdDoge1xyXG4gICAgYXBpSG9zdDogc3RyaW5nO1xyXG4gICAgYXBpUG9ydDogbnVtYmVyO1xyXG4gICAgbG9naW5XaXRoUGFzc3dvcmQ6IGJvb2xlYW47XHJcbiAgICBob3N0QXBwOiBhbnlcclxuICB9KSB7XHJcbiAgICB0aGlzLmFwaUhvc3QgPSBvYmplY3QuYXBpSG9zdDtcclxuICAgIHRoaXMuYXBpUG9ydCA9IG9iamVjdC5hcGlQb3J0O1xyXG4gICAgdGhpcy5sb2dpbldpdGhQYXNzd29yZCA9IG9iamVjdC5sb2dpbldpdGhQYXNzd29yZDtcclxuICAgIHRoaXMuaG9zdFdpdGhSZXR1cm5VcmwgPSBvYmplY3QuaG9zdEFwcDtcclxuICAgIHRoaXMuaHR0cFVybCA9IHRoaXMuYXBpSG9zdCArICc6JyArIHRoaXMuYXBpUG9ydDtcclxuICAgIGNvbnNvbGUubG9nKCdTRUNVUklUWS1BUEkgQCAnICsgdGhpcy5odHRwVXJsICsgJyBpcyBiZWluZyB1c2VkLicpO1xyXG4gIH1cclxuXHJcbmFzeW5jIGdldFJldHVlblVybFdpdGhBY2N0SUQoYWNjdDpOdW1iZXIscmV0dXJuVXJsOlN0cmluZyl7XHJcbiAgY29uc29sZS5sb2coJ1VybCBwYXNzIGFjY3QgSUQ6JywgYWNjdCk7XHJcbiAgXHJcbnRoaXMudXJsUGFzc0FjY3RJRCA9IGFjY3Q7XHJcbnRoaXMudXJsUGFzc1JldHVybmZwYXRoPSByZXR1cm5Vcmw7XHJcblxyXG59XHJcblxyXG4gIGFzeW5jIGdldEN1cnJlbnRMZWdhbEVudGl0eShwYXJ0eTogYW55KSB7XHJcbiAgICBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5odHRwXHJcbiAgICAgIC5nZXQ8YW55PihcclxuICAgICAgICB0aGlzLmh0dHBVcmwgKyAnL3N5c3RlbWRhdGEvbGVnYWxlbnRpdHkvZ2V0Y3VycmVudGxlZ2FsZW50aXR5JyArIHBhcnR5XHJcbiAgICAgIClcclxuICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICB9KTtcclxuICAgIHJldHVybiByZXNwO1xyXG4gIH1cclxuICB2YWxpZGF0ZVBob25lTnVtYmVyKGlucHV0X3N0cjogYW55KSB7XHJcbiAgICB2YXIgcmUgPSAvXltcXCtdP1soXT9bMC05XXszfVspXT9bLVxcc1xcLl0/WzAtOV17M31bLVxcc1xcLl0/WzAtOV17NCw2fSQvaW07XHJcbiAgICByZXR1cm4gcmUudGVzdChpbnB1dF9zdHIpO1xyXG4gIH1cclxuICB2YWxpZGF0ZUVtYWlsKGlucHV0X3N0cjogYW55KSB7XHJcbiAgICB2YXIgcmUgPVxyXG4gICAgICAvXlthLXpBLVowLTkuISMkJSYnKisvPT9eX2B7fH1+LV0rQFthLXpBLVowLTktXSsoPzpcXC5bYS16QS1aMC05LV0rKSokL2ltO1xyXG4gICAgcmV0dXJuIHJlLnRlc3QoaW5wdXRfc3RyKTtcclxuICB9XHJcbiAgYXN5bmMgZ2V0QWxsQ3VycmVudEFjY291dG5zKCkge1xyXG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IHRoaXMuaHR0cFxyXG4gICAgICAuZ2V0PGFueT4odGhpcy5odHRwVXJsICsgJy9zeXN0ZW1kYXRhL2xlZ2FsZW50aXR5L2dldGN1cnJlbnRBY2NvdW50cycpXHJcbiAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgfSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKHJlc3ApXHJcbiAgICByZXR1cm4gcmVzcDtcclxuICB9XHJcbiAgYXN5bmMgbG9naW5FUlAob2JqOiBhbnkpIHtcclxuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLmh0dHBcclxuICAgICAgLnBvc3Q8YW55Pih0aGlzLmh0dHBVcmwgKyAnL3N5c3RlbWRhdGEvYXV0aGVudGljYXRpb24vbG9naW4nLCBvYmopXHJcbiAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgfSk7XHJcbiAgICByZXR1cm4gcmVzcDtcclxuICB9XHJcbiAgLy8gYXN5bmMgR2VudG9rZW4oZGF0YTphbnkpIHtcclxuICAvLyBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLmh0dHBVcmwgKyAnL3N5c3RlbWRhdGEvYXV0aGxvZ2luand0L2dlbmVyYXRlVG9rZW4nLCBkYXRhKS50b1Byb21pc2UoKS50aGVuKHJlcyA9PiB7XHJcbiAgLy8gICByZXR1cm4gcmVzO1xyXG5cclxuICAvLyAgIH0pO1xyXG4gIC8vIHJldHVybiByZXNwO1xyXG5cclxuICBhc3luYyBnZW5lcmF0ZVRva2VucyhkYXRhOiBhbnkpIHtcclxuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLmh0dHBcclxuICAgICAgLnBvc3Q8YW55Pih0aGlzLmh0dHBVcmwgKyAnL2p3dC9nZW5lcmF0ZVRva2VucycsIGRhdGEpXHJcbiAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgfSk7XHJcbiAgICByZXR1cm4gcmVzcDtcclxuICB9XHJcbiAgYXN5bmMgdmVyZml5VG9rZW5zKG9iajogYW55KSB7XHJcbiAgICBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0PGFueT4odGhpcy5odHRwVXJsICsgJy9qd3QvVmVyaWZ5VG9rZW5zJywgb2JqKVxyXG4gICAgICAudG9Qcm9taXNlKClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3A7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRyZXNvdXJjZWJ5cm9sZWNkKG9iajogYW55KSB7XHJcbiAgICBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5odHRwXHJcbiAgICAgIC5nZXQ8YW55Pih0aGlzLmh0dHBVcmwgKyAnL2FkbWluL3Jlc291cmNlL2dldHJlc291cmNlYnlyb2xlY2QnICsgb2JqKVxyXG4gICAgICAudG9Qcm9taXNlKClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3A7XHJcbiAgfVxyXG4gIGFzeW5jIGdldGFjY291bnRtb2R1bGUob2JqOiBhbnkpIHtcclxuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLmh0dHBcclxuICAgICAgLmdldDxhbnk+KHRoaXMuaHR0cFVybCArICcvc3lzdGVtZGF0YS9sZWdhbGVudGl0eS9nZXRhY2NvdW50bW9kdWxlJyArIG9iailcclxuICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICB9KTtcclxuICAgIHJldHVybiByZXNwO1xyXG4gIH1cclxuICBhc3luYyBnZXRBbGxBc3NpZ25lZENvbXBvbmVudHMoYWNjdF9pZDogYW55KSB7XHJcbiAgICBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5odHRwXHJcbiAgICAgIC5nZXQ8YW55Pih0aGlzLmh0dHBVcmwgKyAnL21kL3Jlc291cmNlL2dldHJlc291cmNlYnlyb2xlY2QnICsgYWNjdF9pZClcclxuICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICB9KTtcclxuICAgIHJldHVybiByZXNwO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0Q3VycmVudFVzZXJGcm9tQWRtaW4ob2JqOiBhbnkpIHtcclxuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLmh0dHBcclxuICAgICAgLmdldDxhbnk+KHRoaXMuaHR0cFVybCArICcvYWRtaW4vdXNlci9nZXRjdXJyZW50dXNlcicgKyBvYmopXHJcbiAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgfSk7XHJcbiAgICByZXR1cm4gcmVzcDtcclxuICB9XHJcbiAgYXN5bmMgY3JlYXRlbG9naW5JbmZvKG9iajogYW55KSB7XHJcbiAgICBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0PGFueT4odGhpcy5odHRwVXJsICsgJy9zeXN0ZW1kYXRhL2xvZ2luSW5mby9jcmVhdGVsb2dpbkluZm8nLCBvYmopXHJcbiAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgfSk7XHJcbiAgICByZXR1cm4gcmVzcDtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldEN1cnJlbnRVc2VyRnJvbU1EKG9iajogYW55KSB7XHJcbiAgICBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5odHRwXHJcbiAgICAgIC5nZXQ8YW55Pih0aGlzLmh0dHBVcmwgKyAnL21kL3VzZXIvZ2V0Y3VycmVudHVzZXInICsgb2JqKVxyXG4gICAgICAudG9Qcm9taXNlKClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3A7XHJcbiAgfVxyXG4gIGFzeW5jIHNlbmRNc2cobW9iaWxlOiBhbnkpIHtcclxuICAgIC8vIHZhciBzdHIgPSBcImh0dHBzOi8vMmZhY3Rvci5pbi9BUEkvVjEvZjViMzM0NTUtODM4YS0xMWVhLTlmYTUtMDIwMGNkOTM2MDQyL1NNUy9cIiArIG1vYmlsZSArIFwiL1wiICsgb3RwICsgXCIvRVJQVVBEQVwiXHJcbiAgICB2YXIgc3RyID1cclxuICAgICAgJ2h0dHBzOi8vMmZhY3Rvci5pbi9BUEkvVjEvJyArXHJcbiAgICAgIHRoaXMuYXBpX2tleSArXHJcbiAgICAgICcvU01TLycgK1xyXG4gICAgICBtb2JpbGUgK1xyXG4gICAgICAnL0FVVE9HRU4nO1xyXG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IHRoaXMuaHR0cFxyXG4gICAgICAuZ2V0PGFueT4oc3RyKVxyXG4gICAgICAudG9Qcm9taXNlKClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3A7XHJcbiAgfVxyXG5cclxuICBhcGlfa2V5ID0gJ2M2NTA0ZmRkLTBjYTktMTFlZC05YzEyLTAyMDBjZDkzNjA0Mic7XHJcbiAgYXN5bmMgdmVyaWZ5TXNnKG90cF9lbnRlcmVkX2J5X3VzZXI6IGFueSwgc2Vzc2lvbl9pZDogYW55KSB7XHJcbiAgICB2YXIgc3RyID1cclxuICAgICAgJ2h0dHBzOi8vMmZhY3Rvci5pbi9BUEkvVjEvJyArXHJcbiAgICAgIHRoaXMuYXBpX2tleSArXHJcbiAgICAgICcvU01TL1ZFUklGWS8nICtcclxuICAgICAgc2Vzc2lvbl9pZCArXHJcbiAgICAgICcvJyArXHJcbiAgICAgIG90cF9lbnRlcmVkX2J5X3VzZXI7XHJcbiAgICBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5odHRwXHJcbiAgICAgIC5nZXQ8YW55PihzdHIpXHJcbiAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIHJldHVybiByZXNwO1xyXG4gIH1cclxufVxyXG4iXX0=