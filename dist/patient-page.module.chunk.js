webpackJsonp(["patient-page.module"],{

/***/ "../../../../../src/app/layout/patient-page/calendar-header/calendar-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarHeaderComponent = (function () {
    function CalendarHeaderComponent() {
        this.locale = 'en';
        this.viewChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.viewDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    return CalendarHeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], CalendarHeaderComponent.prototype, "view", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], CalendarHeaderComponent.prototype, "viewDate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], CalendarHeaderComponent.prototype, "locale", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], CalendarHeaderComponent.prototype, "viewChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], CalendarHeaderComponent.prototype, "viewDateChange", void 0);
CalendarHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mwl-demo-utils-calendar-header',
        template: "\n    <div class=\"row text-center\">\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarPreviousView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\">\n            Previous\n          </div>\n          <div\n            class=\"btn btn-outline-secondary\"\n            mwlCalendarToday\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\">\n            Today\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarNextView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\">\n            Next\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):locale }}</h3>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('month')\"\n            [class.active]=\"view === 'month'\">\n            Month\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('week')\"\n            [class.active]=\"view === 'week'\">\n            Week\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('day')\"\n            [class.active]=\"view === 'day'\">\n            Day\n          </div>\n        </div>\n      </div>\n    </div>\n    <br>\n  "
    })
], CalendarHeaderComponent);

var _a, _b;
//# sourceMappingURL=calendar-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/patient-page/patient-page-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientPageRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient_page_component__ = __webpack_require__("../../../../../src/app/layout/patient-page/patient-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__patient_page_component__["a" /* PatientPageComponent */] }
];
var PatientPageRoutingModule = (function () {
    function PatientPageRoutingModule() {
    }
    return PatientPageRoutingModule;
}());
PatientPageRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], PatientPageRoutingModule);

//# sourceMappingURL=patient-page-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/patient-page/patient-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>  \n  <div class=\"row\">\n    <div class=\"col-3\">\n      <div class=\"card m-auto\">\n        <img class=\"card-img-top\" src=\"{{patient.picture}}\"  alt=\"Card image cap\">\n        <div class=\"card-body p-0\">\n            <ul class=\"list-group\">\n                <li class=\"list-group-item\"><div class=\"badge badge-pill badge-primary\"><i class=\"fa fa-phone pr-2\"></i>407-455-3455</div></li>\n                <li class=\"list-group-item\">\n                  <div class=\"d-flex flex-row\" *ngIf = \"history.patient != null \">\n                    <div *ngIf = \"history.patient._id != null\">{{history.patient.firstName}} {{history.patient.lastName}}</div>\n                    <div class=\"fa fa-download ml-auto\" (click)=\"createHistory(history)\"></div>\n                  </div>\n                </li>\n            </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-9\">\n      <div class=\"row\">\n        <div class=\"col-11\">\n          <h4>\n            {{patient.firstName}} {{patient.lastName}}\n          </h4>\n          <hr class=\"thick\">\n        <ngb-tabset>\n          <ngb-tab title=\"Upcoming Appointments\">\n            <ng-template ngbTabContent>\n              <div class=\"card m-auto\" id=\"appointment-card\" *ngIf=\"appointments.length > 0\">\n                    <div class=\"card-body p-0\">\n                      <ul class=\"list-group\">\n                        <li class=\"list-group-item\" *ngFor=\"let appt of appointments\">\n                          <div class=\"d-flex\">\n                            <div class=\"d-flex flex-column\">\n                              <div>\n                                <h4>{{appt.procedure.name}}</h4>\n                              </div>\n                              <div>\n                                {{appt.timeIn | date: 'fullDate'}}\n                              </div>\n                              <div>\n                                Start: {{appt.timeIn | date: 'shortTime'}}\n                              </div>\n                              <div>\n                                End: {{appt.timeOut | date: 'shortTime'}}\n                              </div>\n                              <div class=\"d-flex pt-2\">\n                                  <h5 *ngIf=\"appt.isPending && this.authService.currentUser.patient\"> <div class=\"badge badge-pill badge-success\">Awaiting Approval</div> </h5>\n                                  <h5 *ngIf=\"appt.isPending && this.authService.currentUser.doctor\"  (click)=\"openAppointmentModal(appt, content, 'accept')\"> <div class=\"badge badge-pill badge-success\">Accept</div> </h5>\n                                  <h5 *ngIf=\"appt.isPending && this.authService.currentUser.doctor\"  (click)=\"openAppointmentModal(appt, content, 'deny')\"> <div class=\"badge badge-pill badge-danger\">Deny</div> </h5>\n                                  <h5><div class=\"badge badge-pill badge-danger\" (click)=\"openAppointmentModal(appt, content, 'cancel')\">Cancel</div></h5>\n                              </div>\n                            </div>\n                            <div class=\"d-flex flex-column ml-auto\">\n                              <div *ngIf = \"this.authService.currentUser.patient\">\n                                Dr {{appt.doctor.firstName}} {{appt.doctor.lastName}}\n                              </div>\n                              <div *ngIf = \"this.authService.currentUser.patient\">\n                                  {{appt.doctor.location.line_1}}, {{appt.doctor.location.line_2}}<br>\n                                  {{appt.doctor.location.city}} {{appt.doctor.location.state}}, {{appt.doctor.location.zip}},\n                              </div>\n                              <div *ngIf = \"this.authService.currentUser.doctor\">\n                                  {{appt.patient.firstName}} {{appt.patient.lastName}}\n                              </div>\n                              <div class=\"d-flex\">\n                                <h5> <div class=\"badge badge-pill badge-primary\"><i class=\"fa fa-phone pr-2\"></i>407-455-3455</div> </h5>\n                                <h5> <div class=\"badge badge-pill badge-primary\"><i class=\"fa fa-envelope pr-2\"></i>strudel@toster.com</div> </h5>\n                              </div>\n                            </div>\n                          </div>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"card m-auto\" *ngIf=\"appointments.length == 0\">\n                    <div class=\"card-body\">\n                      You have no upcoming appointments.\n                    </div>\n                  </div>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab title=\"User Info\">\n            <ng-template ngbTabContent>\n              <form>\n                <div class=\"row\">\n                    <div class=\"col-2\">\n                      User Info:\n                    </div>\n                    <div class=\"col\">\n                      <hr class=\"thick\">\n                    </div>\n                  </div>\n                <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">First</label>\n                    <div class=\"col-sm-10\">\n                      <input type=\"text\" class=\"form-control\" id=\"staticEmail\" value=\"{{patient.firstName}}\">\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Last</label>\n                    <div class=\"col-sm-10\">\n                      <input type=\"text\" class=\"form-control\" id=\"staticEmail\" value=\"{{patient.lastName}}\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-2\">\n                    Health:\n                  </div>\n                  <div class=\"col\">\n                    <hr class=\"thick\">\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label for=\"inputHeight\" class=\"col-sm-2 col-form-label\">Height:</label>\n                  <div class=\"col-sm-4\">\n                    <input type=\"text\" class=\"form-control\" id=\"inputHeight\" value=\"{{patient.health.height}}\">\n                  </div>\n                  <label for=\"inputWeight\" class=\"col-sm-2 col-form-label\">Weight:</label>\n                  <div class=\"col-sm-4\">\n                    <input type=\"text\" class=\"form-control\" id=\"inputWeight\" value=\"{{patient.health.weight}}\">\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label for=\"inputHeight\" class=\"col-sm-2 col-form-label\">Medication:</label>\n                  <div class=\"col-sm-10\">\n                    <div class=\"d-flex flex-row\">\n                      <div class=\"badge badge-pill badge-primary p-auto\"  *ngFor=\"let med of patient.health.medication\">\n                        {{med}}\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label for=\"inputHeight\" class=\"col-sm-2 col-form-label\">Allergies:</label>\n                  <div class=\"col-sm-10\">\n                    <div class=\"d-flex flex-row\">\n                      <div class=\"badge badge-pill badge-primary p-auto\"  *ngFor=\"let al of patient.health.allergies\">\n                        {{al}}\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label for=\"inputHeight\" class=\"col-sm-2 col-form-label\">Conditions:</label>\n                  <div class=\"col-sm-10\">\n                    <div class=\"d-flex flex-row\">\n                      <div class=\"badge badge-pill badge-primary p-auto\"  *ngFor=\"let con of patient.health.conditions\">\n                        {{con}}\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </form>\n            </ng-template>\n          </ngb-tab>\n        </ngb-tabset>\n      </div>\n    </div>\n  </div>\n\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" *ngIf=\"accepting\">Accept Appointment</h4>\n        <h4 class=\"modal-title\" *ngIf=\"denying\">Deny Appointment</h4>\n        <h4 class=\"modal-title\" *ngIf=\"cancelling\">Cancel Appointment</h4>\n        <h4 class=\"modal-title\" *ngIf=\"completing\">Complete Appointment</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <h4 *ngIf=\"authService.currentUser.doctor\">\n          {{clickedAppointment.procedure.name}} <small>with {{clickedAppointment.patient.firstName}}  {{clickedAppointment.patient.lastName}} </small>\n        </h4>\n        <h4 *ngIf=\"authService.currentUser.patient\">\n          {{clickedAppointment.procedure.name}} <small>with {{clickedAppointment.doctor.firstName}}  {{clickedAppointment.doctor.lastName}} </small>\n        </h4>\n        <div class=\"d-flex flex-row justify-content-between\">\n          <div class=\"d-flex flex-column\">\n            <div>\n              Date: {{clickedAppointment.timeIn | date }}\n            </div>\n            <div>\n              Start Time: {{clickedAppointment.timeIn | date:'shortTime' }}\n            </div>\n            <div class=\"d-flex flex-row\">\n              End Time: {{clickedAppointment.timeOut | date:'shortTime'}}\n            </div>\n          </div>\n          <div class=\"d-flex flex-column\">\n            <div>\n              {{clickedAppointment.doctor.location.line_1}}, {{clickedAppointment.doctor.location.line_2}} \n            </div>\n            <div>\n              {{clickedAppointment.doctor.location.city}}, {{clickedAppointment.doctor.location.state}}, {{clickedAppointment.doctor.location.zip}} \n            </div>\n          </div>\n        </div>\n        <hr>\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n          <div class=\"form-content\">\n              <div class=\"form-group\">\n                  <input type=\"text\" name=\"comment\" id=\"comment\" [(ngModel)]=\"model.comment\" #comment =\"ngModel\" class=\"form-control input-lg\" placeholder=\"Comment\" tabindex=\"1\" required>\n              </div>\n          </div>\n          <button type=\"button\" class=\"btn btn-outline-dark\" *ngIf=\"cancelling\" (click)=\"cancelAppointment(clickedAppointment)\">Cancel Appointment</button>\n          <button type=\"button\" class=\"btn btn-outline-dark\" *ngIf=\"denying\" (click)=\"denyAppointment(clickedAppointment)\">Deny Appointment</button>\n          <button type=\"button\" class=\"btn btn-outline-dark\" *ngIf=\"accepting\" (click)=\"acceptAppointment(clickedAppointment)\">Accept Appointment</button>\n          <button type=\"button\" class=\"btn btn-outline-dark\" *ngIf=\"completing\" (click)=\"completeAppointment(clickedAppointment)\">Complete Appointment</button>\n        </form>\n      </div>\n    </ng-template>\n\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/patient-page/patient-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#calendar-col {\n  height: 60vh;\n  overflow-y: scroll; }\n\n.card-image-top {\n  width: 100%; }\n\n.modal-backdrop.fade {\n  opacity: 0.5 !important; }\n\n.modal-open .modal {\n  opacity: 1 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/patient-page/patient-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PatientPageComponent = (function () {
    function PatientPageComponent(route, patientService, calendarService, appointmentService, authService, modalService) {
        this.route = route;
        this.patientService = patientService;
        this.calendarService = calendarService;
        this.appointmentService = appointmentService;
        this.authService = authService;
        this.modalService = modalService;
        this.patient = { health: {} };
        this.model = { comment: '' };
        this.history = [];
        this.appointments = [];
    }
    PatientPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.initUser()
            .then(function (user) {
            _this.sub = _this.route.params
                .subscribe(function (params) {
                _this.id = params['id'];
                _this.patientService.getPatientById(_this.id)
                    .then(function (data) {
                    _this.patient = data;
                    _this.getHistory();
                    _this.generateAppointmentList();
                });
            });
        });
    };
    PatientPageComponent.prototype.eventClicked = function (content) {
        this.modalRef = this.modalService.open(content);
        this.modalRef.result.then(function (result) {
        }, function (reason) {
        });
    };
    // Appointments
    PatientPageComponent.prototype.cancelAppointment = function (appt) {
        var _this = this;
        this.appointmentService.cancelAppointment(appt._id, this.model.comment)
            .then(function (data) {
            if (data.success) {
                _this.calendarService.removeAppointment(appt.doctor.calendar, appt._id)
                    .then(function (cal) { _this.generateAppointmentList(); _this.resetModal(); _this.modalRef.close(); });
            }
        });
    };
    PatientPageComponent.prototype.acceptAppointment = function (appt) {
        var _this = this;
        this.appointmentService.acceptAppointment(appt._id, this.model.comment).then(function (data) {
            if (data.success) {
                _this.resetModal();
                _this.generateAppointmentList();
            }
        });
    };
    PatientPageComponent.prototype.denyAppointment = function (appt) {
        var _this = this;
        this.appointmentService.denyAppointment(appt._id, this.model.comment)
            .then(function (data) {
            if (data.success) {
                _this.calendarService.removeAppointment(appt.doctor.calendar, appt._id)
                    .then(function (cal) { _this.generateAppointmentList(); _this.resetModal(); _this.modalRef.close(); });
            }
        });
    };
    PatientPageComponent.prototype.completeAppointment = function (appt) {
        var _this = this;
        this.appointmentService.completeAppointment(appt._id, this.model.comment)
            .then(function (data) {
            if (data.success) {
                _this.calendarService.removeAppointment(appt.doctor.calendar, appt._id)
                    .then(function (cal) { _this.generateAppointmentList(); _this.resetModal(); _this.modalRef.close(); });
            }
        });
    };
    PatientPageComponent.prototype.openAppointmentModal = function (appointment, content, type) {
        var _this = this;
        console.log(appointment);
        this.clickedAppointment = appointment;
        if (type == 'cancel') {
            this.cancelling = true;
        }
        else if (type == 'accept') {
            this.accepting = true;
        }
        else if (type == 'deny') {
            this.denying = true;
        }
        else if (type == 'complete') {
            this.completing = true;
        }
        this.modalRef = this.modalService.open(content);
        this.modalRef.result.then(function (result) {
            _this.resetModal();
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.resetModal();
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    PatientPageComponent.prototype.generateAppointmentList = function () {
        var _this = this;
        for (var _i = 0, _a = this.authService.currentUser.doctor.history; _i < _a.length; _i++) {
            var history = _a[_i];
            console.log('his', history);
            if (history.patient._id == this.patient._id) {
                for (var _b = 0, _c = history.appointments; _b < _c.length; _b++) {
                    var appointment = _c[_b];
                    this.appointmentService.getAppointmentById(appointment._id)
                        .then(function (appt) { _this.appointments.push(appt); });
                }
            }
        }
        console.log(this.appointments);
    };
    PatientPageComponent.prototype.getHistory = function () {
        for (var _i = 0, _a = this.authService.currentUser.doctor.history; _i < _a.length; _i++) {
            var hist = _a[_i];
            if (hist.patient._id == this.id) {
                this.history = hist;
            }
        }
    };
    PatientPageComponent.prototype.resetModal = function () {
        //console.log('reset');
        this.completing = false;
        this.accepting = false;
        this.denying = false;
        this.cancelling = false;
        this.creating = false;
        this.editing = false;
        this.deleting = false;
    };
    PatientPageComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    return PatientPageComponent;
}());
PatientPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-patient-page',
        template: __webpack_require__("../../../../../src/app/layout/patient-page/patient-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/patient-page/patient-page.component.scss")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services__["i" /* PatientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["i" /* PatientService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services__["c" /* CalendarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["c" /* CalendarService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services__["a" /* AppointmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["a" /* AppointmentService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services__["b" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["b" /* AuthenticationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _f || Object])
], PatientPageComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=patient-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/patient-page/patient-page.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientPageModule", function() { return PatientPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient_page_component__ = __webpack_require__("../../../../../src/app/layout/patient-page/patient-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patient_page_routing_module__ = __webpack_require__("../../../../../src/app/layout/patient-page/patient-page-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__calendar_header_calendar_header_component__ = __webpack_require__("../../../../../src/app/layout/patient-page/calendar-header/calendar-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PatientPageModule = (function () {
    function PatientPageModule() {
    }
    return PatientPageModule;
}());
PatientPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular_calendar__["a" /* CalendarModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__patient_page_routing_module__["a" /* PatientPageRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared__["h" /* StatModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["b" /* FormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__patient_page_component__["a" /* PatientPageComponent */], __WEBPACK_IMPORTED_MODULE_8__calendar_header_calendar_header_component__["a" /* CalendarHeaderComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services__["i" /* PatientService */], __WEBPACK_IMPORTED_MODULE_6__services__["c" /* CalendarService */], __WEBPACK_IMPORTED_MODULE_6__services__["a" /* AppointmentService */]]
    })
], PatientPageModule);

//# sourceMappingURL=patient-page.module.js.map

/***/ })

});
//# sourceMappingURL=patient-page.module.chunk.js.map