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

module.exports = "<div class=\"registration-page\">\n  <div class=\"container\">\n    <div class=\"row \">\n      <div class=\"col-12 col-sm-8 col-md-8 mx-auto pt-4\">\n        <h3>Patient Registration</h3>\n        <form name=\"form\" #f=\"ngForm\"  (ngSubmit)=\"patientModel.health.sex != null && register()\"   novalidate >\n          \n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 col-md-6\">\n              <div class=\"form-group\">\n                <input type=\"text\" name=\"firstName\" id=\"firstName\" #firstName=\"ngModel\" [(ngModel)]=\"userModel.firstName\" class=\"form-control input-lg\" placeholder=\"First Name\" required>\n                <div *ngIf=\"f.submitted  && !firstName.valid\" class=\"help-block\">First Name is required</div>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-6\">\n              <div class=\"form-group\">\n                <input type=\"text\" name=\"lastName\" id=\"lastName\" [(ngModel)]=\"userModel.lastName\" #lastName =\"ngModel\" class=\"form-control input-lg\" placeholder=\"Last Name\" required>\n                <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"form-group\">\n              <input type=\"email\" name=\"email\" id=\"email\" [(ngModel)]=\"userModel.email\" #email =\"ngModel\" class=\"form-control input-lg\" placeholder=\"Email\" tabindex=\"1\" required>\n              <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 col-md-6\">\n              <div class=\"form-group\">\n                  <input type=\"password\" name=\"password\" id=\"password\" [(ngModel)]=\"userModel.password\" #password =\"ngModel\" class=\"form-control input-lg\" placeholder=\"Password\" tabindex=\"1\" required>\n                  <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-6\">\n              <div class=\"form-group\">\n                  <input type=\"password\" name=\"passwordConfirmation\" id=\"passwordConfirmation\" [(ngModel)]=\"userModel.passwordConfirmation\" #passwordConfirmation =\"ngModel\" class=\"form-control input-lg\" placeholder=\"Confirm Password\" tabindex=\"1\" required>\n                  <div *ngIf=\"f.submitted && !passwordConfirmation.valid\" class=\"help-block\">Password Confirmation is required</div>\n              </div>\n              <div class=\"alert alert-danger w-100\" *ngIf = \"errors.password !== null\">{{errors.password}}</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"file\"/>    \n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 col-md-6\">\n              <div class=\"form-group\">\n                <input type=\"Number\" name=\"height\" id=\"height\" [(ngModel)]=\"patientModel.health.height\" #height =\"ngModel\" class=\"form-control input-lg\" placeholder=\"Height\" tabindex=\"1\" required>\n                <div *ngIf=\"f.submitted && !height.valid\" class=\"help-block\">Height is required</div>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-6\">\n              <div class=\"form-group\">\n                <input type=\"Number\" name=\"weight\" id=\"weight\" [(ngModel)]=\"patientModel.health.weight\" #weight =\"ngModel\" class=\"form-control input-lg\" placeholder=\"Weight\" tabindex=\"1\" required>\n                <div *ngIf=\"f.submitted && !weight.valid\" class=\"help-block\">Height is required</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 col-md-6\">\n              <div class=\"form-group\">\n                <input type=\"Number\" step=\"1\" name=\"age\" id=\"age\" [(ngModel)]=\"patientModel.health.age\" #age =\"ngModel\" class=\"form-control input-lg\" placeholder=\"Age\" tabindex=\"1\" required>\n                <div *ngIf=\"f.submitted && !age.valid\" class=\"help-block\">Age is required</div>\n              </div>\n            </div>\n            <div class=\"col-6 col-sm-6 col-md-3\">\n              <div class=\"form-group\">\n                  <div *ngFor=\"let gender of genders\">\n                      <input type=\"radio\" name=\"gender\" (change)=\"patientModel.health.sex = gender\" [value]=\"gender\">\n                      {{gender}}\n                  </div>\n                  <div *ngIf=\"f.submitted && patientModel.health.sex == null\" class=\"help-block\">Gender is required</div>\n              </div>\n            </div>\n            <div class=\"col-6 col-sm-6 col-md-3\">\n              <div class=\"form-group\">\n                <label for=\"bloodType\">Blood Type:</label>\n                <select [(ngModel)]=\"patientModel.health.bloodType\" name=\"bloodType\" #blood=\"ngModel\">\n                  <option *ngFor=\"let type of bloodTypes\" [ngValue]=\"type\">{{type}}</option>\n                </select> \n                <div *ngIf=\"f.submitted && !blood.valid\" class=\"help-block\">Blood Type is required</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">  \n            <div class=\"col-xs-12 col-sm-3 col-md-3\">\n              <div class=\"form-group\">\n                <label for=\"insurance\">Insurances:</label>\n                <select [(ngModel)]=\"patientModel.insurance\" name=\"insurance\" #insurance=\"ngModel\">\n                  <option *ngFor=\"let insurance of insurances\" [ngValue]=\"insurance._id\">{{insurance.name}}</option>\n                </select> \n                <div *ngIf=\"f.submitted && !insurance.valid\" class=\"help-block\">Insurance is required</div>\n              </div>\n            </div>\n          </div>\n        \n          <div class=\"row\">\n\n            <div class=\"col-xs-12 col-sm-6 col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"medication\">Medications:</label>\n                  <div class=\"badge badge-pill badge-primary\" *ngFor=\"let med of patientModel.health.medication\">{{med}}</div>\n                  <div class=\"d-flex\">\n                      <input type=\"text\" name=\"newMed\" id=\"newMed\" [(ngModel)]=\"newData.med\" #newMed =\"ngModel\" class=\"form-control input-lg\" placeholder=\"Medication Name\" tabindex=\"1\" required>\n                      <div class=\"btn btn-success\" type=\"button\" (click) = \"addMed()\">+Add</div>\n                  </div>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"allergies\">Allergies:</label>\n                  <div class=\"badge badge-pill badge-warning\" *ngFor=\"let al of patientModel.health.allergies\">{{al}}</div>\n                  <div class=\"d-flex\">\n                      <input type=\"text\" name=\"newAl\" id=\"newAl\" [(ngModel)]=\"newData.al\" #newAl =\"ngModel\" class=\"form-control input-lg\" placeholder=\"Allergy Name\" tabindex=\"1\" required>\n                      <div class=\"btn btn-success\" type=\"button\" (click) = \"addAl()\">+Add</div>\n                  </div>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"medication\">Conditions:</label>\n                  <div class=\"badge badge-pill badge-danger\" *ngFor=\"let al of patientModel.health.conditions\">{{al}}</div>\n                  <div class=\"d-flex\">\n                      <input type=\"text\" name=\"newCon\" id=\"newCon\" [(ngModel)]=\"newData.con\" #newCon =\"ngModel\" class=\"form-control input-lg\" placeholder=\"Medication Name\" tabindex=\"1\" required>\n                      <div class=\"btn btn-success\" type=\"button\" (click) = \"addCon()\">+Add</div>\n                  </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-md-6\"><input type=\"submit\" value=\"Register\" class=\"btn rounded-btn\" tabindex=\"7\"></div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\n.registration-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #222;\n  text-align: center;\n  color: #fff;\n  padding: 3em; }\n  .registration-page .col-lg-4 {\n    padding: 0; }\n  .registration-page .input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 0; }\n  .registration-page .input-underline {\n    background: 0 0;\n    border: none;\n    box-shadow: none;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n    color: #FFF;\n    border-radius: 0; }\n  .registration-page .input-underline:focus {\n    border-bottom: 2px solid #fff;\n    box-shadow: none; }\n  .registration-page .rounded-btn {\n    border-radius: 50px;\n    color: rgba(255, 255, 255, 0.8);\n    background: #222;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    font-size: 18px;\n    line-height: 40px;\n    padding: 0 25px;\n    margin-bottom: 5px; }\n  .registration-page .rounded-btn:hover, .registration-page .rounded-btn:focus, .registration-page .rounded-btn:active, .registration-page .rounded-btn:visited {\n    color: white;\n    border: 2px solid white;\n    outline: none; }\n  .registration-page h1 {\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 36px; }\n    .registration-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n  .registration-page .form-group {\n    padding: 8px 0; }\n    .registration-page .form-group input::-webkit-input-placeholder {\n      color: black !important; }\n    .registration-page .form-group input:-moz-placeholder {\n      /* Firefox 18- */\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .registration-page .form-group input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .registration-page .form-group input:-ms-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n  .registration-page .form-content {\n    padding: 40px 0; }\n  .registration-page .user-avatar {\n    border-radius: 50%;\n    border: 2px solid #FFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
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
    function RegistrationComponent(router, userService, patientService, healthService, insuranceService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.patientService = patientService;
        this.healthService = healthService;
        this.insuranceService = insuranceService;
        this.userModel = {};
        this.patientModel = { insurance: null, health: { conditions: [], allergies: [], medication: [] } };
        this.loading = false;
        this.created = false;
        this.bloodTypes = ['O', 'A', 'B', 'AB', 'O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];
        this.newData = { med: '', al: '', con: '' };
        this.genders = ['Male', 'Female'];
        this.errors = { password: null };
        this.insurances = [];
        this.insuranceService.getAllInsurances()
            .then(function (data) { _this.insurances = data.insurance; console.log(_this.insurances); });
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        console.log('Registering');
        console.log(this.userModel, this.patientModel);
        if (this.userModel.password !== this.userModel.passwordConfirmation) {
            this.errors.password = 'Passwords don\'t match';
        }
        else {
            console.log("Email", this.userModel.email);
            this.userService.getUser({ email: this.userModel.email })
                .then(function (res) {
                console.log('checking repeats', res);
                if (!res.success) {
                    _this.patientModel.firstName = _this.userModel.firstName;
                    _this.patientModel.lastName = _this.userModel.lastName;
                    _this.healthService.createHealth(_this.patientModel.health)
                        .then(function (data) {
                        _this.patientModel.health = data.health._id;
                        _this.patientModel.picture = 'http://lorempixel.com/300/300/people/' + (Math.floor(Math.random() * 10) + 1);
                        console.log('here');
                        console.log(_this.patientModel);
                        _this.patientService.createPatient(_this.patientModel)
                            .then(function (patient) {
                            _this.userModel.patient = patient.patient._id;
                            _this.userService.createUser(_this.userModel)
                                .then(function (r) {
                                console.log('registering', r);
                                if (data.success) {
                                    _this.router.navigate(['/login']);
                                }
                            });
                        });
                    });
                }
                else {
                    console.log('Patient email aready used');
                }
            });
        }
    };
    RegistrationComponent.prototype.addMed = function () {
        this.patientModel.health.medication.push(this.newData.med);
        this.newData.med = '';
    };
    RegistrationComponent.prototype.addAl = function () {
        this.patientModel.health.allergies.push(this.newData.al);
        this.newData.al = '';
    };
    RegistrationComponent.prototype.addCon = function () {
        this.patientModel.health.conditions.push(this.newData.con);
        this.newData.con = '';
    };
    RegistrationComponent.prototype.print = function () {
        console.log(this.userModel, this.patientModel);
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-registration',
        template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/registration/registration.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["k" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["k" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["i" /* PatientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["i" /* PatientService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services__["f" /* HealthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["f" /* HealthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services__["h" /* InsuranceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["h" /* InsuranceService */]) === "function" && _e || Object])
], RegistrationComponent);

var _a, _b, _c, _d, _e;
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
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services__["k" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__services__["i" /* PatientService */], __WEBPACK_IMPORTED_MODULE_3__services__["f" /* HealthService */], __WEBPACK_IMPORTED_MODULE_3__services__["h" /* InsuranceService */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__registration_component__["a" /* RegistrationComponent */]]
    })
], RegistrationModule);

//# sourceMappingURL=registration.module.js.map

/***/ })

});
//# sourceMappingURL=registration.module.chunk.js.map