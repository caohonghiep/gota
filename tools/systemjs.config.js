
/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        //dev mode{
        transpiler: 'ts',
        typescriptOptions: {
            //tsconfig: true
            tsconfig: 'client/tsconfig.json'
        },
        meta: {
            'typescript': {
                "exports": "ts"
            }
        },
        //}dev mode
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'client',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs':                       'npm:rxjs',
            'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
            'angular2-jwt':               'npm:angular2-jwt/angular2-jwt.js',
            'ng-semantic':                'npm:ng-semantic',
            //dev mode{
            'ts':                         'npm:plugin-typescript/lib',
            'typescript':                 'npm:typescript/lib/typescript.js',
            //}dev mode
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.ts',
                defaultExtension: 'ts'
            },
            'ts':{
                main: './plugin.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'ng-semantic': {
                main: 'ng-semantic',
                defaultExtension: 'js'
            }
        }
    });
})(this);