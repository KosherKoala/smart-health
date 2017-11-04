webpackJsonp(["registration.module"],{

/***/ "../../../../../src/app/registration/registration-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__registration_component__["a" /* RegistrationComponent */] }
];
var RegistrationRoutingModule = (function () {
    function RegistrationRoutingModule() {
    }
    return RegistrationRoutingModule;
}());
RegistrationRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], RegistrationRoutingModule);

//# sourceMappingURL=registration-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 col-sm-8 col-md-8 mx-auto pt-4\">\n      <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n          <h2>Please Sign Up <small>It's free and always will be.</small></h2>\n        <hr class=\"colorgraph\">\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-6 col-md-6\">\n            <div class=\"form-group\">\n              <input type=\"text\" name=\"firstName\" id=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName =\"ngModel\" class=\"form-control input-lg\" placeholder=\"First Name\" tabindex=\"1\" required>\n              <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">First Name is required</div>\n            </div>\n          </div>\n          <div class=\"col-xs-12 col-sm-6 col-md-6\">\n            <div class=\"form-group\">\n              <input type=\"text\" name=\"lastName\" id=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName =\"ngModel\" class=\"form-control input-lg\" placeholder=\"Last Name\" tabindex=\"1\" required>\n              <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n            <input type=\"email\" name=\"email\" id=\"email\" [(ngModel)]=\"model.email\" #email =\"ngModel\" class=\"form-control input-lg\" placeholder=\"Email\" tabindex=\"1\" required>\n            <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\n        </div>\n        <div class=\"form-check form-check-inline\">\n            <label class=\"form-check-label\">\n              <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\"> Male\n            </label>\n        </div>\n        <div class=\"form-check form-check-inline\">\n          <label class=\"form-check-label\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\"> Female\n          </label>\n        </div>\n        <div class=\"form-check form-check-inline\">\n            <label class=\"form-check-label\">\n              <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\"> Other\n            </label>\n        </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                       name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\n                <button class=\"input-group-addon\" (click)=\"d.toggle()\" type=\"button\">\n                  <img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/>\n                </button>\n              </div>\n            </div>\n        <div class=\"form-group\">\n            <input type=\"email\" name=\"email\" id=\"email\" [(ngModel)]=\"model.email\" #email =\"ngModel\" class=\"form-control input-lg\" placeholder=\"Email\" tabindex=\"1\" required>\n            <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-6 col-md-6\">\n            <div class=\"form-group\">\n                <input type=\"password\" name=\"password\" id=\"password\" [(ngModel)]=\"model.password\" #password =\"ngModel\" class=\"form-control input-lg\" placeholder=\"Password\" tabindex=\"1\" required>\n                <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n            </div>\n          </div>\n          <div class=\"col-xs-12 col-sm-6 col-md-6\">\n            <div class=\"form-group\">\n                <input type=\"password\" name=\"passwordConfirmation\" id=\"passwordConfirmation\" [(ngModel)]=\"model.passwordConfirmation\" #passwordConfirmation =\"ngModel\" class=\"form-control input-lg\" placeholder=\"Confirm Password\" tabindex=\"1\" required>\n                <div *ngIf=\"f.submitted && !passwordConfirmation.valid\" class=\"help-block\">Password Confirmation is required</div>\n            </div>\n            <div class=\"alert alert-danger w-100\" *ngIf = \"errors.password !== null\">{{errors.password}}</div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 col-sm-9 col-md-9\">\n             By clicking <strong class=\"label label-primary\">Register</strong>, you agree to the <a href=\"#\" data-toggle=\"modal\" data-target=\"#t_and_c_m\">Terms and Conditions</a> set out by this site, including our Cookie Use.\n          </div>\n        </div>\n        \n        <hr class=\"colorgraph\">\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-md-6\"><input type=\"submit\" value=\"Register\" class=\"btn btn-primary btn-block btn-lg\" tabindex=\"7\"></div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Credit to bootsnipp.com for the css for the color graph */\n.colorgraph {\n  height: 5px;\n  border-top: 0;\n  background: #c4e17f;\n  border-radius: 5px;\n  background-image: linear-gradient(to right, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationComponent = (function () {
    function RegistrationComponent(router, patientService) {
        this.router = router;
        this.patientService = patientService;
        this.submitted = false;
        this.model = new __WEBPACK_IMPORTED_MODULE_1__shared__["c" /* Patient */]('', '', '', '', '');
        this.loading = false;
        this.created = false;
        this.errors = { password: null };
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        console.log(this.model);
        if (this.model.password !== this.model.passwordConfirmation) {
            this.errors.password = 'Passwords don\'t match';
        }
        else {
            console.log("Email", this.model.email);
            this.patientService.getPatient({ email: this.model.email })
                .then(function (res) {
                console.log('checking repeats', res);
                if (!res.success) {
                    _this.patientService.createPatient(_this.model)
                        .then(function (r) {
                        console.log('registering', r);
                        if (res.success) {
                            _this.router.navigate(['/login']);
                        }
                    });
                }
                else {
                    console.log('Patient email aready used');
                }
            });
        }
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-registration',
        template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/registration/registration.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services__["d" /* PatientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["d" /* PatientService */]) === "function" && _b || Object])
], RegistrationComponent);

var _a, _b;
//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/registration/registration.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationModule", function() { return RegistrationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registration_routing_module__ = __webpack_require__("../../../../../src/app/registration/registration-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RegistrationModule = (function () {
    function RegistrationModule() {
    }
    return RegistrationModule;
}());
RegistrationModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__registration_routing_module__["a" /* RegistrationRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services__["d" /* PatientService */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__registration_component__["a" /* RegistrationComponent */]]
    })
], RegistrationModule);

//# sourceMappingURL=registration.module.js.map

/***/ })

});
//# sourceMappingURL=registration.module.chunk.js.map