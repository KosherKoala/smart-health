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

module.exports = "<div class=\"container registration-page\">\n  <div class=\"row\">\n    <div class=\"col-12 col-sm-8 col-md-8 mx-auto\">\n      <h2>Doctor Registration</h2>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12 col-sm-8 col-md-8 mx-auto pt-4\">\n      <form name=\"form\" #f=\"ngForm\"  (ngSubmit)=\"f.form.valid && register()\"   novalidate >\n        \n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-6 col-md-6\">\n            <div class=\"form-group\">\n              <input type=\"text\" name=\"firstName\" id=\"firstName\" #firstName=\"ngModel\" [(ngModel)]=\"userModel.firstName\" class=\"form-control input-lg\" placeholder=\"First Name\" required>\n              <div *ngIf=\"f.submitted  && !firstName.valid\" class=\"help-block\">First Name is required</div>\n            </div>\n          </div>\n          <div class=\"col-xs-12 col-sm-6 col-md-6\">\n            <div class=\"form-group\">\n              <input type=\"text\" name=\"lastName\" id=\"lastName\" [(ngModel)]=\"userModel.lastName\" #lastName =\"ngModel\" class=\"form-control input-lg\" placeholder=\"Last Name\" required>\n              <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\n            </div>\n          </div>\n        </div>\n        \n        <div class=\"form-group\">\n            <input type=\"email\" name=\"email\" id=\"email\" [(ngModel)]=\"userModel.email\" #email =\"ngModel\" class=\"form-control input-lg\" placeholder=\"Email\" tabindex=\"1\" required>\n            <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-6 col-md-6\">\n            <div class=\"form-group\">\n                <input type=\"password\" name=\"password\" id=\"password\" [(ngModel)]=\"userModel.password\" #password =\"ngModel\" class=\"form-control input-lg\" placeholder=\"Password\" tabindex=\"1\" required>\n                <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n            </div>\n          </div>\n          <div class=\"col-xs-12 col-sm-6 col-md-6\">\n            <div class=\"form-group\">\n                <input type=\"password\" name=\"passwordConfirmation\" id=\"passwordConfirmation\" [(ngModel)]=\"userModel.passwordConfirmation\" #passwordConfirmation =\"ngModel\" class=\"form-control input-lg\" placeholder=\"Confirm Password\" tabindex=\"1\" required>\n                <div *ngIf=\"f.submitted && !passwordConfirmation.valid\" class=\"help-block\">Password Confirmation is required</div>\n            </div>\n            <div class=\"alert alert-danger w-100\" *ngIf = \"errors.password !== null\">{{errors.password}}</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"file\"/>\n        </div>\n        <h4>Practice Information</h4>\n        <div class=\"form-group\">\n          <input type=\"text\" name=\"practiceName\" id=\"practiceName\" #practiceName=\"ngModel\" [(ngModel)]=\"doctorModel.practiceName\" class=\"form-control input-lg\" placeholder=\"Practice Name\" required>\n          <div *ngIf=\"f.submitted  && !practiceName.valid\" class=\"help-block\">Practice Name is required</div>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" name=\"specialty\" id=\"specialty\" #specialty=\"ngModel\" [(ngModel)]=\"doctorModel.specialty\" class=\"form-control input-lg\" placeholder=\"Specialty\" required>\n          <div *ngIf=\"f.submitted  && !specialty.valid\" class=\"help-block\">Specialty is required</div>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" name=\"phone\" id=\"phone\" #phone=\"ngModel\" [(ngModel)]=\"doctorModel.phone\" class=\"form-control input-lg\" placeholder=\"Phone\" required>\n          <div *ngIf=\"f.submitted  && !phone.valid\" class=\"help-block\">Phone is required</div>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"email\" name=\"email\" id=\"email\" #pEmail=\"ngModel\" [(ngModel)]=\"doctorModel.email\" class=\"form-control input-lg\" placeholder=\"Practice Email\" required>\n          <div *ngIf=\"f.submitted  && !pEmail.valid\" class=\"help-block\">Email is required</div>\n        </div>\n        <div class=\"form-group\">\n            <h3>Accepted Insurance</h3>\n            <ss-multiselect-dropdown name=\"insurace\" [options]=\"myOptions\" [(ngModel)]=\"doctorModel.acceptedInsurance\" (ngModelChange)=\"onChange($event)\"></ss-multiselect-dropdown>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <h3>Address</h3>\n            <div class=\"col-12\">\n              <input type=\"text\" name=\"line_1\" id=\"line_1\" #line_1=\"ngModel\" [(ngModel)]=\"doctorModel.location.line_1\" class=\"form-control input-lg\" placeholder=\"Line 1\" required>\n              <div *ngIf=\"f.submitted  && !line_1.valid\" class=\"help-block\">Line 1 is required</div>\n            </div>\n            <div class=\"col-12\">\n              <input type=\"text\" name=\"line_2\" id=\"line_2\" #line_2=\"ngModel\" [(ngModel)]=\"doctorModel.location.line_2\" class=\"form-control input-lg\" placeholder=\"Line 2\">\n            </div>\n            <div class=\"col-12\">\n              <input type=\"text\" name=\"city\" id=\"city\" #city=\"ngModel\" [(ngModel)]=\"doctorModel.location.city\" class=\"form-control input-lg\" placeholder=\"City\" required>\n              <div *ngIf=\"f.submitted  && !city.valid\" class=\"help-block\">City is required</div>\n            </div>\n            <div class=\"col-6\">\n              <input type=\"text\" name=\"state\" id=\"state\" #state=\"ngModel\" [(ngModel)]=\"doctorModel.location.state\" class=\"form-control input-lg\" placeholder=\"State\" required>\n              <div *ngIf=\"f.submitted  && !state.valid\" class=\"help-block\">State is required</div>\n            </div>\n            <div class=\"col-6\">\n                <input type=\"text\" name=\"zip\" id=\"zip\" #zip=\"ngModel\" [(ngModel)]=\"doctorModel.location.zip\" class=\"form-control input-lg\" placeholder=\"Zip\" required>\n                <div *ngIf=\"f.submitted  && !zip.valid\" class=\"help-block\">Zip is required</div>\n              </div>\n          </div>\n        </div>\n       \n        <div class=\"row\">\n          <div class=\"col-xs-12 col-md-6 mx-auto\"><input type=\"submit\" value=\"Register\" class=\"btn rounded-btn\" tabindex=\"7\"></div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/doctor-registration/doctor-registration.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\n.registration-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #222;\n  text-align: center;\n  color: #fff;\n  padding: 3em; }\n  .registration-page .col-lg-4 {\n    padding: 0; }\n  .registration-page .input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 0; }\n  .registration-page .input-underline {\n    background: 0 0;\n    border: none;\n    box-shadow: none;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n    color: #FFF;\n    border-radius: 0; }\n  .registration-page .input-underline:focus {\n    border-bottom: 2px solid #fff;\n    box-shadow: none; }\n  .registration-page .rounded-btn {\n    border-radius: 50px;\n    color: rgba(255, 255, 255, 0.8);\n    background: #222;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    font-size: 18px;\n    line-height: 40px;\n    padding: 0 25px;\n    margin-bottom: 5px; }\n  .registration-page .rounded-btn:hover, .registration-page .rounded-btn:focus, .registration-page .rounded-btn:active, .registration-page .rounded-btn:visited {\n    color: white;\n    border: 2px solid white;\n    outline: none; }\n  .registration-page h1 {\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 36px; }\n    .registration-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n  .registration-page .form-group {\n    padding: 8px 0; }\n    .registration-page .form-group input::-webkit-input-placeholder {\n      color: black !important; }\n    .registration-page .form-group input:-moz-placeholder {\n      /* Firefox 18- */\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .registration-page .form-group input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .registration-page .form-group input:-ms-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n  .registration-page .form-content {\n    padding: 40px 0; }\n  .registration-page .user-avatar {\n    border-radius: 50%;\n    border: 2px solid #FFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/doctor-registration/doctor-registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorRegistrationComponent; });
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



var DoctorRegistrationComponent = (function () {
    function DoctorRegistrationComponent(router, userService, calendarService, doctorService, insuranceService) {
        this.router = router;
        this.userService = userService;
        this.calendarService = calendarService;
        this.doctorService = doctorService;
        this.insuranceService = insuranceService;
        this.submitted = false;
        this.userModel = {};
        this.doctorModel = { location: {}, acceptedInsurance: [] };
        this.loading = false;
        this.created = false;
        this.errors = { password: null };
    }
    DoctorRegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.insuranceService.getAllInsurances()
            .then(function (data) {
            for (var _i = 0, _a = data.insurance; _i < _a.length; _i++) {
                var ins = _a[_i];
                ins.id = ins._id;
            }
            _this.myOptions = data.insurance;
        });
    };
    DoctorRegistrationComponent.prototype.onChange = function () {
        console.log(this.doctorModel.acceptedInsurance);
    };
    DoctorRegistrationComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        console.log('models', this.userModel, this.doctorModel);
        if (this.userModel.password !== this.userModel.passwordConfirmation) {
            this.errors.password = 'Passwords don\'t match';
        }
        else {
            console.log('Email', this.userModel.email);
            this.userService.getUser({ email: this.userModel.email })
                .then(function (res) {
                console.log('checking repeats', res);
                if (!res.success) {
                    _this.doctorModel.firstName = _this.userModel.firstName;
                    _this.doctorModel.lastName = _this.userModel.lastName;
                    _this.calendarService.createCalendar({})
                        .then(function (cal) {
                        _this.doctorModel.calendar = cal.calendar._id;
                        _this.doctorModel.picture = 'http://lorempixel.com/300/300/people/' + (Math.floor(Math.random() * 10) + 1);
                        _this.doctorService.createDoctor(_this.doctorModel)
                            .then(function (doc) {
                            _this.userModel.doctor = doc.doctor._id;
                            _this.userService.createUser(_this.userModel)
                                .then(function (r) {
                                console.log('registering', r);
                                if (r.success) {
                                    _this.router.navigate(['/login']);
                                }
                            });
                        });
                    });
                }
                else {
                    console.log('Doctor email aready used');
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["k" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["k" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["c" /* CalendarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["c" /* CalendarService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services__["e" /* DoctorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["e" /* DoctorService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services__["h" /* InsuranceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["h" /* InsuranceService */]) === "function" && _e || Object])
], DoctorRegistrationComponent);

var _a, _b, _c, _d, _e;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
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
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services__["k" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__services__["h" /* InsuranceService */], __WEBPACK_IMPORTED_MODULE_3__services__["e" /* DoctorService */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__doctor_registration_component__["a" /* DoctorRegistrationComponent */]]
    })
], DoctorRegistrationModule);

//# sourceMappingURL=doctor-registration.module.js.map

/***/ }),

/***/ "../../../../angular-2-dropdown-multiselect/dropdown/dropdown.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiselectDropdown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_filter_pipe__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/dropdown/search-filter.pipe.js");






/*
 * Angular 2 Dropdown Multiselect for Bootstrap
 *
 * Simon Lindh
 * https://github.com/softsimon/angular-2-dropdown-multiselect
 */
var MULTISELECT_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_25" /* forwardRef */])(function () { return MultiselectDropdown; }),
    multi: true
};
var MultiselectDropdown = (function () {
    function MultiselectDropdown(element, fb, searchFilter, differs) {
        this.element = element;
        this.fb = fb;
        this.searchFilter = searchFilter;
        this.filterControl = this.fb.control('');
        this.disabled = false;
        this.disabledSelection = false;
        this.selectionLimitReached = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.dropdownClosed = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.dropdownOpened = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onAdded = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onRemoved = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onLazyLoad = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.onFilter = this.filterControl.valueChanges;
        this.destroyed$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.filteredOptions = [];
        this.lazyLoadOptions = [];
        this.renderFilteredOptions = [];
        this.model = [];
        this.prevModel = [];
        this.numSelected = 0;
        this.renderItems = true;
        this.checkAllSearchRegister = new Set();
        this.checkAllStatus = false;
        this.loadedValueIds = [];
        this.defaultSettings = {
            closeOnClickOutside: true,
            pullRight: false,
            enableSearch: false,
            searchRenderLimit: 0,
            searchRenderAfter: 1,
            searchMaxLimit: 0,
            searchMaxRenderedItems: 0,
            checkedStyle: 'checkboxes',
            buttonClasses: 'btn btn-default btn-secondary',
            containerClasses: 'dropdown-inline',
            selectionLimit: 0,
            minSelectionLimit: 0,
            closeOnSelect: false,
            autoUnselect: false,
            showCheckAll: false,
            showUncheckAll: false,
            fixedTitle: false,
            dynamicTitleMaxItems: 3,
            maxHeight: '300px',
            isLazyLoad: false,
            stopScrollPropagation: false,
            loadViewDistance: 1,
            selectAddedValues: false,
            ignoreLabels: false
        };
        this.defaultTexts = {
            checkAll: 'Check all',
            uncheckAll: 'Uncheck all',
            checked: 'checked',
            checkedPlural: 'checked',
            searchPlaceholder: 'Search...',
            searchEmptyResult: 'Nothing found...',
            searchNoRenderText: 'Type in search box to see results...',
            defaultTitle: 'Select',
            allSelected: 'All selected',
        };
        this._isVisible = false;
        this._workerDocClicked = false;
        this.onModelChange = function (_) { };
        this.onModelTouched = function () { };
        this.differ = differs.find([]).create(null);
        this.settings = this.defaultSettings;
        this.texts = this.defaultTexts;
    }
    MultiselectDropdown.prototype.onClick = function (target) {
        if (!this.isVisible || !this.settings.closeOnClickOutside)
            return;
        var parentFound = false;
        while (target != null && !parentFound) {
            if (target === this.element.nativeElement) {
                parentFound = true;
            }
            target = target.parentElement;
        }
        if (!parentFound) {
            this.isVisible = false;
            this.dropdownClosed.emit();
        }
    };
    Object.defineProperty(MultiselectDropdown.prototype, "isVisible", {
        get: function () {
            return this._isVisible;
        },
        set: function (val) {
            this._isVisible = val;
            this._workerDocClicked = val ? false : this._workerDocClicked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiselectDropdown.prototype, "searchLimit", {
        get: function () {
            return this.settings.searchRenderLimit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiselectDropdown.prototype, "searchRenderAfter", {
        get: function () {
            return this.settings.searchRenderAfter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiselectDropdown.prototype, "searchLimitApplied", {
        get: function () {
            return this.searchLimit > 0 && this.options.length > this.searchLimit;
        },
        enumerable: true,
        configurable: true
    });
    MultiselectDropdown.prototype.getItemStyle = function (option) {
        if (!option.isLabel) {
            return { 'cursor': 'pointer' };
        }
    };
    MultiselectDropdown.prototype.getItemStyleSelectionDisabled = function () {
        if (this.disabledSelection) {
            return { 'cursor': 'default' };
        }
    };
    MultiselectDropdown.prototype.ngOnInit = function () {
        this.settings = Object.assign(this.defaultSettings, this.settings);
        this.texts = Object.assign(this.defaultTexts, this.texts);
        this.title = this.texts.defaultTitle || '';
        this.filterControl.valueChanges
            .takeUntil(this.destroyed$)
            .subscribe(function () {
            this.updateRenderItems();
            if (this.settings.isLazyLoad) {
                this.load();
            }
        }.bind(this));
    };
    MultiselectDropdown.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['options']) {
            this.options = this.options || [];
            this.parents = this.options
                .filter(function (option) { return typeof option.parentId === 'number'; })
                .map(function (option) { return option.parentId; });
            this.updateRenderItems();
            if (this.settings.isLazyLoad && this.settings.selectAddedValues && this.loadedValueIds.length === 0) {
                this.loadedValueIds = this.loadedValueIds.concat(changes.options.currentValue.map(function (value) { return value.id; }));
            }
            if (this.settings.isLazyLoad && this.settings.selectAddedValues && changes.options.previousValue) {
                var addedValues_1 = changes.options.currentValue.filter(function (value) { return _this.loadedValueIds.indexOf(value.id) === -1; });
                this.loadedValueIds.concat(addedValues_1.map(function (value) { return value.id; }));
                if (this.checkAllStatus) {
                    this.addChecks(addedValues_1);
                }
                else if (this.checkAllSearchRegister.size > 0) {
                    this.checkAllSearchRegister.forEach(function (searchValue) { return _this.addChecks(_this.applyFilters(addedValues_1, searchValue)); });
                }
            }
            if (this.texts) {
                this.updateTitle();
            }
            this.fireModelChange();
        }
        if (changes['texts'] && !changes['texts'].isFirstChange()) {
            this.updateTitle();
        }
    };
    MultiselectDropdown.prototype.ngOnDestroy = function () {
        this.destroyed$.next();
    };
    MultiselectDropdown.prototype.updateRenderItems = function () {
        this.renderItems = !this.searchLimitApplied || this.filterControl.value.length >= this.searchRenderAfter;
        this.filteredOptions = this.applyFilters(this.options, this.settings.isLazyLoad ? '' : this.filterControl.value);
        this.renderFilteredOptions = this.renderItems ? this.filteredOptions : [];
    };
    MultiselectDropdown.prototype.applyFilters = function (options, value) {
        return (this.searchFilter.transform(options, value, this.settings.searchMaxLimit, this.settings.searchMaxRenderedItems));
    };
    MultiselectDropdown.prototype.fireModelChange = function () {
        if (this.model != this.prevModel) {
            this.prevModel = this.model;
            this.onModelChange(this.model);
            this.onModelTouched();
        }
    };
    MultiselectDropdown.prototype.writeValue = function (value) {
        if (value !== undefined && value !== null) {
            this.model = Array.isArray(value) ? value : [value];
        }
        else {
            this.model = [];
        }
    };
    MultiselectDropdown.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    MultiselectDropdown.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    MultiselectDropdown.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MultiselectDropdown.prototype.ngDoCheck = function () {
        var changes = this.differ.diff(this.model);
        if (changes) {
            this.updateNumSelected();
            this.updateTitle();
        }
    };
    MultiselectDropdown.prototype.validate = function (_c) {
        return (this.model && this.model.length) ? null : {
            required: {
                valid: false,
            },
        };
    };
    MultiselectDropdown.prototype.registerOnValidatorChange = function (_fn) {
        throw new Error('Method not implemented.');
    };
    MultiselectDropdown.prototype.clearSearch = function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        this.filterControl.setValue('');
    };
    MultiselectDropdown.prototype.toggleDropdown = function () {
        this.isVisible = !this.isVisible;
        this.isVisible ? this.dropdownOpened.emit() : this.dropdownClosed.emit();
    };
    MultiselectDropdown.prototype.isSelected = function (option) {
        return this.model && this.model.indexOf(option.id) > -1;
    };
    MultiselectDropdown.prototype.setSelected = function (_event, option) {
        var _this = this;
        if (option.isLabel) {
            return;
        }
        if (!this.disabledSelection) {
            if (_event.stopPropagation) {
                _event.stopPropagation();
            }
            var index = this.model.indexOf(option.id);
            var isAtSelectionLimit = this.settings.selectionLimit > 0 && this.model.length >= this.settings.selectionLimit;
            var removeItem_1 = function (idx, id) {
                _this.model.splice(idx, 1);
                _this.onRemoved.emit(id);
                if (_this.settings.isLazyLoad && _this.lazyLoadOptions.some(function (val) { return val.id === id; })) {
                    _this.lazyLoadOptions.splice(_this.lazyLoadOptions.indexOf(_this.lazyLoadOptions.find(function (val) { return val.id === id; })), 1);
                }
            };
            if (index > -1) {
                if ((this.settings.minSelectionLimit === undefined) || (this.numSelected > this.settings.minSelectionLimit)) {
                    removeItem_1(index, option.id);
                }
                var parentIndex = option.parentId && this.model.indexOf(option.parentId);
                if (parentIndex > -1) {
                    removeItem_1(parentIndex, option.parentId);
                }
                else if (this.parents.indexOf(option.id) > -1) {
                    this.options.filter(function (child) { return _this.model.indexOf(child.id) > -1 && child.parentId === option.id; })
                        .forEach(function (child) { return removeItem_1(_this.model.indexOf(child.id), child.id); });
                }
            }
            else if (isAtSelectionLimit && !this.settings.autoUnselect) {
                this.selectionLimitReached.emit(this.model.length);
                return;
            }
            else {
                var addItem_1 = function (id) {
                    _this.model.push(id);
                    _this.onAdded.emit(id);
                    if (_this.settings.isLazyLoad && !_this.lazyLoadOptions.some(function (val) { return val.id === id; })) {
                        _this.lazyLoadOptions.push(option);
                    }
                };
                addItem_1(option.id);
                if (!isAtSelectionLimit) {
                    if (option.parentId && !this.settings.ignoreLabels) {
                        var children = this.options.filter(function (child) { return child.id !== option.id && child.parentId === option.parentId; });
                        if (children.every(function (child) { return _this.model.indexOf(child.id) > -1; })) {
                            addItem_1(option.parentId);
                        }
                    }
                    else if (this.parents.indexOf(option.id) > -1) {
                        var children = this.options.filter(function (child) { return _this.model.indexOf(child.id) < 0 && child.parentId === option.id; });
                        children.forEach(function (child) { return addItem_1(child.id); });
                    }
                }
                else {
                    removeItem_1(0, this.model[0]);
                }
            }
            if (this.settings.closeOnSelect) {
                this.toggleDropdown();
            }
            this.model = this.model.slice();
            this.fireModelChange();
        }
    };
    MultiselectDropdown.prototype.updateNumSelected = function () {
        var _this = this;
        this.numSelected = this.model.filter(function (id) { return _this.parents.indexOf(id) < 0; }).length || 0;
    };
    MultiselectDropdown.prototype.updateTitle = function () {
        var _this = this;
        var numSelectedOptions = this.options.length;
        if (this.settings.ignoreLabels) {
            numSelectedOptions = this.options.filter(function (option) { return !option.isLabel; }).length;
        }
        if (this.numSelected === 0 || this.settings.fixedTitle) {
            this.title = (this.texts) ? this.texts.defaultTitle : '';
        }
        else if (this.settings.displayAllSelectedText && this.model.length === numSelectedOptions) {
            this.title = (this.texts) ? this.texts.allSelected : '';
        }
        else if (this.settings.dynamicTitleMaxItems && this.settings.dynamicTitleMaxItems >= this.numSelected) {
            var useOptions = this.settings.isLazyLoad && this.lazyLoadOptions ? this.lazyLoadOptions : this.options;
            this.title = useOptions
                .filter(function (option) {
                return _this.model.indexOf(option.id) > -1;
            })
                .map(function (option) { return option.name; })
                .join(', ');
        }
        else {
            this.title = this.numSelected
                + ' '
                + (this.numSelected === 1 ? this.texts.checked : this.texts.checkedPlural);
        }
    };
    MultiselectDropdown.prototype.searchFilterApplied = function () {
        return this.settings.enableSearch && this.filterControl.value && this.filterControl.value.length > 0;
    };
    MultiselectDropdown.prototype.addChecks = function (options) {
        var checkedOptions = options
            .filter(function (option) {
            if (this.model.indexOf(option.id) === -1 && !(this.settings.ignoreLabels && option.isLabel)) {
                this.onAdded.emit(option.id);
                return true;
            }
            return false;
        }.bind(this)).map(function (option) { return option.id; });
        this.model = this.model.concat(checkedOptions);
    };
    MultiselectDropdown.prototype.checkAll = function () {
        if (!this.disabledSelection) {
            this.addChecks(!this.searchFilterApplied() ? this.options : this.filteredOptions);
            if (this.settings.isLazyLoad && this.settings.selectAddedValues) {
                if (this.searchFilterApplied() && !this.checkAllStatus) {
                    this.checkAllSearchRegister.add(this.filterControl.value);
                }
                else {
                    this.checkAllSearchRegister.clear();
                    this.checkAllStatus = true;
                }
                this.load();
            }
            this.fireModelChange();
        }
    };
    MultiselectDropdown.prototype.uncheckAll = function () {
        var _this = this;
        if (!this.disabledSelection) {
            var checkedOptions = this.model;
            var unCheckedOptions_1 = (!this.searchFilterApplied() ? this.model
                : this.filteredOptions.map(function (option) { return option.id; }));
            // set unchecked options only to the ones that were checked
            unCheckedOptions_1 = checkedOptions.filter(function (item) { return _this.model.includes(item); });
            this.model = this.model.filter(function (id) {
                if (((unCheckedOptions_1.indexOf(id) < 0) && (_this.settings.minSelectionLimit === undefined)) || ((unCheckedOptions_1.indexOf(id) < _this.settings.minSelectionLimit))) {
                    return true;
                }
                else {
                    _this.onRemoved.emit(id);
                    return false;
                }
            });
            if (this.settings.isLazyLoad && this.settings.selectAddedValues) {
                if (this.searchFilterApplied()) {
                    if (this.checkAllSearchRegister.has(this.filterControl.value)) {
                        this.checkAllSearchRegister.delete(this.filterControl.value);
                        this.checkAllSearchRegister.forEach(function (searchTerm) {
                            var filterOptions = this.applyFilters(this.options.filter(function (option) { return unCheckedOptions_1.includes(option.id); }), searchTerm);
                            this.addChecks(filterOptions);
                        }.bind(this));
                    }
                }
                else {
                    this.checkAllSearchRegister.clear();
                    this.checkAllStatus = false;
                }
                this.load();
            }
            this.fireModelChange();
        }
    };
    MultiselectDropdown.prototype.preventCheckboxCheck = function (event, option) {
        if (this.settings.selectionLimit && !this.settings.autoUnselect &&
            this.model.length >= this.settings.selectionLimit &&
            this.model.indexOf(option.id) === -1 &&
            event.preventDefault) {
            event.preventDefault();
        }
    };
    MultiselectDropdown.prototype.isCheckboxDisabled = function () {
        return this.disabledSelection;
    };
    MultiselectDropdown.prototype.checkScrollPosition = function (ev) {
        var scrollTop = ev.target.scrollTop;
        var scrollHeight = ev.target.scrollHeight;
        var scrollElementHeight = ev.target.clientHeight;
        var roundingPixel = 1;
        var gutterPixel = 1;
        if (scrollTop >= scrollHeight - (1 + this.settings.loadViewDistance) * scrollElementHeight - roundingPixel - gutterPixel) {
            this.load();
        }
    };
    MultiselectDropdown.prototype.checkScrollPropagation = function (ev, element) {
        var scrollTop = element.scrollTop;
        var scrollHeight = element.scrollHeight;
        var scrollElementHeight = element.clientHeight;
        if ((ev.deltaY > 0 && scrollTop + scrollElementHeight >= scrollHeight) || (ev.deltaY < 0 && scrollTop <= 0)) {
            ev = ev || window.event;
            ev.preventDefault && ev.preventDefault();
            ev.returnValue = false;
        }
    };
    MultiselectDropdown.prototype.load = function () {
        this.onLazyLoad.emit({
            length: this.options.length,
            filter: this.filterControl.value,
            checkAllSearches: this.checkAllSearchRegister,
            checkAllStatus: this.checkAllStatus
        });
    };
    return MultiselectDropdown;
}());

MultiselectDropdown.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */], args: [{
                selector: 'ss-multiselect-dropdown',
                template: '<div class="dropdown" [ngClass]="settings.containerClasses" [class.open]="isVisible"><button type="button" class="dropdown-toggle" [ngClass]="settings.buttonClasses" (click)="toggleDropdown()" [disabled]="disabled">{{ title }}<span class="caret"></span></button><ul #scroller *ngIf="isVisible" class="dropdown-menu" (scroll)="settings.isLazyLoad ? checkScrollPosition($event) : null" (wheel)="settings.stopScrollPropagation ? checkScrollPropagation($event, scroller) : null" [class.pull-right]="settings.pullRight" [class.dropdown-menu-right]="settings.pullRight" [style.max-height]="settings.maxHeight" style="display: block; height: auto; overflow-y: auto"><li class="dropdown-item search" *ngIf="settings.enableSearch"><div class="input-group input-group-sm"><span class="input-group-addon" id="sizing-addon3"><i class="fa fa-search"></i></span> <input type="text" class="form-control" placeholder="{{ texts.searchPlaceholder }}" aria-describedby="sizing-addon3" [formControl]="filterControl" autofocus> <span class="input-group-btn" *ngIf="filterControl.value.length > 0"><button class="btn btn-default btn-secondary" type="button" (click)="clearSearch($event)"><i class="fa fa-times"></i></button></span></div></li><li class="dropdown-divider divider" *ngIf="settings.enableSearch"></li><li class="dropdown-item check-control check-control-check" *ngIf="settings.showCheckAll && !disabledSelection" (click)="checkAll()"><a href="javascript:;" role="menuitem" tabindex="-1"><span style="width: 16px" [ngClass]="{\'glyphicon glyphicon-ok\': settings.checkedStyle !== \'fontawesome\',\'fa fa-check\': settings.checkedStyle === \'fontawesome\'}"></span> {{ texts.checkAll }}</a></li><li class="dropdown-item check-control check-control-uncheck" *ngIf="settings.showUncheckAll && !disabledSelection" (click)="uncheckAll()"><a href="javascript:;" role="menuitem" tabindex="-1"><span style="width: 16px" [ngClass]="{\'glyphicon glyphicon-remove\': settings.checkedStyle !== \'fontawesome\',\'fa fa-times\': settings.checkedStyle === \'fontawesome\'}"></span> {{ texts.uncheckAll }}</a></li><li *ngIf="settings.showCheckAll || settings.showUncheckAll" class="dropdown-divider divider"></li><li *ngIf="!renderItems" class="dropdown-item empty">{{ texts.searchNoRenderText }}</li><li *ngIf="renderItems && !renderFilteredOptions.length" class="dropdown-item empty">{{ texts.searchEmptyResult }}</li><li class="dropdown-item" *ngFor="let option of renderFilteredOptions" (click)="setSelected($event, option)" [ngStyle]="getItemStyle(option)" [ngClass]="option.classes" [class.dropdown-header]="option.isLabel"><a *ngIf="!option.isLabel; else label" href="javascript:;" role="menuitem" tabindex="-1" [style.padding-left]="this.parents.length>0&&this.parents.indexOf(option.id)<0&&\'30px\'" [ngStyle]="getItemStyleSelectionDisabled()"><ng-container [ngSwitch]="settings.checkedStyle"><input *ngSwitchCase="\'checkboxes\'" type="checkbox" [checked]="isSelected(option)" (click)="preventCheckboxCheck($event, option)" [disabled]="isCheckboxDisabled()" [ngStyle]="getItemStyleSelectionDisabled()" > <span *ngSwitchCase="\'glyphicon\'" style="width: 16px" class="glyphicon" [class.glyphicon-ok]="isSelected(option)"></span> <span *ngSwitchCase="\'fontawesome\'" style="width: 16px;display: inline-block"><i *ngIf="isSelected(option)" class="fa fa-check" aria-hidden="true"></i></span></ng-container><span [ngClass]="settings.itemClasses" [style.font-weight]="this.parents.indexOf(option.id)>=0?\'bold\':\'normal\'">{{ option.name }}</span></a><ng-template #label>{{ option.name }}</ng-template></li></ul></div>',
                styles: ['a {  outline: none !important;}.dropdown-inline {  display: inline-block;}.dropdown-toggle .caret {  margin-left: 4px;  white-space: nowrap;  display: inline-block;}'],
                providers: [MULTISELECT_VALUE_ACCESSOR, __WEBPACK_IMPORTED_MODULE_4__search_filter_pipe__["a" /* MultiSelectSearchFilter */]]
            },] },
];
/** @nocollapse */
MultiselectDropdown.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], },
    { type: __WEBPACK_IMPORTED_MODULE_4__search_filter_pipe__["a" /* MultiSelectSearchFilter */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* IterableDiffers */], },
]; };
MultiselectDropdown.propDecorators = {
    'options': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */] },],
    'settings': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */] },],
    'texts': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */] },],
    'disabledSelection': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */] },],
    'selectionLimitReached': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["U" /* Output */] },],
    'dropdownClosed': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["U" /* Output */] },],
    'dropdownOpened': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["U" /* Output */] },],
    'onAdded': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["U" /* Output */] },],
    'onRemoved': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["U" /* Output */] },],
    'onLazyLoad': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["U" /* Output */] },],
    'onFilter': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["U" /* Output */] },],
    'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* HostListener */], args: ['document: click', ['$event.target'],] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* HostListener */], args: ['document: touchstart', ['$event.target'],] },],
};
//# sourceMappingURL=dropdown.component.js.map

/***/ }),

/***/ "../../../../angular-2-dropdown-multiselect/dropdown/dropdown.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiselectDropdownModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dropdown_component__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/dropdown/dropdown.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_filter_pipe__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/dropdown/search-filter.pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");





var MultiselectDropdownModule = (function () {
    function MultiselectDropdownModule() {
    }
    return MultiselectDropdownModule;
}());

MultiselectDropdownModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* ReactiveFormsModule */]],
                exports: [__WEBPACK_IMPORTED_MODULE_0__dropdown_component__["a" /* MultiselectDropdown */], __WEBPACK_IMPORTED_MODULE_1__search_filter_pipe__["a" /* MultiSelectSearchFilter */]],
                declarations: [__WEBPACK_IMPORTED_MODULE_0__dropdown_component__["a" /* MultiselectDropdown */], __WEBPACK_IMPORTED_MODULE_1__search_filter_pipe__["a" /* MultiSelectSearchFilter */]],
            },] },
];
/** @nocollapse */
MultiselectDropdownModule.ctorParameters = function () { return []; };
//# sourceMappingURL=dropdown.module.js.map

/***/ }),

/***/ "../../../../angular-2-dropdown-multiselect/dropdown/search-filter.pipe.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiSelectSearchFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var MultiSelectSearchFilter = (function () {
    function MultiSelectSearchFilter() {
        this._searchCache = {};
        this._searchCacheInclusive = {};
    }
    MultiSelectSearchFilter.prototype.transform = function (options, str, limit, renderLimit) {
        if (limit === void 0) { limit = 0; }
        if (renderLimit === void 0) { renderLimit = 0; }
        str = (str || '').toLowerCase();
        // Drop cache because options were updated
        if (options !== this._lastOptions) {
            this._lastOptions = options;
            this._searchCache = {};
            this._searchCacheInclusive = {};
        }
        var isUnderLimit = options.length <= limit;
        if (this._searchCache.hasOwnProperty(str)) {
            return isUnderLimit ? this._searchCache[str] : this._limitRenderedItems(this._searchCache[str], renderLimit);
        }
        var prevStr = str.slice(0, -1);
        var prevResults = this._searchCache[prevStr];
        if (prevResults) {
            var prevInclusiveOrIdx = this._searchCacheInclusive[prevStr];
            if (prevInclusiveOrIdx === true) {
                // If have previous results and it was inclusive, do only subsearch
                options = prevResults;
            }
            else if (typeof prevInclusiveOrIdx === 'number') {
                // Or reuse prev results with unchecked ones
                options = prevResults.concat(options.slice(prevInclusiveOrIdx));
            }
        }
        var optsLength = options.length;
        var maxFound = limit > 0 ? Math.min(limit, optsLength) : optsLength;
        var filteredOpts = [];
        var regexp = new RegExp(this._escapeRegExp(str), 'i');
        var matchPredicate = function (option) { return regexp.test(option.name); }, getChildren = function (option) { return options.filter(function (child) { return child.parentId === option.id; }); }, getParent = function (option) { return options.find(function (parent) { return option.parentId === parent.id; }); };
        var i = 0, founded = 0;
        for (; i < optsLength && founded < maxFound; ++i) {
            var option = options[i];
            var directMatch = regexp.test(option.name);
            if (directMatch) {
                filteredOpts.push(option);
                founded++;
                continue;
            }
            if (typeof (option.parentId) === 'undefined') {
                var childrenMatch = getChildren(option).some(matchPredicate);
                if (childrenMatch) {
                    filteredOpts.push(option);
                    founded++;
                    continue;
                }
            }
            if (typeof (option.parentId) !== 'undefined') {
                var parentMatch = matchPredicate(getParent(option));
                if (parentMatch) {
                    filteredOpts.push(option);
                    founded++;
                    continue;
                }
            }
        }
        this._searchCache[str] = filteredOpts;
        this._searchCacheInclusive[str] = i === optsLength || i + 1;
        return isUnderLimit ? filteredOpts : this._limitRenderedItems(filteredOpts, renderLimit);
    };
    MultiSelectSearchFilter.prototype._limitRenderedItems = function (items, limit) {
        return items.length > limit && limit > 0 ? items.slice(0, limit) : items;
    };
    MultiSelectSearchFilter.prototype._escapeRegExp = function (str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    };
    return MultiSelectSearchFilter;
}());

MultiSelectSearchFilter.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */], args: [{
                name: 'searchFilter'
            },] },
];
/** @nocollapse */
MultiSelectSearchFilter.ctorParameters = function () { return []; };
//# sourceMappingURL=search-filter.pipe.js.map

/***/ }),

/***/ "../../../../angular-2-dropdown-multiselect/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dropdown_search_filter_pipe__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/dropdown/search-filter.pipe.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_dropdown_module__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/dropdown/dropdown.module.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__dropdown_dropdown_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropdown_dropdown_component__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/dropdown/dropdown.component.js");
/* unused harmony namespace reexport */



//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=doctor-registration.module.chunk.js.map