import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./main.service";
export class SecurityService {
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
SecurityService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SecurityService, deps: [{ token: i1.Router }, { token: i2.MainService }], target: i0.ɵɵFactoryTarget.Injectable });
SecurityService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SecurityService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SecurityService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i2.MainService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJpdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3NlY3VyaXR5L3NyYy9saWIvc2VjdXJpdHkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sSUFBSSxNQUFNLGFBQWEsQ0FBQzs7OztBQUsvQixNQUFNLE9BQU8sZUFBZTtJQU0xQixZQUFvQixNQUFjLEVBQVUsT0FBb0I7UUFBNUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWE7SUFBRyxDQUFDO0lBRXBFLEtBQUssQ0FBQyxlQUFlO1FBQ25CLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ3pELElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNsRSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixNQUFNLGVBQWUsR0FBRyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFakQsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTtZQUN6RCxJQUNFLGNBQWMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksU0FBUztnQkFDOUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLEVBQ3pDO2dCQUNBLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUNsQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUMzQztTQUNGO2FBQU07WUFDTCxJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFFbEMsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVoRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLEVBQUU7Z0JBQzFCLGNBQWMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUUvRCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxFQUFFO29CQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDM0M7cUJBQU07b0JBQ0wsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztxQkFDbEQ7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7cUJBQ2xEO2lCQUNGO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDbEM7U0FDRjtJQUNILENBQUM7SUFFRCxZQUFZO1FBQ1YsS0FBSyxNQUFNLE9BQU8sSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDN0MsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDL0I7U0FDRjtJQUNILENBQUM7OzRHQXpEVSxlQUFlO2dIQUFmLGVBQWUsY0FGZCxNQUFNOzJGQUVQLGVBQWU7a0JBSDNCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1haW5TZXJ2aWNlIH0gZnJvbSAnLi9tYWluLnNlcnZpY2UnO1xyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlTZXJ2aWNlIHtcclxuICBwYXJhbV9qd3Q6IGFueTtcclxuICBtb2R1bGVfaW5kZXg6IGFueTtcclxuICBob3N0V2l0aFJldHVyblVybHM6IGFueTtcclxuICBjdXJyZW50T3JpZ2luOiBhbnk7XHJcbiAgZnBhdGg6IGFueTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIG1haW5TVkM6IE1haW5TZXJ2aWNlKSB7fVxyXG5cclxuICBhc3luYyBpc0F1dGhlbnRpY2F0ZWQoKSB7XHJcbiAgICB0aGlzLmhvc3RXaXRoUmV0dXJuVXJscyA9IHRoaXMubWFpblNWQy5ob3N0V2l0aFJldHVyblVybDtcclxuICAgIHRoaXMuY3VycmVudE9yaWdpbiA9IGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3RuYW1lO1xyXG4gICAgY29uc29sZS50YWJsZSh0aGlzLmhvc3RXaXRoUmV0dXJuVXJscyk7XHJcbiAgICB0aGlzLmdldEhvc3RGcGF0aCgpO1xyXG4gICAgY29uc3QgdXJsU2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICAgIHRoaXMucGFyYW1fand0ID0gdXJsU2VhcmNoUGFyYW1zLmdldCgnaWQnKTtcclxuICAgIHRoaXMubW9kdWxlX2luZGV4ID0gdXJsU2VhcmNoUGFyYW1zLmdldCgnZnBhdGgnKTtcclxuXHJcbiAgICBpZiAodGhpcy5wYXJhbV9qd3QgPT0gdW5kZWZpbmVkIHx8IHRoaXMucGFyYW1fand0ID09IG51bGwpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3N2bV9qd3QnKSA9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdzdm1fand0JykgPT0gbnVsbFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4vJyArIHRoaXMuZnBhdGhdKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIG9iaiA9IHsgand0OiB0aGlzLnBhcmFtX2p3dCB9O1xyXG5cclxuICAgICAgdmFyIHJlc3AgPSBhd2FpdCB0aGlzLm1haW5TVkMudmVyZml5VG9rZW5zKG9iaik7XHJcblxyXG4gICAgICBpZiAocmVzcFsnZXJyb3InXSA9PSBmYWxzZSkge1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2VycFVzZXInLCBKU09OLnN0cmluZ2lmeShyZXNwWydlcnBVc2VyJ10pKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdzdm1fand0JywgSlNPTi5zdHJpbmdpZnkocmVzcFsnand0J10pKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubW9kdWxlX2luZGV4ID09IHVuZGVmaW5lZCB8fCB0aGlzLm1vZHVsZV9pbmRleCA9PSBudWxsKSB7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4vJyArIHRoaXMuZnBhdGhdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHJlc3BbJ2VycFVzZXInXVsnYl9hY2N0X2lkJ10gPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4vJyArIHRoaXMubW9kdWxlX2luZGV4XSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4vJyArIHRoaXMubW9kdWxlX2luZGV4XSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFN3YWwuZmlyZSgnRXJyb3IuLi4nLCByZXNwWydtZXNzYWdlJ10sICdlcnJvcicpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRIb3N0RnBhdGgoKSB7XHJcbiAgICBmb3IgKGNvbnN0IGhvc3RhcHAgb2YgdGhpcy5ob3N0V2l0aFJldHVyblVybHMpIHtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudE9yaWdpbiA9PSBob3N0YXBwWydob3N0J10pIHtcclxuICAgICAgICB0aGlzLmZwYXRoID0gaG9zdGFwcFsnZnBhdGgnXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=