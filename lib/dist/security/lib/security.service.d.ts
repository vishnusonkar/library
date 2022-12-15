import { Router } from '@angular/router';
import { MainService } from './main.service';
import * as i0 from "@angular/core";
export declare class SecurityService {
    private router;
    private mainSVC;
    param_jwt: any;
    module_index: any;
    hostWithReturnUrls: any;
    currentOrigin: any;
    fpath: any;
    constructor(router: Router, mainSVC: MainService);
    isAuthenticated(): Promise<void>;
    getHostFpath(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SecurityService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SecurityService>;
}
