// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyD42OIhI0rX5JAKxpZGwf7ADWd1szJRAPg',
    authDomain: 'ingreso-egreso-ngrx.firebaseapp.com',
    databaseURL: 'https://ingreso-egreso-ngrx.firebaseio.com',
    projectId: 'ingreso-egreso-ngrx',
    storageBucket: 'ingreso-egreso-ngrx.appspot.com',
    messagingSenderId: '69841765043',
    appId: '1:69841765043:web:3b391541ec7e8d6e9aa6c6'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
