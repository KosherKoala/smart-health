webpackJsonp(["profile.module"],{

/***/ "../../../../../src/app/layout/profile/profile-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_component__ = __webpack_require__("../../../../../src/app/layout/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__profile_component__["a" /* ProfileComponent */] }
];
var ProfileRoutingModule = (function () {
    function ProfileRoutingModule() {
    }
    return ProfileRoutingModule;
}());
ProfileRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], ProfileRoutingModule);

//# sourceMappingURL=profile-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>  \n  <div class=\"row\">\n    <div class=\"col-3\">\n      <div class=\"card m-auto\" style=\"width: 20rem;\">\n        <img class=\"card-img-top\" src=\"http://via.placeholder.com/350x350\" alt=\"Card image cap\">\n        <div class=\"card-body p-0\">\n            <ul class=\"list-group\">\n                <li class=\"list-group-item\">23 years old</li>\n                <li class=\"list-group-item\">Male</li>\n                <li class=\"list-group-item\">1223 Main St, Lake Mona, FL</li>\n                <br>\n                <li class=\"list-group-item\">View your medical history</li>\n            </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-9\">\n      <div class=\"row\">\n        <div class=\"col-8\">\n          <h4>\n            Tomas Poptart\n          </h4>\n          <p>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin diam orci, eu mattis lectus consectetur eget. \n              Curabitur ultricies non est a accumsan. Mauris efficitur id erat ut ultricies. Nunc id ex sollicitudin neque lobortis gravida a ut risus. \n              Maecenas et leo dictum, hendrerit libero eget, blandit diam. Suspendisse potenti. Cras sit amet consequat mi. Sed sem ligula, blandit in orci in, \n              luctus imperdiet nulla. Nullam sed cursus ipsum, a varius est. Nulla nec dolor vitae mi commodo mollis. Ut dignissim ipsum vel ipsum varius, \n              fermentum pharetra metus auctor. Donec luctus pretium purus, pulvinar consequat erat sagittis accumsan. Pellentesque sagittis volutpat ligula ac placerat. \n              Ut magna urna, malesuada et erat non, congue molestie dolor. Duis vitae porta sapien. Integer sodales interdum tristique.\n          </p>\n          <div class=\"d-flex px-4 justify-content-between\">\n           <h3> <div class=\"badge badge-pill badge-primary\"><i class=\"fa fa-phone pr-2\"></i>407-455-3455</div> </h3>\n           <h3> <div class=\"badge badge-pill badge-primary\"><i class=\"fa fa-envelope pr-2\"></i>strudel@toster.com</div> </h3>\n           <h3> <div class=\"badge badge-pill badge-primary\"><i class=\"fa fa-facebook pr-2\"></i>Toster Strudel</div> </h3>\n          </div>\n          <hr class=\"thick\">\n          <h3>Upcoming Appointments</h3>\n          <div class=\"card m-auto\" id=\"appointment-card\">\n            <div class=\"card-body p-0\">\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\" *ngFor=\"let appt of appointments\">\n                      <div class=\"d-flex\">\n                        <div class=\"d-flex flex-column\">\n                          <div>\n                            <h4>Tooth Pull</h4>\n                          </div>\n                          <div>\n                              2:00pm-4:00pm\n                          </div>\n                          <div class=\"d-flex pt-2\">\n                             <button class=\"btn btn-danger btn-sm\">Cancel</button>\n                          </div>\n                        </div>\n                        <div class=\"d-flex flex-column ml-auto\">\n                          <div class=\"d-flex\">\n                              <div>Dr. Worshall</div>\n                          </div>\n                          <div>\n                              1223 Crossroad Lane,<br>\n                              Orlando FL, 234234\n                          </div>\n                          <div class=\"d-flex\">\n                            <h5> <div class=\"badge badge-pill badge-primary\"><i class=\"fa fa-phone pr-2\"></i>407-455-3455</div> </h5>\n                            <h5> <div class=\"badge badge-pill badge-primary\"><i class=\"fa fa-envelope pr-2\"></i>strudel@toster.com</div> </h5>\n                          </div>\n                        </div>\n                      </div>\n                    </li>\n                </ul>\n            </div>\n          </div>\n          \n        </div>\n        <div class=\"col-4\">\n          <h4>My Doctors</h4>\n          <div class=\"row\" id=\"doctors-col\">\n            <div class=\"col-xl-12 col-lg-12 mb-2\" *ngFor=\"let doctor of doctors\" [routerLink]= \"['/doctor']\">\n                <app-stat [icon]=\"'http://via.placeholder.com/100x100'\" [firstName]=\"doctor.firstName\" [lastName]=\"doctor.lastName\" [specialty]= \"doctor.specialty\" [address]=\"doctor.address\"></app-stat>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#appointment-card {\n  height: 50vh;\n  overflow-y: scroll; }\n\n#doctors-col {\n  height: 85vh;\n  overflow-y: scroll; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent() {
        this.doctors = [];
        this.appointments = [1, 2, 3];
        this.doctors.push({
            id: 1,
            name: 'Dr Rufus Mandude',
            specialty: "Dentist",
            address: "1221 Foggy Dr, Suite 300, 32746"
        }, {
            id: 2,
            name: 'Dr Tommy Gill',
            specialty: "Plastic Surgeon",
            address: "1223 Foggy Cir, Suite 2, 32746"
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/layout/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/profile/profile.component.scss")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/profile/profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_component__ = __webpack_require__("../../../../../src/app/layout/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_routing_module__ = __webpack_require__("../../../../../src/app/layout/profile/profile-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__profile_routing_module__["a" /* ProfileRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["e" /* StatModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__profile_component__["a" /* ProfileComponent */]]
    })
], ProfileModule);

//# sourceMappingURL=profile.module.js.map

/***/ })

});
//# sourceMappingURL=profile.module.chunk.js.map