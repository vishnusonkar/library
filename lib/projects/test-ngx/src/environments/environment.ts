// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiHost: 'http://erpdev.svayamtech.com',
  apiPort: 3000,
  socketPort: 3002,
  loginWithPassword: true,
  workflow: false,
  hostApp: [
    {
      name: 'adminstration',
      host: 'http://administration.com',
      fpath: 'md/index',
    },
    {
      name: 'solnAdmin',
      host: 'http://222localhost',
      fpath: 'solution-admin/index',
    },
    { name: 'hrms', host: 'http://erpdev.hrms.com', fpath: 'hrms/index' },
    {
      name: 'prop',
      host: 'http://erpdev.property.com',
      fpath: 'property/index',
    },
    {
      name: 'account',
      host: 'http://localhost',
      fpath: 'accounts/index',
    },
    { name: 'eng', host: 'http://erpdev.eng.com', fpath: 'eng/index' },
    { name: 'emb', host: 'http://erpdev.emb.com', fpath: 'emb/index' },
    { name: 'dd', host: 'http://dddev.svayamtech.com' },
    {
      name: 'erppublic',
      host: 'http://22localhost',
      fpath: 'publi/index',
    },
  ],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
//  adminstration: {
//       host: 'http://erpdev.administration.com',
//       fpath: 'md/index',
//     },
//     solnAdmin: { host: 'http://localhost', fpath: 'solution-admin/index' },
//     hrms: { host: 'http://erpdev.hrms.com', fpath: 'hrms/index' },
//     prop: { host: 'http://erpdev.property.com', fpath: 'property/index' },
//     account: { host: 'http://erpdev.accounts.com', fpath: 'accounts/index' },
//     eng: { host: 'http://erpdev.eng.com', fpath: 'eng/index' },
//     emb: { host: 'http://erpdev.emb.com', fpath: 'emb/index' },
//     dd: { host: 'http://dddev.svayamtech.com' },
