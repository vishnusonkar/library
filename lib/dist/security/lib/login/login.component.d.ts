import { ActivatedRoute, Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainService } from '../main.service';
import * as i0 from "@angular/core";
declare enum CheckBoxType {
    APPLY_FOR_JOB = 0,
    MODIFY_A_JOB = 1,
    NONE = 2
}
export declare class LoginComponent implements OnInit {
    private mainService;
    private http;
    private router;
    private route;
    constructor(mainService: MainService, http: HttpClient, router: Router, route: ActivatedRoute);
    check_box_type: typeof CheckBoxType;
    isChecked: CheckBoxType;
    accountlist: Array<any>;
    b_acct_id: any;
    legalentityrecord: any;
    select_acct: boolean;
    openOTP: boolean;
    userdetails: {
        phone_no: undefined;
        password: string;
        email: undefined;
        verify_method: string;
    };
    jwtToken: any;
    parms_acct_id: any;
    urlParams: any;
    assigned_user_modules: [] | any;
    login: {
        module_cd: string;
        role_cd: string;
        assigned_component: {};
        party_name: string;
        assigned_product_cd: string;
        user_id: string;
        contact_email: string;
        phone_no: string;
        ident_verify_secret: string;
        party_dob: string;
        party_type: string;
    };
    error_flag1: any;
    selectedaccount: any;
    party_name: any;
    assigned_User_Roles: [] | any;
    allComponentCode: Array<any>;
    AllUserRole: [] | any;
    product_cd: [] | any;
    legal_mobile_no: any;
    audit_info_obj: {
        user_id: string;
        login_time: null;
        login_ip: null;
        login_browser: null;
        latitude: null;
        longitude: null;
        active_from_time: null;
        logout_time: null;
        login_type: string;
        status: string;
        login_id: undefined;
        password: null;
        message: string;
    };
    otpuser: {
        mobile_number: string;
        otp_no: string;
    };
    otp_flag: boolean;
    ipAddress: any;
    browser: any;
    date: any;
    lat: any;
    lng: any;
    zoom: any;
    session_id: any;
    loginpass_flag: boolean;
    verfiy_token_obj: {
        authtoken: string;
    };
    solnHostUrl: any;
    pubHostUrl: any;
    hostWithReturnUrls: any;
    currentOrigin: any;
    urlPassAcctID: any;
    urlPassReturnfpath: any;
    fpath: any;
    ngOnInit(): void;
    getHostFpath(): void;
    IPAddressofUser(): void;
    UserBrowserName(): "edge" | "opera" | "chrome" | "ie" | "firefox" | "safari" | "other";
    geoLocation(): void;
    ngAfterContentInit(): Promise<void>;
    selectCheckBox(targetType: CheckBoxType): void;
    getCurrentLegalEntity(): Promise<void>;
    selectOneAccount(): Promise<void>;
    selectMultiAccount(): Promise<void>;
    changeaccount(b_acct_id: any): void;
    SubmitAccount(): Promise<void>;
    submit(): Promise<void>;
    getAccountModule(b_acct_id: any): Promise<never[]>;
    getUserRoleInfo(): Promise<void>;
    audit_insert(audit_info_obj: any): Promise<void>;
    finalSubmit(): Promise<void>;
    getAllAssignedComponent(b_acct_id: any, role_cd: any): Promise<any[]>;
    getSetPartyName(): Promise<any>;
    sendOtp(): Promise<void>;
    LoginWithOtp(): Promise<void>;
    Social_login(goggle: any): Promise<void>;
    goback(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoginComponent, "lib-login", never, {}, {}, never, never>;
}
export {};
