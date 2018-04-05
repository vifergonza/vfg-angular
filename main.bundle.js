webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<vfg-header></vfg-header>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vfg_common_vfg_common_module__ = __webpack_require__("./src/app/vfg-common/vfg-common.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__develop_develop_module__ = __webpack_require__("./src/app/develop/develop.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__vfg_common_vfg_common_module__["a" /* VfgCommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__develop_develop_module__["a" /* DevelopModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* appRouting */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vfg_common_vfg_default_vfg_default_component__ = __webpack_require__("./src/app/vfg-common/vfg-default/vfg-default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__develop_checklistexample_check_list_example_component__ = __webpack_require__("./src/app/develop/checklistexample/check-list-example.component.ts");



var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__vfg_common_vfg_default_vfg_default_component__["a" /* VfgDefaultComponent */] },
    { path: 'checklist', component: __WEBPACK_IMPORTED_MODULE_2__develop_checklistexample_check_list_example_component__["a" /* CheckListComponent */] }
];
var appRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);


/***/ }),

/***/ "./src/app/develop/checklistexample/check-list-example.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-3\">\n<div class=\"alert alert-light\" role=\"alert\">\n  This is a light alert—check it out!\n</div>\n  <div class=\"row\">\n\n    <div class=\"col-sm-6 \">\n      <div class=\"card\">\n        <h5 class=\"card-header\">Lista de grupos</h5>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Seleccione alguno de estos grupos / solistas:</h5>\n    \n          <vfg-check-list [list]=\"grupos\" [label]=\"label\" (update)=\"updateUno($event)\"></vfg-check-list>\n    \n          <blockquote class=\"blockquote mb-0\">\n            <footer class=\"blockquote-footer\">Grupos seleccionados:\n              <cite title=\"Source Title\">{{ selectedUno | json}}</cite>\n            </footer>\n          </blockquote>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-sm-6 \">\n      <div class=\"card\">\n        <h5 class=\"card-header\">Lista de discos</h5>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Seleccione alguno de estos discos:</h5>\n    \n          <vfg-check-list [list]=\"discos\" [label]=\"otralabel\" (update)=\"updateDos($event)\"></vfg-check-list>\n    \n          <blockquote class=\"blockquote mb-0\">\n            <footer class=\"blockquote-footer\">Discos seleccionados:\n              <cite title=\"Source Title\">{{ selectedDos | json}}</cite>\n            </footer>\n          </blockquote>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/develop/checklistexample/check-list-example.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckListComponent = /** @class */ (function () {
    function CheckListComponent() {
        this.grupos = [
            { id: 1, nombre: 'Burning', tipo: 'Banda' },
            { id: 2, nombre: 'Barricada', tipo: 'Banda' },
            { id: 3, nombre: 'Desakato', tipo: 'Banda' },
            { id: 4, nombre: 'Rosendo', tipo: 'Solista' },
            { id: 6, nombre: 'El Drogas', tipo: 'Solista' }
        ];
        this.discos = [
            { cod: 1, title: 'El fin de la década', anyo: 1979 },
            { cod: 2, title: 'Pasion por el ruido', anyo: 1989 },
            { cod: 3, title: 'Para bien o para mal', anyo: 1994 },
            { cod: 4, title: 'Un dia nada más', anyo: 2016 }
        ];
        this.label = "nombre";
        this.otralabel = "title";
    }
    CheckListComponent.prototype.ngOnInit = function () {
    };
    CheckListComponent.prototype.updateUno = function (event) {
        this.selectedUno = event;
    };
    CheckListComponent.prototype.updateDos = function (event) {
        this.selectedDos = event;
    };
    CheckListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'vfg-check-list-example',
            template: __webpack_require__("./src/app/develop/checklistexample/check-list-example.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [])
    ], CheckListComponent);
    return CheckListComponent;
}());



/***/ }),

/***/ "./src/app/develop/develop.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevelopModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vfg_common_vfg_common_module__ = __webpack_require__("./src/app/vfg-common/vfg-common.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checklistexample_check_list_example_component__ = __webpack_require__("./src/app/develop/checklistexample/check-list-example.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DevelopModule = /** @class */ (function () {
    function DevelopModule() {
    }
    DevelopModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__vfg_common_vfg_common_module__["a" /* VfgCommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__checklistexample_check_list_example_component__["a" /* CheckListComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_5__checklistexample_check_list_example_component__["a" /* CheckListComponent */]]
        })
    ], DevelopModule);
    return DevelopModule;
}());



/***/ }),

/***/ "./src/app/vfg-common/vfg-check-list/vfg-check-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/vfg-common/vfg-check-list/vfg-check-list.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"checkForm\">\n  <div class=\"form-group\">\n    <div class=\"custom-control custom-checkbox\" *ngFor=\"let item of checks.controls; let i=index\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"{{label+i}}\" [formControl]=\"item\">\n      <label class=\"custom-control-label\" for=\"{{label+i}}\"> {{getPropertie(i)}} </label>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/vfg-common/vfg-check-list/vfg-check-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VfgCheckListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VfgCheckListComponent = /** @class */ (function () {
    function VfgCheckListComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    VfgCheckListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkForm = this.formBuilder.group({
            checks: this.buildFormItems()
        });
        this.checkForm.valueChanges.subscribe(function (form) {
            var temp = _this.list.filter(function (currentValue, index, arr) {
                return form.checks[index];
            });
            _this.update.emit(temp);
        });
        console.log('ngOnInit', this.list, this.label);
    };
    VfgCheckListComponent.prototype.buildFormItems = function () {
        var _this = this;
        var arr = this.list.map(function (item) {
            return _this.formBuilder.control(false);
        });
        return this.formBuilder.array(arr);
    };
    Object.defineProperty(VfgCheckListComponent.prototype, "checks", {
        get: function () {
            return this.checkForm.get('checks');
        },
        enumerable: true,
        configurable: true
    });
    ;
    VfgCheckListComponent.prototype.getPropertie = function (index) {
        for (var _i = 0, _a = Object.entries(this.list[index]); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (key === this.label) {
                return value;
            }
        }
        return "Not found";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], VfgCheckListComponent.prototype, "list", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], VfgCheckListComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], VfgCheckListComponent.prototype, "update", void 0);
    VfgCheckListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'vfg-check-list',
            template: __webpack_require__("./src/app/vfg-common/vfg-check-list/vfg-check-list.component.html"),
            styles: [__webpack_require__("./src/app/vfg-common/vfg-check-list/vfg-check-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], VfgCheckListComponent);
    return VfgCheckListComponent;
}());



/***/ }),

/***/ "./src/app/vfg-common/vfg-common.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VfgCommonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vfg_header_vfg_header_component__ = __webpack_require__("./src/app/vfg-common/vfg-header/vfg-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vfg_default_vfg_default_component__ = __webpack_require__("./src/app/vfg-common/vfg-default/vfg-default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vfg_check_list_vfg_check_list_component__ = __webpack_require__("./src/app/vfg-common/vfg-check-list/vfg-check-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var VfgCommonModule = /** @class */ (function () {
    function VfgCommonModule() {
    }
    VfgCommonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* appRouting */],
                __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* ReactiveFormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__vfg_header_vfg_header_component__["a" /* VfgHeaderComponent */], __WEBPACK_IMPORTED_MODULE_6__vfg_default_vfg_default_component__["a" /* VfgDefaultComponent */], __WEBPACK_IMPORTED_MODULE_7__vfg_check_list_vfg_check_list_component__["a" /* VfgCheckListComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_5__vfg_header_vfg_header_component__["a" /* VfgHeaderComponent */], __WEBPACK_IMPORTED_MODULE_7__vfg_check_list_vfg_check_list_component__["a" /* VfgCheckListComponent */]]
        })
    ], VfgCommonModule);
    return VfgCommonModule;
}());



/***/ }),

/***/ "./src/app/vfg-common/vfg-default/vfg-default.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/vfg-common/vfg-default/vfg-default.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-4\">Hello, world!</h1>\n  <p class=\"lead\">Esta es un simple aplicación para desarrollar probar y experimentar con Angular, Bootstrap y todas las técnologias web con las que voy practicando.</p>\n  <hr class=\"my-4\">\n  <p>Algunos de los enlaces de la cabecera pueden estar vacíos, pero es una cabecera muy bonita.</p>\n\n</div>"

/***/ }),

/***/ "./src/app/vfg-common/vfg-default/vfg-default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VfgDefaultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VfgDefaultComponent = /** @class */ (function () {
    function VfgDefaultComponent() {
    }
    VfgDefaultComponent.prototype.ngOnInit = function () {
    };
    VfgDefaultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'vfg-default',
            template: __webpack_require__("./src/app/vfg-common/vfg-default/vfg-default.component.html"),
            styles: [__webpack_require__("./src/app/vfg-common/vfg-default/vfg-default.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VfgDefaultComponent);
    return VfgDefaultComponent;
}());



/***/ }),

/***/ "./src/app/vfg-common/vfg-header/vfg-header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/vfg-common/vfg-header/vfg-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n<nav class=\"navbar navbar-expand-lg  navbar-dark bg-danger\">\n  <a class=\"navbar-brand\" [routerLink]=\"'home'\" [routerLinkActive]=\"['active']\">\n  \t\t<img src=\"/assets/angular-vfg.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\" />\n  \t\tVfgAngular\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" \n  \tdata-toggle=\"collapse\" \n  \tdata-target=\"#navbarSupportedContent\" \n  \taria-controls=\"navbarSupportedContent\" \n  \t(click)=\"isCollapsed = !isCollapsed\" \n  \t[attr.aria-expanded]=\"!isCollapsed\"\n  \taria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngbCollapse]=\"isCollapsed\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"'checklist'\" [routerLinkActive]=\"['active']\">Check List</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Accion 1</a>\n      </li>\n\n      <li ngbDropdown class=\"nav-item dropdown\">\n\n      \t<a class=\"nav-link\" id=\"navbarDropdown\" ngbDropdownToggle aria-haspopup=\"true\" aria-expanded=\"false\">Mas</a>\n\n        <div ngbDropdownMenu class=\"dropdown-menu \" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">Action 2</a>\n          <a class=\"dropdown-item\" href=\"#\">Action 3</a>\n          <a class=\"dropdown-item\" href=\"#\">Action 4</a>\n        </div>\n\n      </li>\n\n    </ul>\n  </div>\n</nav>\n\n</header>"

/***/ }),

/***/ "./src/app/vfg-common/vfg-header/vfg-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VfgHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VfgHeaderComponent = /** @class */ (function () {
    function VfgHeaderComponent() {
        this.isCollapsed = true;
    }
    VfgHeaderComponent.prototype.ngOnInit = function () {
    };
    VfgHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'vfg-header',
            template: __webpack_require__("./src/app/vfg-common/vfg-header/vfg-header.component.html"),
            styles: [__webpack_require__("./src/app/vfg-common/vfg-header/vfg-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VfgHeaderComponent);
    return VfgHeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map