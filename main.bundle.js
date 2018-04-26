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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__develop_develop_module__ = __webpack_require__("./src/app/develop/develop.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vfg_common_vfg_common_module__ = __webpack_require__("./src/app/vfg-common/vfg-common.module.ts");
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
                __WEBPACK_IMPORTED_MODULE_5__vfg_common_vfg_common_module__["a" /* VfgCommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__develop_develop_module__["a" /* DevelopModule */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__develop_agenda_agenda_component__ = __webpack_require__("./src/app/develop/agenda/agenda.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__develop_flat_array_pipe_example_flat_array_pipe_example_component__ = __webpack_require__("./src/app/develop/flat-array-pipe-example/flat-array-pipe-example.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__develop_map_iterable_example_map_iterable_example_component__ = __webpack_require__("./src/app/develop/map-iterable-example/map-iterable-example.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__develop_drop_down_list_example_drop_down_list_example_component__ = __webpack_require__("./src/app/develop/drop-down-list-example/drop-down-list-example.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__develop_array_list_service_example_array_list_service_example_component__ = __webpack_require__("./src/app/develop/array-list-service-example/array-list-service-example.component.ts");








var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__vfg_common_vfg_default_vfg_default_component__["a" /* VfgDefaultComponent */] },
    { path: 'checklist', component: __WEBPACK_IMPORTED_MODULE_2__develop_checklistexample_check_list_example_component__["a" /* CheckListComponent */] },
    { path: 'agenda', component: __WEBPACK_IMPORTED_MODULE_3__develop_agenda_agenda_component__["a" /* AgendaComponent */] },
    { path: 'flatarraypipe', component: __WEBPACK_IMPORTED_MODULE_4__develop_flat_array_pipe_example_flat_array_pipe_example_component__["a" /* FlatArrayPipeExampleComponent */] },
    { path: 'mapiterablepipe', component: __WEBPACK_IMPORTED_MODULE_5__develop_map_iterable_example_map_iterable_example_component__["a" /* MapIterableExampleComponent */] },
    { path: 'dropdownlist', component: __WEBPACK_IMPORTED_MODULE_6__develop_drop_down_list_example_drop_down_list_example_component__["a" /* DropDownListExampleComponent */] },
    { path: 'arrayService', component: __WEBPACK_IMPORTED_MODULE_7__develop_array_list_service_example_array_list_service_example_component__["a" /* ArrayListServiceExampleComponent */] }
];
var appRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);


/***/ }),

/***/ "./src/app/develop/agenda/agenda.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/develop/agenda/agenda.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-md-3\">\n\n  <div class=\"row\">\n    <div class=\"col-sm-3 \">\n\n      <div class=\"card\">\n        <h5 class=\"card-header\">Filtro deportes</h5>\n        <div class=\"card-body\">\n          <vfg-check-list [list]=\"deportes\" label=\"nombre\" (update)=\"filtrarDeportes($event)\"></vfg-check-list>\n        </div>\n      </div>\n\n      <div class=\"card\">\n        <h5 class=\"card-header\">Filtro instalaciones</h5>\n        <div class=\"card-body\">\n          <vfg-check-list [list]=\"instalaciones\" label=\"nombre\" (update)=\"filtrarInstalaciones($event)\"></vfg-check-list>\n        </div>\n      </div>\n\n      <div class=\"card\">\n        <h5 class=\"card-header\">Reservas</h5>\n        <div class=\"card-body\">\n          <div class=\"btn-group-vertical\">\n           <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addReserva()\">Añadir</button>\n           <button type=\"button\" class=\"btn btn-primary btn-sm\"(click)=\"removeReserva()\">Quitar</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"panel1\" class=\"col-sm-9\">\n    <ngb-panel id=\"panel1\">\n      <ng-template ngbPanelTitle>\n        <span>Miercoles 5</span>\n      </ng-template>\n      <ng-template ngbPanelContent>\n        <div class=\"container-fluid m-0 p-0 border border-top-0 border-right-0 border-left-0\" *ngFor=\"let item of reservas; let last=last\" \n        [ngClass]=\"{'border-bottom-0': last || !item.visible}\">\n       <reserva *ngIf=\"item.visible\" [reserva]=\"item\"></reserva>\n     </div>\n      </ng-template>\n    </ngb-panel>\n  </ngb-accordion>\n</div>\n"

/***/ }),

/***/ "./src/app/develop/agenda/agenda.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendaComponent; });
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

var AgendaComponent = /** @class */ (function () {
    function AgendaComponent() {
        this.isCollapsed = true;
        this.filtro = {
            deportes: [],
            instalaciones: []
        };
        this.deportes = [
            { nombre: "Baloncesto", logo: "" },
            { nombre: "Padel", logo: "" },
            { nombre: "Tenis", logo: "" },
            { nombre: "Hockey", logo: "" },
            { nombre: "Natacion", logo: "" }
        ];
        this.instalaciones = [
            { nombre: "Polideportivo del Llano", logo: "" },
            { nombre: "La calzada", logo: "" },
            { nombre: "La arena", logo: "" }
        ];
        this.reservas = [
            {
                visible: true,
                inicio: "10:00",
                fin: "11:00",
                estado: "Reservada",
                deportes: [
                    { nombre: "Baloncesto", logo: "" },
                    { nombre: "Padel", logo: "" },
                    { nombre: "Tenis", logo: "" },
                    { nombre: "Hockey", logo: "" }
                ],
                modulos: [
                    {
                        instalacion: "Polideportivo del Llano",
                        modulo: "a.Mod.3",
                        descripcion: "Es un módulo muy bonito",
                        tarifa: "7,5",
                        deportes: [
                            { nombre: "Baloncesto", logo: "" },
                            { nombre: "Hockey", logo: "" }
                        ]
                    },
                    {
                        instalacion: "Polideportivo del Llano",
                        modulo: "a.Mod.4",
                        descripcion: "Tambien es un módulo muy bonito",
                        tarifa: "7,5",
                        deportes: [
                            { nombre: "Baloncesto", logo: "" },
                            { nombre: "Hockey", logo: "" }
                        ]
                    },
                    {
                        instalacion: "Polideportivo del Llano",
                        modulo: "p.Mod.1",
                        descripcion: "Módulo al aire libre.",
                        tarifa: "3,5",
                        deportes: [
                            { nombre: "Padel", logo: "" }
                        ]
                    },
                    {
                        instalacion: "La Calzada",
                        modulo: "t.Mod.1",
                        descripcion: "Pista cubierta.",
                        tarifa: "5,5",
                        deportes: [
                            { nombre: "Tenis", logo: "" }
                        ]
                    }
                ]
            }
        ];
    }
    AgendaComponent.prototype.ngOnInit = function () {
    };
    AgendaComponent.prototype.addReserva = function () {
        this.reservas.push(this.reservas[0]);
    };
    AgendaComponent.prototype.removeReserva = function () {
        if (this.reservas.length > 1) {
            this.reservas.pop();
        }
    };
    AgendaComponent.prototype.filtrarDeportes = function (event) {
        console.log('filtrarDeportes', event);
        this.filtro.deportes = event;
        this.aplicarFiltro();
    };
    AgendaComponent.prototype.aplicarFiltro = function () {
        var _this = this;
        this.reservas.forEach(function (item) {
            var deporteFound = false;
            if (_this.filtro.deportes.length < 1) {
                deporteFound = true;
            }
            else {
                _this.filtro.deportes.forEach(function (deporteFiltro) {
                    item.deportes.forEach(function (deporteReserva) {
                        if (deporteFiltro.nombre === deporteReserva.nombre) {
                            deporteFound = true;
                        }
                    });
                });
            }
            // comprobar instalaciones
            var instalacionFound = false;
            if (_this.filtro.instalaciones.length < 1) {
                instalacionFound = true;
            }
            else {
                _this.filtro.instalaciones.forEach(function (instalacionFiltro) {
                    item.modulos.forEach(function (moduloReserva) {
                        if (moduloReserva.instalacion === instalacionFiltro.nombre) {
                            instalacionFound = true;
                        }
                    });
                });
            }
            console.log(deporteFound, instalacionFound);
            item.visible = deporteFound && instalacionFound;
        });
    };
    AgendaComponent.prototype.filtrarInstalaciones = function (event) {
        console.log('filtrarInstalaciones', event);
        this.filtro.instalaciones = event;
        this.aplicarFiltro();
    };
    ;
    AgendaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'agenda',
            template: __webpack_require__("./src/app/develop/agenda/agenda.component.html"),
            styles: [__webpack_require__("./src/app/develop/agenda/agenda.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AgendaComponent);
    return AgendaComponent;
}());



/***/ }),

/***/ "./src/app/develop/array-list-service-example/array-list-service-example.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/develop/array-list-service-example/array-list-service-example.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt3\">\n  <div class=\"alert alert-light\" role=\"alert\">\n    A continuación vemos el resultado de aplicar los métodos del servicio a varias listas.\n    El criterio para determinar que dos elementos sean iguales sera el campo <strong>nombre</strong>.\n  </div>\n  <div class=\"alert alert-success\" role=\"alert\">\n    <h4 class=\"alert-heading\">Eliminar elemento.</h4>\n    <p class=\"mb-0\">{{ deportes | json }}</p>\n  </div>\n  <div class=\"row m-1 border rounded\">\n    <div class=\"col-4 bg-light\">\n      <p>Eliminamos un elemento.</p>\n      <p>removeElement: {{ item | json }}</p>\n    </div>\n    <div class=\"col-8\">\n      {{ remove | json}}\n    </div>\n  </div>\n\n  <div class=\"alert alert-success\" role=\"alert\">\n    <h4 class=\"alert-heading\">Actualizamos listas.</h4>\n    <p class=\"mb-0\"><strong>Deportes:</strong> {{ deportes | json }}</p>\n    <p class=\"mb-0\"><strong>Deportes nuevos:</strong> {{ deportesNuevos | json }}</p>\n  </div>\n  <div class=\"row m-1 border rounded\">\n    <div class=\"col-4 bg-light\">\n    \t<p>Actualizamos un array con los datos de otro.</p>\n        <p>updateElement:</p>\n    </div>\n    <div class=\"col-8\">\n      <p><strong>Array original:</strong> {{ update | json}}</p>\n      <p><strong>Array con los datos nuevos:</strong> {{ copiaNuevos | json}}</p>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/develop/array-list-service-example/array-list-service-example.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrayListServiceExampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vfg_common_array_utils_service__ = __webpack_require__("./src/app/vfg-common/array-utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArrayListServiceExampleComponent = /** @class */ (function () {
    function ArrayListServiceExampleComponent(arrayService) {
        this.arrayService = arrayService;
        this.deportes = [
            { nombre: "Baloncesto", logo: "" },
            { nombre: "Padel", logo: "" },
            { nombre: "Polideportivo del Llano", logo: "" },
            { nombre: "Tenis", logo: "" },
            { nombre: "Hockey", logo: "" },
            { nombre: "Natacion", logo: "" },
            { nombre: "Polideportivo del Llano", logo: "" },
            { nombre: "La calzada", logo: "" }
        ];
        this.deportesNuevos = [
            { nombre: "Baloncesto", logo: "" },
            { nombre: "Padel", logo: "" },
            { nombre: "Tenis", logo: "" },
            { nombre: "Natacion", logo: "" },
            { nombre: "Golf", logo: "" },
            { nombre: "Petanca", logo: "" }
        ];
        this.item = { nombre: "Polideportivo del Llano", logo: "" };
    }
    ArrayListServiceExampleComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ArrayListServiceExampleComponent.prototype, "remove", {
        get: function () {
            var copia = this.deportes.slice();
            this.arrayService.removeElement(copia, this.item, function (x, y) { return x.nombre === y.nombre; });
            return copia;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayListServiceExampleComponent.prototype, "update", {
        get: function () {
            var copia = this.deportes.slice();
            this.copiaNuevos = this.deportesNuevos.slice();
            this.arrayService.updateArray(copia, this.copiaNuevos, function (x, y) { return x.nombre === y.nombre; });
            return copia;
        },
        enumerable: true,
        configurable: true
    });
    ArrayListServiceExampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-array-list-service-example',
            template: __webpack_require__("./src/app/develop/array-list-service-example/array-list-service-example.component.html"),
            styles: [__webpack_require__("./src/app/develop/array-list-service-example/array-list-service-example.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__vfg_common_array_utils_service__["a" /* ArrayUtilsService */]])
    ], ArrayListServiceExampleComponent);
    return ArrayListServiceExampleComponent;
}());



/***/ }),

/***/ "./src/app/develop/checklistexample/check-list-example.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-3\">\n  <div class=\"alert alert-light\" role=\"alert\">\n    A continuación vemos el resultado de aplicar dos listas diferentes, con objetos con estructuras diferentes al componente <strong>vfg-check-list</strong>.\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6 \">\n      <div class=\"card\">\n        <h5 class=\"card-header\">Lista de grupos</h5>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Seleccione alguno de estos grupos / solistas:</h5>\n          <vfg-check-list [list]=\"grupos\" label=\"nombre\" (update)=\"updateUno($event)\"></vfg-check-list>\n          <blockquote class=\"blockquote mb-0\">\n            <footer class=\"blockquote-footer\">Grupos seleccionados:\n              <cite title=\"Source Title\">{{ selectedUno | json}}</cite>\n            </footer>\n          </blockquote>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6 \">\n      <div class=\"card\">\n        <h5 class=\"card-header\">Lista de discos</h5>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Seleccione alguno de estos discos:</h5>\n          <vfg-check-list [list]=\"discos\" label=\"title\" (update)=\"updateDos($event)\"></vfg-check-list>\n          <blockquote class=\"blockquote mb-0\">\n            <footer class=\"blockquote-footer\">Discos seleccionados:\n              <cite title=\"Source Title\">{{ selectedDos | json}}</cite>\n            </footer>\n          </blockquote>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agenda_agenda_component__ = __webpack_require__("./src/app/develop/agenda/agenda.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reserva_reserva_component__ = __webpack_require__("./src/app/develop/reserva/reserva.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__flat_array_pipe_example_flat_array_pipe_example_component__ = __webpack_require__("./src/app/develop/flat-array-pipe-example/flat-array-pipe-example.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__map_iterable_example_map_iterable_example_component__ = __webpack_require__("./src/app/develop/map-iterable-example/map-iterable-example.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__drop_down_list_example_drop_down_list_example_component__ = __webpack_require__("./src/app/develop/drop-down-list-example/drop-down-list-example.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__array_list_service_example_array_list_service_example_component__ = __webpack_require__("./src/app/develop/array-list-service-example/array-list-service-example.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__vfg_common_vfg_common_module__["a" /* VfgCommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__checklistexample_check_list_example_component__["a" /* CheckListComponent */], __WEBPACK_IMPORTED_MODULE_6__agenda_agenda_component__["a" /* AgendaComponent */], __WEBPACK_IMPORTED_MODULE_7__reserva_reserva_component__["a" /* ReservaComponent */],
                __WEBPACK_IMPORTED_MODULE_8__flat_array_pipe_example_flat_array_pipe_example_component__["a" /* FlatArrayPipeExampleComponent */], __WEBPACK_IMPORTED_MODULE_9__map_iterable_example_map_iterable_example_component__["a" /* MapIterableExampleComponent */],
                __WEBPACK_IMPORTED_MODULE_10__drop_down_list_example_drop_down_list_example_component__["a" /* DropDownListExampleComponent */],
                __WEBPACK_IMPORTED_MODULE_11__array_list_service_example_array_list_service_example_component__["a" /* ArrayListServiceExampleComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_5__checklistexample_check_list_example_component__["a" /* CheckListComponent */], __WEBPACK_IMPORTED_MODULE_6__agenda_agenda_component__["a" /* AgendaComponent */], __WEBPACK_IMPORTED_MODULE_8__flat_array_pipe_example_flat_array_pipe_example_component__["a" /* FlatArrayPipeExampleComponent */],
                __WEBPACK_IMPORTED_MODULE_9__map_iterable_example_map_iterable_example_component__["a" /* MapIterableExampleComponent */], __WEBPACK_IMPORTED_MODULE_10__drop_down_list_example_drop_down_list_example_component__["a" /* DropDownListExampleComponent */],
                __WEBPACK_IMPORTED_MODULE_11__array_list_service_example_array_list_service_example_component__["a" /* ArrayListServiceExampleComponent */]]
        })
    ], DevelopModule);
    return DevelopModule;
}());



/***/ }),

/***/ "./src/app/develop/drop-down-list-example/drop-down-list-example.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/develop/drop-down-list-example/drop-down-list-example.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt3\">\r\n  <div class=\"alert alert-light\" role=\"alert\">\r\n    A partir de una lista el componente muestra el primer elemento. Si hacemos click en el muestra el resto de elementos. He añadido un temporizador que va modificando los elementos de las listas que se pasan al componente.\r\n  </div>\r\n  <div class=\"row m-1 border rounded\">\r\n    <div class=\"col-4 bg-light\">\r\n      Lista limitada a 5 elementos.\r\n    </div>\r\n    <div class=\"col-8\">\r\n\t\t<vfg-dropdown-list [list]=\"listaFinita.getStore()\"></vfg-dropdown-list>\r\n    </div>\r\n  </div>\r\n  <div class=\"row m-1 border rounded\">\r\n    <div class=\"col-4 bg-light\">\r\n      Lista ilimitada.\r\n    </div>\r\n    <div class=\"col-8\">\r\n    <vfg-dropdown-list [list]=\"listaInfinita.getStore()\"></vfg-dropdown-list>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/develop/drop-down-list-example/drop-down-list-example.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropDownListExampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vfg_common_util_collections_Queue__ = __webpack_require__("./src/app/vfg-common/util/collections/Queue.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DropDownListExampleComponent = /** @class */ (function () {
    function DropDownListExampleComponent() {
        this.listaFinita = new __WEBPACK_IMPORTED_MODULE_1__vfg_common_util_collections_Queue__["a" /* Queue */](5);
        this.listaInfinita = new __WEBPACK_IMPORTED_MODULE_1__vfg_common_util_collections_Queue__["a" /* Queue */]();
    }
    DropDownListExampleComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            var date = new Date();
            _this.listaFinita.push(date.toString());
        }, 2000);
        setInterval(function () {
            var date = new Date();
            _this.listaInfinita.push(date.toString());
        }, 3000);
    };
    DropDownListExampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-drop-down-list-example',
            template: __webpack_require__("./src/app/develop/drop-down-list-example/drop-down-list-example.component.html"),
            styles: [__webpack_require__("./src/app/develop/drop-down-list-example/drop-down-list-example.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DropDownListExampleComponent);
    return DropDownListExampleComponent;
}());



/***/ }),

/***/ "./src/app/develop/flat-array-pipe-example/flat-array-pipe-example.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/develop/flat-array-pipe-example/flat-array-pipe-example.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt3\">\n  <div class=\"alert alert-light\" role=\"alert\">\n    A continuación vemos el resultado de aplicar <strong>flatArrayPipe</strong> a dos listas diferentes, con objetos con estructuras diferentes y cambiando el campo que queremos mostrar.\n  </div>\n  <div class=\"alert alert-success\" role=\"alert\">\n    <h4 class=\"alert-heading\">Lista de objetos</h4>\n    <p class=\"mb-0\">{{ canciones | json }}</p>\n  </div>\n  <div class=\"row m-1 border rounded\">\n    <div class=\"col-4 bg-light\">\n      {{ labelTitulo }}\n    </div>\n    <div class=\"col-8\">\n      {{ canciones | flatArrayPipe:'titulo' }}\n    </div>\n  </div>\n  <div class=\"row m-1 border rounded\">\n    <div class=\"col-4 bg-light\">\n      {{ labelAutor }}\n    </div>\n    <div class=\"col-8\">\n      {{ canciones | flatArrayPipe:'autor' }}\n    </div>\n  </div>\n  <div class=\"row m-1 border rounded\">\n    <div class=\"col-4 bg-light\">\n      {{ labelDisco }}\n    </div>\n    <div class=\"col-8\">\n      {{ canciones | flatArrayPipe:'disco' }}\n    </div>\n  </div>\n  <div class=\"row m-1 border rounded\">\n    <div class=\"col-4 bg-light\">\n      {{ labelAnyo }}\n    </div>\n    <div class=\"col-8\">\n      {{ canciones | flatArrayPipe:'anyo' }}\n    </div>\n  </div>\n  <div class=\"alert alert-success\" role=\"alert\">\n    <h4 class=\"alert-heading\">Lista de strings</h4>\n    <p  class=\"mb-0\">{{ discos | json }}</p>\n  </div>\n  <div class=\"row m-1 border rounded\">\n    <div class=\"col-4 bg-light\">\n      {{ labelDiscos }}\n    </div>\n    <div class=\"col-8\">\n      {{ discos | flatArrayPipe }}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/develop/flat-array-pipe-example/flat-array-pipe-example.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatArrayPipeExampleComponent; });
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

var FlatArrayPipeExampleComponent = /** @class */ (function () {
    function FlatArrayPipeExampleComponent() {
        this.canciones = [
            { titulo: 'Visperas de destruccion', autor: 'Los suaves', disco: "El jardin de las delicias" },
            { titulo: 'A remar', autor: 'Rosendo' },
            { titulo: 'Frio', autor: 'El Drogas', disco: 'Un dia nada mas' }
        ];
        this.discos = [
            'Memorias de un ser humano',
            'Algazara',
            'Miedo',
            'La edad del fuego'
        ];
        this.labelTitulo = "{{ canciones | flatArrayPipe:'titulo' }}";
        this.labelAutor = "{{ canciones | flatArrayPipe:'autor' }}";
        this.labelDisco = "{{ canciones | flatArrayPipe:'disco' }}";
        this.labelAnyo = "{{ canciones | flatArrayPipe:'anyo' }}";
        this.labelDiscos = "{{ discos | flatArrayPipe }}";
    }
    FlatArrayPipeExampleComponent.prototype.ngOnInit = function () {
    };
    FlatArrayPipeExampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'flat-array-pipe-example',
            template: __webpack_require__("./src/app/develop/flat-array-pipe-example/flat-array-pipe-example.component.html"),
            styles: [__webpack_require__("./src/app/develop/flat-array-pipe-example/flat-array-pipe-example.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FlatArrayPipeExampleComponent);
    return FlatArrayPipeExampleComponent;
}());



/***/ }),

/***/ "./src/app/develop/map-iterable-example/map-iterable-example.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/develop/map-iterable-example/map-iterable-example.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt3\">\r\n  <div class=\"alert alert-light\" role=\"alert\">\r\n    A continuación vemos el resultado de aplicar <strong>mapIterablePipe</strong> a un mapa. Para mostrar el campo value aplicamos flatArrayPipe para serializar el array.\r\n  </div>\r\n  <div class=\"row m-1 border rounded\">\r\n    <div class=\"col-4 bg-light\">\r\n      ngFor=\"let item of discos | mapIterablePipe\"\r\n    </div>\r\n    <div class=\"col-8\">\r\n    \t<ul>\r\n    \t\t<li *ngFor=\"let item of discos | mapIterablePipe\">\r\n    \t\t\tKey: {{ item.key }}, Value: {{item.value | flatArrayPipe:'titulo'}}.\r\n    \t\t</li>\r\n    \t</ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/develop/map-iterable-example/map-iterable-example.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapIterableExampleComponent; });
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

var MapIterableExampleComponent = /** @class */ (function () {
    function MapIterableExampleComponent() {
        this.discos = new Map();
        this.label = "{{ discos | mapIterablePipe | flatArrayPipe:'titulo' }}";
    }
    MapIterableExampleComponent.prototype.ngOnInit = function () {
        var discosBurning = [
            { titulo: 'Madrid', discografica: 'Ocre-Belter', anyo: '1978' },
            { titulo: 'El fin de la década', discografica: 'Ocre-Belter', anyo: '1979' },
            { titulo: 'Bulevar', discografica: 'Ocre-Belter', anyo: '1980' },
            { titulo: 'Noches de Rock & Roll', discografica: 'Belter', anyo: '1984' }
        ];
        this.discos.set('Burning', discosBurning);
        var discosDesakato = [
            { titulo: 'Con el viento de cara', anyo: '2008' },
            { titulo: 'Miseria, sangre y plomo', anyo: '2010' },
            { titulo: 'Insercia', anyo: '2012' },
            { titulo: 'Buen viaje', anyo: '2014' }
        ];
        this.discos.set('Desakato', discosDesakato);
    };
    MapIterableExampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-map-iterable-example',
            template: __webpack_require__("./src/app/develop/map-iterable-example/map-iterable-example.component.html"),
            styles: [__webpack_require__("./src/app/develop/map-iterable-example/map-iterable-example.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapIterableExampleComponent);
    return MapIterableExampleComponent;
}());



/***/ }),

/***/ "./src/app/develop/reserva/reserva.component.css":
/***/ (function(module, exports) {

module.exports = ".bg-modulo:hover {\r\n\tbackground-color: #f8f9fa !important;\r\n}"

/***/ }),

/***/ "./src/app/develop/reserva/reserva.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-1\">\n  <div class=\"row\">\n    <div class=\"col-sm-2 px-0 \">\n      <p class=\"m-0\"> {{ reserva.inicio }} - {{ reserva.fin }}</p>\n    </div>\n    <div class=\"col-sm-9 px-0\">\n      <span class=\"badge badge-success ml-1\">{{reserva.estado | uppercase}}</span>\n      <span class=\"badge badge-secondary ml-1\"*ngFor=\"let item of reserva.deportes\"> {{item.nombre | uppercase}} </span>\n    </div>\n    <div class=\"col-sm-1 px-0\">\n      <button type=\"button\" class=\"btn btn-link btn-sm\" \n      (click)=\"instalacionesCollapsed = !instalacionesCollapsed\" [attr.aria-expanded]=\"!instalacionesCollapsed\" \n      data-toggle=\"tooltip\" data-placement=\"top\"\n      title=\"{{instalacionesCollapsed ? 'Ver módulos' : 'Ocultar módulos'}}\"\n      aria-controls=\"collapseExample\">\n        <i class=\"material-icons\"> {{ instalacionesCollapsed ? 'visibility' : 'visibility_off'  }} </i>\n      </button>\n    </div>\n  </div>\n  <div class=\"row mb-3\" id=\"collapseExample\" [ngbCollapse]=\"instalacionesCollapsed\">\n    <div class=\"col-sm-10 offset-sm-2\">\n      <div class=\"row border bg-modulo\" *ngFor=\"let item of reserva.modulos; let last=last\" \n      [ngClass]=\"{'border-bottom-0': (!last)}\" >\n        <div class=\"col-sm-4\">\n         {{ item.instalacion}} </div>  \n        <div class=\"col-sm-2\" ngbPopover=\"{{item.descripcion}}\" popoverTitle=\"{{item.modulo}}\" triggers=\"mouseenter:mouseleave\" placement=\"top\">{{item.modulo}}</div>\n        <div class=\"col-sm-1\">{{ item.tarifa }}</div>\n        <div class=\"col-sm-5\"> {{ item.deportes | flatArrayPipe: 'nombre' }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/develop/reserva/reserva.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservaComponent; });
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

var ReservaComponent = /** @class */ (function () {
    function ReservaComponent() {
        this.instalacionesCollapsed = true;
    }
    ReservaComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ReservaComponent.prototype, "reserva", void 0);
    ReservaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'reserva',
            template: __webpack_require__("./src/app/develop/reserva/reserva.component.html"),
            styles: [__webpack_require__("./src/app/develop/reserva/reserva.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReservaComponent);
    return ReservaComponent;
}());



/***/ }),

/***/ "./src/app/vfg-common/array-utils.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrayUtilsService; });
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

/**
 * Servicio que ofrece diversas operaciones sobre arrays.
 *
 */
var ArrayUtilsService = /** @class */ (function () {
    function ArrayUtilsService() {
    }
    /**
     * Crea un nuevo array con los siguientes elementos:
     *  - elementos que esten en arrayX y en arrayY.
     *  - elementos que esten en arrayY y no esten en arrayX.
     */
    ArrayUtilsService.prototype.getUpdateArray = function (arrayX, arrayY, areEquals) {
        var resultArray = arrayX.slice();
        this.updateArray(resultArray, arrayY.slice(), areEquals);
        return resultArray;
    };
    /**
     * Elimina todas las ocurrencias de theItem en el array usando areEquals para
     * determinar si dos elementos son iguales.
     */
    ArrayUtilsService.prototype.removeElement = function (theArray, theItem, areEquals) {
        var i = 0;
        while (i < theArray.length) {
            var found = areEquals(theItem, theArray[i]);
            if (found) {
                theArray.splice(i, 1);
            }
            else {
                i++;
            }
        }
    };
    /**
     * Actualiza los elementos del orginalArray con los de newArray:
     *  - añade los elementos que esten en newArray y no esten en originalArray.
     *  - elimina los elementos que esten en el originalArray y no esten en newArray.
     * Al final de la ejecucion, newArray tendrá los elementos añadidos al originalArray.
     */
    ArrayUtilsService.prototype.updateArray = function (originalArray, newArray, areEquals) {
        var indexOriginal = 0;
        while (indexOriginal < originalArray.length) {
            var itemOriginal = newArray.find(function (itemNew) {
                return areEquals(originalArray[indexOriginal], itemNew);
            });
            if (itemOriginal) {
                // Esta en el nuevo y en el original. Lo elimino de nuevo y avanzo en cursor.
                this.removeElement(newArray, itemOriginal, areEquals);
                indexOriginal++;
            }
            else {
                // esta en el original, pero no en el nuevo, lo elimino del original
                originalArray.splice(indexOriginal, 1);
            }
        }
        // Si en este punto quedan elementos en el nuevo, los añado al original
        newArray.forEach(function (x) {
            originalArray.push(x);
        });
    };
    ArrayUtilsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ArrayUtilsService);
    return ArrayUtilsService;
}());



/***/ }),

/***/ "./src/app/vfg-common/pipes/flat-array.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatArrayPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
 * Retorna una cadena de texto compuesta por la contatenacion de los valores de cada
 * elemento del array que recibe.
 * El argumento field permite especificar el campo del objeto que se quiere mostrar.
 * Uso:
 *    [ { nombre: 'Victor', musica: 'Rock'}, { nombre: 'Bea', musica: 'Country'}] | flatArrayPipe: 'nombre'
 *    Retorna: "Victor, Bea"
*/
var FlatArrayPipe = /** @class */ (function () {
    function FlatArrayPipe() {
    }
    FlatArrayPipe.prototype.transform = function (value, field) {
        var _this = this;
        var text = "";
        if (null != value && 0 < value.length) {
            value.forEach(function (item) {
                if (typeof item === 'string') {
                    text = text.concat(", ").concat(item);
                }
                else {
                    text = text.concat(_this.getPropertie(item, field));
                }
            });
            return text.substr(2);
        }
        return text;
    };
    FlatArrayPipe.prototype.getPropertie = function (item, propertie) {
        for (var _i = 0, _a = Object.entries(item); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (key === propertie) {
                return ", ".concat(value);
            }
        }
        return "";
    };
    FlatArrayPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'flatArrayPipe'
        })
    ], FlatArrayPipe);
    return FlatArrayPipe;
}());



/***/ }),

/***/ "./src/app/vfg-common/pipes/map-iterable.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapIterablePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MapIterablePipe = /** @class */ (function () {
    function MapIterablePipe() {
    }
    MapIterablePipe.prototype.transform = function (iterable, args) {
        var result = [];
        iterable.forEach(function (entryVal, entryKey) {
            result.push({
                key: entryKey,
                value: entryVal
            });
        });
        console.log('iterablePipe', iterable, args, result);
        return result;
    };
    MapIterablePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'mapIterablePipe'
        })
    ], MapIterablePipe);
    return MapIterablePipe;
}());



/***/ }),

/***/ "./src/app/vfg-common/util/collections/Queue.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Queue; });
/**
 * Implementacion de una cola FIFO (inserta al final extrae al principio)
 * con una capacidad limitada de elementos.
 */
var Queue = /** @class */ (function () {
    /**
     * Inicializa la cola, permite especificar un tamaño máximo.
     */
    function Queue(theCapacity) {
        this.store = new Array();
        if (theCapacity != null) {
            this.capacity = theCapacity;
        }
        else {
            this.capacity = null;
        }
    }
    /**
     * Añade un elemento al final de la lista. Si alcanzamos el tamaño máximo
     * elimina el elemento mas antiguo de la colleción.
     */
    Queue.prototype.push = function (theObject) {
        if (null != this.capacity && this.capacity == this.store.length) {
            this.store.pop();
        }
        this.store.unshift(theObject);
    };
    /**
     * Retorna y extrae el ultimo elemento de la coleccion
     */
    Queue.prototype.pop = function () {
        if (0 < this.store.length) {
            return this.store.pop();
        }
        else {
            return null;
        }
    };
    /**
     * Retorna la lista de elementos.
     */
    Queue.prototype.getStore = function () {
        return this.store;
    };
    return Queue;
}());



/***/ }),

/***/ "./src/app/vfg-common/vfg-check-list/vfg-check-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/vfg-common/vfg-check-list/vfg-check-list.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"checkForm\">\n  <div class=\"form-group\">\n    <div class=\"custom-control custom-checkbox\" *ngFor=\"let item of checksControls; let i=index\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"{{id.concat(i)}}\" [formControl]=\"item\">\n      <label class=\"custom-control-label\" for=\"{{id.concat(i)}}\"> {{getPropertie(i)}} </label>\n    </div>\n  </div>\n</form>\n"

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
        this.checkForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            checks: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormArray */]([])
        });
        this.id = 'vfg-check-list_'.concat(String(VfgCheckListComponent_1.instanceCounter)).concat('_');
        VfgCheckListComponent_1.instanceCounter++;
        console.log('constructor', this.id);
    }
    VfgCheckListComponent_1 = VfgCheckListComponent;
    VfgCheckListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkForm.valueChanges.subscribe(function (form) {
            var temp = _this.list.filter(function (currentValue, index, arr) {
                return form.checks[index];
            });
            _this.update.emit(temp);
        });
    };
    VfgCheckListComponent.prototype.ngOnChanges = function (changes) {
        if (changes.list.currentValue !== undefined) {
            if (changes.list.currentValue.length > 0) {
                this.checkForm.setControl('checks', this.buildFormItems());
            }
            else {
                this.checkForm.setControl('checks', new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormArray */]([]));
            }
        }
    };
    VfgCheckListComponent.prototype.buildFormItems = function () {
        var _this = this;
        var arr = this.list.map(function (item) {
            return _this.formBuilder.control(false);
        });
        return this.formBuilder.array(arr);
    };
    Object.defineProperty(VfgCheckListComponent.prototype, "checksControls", {
        get: function () {
            if (null != this.checkForm) {
                return this.checkForm.get('checks').controls;
            }
            else {
                return [];
            }
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
    VfgCheckListComponent.instanceCounter = 0;
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
    VfgCheckListComponent = VfgCheckListComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'vfg-check-list',
            template: __webpack_require__("./src/app/vfg-common/vfg-check-list/vfg-check-list.component.html"),
            styles: [__webpack_require__("./src/app/vfg-common/vfg-check-list/vfg-check-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], VfgCheckListComponent);
    return VfgCheckListComponent;
    var VfgCheckListComponent_1;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_flat_array_pipe__ = __webpack_require__("./src/app/vfg-common/pipes/flat-array.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_map_iterable_pipe__ = __webpack_require__("./src/app/vfg-common/pipes/map-iterable.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__vfg_dropdown_list_vfg_dropdown_list_component__ = __webpack_require__("./src/app/vfg-common/vfg-dropdown-list/vfg-dropdown-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__array_utils_service__ = __webpack_require__("./src/app/vfg-common/array-utils.service.ts");
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
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* ReactiveFormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__vfg_header_vfg_header_component__["a" /* VfgHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__vfg_default_vfg_default_component__["a" /* VfgDefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_7__vfg_check_list_vfg_check_list_component__["a" /* VfgCheckListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pipes_flat_array_pipe__["a" /* FlatArrayPipe */],
                __WEBPACK_IMPORTED_MODULE_9__pipes_map_iterable_pipe__["a" /* MapIterablePipe */],
                __WEBPACK_IMPORTED_MODULE_10__vfg_dropdown_list_vfg_dropdown_list_component__["a" /* VfgDropdownListComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__vfg_header_vfg_header_component__["a" /* VfgHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__vfg_check_list_vfg_check_list_component__["a" /* VfgCheckListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pipes_flat_array_pipe__["a" /* FlatArrayPipe */],
                __WEBPACK_IMPORTED_MODULE_9__pipes_map_iterable_pipe__["a" /* MapIterablePipe */],
                __WEBPACK_IMPORTED_MODULE_10__vfg_dropdown_list_vfg_dropdown_list_component__["a" /* VfgDropdownListComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__array_utils_service__["a" /* ArrayUtilsService */]]
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

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-4\">Hello, world!</h1>\n  <p class=\"lead\">Esta es un simple aplicación para desarrollar probar y experimentar con Angular, Bootstrap y todas las técnologias web con las que voy practicando.</p>\n</div>\n<div class=\"container-fluid\">\n  <div class=\"card-deck\">\n    <div class=\"card\">\n      <h5 class=\"card-header\">vfg-check-list</h5>\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Lista de elementos seleccionables.</h5>\n        <p class=\"card-text\">A partir de una lista de elementos de cualquier tipo se crea un formulario reactivo con tantos <em>checks</em> como elementos tenga dicha lista. Cada <em>check</em> esta acompañado de una etiqueta que se informa con el valor de la propiedad del objeto que se le indique.</p>\n        <a [routerLink]=\"'/checklist'\" class=\"btn btn-primary\">Check List</a>\n        <a [routerLink]=\"'/agenda'\" class=\"btn btn-primary\">Agenda</a>\n      </div>\n    </div>\n    <div class=\"card\">\n      <h5 class=\"card-header\">ArrayUtilsService</h5>\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Servicio que ofrece diversas operaciones sobre arrays.</h5>\n        <p class=\"card-text\">Métodos para eliminar elementos y fusionar arrays.</p>\n        <a [routerLink]=\"'/arrayService'\" class=\"btn btn-primary\">Array utils</a>\n      </div>\n    </div>\n    <div class=\"card\">\n      <h5 class=\"card-header\">Pipes</h5>\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Transforma un objeto de entrada en otro.</h5>\n        <p class=\"card-text\">Varias alternativas para transformar mapas en elementos iterables o para serializar lista de objetos.</p>\n        <a [routerLink]=\"'/mapiterablepipe'\" class=\"btn btn-primary\">Mapa iterable</a>\n        <a [routerLink]=\"'/flatarraypipe'\" class=\"btn btn-primary\">Serializar lista</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-deck mt-2 mb-2\">\n    <div class=\"card\">\n      <h5 class=\"card-header\">vfg-dropdown-list</h5>\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Lista desplegable.</h5>\n        <p class=\"card-text\">El componente muestra de manera destacada el primer elemento de una lista. El resto de elementos permanecen ocultos hasta que se hace click en el elemento visible. Presionando de nuevo los elementos que no son el primero se vuelven a ocultar.</p>\n        <p class=\"card-text\"><small class=\"text-muted\">En este ejemplo se usa la coleccion <strong>Queue</strong>.</small></p>\n        <a [routerLink]=\"'/dropdownlist'\" class=\"btn btn-primary\">Drop down list</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

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

/***/ "./src/app/vfg-common/vfg-dropdown-list/vfg-dropdown-list.component.css":
/***/ (function(module, exports) {

module.exports = ".bg-clickable:hover {\r\n\tcursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/vfg-common/vfg-dropdown-list/vfg-dropdown-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row bg-clickable\" (click)=\"isCollapsed = !isCollapsed\">\n    <div class=\"col-sm-12 \">\n      <strong> {{list[0]}} </strong> \n    </div>\n  </div>\n  <div class=\"row\" id=\"collapseExample\" *ngIf=\"!isCollapsed\">\n    <div class=\"col-sm-12 \" *ngFor=\"let item of list; let first=first\">\n      <span *ngIf=\"!first\"> {{item}} </span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/vfg-common/vfg-dropdown-list/vfg-dropdown-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VfgDropdownListComponent; });
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

var VfgDropdownListComponent = /** @class */ (function () {
    function VfgDropdownListComponent() {
        this.isCollapsed = true;
    }
    VfgDropdownListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], VfgDropdownListComponent.prototype, "list", void 0);
    VfgDropdownListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'vfg-dropdown-list',
            template: __webpack_require__("./src/app/vfg-common/vfg-dropdown-list/vfg-dropdown-list.component.html"),
            styles: [__webpack_require__("./src/app/vfg-common/vfg-dropdown-list/vfg-dropdown-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VfgDropdownListComponent);
    return VfgDropdownListComponent;
}());



/***/ }),

/***/ "./src/app/vfg-common/vfg-header/vfg-header.component.css":
/***/ (function(module, exports) {

module.exports = ".fa:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n.fa-google {\r\n  background: #dd4b39;\r\n  color: white;\r\n}\r\n\r\n.fa-linkedin {\r\n  background: #007bb5;\r\n  color: white;\r\n}\r\n\r\n.vfg {\r\n  padding: 8px 10px 8px 10px;\r\n  margin-right: 5px;\r\n}\r\n\r\n.fa-twitter {\r\n  background: #55ACEE;\r\n  color: white;\r\n}"

/***/ }),

/***/ "./src/app/vfg-common/vfg-header/vfg-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n<nav class=\"navbar navbar-expand-lg  navbar-dark bg-danger\">\r\n  <a class=\"navbar-brand\" [routerLink]=\"'home'\" [routerLinkActive]=\"['active']\">\r\n  \t\t<img src=\"/assets/angular-vfg.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\" />\r\n  \t\tVfgAngular\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" \r\n  \tdata-toggle=\"collapse\" \r\n  \tdata-target=\"#navbarSupportedContent\" \r\n  \taria-controls=\"navbarSupportedContent\" \r\n  \t(click)=\"isCollapsed = !isCollapsed\" \r\n  \t[attr.aria-expanded]=\"!isCollapsed\"\r\n  \taria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngbCollapse]=\"isCollapsed\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"'checklist'\" [routerLinkActive]=\"['active']\">Check List</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"'agenda'\" [routerLinkActive]=\"['active']\">Agenda</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"'arrayService'\" [routerLinkActive]=\"['active']\">Array Utils</a>\r\n      </li>\r\n      \r\n      <li ngbDropdown class=\"nav-item dropdown\">\r\n\r\n      \t<a class=\"nav-link\" id=\"navbarDropdown\" ngbDropdownToggle aria-haspopup=\"true\" aria-expanded=\"false\">Mas</a>\r\n\r\n        <div ngbDropdownMenu class=\"dropdown-menu \" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"'flatarraypipe'\" [routerLinkActive]=\"['active']\">FlatArrayPipe</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"'mapiterablepipe'\" [routerLinkActive]=\"['active']\">MapIterablePipe</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" [routerLink]=\"'dropdownlist'\" [routerLinkActive]=\"['active']\">DropDownList</a>\r\n        </div>\r\n\r\n      </li>\r\n\r\n    </ul>\r\n  \r\n\r\n<div class=\"navbar-text\">\r\n<a target=\"_blank\" href=\"https://www.linkedin.com/in/vifergo/\" class=\"vfg fa fa-linkedin border border-light rounded\"></a>\r\n    <a target=\"_blank\" href=\"https://twitter.com/vifergo?ref_src=twsrc%5Etfw\" class=\"vfg fa fa-twitter border border-light rounded\">\r\n      </a>\r\n</div>\r\n</div>\r\n\r\n</nav>\r\n\r\n</header>"

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