webpackJsonp(["doctor-registration.module"],{

/***/ "../../../../../src/app/doctor-registration/doctor-registration-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorRegistrationRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctor_registration_component__ = __webpack_require__("../../../../../src/app/doctor-registration/doctor-registration.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__doctor_registration_component__["a" /* DoctorRegistrationComponent */] }
];
var DoctorRegistrationRoutingModule = (function () {
    function DoctorRegistrationRoutingModule() {
    }
    return DoctorRegistrationRoutingModule;
}());
DoctorRegistrationRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], DoctorRegistrationRoutingModule);

//# sourceMappingURL=doctor-registration-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/doctor-registration/doctor-registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 col-sm-8 col-md-8 mx-auto pt-4\">\n      <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n          <h2>Doctor Registration Portal</h2>\n        <hr class=\"colorgraph\">\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-6 col-md-6\">\n            <div class=\"form-group\">\n              <input type=\"text\" name=\"firstName\" id=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName =\"ngModel\" class=\"form-control input-lg\" placeholder=\"First Name\" tabindex=\"1\" required>\n              <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">First Name is required</div>\n            </div>\n          </div>\n          <div class=\"col-xs-12 col-sm-6 col-md-6\">\n            <div class=\"form-group\">\n              <input type=\"text\" name=\"lastName\" id=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName =\"ngModel\" class=\"form-control input-lg\" placeholder=\"Last Name\" tabindex=\"1\" required>\n              <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n            <input type=\"email\" name=\"email\" id=\"email\" [(ngModel)]=\"model.email\" #email =\"ngModel\" class=\"form-control input-lg\" placeholder=\"Email\" tabindex=\"1\" required>\n            <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-6 col-md-6\">\n            <div class=\"form-group\">\n                <input type=\"password\" name=\"password\" id=\"password\" [(ngModel)]=\"model.password\" #password =\"ngModel\" class=\"form-control input-lg\" placeholder=\"Password\" tabindex=\"1\" required>\n                <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n            </div>\n          </div>\n          <div class=\"col-xs-12 col-sm-6 col-md-6\">\n            <div class=\"form-group\">\n                <input type=\"password\" name=\"passwordConfirmation\" id=\"passwordConfirmation\" [(ngModel)]=\"model.passwordConfirmation\" #passwordConfirmation =\"ngModel\" class=\"form-control input-lg\" placeholder=\"Confirm Password\" tabindex=\"1\" required>\n                <div *ngIf=\"f.submitted && !passwordConfirmation.valid\" class=\"help-block\">Password Confirmation is required</div>\n            </div>\n            <div class=\"alert alert-danger w-100\" *ngIf = \"errors.password !== null\">{{errors.password}}</div>\n          </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 col-md-6\">\n              <div class=\"form-group\">\n                  <input type=\"LisenceID\" name=\"LisenceID\" id=\"LisenceID\" [(ngModel)]=\"model.LisenceID\" #LisenceID =\"ngModel\" class=\"form-control input-lg\" placeholder=\"Lisence ID\" tabindex=\"1\" required>\n                  <div *ngIf=\"f.submitted && !LisenceID.valid\" class=\"help-block\">Lisence ID is required</div>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-6\">\n              <div class=\"form-group\">\n                  <input type=\"specialty\" name=\"specialty\" id=\"specialty\" [(ngModel)]=\"model.specialty\" #specialty =\"ngModel\" class=\"form-control input-lg\" placeholder=\"Specialty\" tabindex=\"1\" required>\n                  <div *ngIf=\"f.submitted && !specialty.valid\" class=\"help-block\">Specialty is required</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                <div class=\"form-group\">\n                    <input type=\"LocName\" name=\"LocName\" id=\"LocName\" [(ngModel)]=\"model.LocName\" #LocName =\"ngModel\" class=\"form-control input-lg\" placeholder=\"Hospital/Clinic/Practice Name\" tabindex=\"1\" required>\n                    <div *ngIf=\"f.submitted && !LocName.valid\" class=\"help-block\">Location name is required</div>\n                </div>\n              </div>\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                <div class=\"form-group\">\n                    <input type=\"city\" name=\"city\" id=\"city\" [(ngModel)]=\"model.city\" #city =\"ngModel\" class=\"form-control input-lg\" placeholder=\"City\" tabindex=\"1\" required>\n                    <div *ngIf=\"f.submitted && !city.valid\" class=\"help-block\">City is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                  <div class=\"form-group\">\n                      <input type=\"address1\" name=\"address1\" id=\"address1\" [(ngModel)]=\"model.address1\" #address1 =\"ngModel\" class=\"form-control input-lg\" placeholder=\"Address Line 1\" tabindex=\"1\" required>\n                      <div *ngIf=\"f.submitted && !address1.valid\" class=\"help-block\">Address is required</div>\n                  </div>\n                </div>\n                <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                  <div class=\"form-group\">\n                      <input type=\"state\" name=\"state\" id=\"state\" [(ngModel)]=\"model.state\" #state =\"ngModel\" class=\"form-control input-lg\" placeholder=\"State\" tabindex=\"1\" required>\n                      <div *ngIf=\"f.submitted && !state.valid\" class=\"help-block\">State is required</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                  <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                    <div class=\"form-group\">\n                        <input type=\"address2\" name=\"address2\" id=\"address2\" [(ngModel)]=\"model.address2\" #address2 =\"ngModel\" class=\"form-control input-lg\" placeholder=\"Address Line 2 (Optional)\" tabindex=\"1\">\n                    </div>\n                  </div>\n                  <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                    <div class=\"form-group\">\n                        <input type=\"zipcode\" name=\"zipcode\" id=\"zipcode\" [(ngModel)]=\"model.zipcode\" #zipcode =\"ngModel\" class=\"form-control input-lg\" placeholder=\"Zip Code\" tabindex=\"1\" required>\n                        <div *ngIf=\"f.submitted && !zipcode.valid\" class=\"help-block\">Zip code is required</div>\n                    </div>\n                  </div>\n                </div>\n        <div class=\"row\">\n          <div class=\"col-12 col-sm-9 col-md-9\">\n             By clicking <strong class=\"label label-primary\">Register</strong>, you agree to the <a href=\"#\" data-toggle=\"modal\" data-target=\"#t_and_c_m\">Terms and Conditions</a> set out by this site, including our Cookie Use.\n          </div>\n        </div>\n        \n        <hr class=\"colorgraph\">\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-md-6\"><input type=\"submit\" value=\"Register\" class=\"btn btn-primary btn-block btn-lg\" tabindex=\"7\"></div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/doctor-registration/doctor-registration.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Credit to bootsnipp.com for the css for the color graph */\n.colorgraph {\n  height: 5px;\n  border-top: 0;\n  border-radius: 5px;\n  background-image: linear-gradient(to right, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4); }\n\n.background {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/Caduceus-On-Blue-Star-Of-Life.png") + ");\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-position: center;\n  background-size: auto;\n  background-size: 145px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/doctor-registration/doctor-registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorRegistrationComponent; });
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




var DoctorRegistrationComponent = (function () {
    function DoctorRegistrationComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.submitted = false;
        this.model = new __WEBPACK_IMPORTED_MODULE_1__shared__["c" /* Patient */]('', '', '', '', '');
        this.loading = false;
        this.created = false;
        this.errors = { password: null };
    }
    DoctorRegistrationComponent.prototype.ngOnInit = function () {
    };
    DoctorRegistrationComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        console.log(this.model);
        if (this.model.password !== this.model.passwordConfirmation) {
            this.errors.password = 'Passwords don\'t match';
        }
        else {
            console.log("Email", this.model.email);
            this.userService.getUser({ email: this.model.email })
                .then(function (res) {
                console.log('checking repeats', res);
                if (!res.success) {
                    _this.userService.createUser(_this.model)
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
    return DoctorRegistrationComponent;
}());
DoctorRegistrationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-doctor-registration',
        template: __webpack_require__("../../../../../src/app/doctor-registration/doctor-registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/doctor-registration/doctor-registration.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services__["j" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["j" /* UserService */]) === "function" && _b || Object])
], DoctorRegistrationComponent);

var _a, _b;
//# sourceMappingURL=doctor-registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/doctor-registration/doctor-registration.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorRegistrationModule", function() { return DoctorRegistrationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__doctor_registration_routing_module__ = __webpack_require__("../../../../../src/app/doctor-registration/doctor-registration-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__doctor_registration_component__ = __webpack_require__("../../../../../src/app/doctor-registration/doctor-registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DoctorRegistrationModule = (function () {
    function DoctorRegistrationModule() {
    }
    return DoctorRegistrationModule;
}());
DoctorRegistrationModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__doctor_registration_routing_module__["a" /* DoctorRegistrationRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services__["j" /* UserService */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__doctor_registration_component__["a" /* DoctorRegistrationComponent */]]
    })
], DoctorRegistrationModule);

//# sourceMappingURL=doctor-registration.module.js.map

/***/ }),

/***/ "../../../../../src/assets/images/Caduceus-On-Blue-Star-Of-Life.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Caduceus-On-Blue-Star-Of-Life.d5ccac8d5939fd5ec31f.png";

/***/ })

});
//# sourceMappingURL=doctor-registration.module.chunk.js.map