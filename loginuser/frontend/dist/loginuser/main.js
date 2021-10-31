(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+hLr":
/*!**************************************!*\
  !*** ./src/app/authguard.service.ts ***!
  \**************************************/
/*! exports provided: AuthguardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthguardService", function() { return AuthguardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AuthguardService {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        if (localStorage.getItem("userData") || localStorage.getItem("username")) {
            return true;
        }
        else {
            this.router.navigate(['home']);
            return false;
        }
    }
}
AuthguardService.ɵfac = function AuthguardService_Factory(t) { return new (t || AuthguardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthguardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthguardService, factory: AuthguardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\loginuser\loginuser\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "3nXK":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function UserComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_div_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.signout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sign Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userDetail.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userDetail.userEmail);
} }
class UserComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        if (JSON.parse(localStorage.getItem("userData"))) {
            this.userDetail = JSON.parse(localStorage.getItem("userData"));
            console.log(this.userDetail);
        }
        else {
            this.userDetail = JSON.parse(localStorage.getItem("username"));
            console.log(this.userDetail);
        }
    }
    pageReload() {
        this.router.navigate(['']).then(() => {
            window.location.reload();
        });
    }
    googleLogIn() {
        localStorage.removeItem("userData");
        this.pageReload();
    }
    usernameLogIn() {
        localStorage.removeItem("username");
        this.pageReload();
    }
    redirectToHomePage() {
        if (localStorage.getItem("userData")) {
            this.googleLogIn();
        }
        else {
            this.usernameLogIn();
        }
    }
    signout() {
        this.redirectToHomePage();
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 1, vars: 1, consts: [["class", "userDetailDisplay", 4, "ngIf"], [1, "userDetailDisplay"], [3, "click"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserComponent_div_0_Template, 8, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userDetail);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".userDetailDisplay[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-around;\r\n    margin: 20px;\r\n    padding: 20px;\r\n    background-color: blue;\r\n    color: white;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    padding: 4px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoidXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJEZXRhaWxEaXNwbGF5e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIHBhZGRpbmc6IDRweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service.service */ "ibrm");







const _c0 = ["loginRef"];
class HomeComponent {
    constructor(router, zone, formBuilder, http, service) {
        this.router = router;
        this.zone = zone;
        this.formBuilder = formBuilder;
        this.http = http;
        this.service = service;
    }
    ngOnInit() {
        this.checkUserLogin();
        this.googleInitialize();
        this.userForm();
    }
    userForm() {
        this.userFormDetails = this.formBuilder.group({
            emailId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    checkUserLogin() {
        if (JSON.parse(localStorage.getItem("userData")) || JSON.parse(localStorage.getItem("username"))) {
            this.router.navigate(['user']);
        }
    }
    googleInitialize() {
        window['googleSDKLoaded'] = () => {
            window['gapi'].load('auth2', () => {
                this.auth2 = window['gapi'].auth2.init({
                    client_id: '655550997112-pv485bcglm6c3p1f83fm8b68ruj1ih9u.apps.googleusercontent.com',
                    cookie_policy: 'single_host_origin',
                    scope: 'profile email'
                });
                // this.zone.run(() => this.prepareLogin());
                this.prepareLogin();
            });
        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'google-jssdk'));
    }
    prepareLogin() {
        this.auth2.attachClickHandler(this.loginElement.nativeElement, {}, (googleUser) => {
            let profile = googleUser.getBasicProfile();
            console.log('Token || ' + googleUser.getAuthResponse().id_token);
            // this.show = true;
            // this.Name =  profile.getName();
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
            console.log("profile", profile);
            this.userName = profile.Se;
            this.userEmail = profile.Yt;
            console.log("user name", this.userName);
            console.log("user email", this.userEmail);
            localStorage.setItem("userData", JSON.stringify({ userName: this.userName, userEmail: this.userEmail }));
            this.zone.run(() => this.router.navigate(['user']));
            // localStorageData(googleUser.getAuthResponse().id_token, profile.getImageUrl(), profile.getEmail());
        }, (error) => {
            alert(JSON.stringify(error, undefined, 2));
        });
    }
    getUserDetail(event) {
        event.preventDefault();
        const httpOptionsPlain = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Accept': 'text/plain',
                'Content-Type': 'text/plain'
            }),
            'responseType': 'text'
        };
        let obj = {
            emailId: this.userFormDetails.get('emailId').value,
            password: this.userFormDetails.get('password').value
        };
        console.log(obj);
        this.service.getdata().subscribe((result) => {
            console.log(result);
            let filter = result.find(function (e, index) {
                if (e.emailId === obj.emailId && e.password === obj.password) {
                    return e;
                }
            });
            console.log("filter", filter);
            if (filter) {
                let username = filter.username;
                let emailId = filter.emailId;
                let obj = {
                    userName: username,
                    userEmail: emailId
                };
                localStorage.setItem("username", JSON.stringify(obj));
                this.router.navigate(['/user']);
            }
        });
        // this.loanForm.reset();
        // },
        // error => {console.log(error);}
        // ) 
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.loginElement = _t.first);
    } }, decls: 25, vars: 1, consts: [[1, "container", "containerSize"], [3, "formGroup", "submit"], [1, "input-field"], ["type", "text", "formControlName", "emailId"], ["type", "text", "formControlName", "password"], [1, "button"], [1, "inner"], [1, "auth", "textCenter"], [1, "container", "mt-5"], [1, "row", "mt-5"], [1, "links"], [1, "google"], ["loginRef", ""], ["alt", "Login with Google", "src", "https://hrcdn.net/fcore/assets/google-colored-20b8216731.svg", 1, "social-btn-icon"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Login Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function HomeComponent_Template_form_submit_3_listener($event) { return ctx.getUserDetail($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Email test@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Password test");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Or login with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Login with Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.userFormDetails);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".social-btn-icon[_ngcontent-%COMP%]{\r\n    height: 18px;\r\n    margin-left: 17px;\r\n    margin-bottom: -3px;\r\n}\r\n\r\n.login-Btn[_ngcontent-%COMP%]{\r\n    margin-left: 44%;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    background-color: aliceblue;\r\n    border: 2px solid black;\r\n    height: 40px;\r\n}\r\n\r\n.textCenter[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n*[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  padding: 0;\r\n  border-radius: 5px;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody[_ngcontent-%COMP%]{\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-family: sans-serif;\r\n  justify-content: center;\r\n  \r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 400px;\r\n  background: white;\r\n  padding: 60px 1px;\r\n}\r\n\r\n.containerSize[_ngcontent-%COMP%]{\r\n    width: 400px;\r\n    margin: 0 auto;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]{\r\n  font-size: 40px;\r\n  margin-bottom: 60px;\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{\r\n  margin: 25px 0;\r\n  position: relative;\r\n  height: 50px;\r\n  width: 100%;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  width: 100%;\r\n  border: 1px solid silver;\r\n  padding-left: 15px;\r\n  outline: none;\r\n  font-size: 19px;\r\n  transition: .4s;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus{\r\n  border: 1px solid #1DA1F2;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], span.show[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n  left: 15px;\r\n  pointer-events: none;\r\n  color: grey;\r\n  font-size: 18px;\r\n  transition: .4s;\r\n}\r\n\r\nspan.show[_ngcontent-%COMP%]{\r\n  right: 20px;\r\n  color: #111;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n  visibility: hidden;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:valid    ~ span.show[_ngcontent-%COMP%]{\r\n  visibility: visible;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%]{\r\n  transform: translateY(-33px);\r\n  background: white;\r\n  font-size: 16px;\r\n  color: #1DA1F2;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{\r\n  margin-top: 30px;\r\n  overflow: hidden;\r\n  z-index: 111;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 300%;\r\n  left: -100%;\r\n  z-index: -1;\r\n  transition: all .4s;\r\n  \r\n  background: blue;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover   .inner[_ngcontent-%COMP%]{\r\n  left: 0;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 100%;\r\n  border: none;\r\n  background: none;\r\n  outline: none;\r\n  color: white;\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .auth[_ngcontent-%COMP%]{\r\n  margin: 35px 0 20px 0;\r\n  font-size: 19px;\r\n  color: grey;\r\n}\r\n\r\n.links[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  cursor: pointer;\r\n}\r\n\r\n.facebook[_ngcontent-%COMP%], .google[_ngcontent-%COMP%]{\r\n  height: 40px;\r\n  width: 100%;\r\n  border: 1px solid silver;\r\n  border-radius: 3px;\r\n  margin: 0 10px;\r\n  transition: .4s;\r\n}\r\n\r\n.facebook[_ngcontent-%COMP%]:hover{\r\n  border: 1px solid #4267B2;\r\n}\r\n\r\n.google[_ngcontent-%COMP%]:hover{\r\n  border: 1px solid #dd4b39;\r\n}\r\n\r\n.facebook[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .facebook[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  color: #4267B2;\r\n}\r\n\r\n.google[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .google[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  color: #dd4b39;\r\n}\r\n\r\n.links[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  font-size: 23px;\r\n  line-height: 40px;\r\n  margin-left: -90px;\r\n}\r\n\r\n.links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  font-size: 17px;\r\n  font-weight: bold;\r\n  padding-left: 8px;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.signup[_ngcontent-%COMP%]{\r\n  margin-top: 50px;\r\n  font-family: 'Noto Sans', sans-serif;\r\n}\r\n\r\n.signup[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color: #3498db;\r\n  text-decoration: none;\r\n}\r\n\r\n.signup[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n  text-decoration: underline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,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InNvdXJjZXNDb250ZW50IjpbIi5zb2NpYWwtYnRuLWljb257XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTdweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0zcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1CdG57XHJcbiAgICBtYXJnaW4tbGVmdDogNDQlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLnRleHRDZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo2MDB8Tm90bytTYW5zfE9wZW4rU2Fuczo0MDAsNzAwJmRpc3BsYXk9c3dhcCcpOyAqL1xyXG4qe1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmJvZHl7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC8qIGJhY2tncm91bmQ6IHVybChiZy5qcGcpOyAqL1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA2MHB4IDFweDtcclxufVxyXG4uY29udGFpbmVyU2l6ZXtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5oZWFkZXJ7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxufVxyXG4uaW5wdXQtZmllbGQsIGZvcm0gLmJ1dHRvbntcclxuICBtYXJnaW46IDI1cHggMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5pbnB1dC1maWVsZCBpbnB1dHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgc2lsdmVyO1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuaW5wdXQ6Zm9jdXN7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzFEQTFGMjtcclxufVxyXG4uaW5wdXQtZmllbGQgbGFiZWwsIHNwYW4uc2hvd3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcbi5pbnB1dC1maWVsZCBsYWJlbHtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGNvbG9yOiBncmV5O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuc3Bhbi5zaG93e1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiAjMTExO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5pbnB1dDp2YWxpZCB+IHNwYW4uc2hvd3tcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcbmlucHV0OmZvY3VzIH4gbGFiZWwsXHJcbmlucHV0OnZhbGlkIH4gbGFiZWx7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zM3B4KTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMxREExRjI7XHJcbn1cclxuZm9ybSAuYnV0dG9ue1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB6LWluZGV4OiAxMTE7XHJcbn1cclxuLmJ1dHRvbiAuaW5uZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMzAwJTtcclxuICBsZWZ0OiAtMTAwJTtcclxuICB6LWluZGV4OiAtMTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xyXG4gIC8qIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJpZ2h0LCMwMGRiZGUsI2ZjMDBmZiwjMDBkYmRlLCNmYzAwZmYpOyAqL1xyXG4gIGJhY2tncm91bmQ6IGJsdWU7XHJcbn1cclxuLmJ1dHRvbjpob3ZlciAuaW5uZXJ7XHJcbiAgbGVmdDogMDtcclxufVxyXG4uYnV0dG9uIGJ1dHRvbntcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5jb250YWluZXIgLmF1dGh7XHJcbiAgbWFyZ2luOiAzNXB4IDAgMjBweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBjb2xvcjogZ3JleTtcclxufVxyXG4ubGlua3N7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmZhY2Vib29rLCAuZ29vZ2xle1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBzaWx2ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG4gIHRyYW5zaXRpb246IC40cztcclxufVxyXG4uZmFjZWJvb2s6aG92ZXJ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzQyNjdCMjtcclxufVxyXG4uZ29vZ2xlOmhvdmVye1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZDRiMzk7XHJcbn1cclxuLmZhY2Vib29rIGksIC5mYWNlYm9vayBzcGFue1xyXG4gIGNvbG9yOiAjNDI2N0IyO1xyXG59XHJcbi5nb29nbGUgaSwgLmdvb2dsZSBzcGFue1xyXG4gIGNvbG9yOiAjZGQ0YjM5O1xyXG59XHJcbi5saW5rcyBpe1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBtYXJnaW4tbGVmdDogLTkwcHg7XHJcbn1cclxuLmxpbmtzIHNwYW57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnNpZ251cHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4uc2lnbnVwIGF7XHJcbiAgY29sb3I6ICMzNDk4ZGI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5zaWdudXAgYTpob3ZlcntcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'loginuser';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.component */ "3nXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "ibrm":
/*!************************************!*\
  !*** ./src/app/service.service.ts ***!
  \************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ServiceService {
    constructor(http) {
        this.http = http;
        this.configUrl = 'https://loginuserdisplay.herokuapp.com/api';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            })
        };
    }
    getdata() {
        return this.http.get(`${this.configUrl}/users`, this.httpOptions);
    }
}
ServiceService.ɵfac = function ServiceService_Factory(t) { return new (t || ServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ServiceService, factory: ServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _authguard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authguard.service */ "+hLr");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ "3nXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    // {path:'home', component:HomeComponent},
    { path: "user", component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"], canActivate: [_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardService"]] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map