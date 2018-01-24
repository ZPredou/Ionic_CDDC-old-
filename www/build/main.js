webpackJsonp([3],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlansPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let PlansPage = class PlansPage {
    constructor(nav, navParams, vibration, http) {
        this.nav = nav;
        this.navParams = navParams;
        this.vibration = vibration;
        this.http = http;
        this.oeuvres = [];
        this.nav = nav;
    }
    ionViewDidLoad() {
    }
    ngOnInit() {
        this.http.get('./assets/oeuvres.json').subscribe(data => {
            this.oeuvres = data['oeuvres'];
        });
    }
    vibrate() {
        this.vibration.vibrate([30]);
    }
    goToDetail(oeuvre) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__detail_detail__["a" /* DetailPage */], {
            oeuvre: oeuvre
        });
    }
};
PlansPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-plans',template:/*ion-inline-start:"/Users/staff/Desktop/ProjetsIonic/Ionic_CDDC/src/pages/plans/plans.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>plans</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <img src="/assets/imgs/floor-plan-graphic-example.gif" alt="two dots test" width="313" height="285" usemap="#dots" />\n    <map name="dots" id="dots">\n          <area alt="" title="" (click)="goToDetail(oeuvres[0]); vibrate()" shape="circle" coords="86,75,50" />\n          <area alt="" title="" (click)="goToDetail(oeuvres[1]); vibrate()" shape="circle" coords="51,229,50" />\n          <area alt="" title="" (click)="goToDetail(oeuvres[2]); vibrate()" shape="circle" coords="156,230,50" />\n          <area alt="" title="" (click)="goToDetail(oeuvres[3]); vibrate()" shape="circle" coords="266,180,50" />\n    </map>\n    <img src="/assets/imgs/floor-plan-graphic-example.gif" alt="two dots test" width="313" height="285" usemap="#dots" />\n    <map name="dots" id="dots">\n          <area alt="" title="" (click)="goToDetail(oeuvres[0]); vibrate()" shape="circle" coords="86,75,50" />\n          <area alt="" title="" (click)="goToDetail(oeuvres[1]); vibrate()" shape="circle" coords="51,229,50" />\n          <area alt="" title="" (click)="goToDetail(oeuvres[2]); vibrate()" shape="circle" coords="156,230,50" />\n          <area alt="" title="" (click)="goToDetail(oeuvres[3]); vibrate()" shape="circle" coords="266,180,50" />\n    </map>\n</ion-content>\n'/*ion-inline-end:"/Users/staff/Desktop/ProjetsIonic/Ionic_CDDC/src/pages/plans/plans.html"*/,
        providers: [[__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */]]]
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
], PlansPage);

//# sourceMappingURL=plans.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let SchoolPage = class SchoolPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
    }
};
SchoolPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-school',template:/*ion-inline-start:"/Users/staff/Desktop/ProjetsIonic/Ionic_CDDC/src/pages/school/school.html"*/'<!--\n  Generated template for the SchoolPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title style="color:black">Le collège ...</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <section data-description="Thin/Super bold/thin">\n	<div class="wrapper">\n	 <h1 class="gamma lato thin uppercase ls-xlarge">\n		 Beautiful<br>\n		 <span class="open-sans tera ls-xlarge bold">Type</span><br>\n		 <span class="epsilon ls-medium">Yes it can be done</span>\n		</h1>\n	 </div>\n	</section>\n</ion-content>\n'/*ion-inline-end:"/Users/staff/Desktop/ProjetsIonic/Ionic_CDDC/src/pages/school/school.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], SchoolPage);

//# sourceMappingURL=school.js.map

/***/ }),

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detail/detail.module": [
		291,
		2
	],
	"../pages/plans/plans.module": [
		290,
		1
	],
	"../pages/school/school.module": [
		292,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_vibration__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__school_school__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let TabsPage = class TabsPage {
    constructor(vibration) {
        this.vibration = vibration;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__school_school__["a" /* SchoolPage */];
    }
    vibrate() {
        this.vibration.vibrate([30]);
    }
};
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/staff/Desktop/ProjetsIonic/Ionic_CDDC/src/pages/tabs/tabs.html"*/'<ion-tabs preloadTabs (ionChange)="vibrate()" >\n  <ion-tab (click)="vibrate()" [root]="tab1Root" tabTitle="Accueil" tabIcon="home"></ion-tab>\n  <ion-tab (click)="vibrate()" [root]="tab3Root" tabTitle="Le collège" tabIcon="school"></ion-tab>\n  <ion-tab (click)="vibrate()" [root]="tab2Root" tabTitle="Exposition virtuelle" tabIcon="navigate"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/staff/Desktop/ProjetsIonic/Ionic_CDDC/src/pages/tabs/tabs.html"*/,
        providers: [[__WEBPACK_IMPORTED_MODULE_1__ionic_native_vibration__["a" /* Vibration */]]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_vibration__["a" /* Vibration */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plans_plans__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let AboutPage = class AboutPage {
    constructor(nav, barcode, http) {
        this.nav = nav;
        this.barcode = barcode;
        this.http = http;
        this.nav = nav;
    }
    goToOeuvres() {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */]);
    }
    goToPlans() {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__plans_plans__["a" /* PlansPage */]);
    }
};
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/staff/Desktop/ProjetsIonic/Ionic_CDDC/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <div style="color:black;">Exposition Virtuelle</div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <blockquote>\n    <p>L\'exposition virtuelle</p>\n    <p class="author"></p>\n  </blockquote>\n  <ion-row>\n    <button ion-button center color="danger" (click)="goToPlans()" icon-start>\n      <ion-icon name=\'navigate\'></ion-icon>\n      La mise en Espace\n    </button>\n    <button ion-button center color="danger" (click)="goToOeuvres()" icon-start>\n      <ion-icon name=\'photos\'></ion-icon>\n      Les oeuvres\n    </button>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/staff/Desktop/ProjetsIonic/Ionic_CDDC/src/pages/about/about.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]]
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let ContactPage = class ContactPage {
    constructor(nav, vibration, http) {
        this.nav = nav;
        this.vibration = vibration;
        this.http = http;
        this.oeuvres = [];
        this.nav = nav;
    }
    ngOnInit() {
        this.http.get('./assets/oeuvres.json').subscribe(data => {
            this.oeuvres = data['oeuvres'];
        });
    }
    vibrate() {
        this.vibration.vibrate([30]);
    }
    goToDetail(oeuvre) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__detail_detail__["a" /* DetailPage */], {
            oeuvre: oeuvre
        });
    }
};
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/Users/staff/Desktop/ProjetsIonic/Ionic_CDDC/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title style="color:white;">\n      <div style="color:black;">Les œuvres</div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page ">\n  <div *ngIf="oeuvres">\n    <ion-card (click)="goToDetail(oeuvre); vibrate();" *ngFor="let oeuvre of oeuvres">\n      <img src={{oeuvre.image}}/>\n      <div class="card-title">{{oeuvre.title}}</div>\n      <div class="card-subtitle">{{oeuvre.author}}</div>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/staff/Desktop/ProjetsIonic/Ionic_CDDC/src/pages/contact/contact.html"*/,
        providers: [[__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */]]]
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let HomePage = class HomePage {
    constructor(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
    }
    presentToast() {
        let toast = this.toastCtrl.create({
            message: 'Une POP UP dans l application pour annoncer quelque chose d important (ou pas!)',
            duration: 3000,
            position: 'top'
        });
        toast.present();
    }
};
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/staff/Desktop/ProjetsIonic/Ionic_CDDC/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="homeBack">\n  <!-- Real floating action button, fixed. It will not scroll with the content -->\n  <ion-fab top right edge #fab1>\n    <button ion-fab mini color="dark"><ion-icon name="heart"></ion-icon></button>\n    <ion-fab-list #fabList>\n      <div *ngIf="fabList.classList.contains(\'fab-list-active\')" class="backdrop" (click)="fab1.close();"></div>\n      <a button ion-fab href="https://fr-fr.facebook.com/fondationfrances/">\n        <ion-icon name="logo-facebook"></ion-icon>\n        <div class="label">Facebook</div>\n      </a>\n      <a button ion-fab href="https://twitter.com/FFrancesArt">\n        <ion-icon name="logo-twitter"></ion-icon>\n        <div class="label">Twitter</div>\n      </a>\n      <a button ion-fab href="tel:0688360209" clear>\n        <ion-icon name="call"></ion-icon>\n        <div class="label">Besoin d\'info ?</div>\n      </a>\n    </ion-fab-list>\n  </ion-fab>\n  <img class="logo" src="./assets/imgs/FDE.jpg">\n  <div class="wrapping-title">\n    <h1> A propos ..</h1>\n    <h2> Nos projets d\'avenirs et nos offres actuelles</h2>\n    <p class="title">Depuis sa création, La Fabrique de l\'Esprit® développe des contenus pédagogiques, élabore des programmes éducatifs culturels, à l’appui d’œuvres contemporaines, et des œuvres de la collection Francès. L’ensemble de ces programmes répond à des enjeux éducatifs, artistiques et culturels.</p>\n    <p class="title">En 2017, elle devient membre du mouvement des clubs français pour l’UNESCO. L’accréditation est émise par le Commission Nationale Française pour l’UNESCO. Un prolongement évident tant les missions accomplies répondent aux mêmes enjeux sur le plan de l’éducation, des échanges internationaux et du partage de connaissances pour conserver un patrimoine et défendre des valeurs de paix et de collaborations.</p>\n  </div>\n  <button ion-button full color="danger" onclick="window.open(\'http://lafabriquedelespritlesamis.fr/\', \'_blank\', \'location=yes\', \'zoom=no\');return false;">Voir le site de la FDE</button>\n</ion-content>\n'/*ion-inline-end:"/Users/staff/Desktop/ProjetsIonic/Ionic_CDDC/src/pages/home/home.html"*/,
        providers: [[__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_detail_detail__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_school_school__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_plans_plans__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_onesignal__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_barcode_scanner__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_header_color__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_in_app_browser__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_social_sharing__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_detail_detail__["a" /* DetailPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_school_school__["a" /* SchoolPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_plans_plans__["a" /* PlansPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/plans/plans.module#PlansPageModule', name: 'PlansPage', segment: 'plans', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/school/school.module#SchoolPageModule', name: 'SchoolPage', segment: 'school', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_detail_detail__["a" /* DetailPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_school_school__["a" /* SchoolPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_plans_plans__["a" /* PlansPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_header_color__["a" /* HeaderColor */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let MyApp = class MyApp {
    constructor(platform, statusBar, _OneSignal, splashScreen) {
        this._OneSignal = _OneSignal;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            splashScreen.hide();
            this._OneSignal.startInit('b532d545-0594-4d4c-9f34-cc6e3daf1056', '337865225097');
            this._OneSignal.inFocusDisplaying(this._OneSignal.OSInFocusDisplayOption.Notification);
            this._OneSignal.setSubscription(true);
            this._OneSignal.handleNotificationReceived().subscribe(() => {
                // handle received here how you wish.
            });
            this._OneSignal.handleNotificationOpened().subscribe(() => {
                // handle opened here how you wish.
            });
            this._OneSignal.endInit();
        });
    }
};
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/staff/Desktop/ProjetsIonic/Ionic_CDDC/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/staff/Desktop/ProjetsIonic/Ionic_CDDC/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let DetailPage = class DetailPage {
    constructor(nav, navParams, iab, vibration, socialSharing) {
        this.nav = nav;
        this.navParams = navParams;
        this.iab = iab;
        this.vibration = vibration;
        this.socialSharing = socialSharing;
        this.sharingOptions = {
            message: '@fondationfrances',
            url: this.url,
            subject: 'Exposition du moment',
        };
        this.navParams = navParams;
        this.title = this.navParams.get('oeuvre').title;
        this.description = this.navParams.get('oeuvre').description;
        this.image = this.navParams.get('oeuvre').image;
        this.author = this.navParams.get('oeuvre').author;
        this.url = this.navParams.get('oeuvre').url;
        this.sound = this.navParams.get('oeuvre').sound;
    }
    vibrate() {
        this.vibration.vibrate([30]);
    }
    playAudio() {
        if (this.soundMenu) {
            this.soundMenu = false;
        }
        else {
            this.soundMenu = true;
        }
    }
    twShare() {
        this.socialSharing.shareViaTwitter("Parlez de l'exposition @FFrancesArt", null, this.url).then(() => {
            console.log("shareViaTwitter: Success");
        }).catch(() => {
            console.error("shareViaTwitter: failed");
        });
    }
    fbShare() {
        this.socialSharing.shareViaFacebook("Parlez de l'exposition @fondationfrances", null, this.url).then(() => {
            console.log("shareViaFacebook: Success");
        }).catch(() => {
            console.error("shareViaFacebook: failed");
        });
    }
    Share() {
        this.socialSharing.shareWithOptions(this.sharingOptions).then(() => {
            console.log("shareWithOptions: Success");
        }).catch(() => {
            console.error("shareWithOptions: failed");
        });
    }
};
DetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-detail',template:/*ion-inline-start:"/Users/staff/Desktop/ProjetsIonic/Ionic_CDDC/src/pages/detail/detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="cards-bg">\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n        Par {{author}}\n      </ion-card-title>\n      <p>{{description}}</p>\n    </ion-card-content>\n    <img src={{image}}/>\n    <ion-row no-padding>\n      <ion-col>\n        <button ion-button clear small (click)="playAudio(); vibrate();" color="danger" icon-start>\n          <ion-icon name=\'headset\'></ion-icon>\n          Ecouter le guide\n        </button>\n      </ion-col>\n      <ion-col>\n        <a button ion-button clear small href="{{url}}" onclick="window.open(this.href, \'_blank\', \'location=yes\', \'zoom=no\');return false;" (click)="vibrate();" color="danger" icon-start>\n          <ion-icon name=\'book\'></ion-icon>\n          En savoir plus\n        </a>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <div *ngIf="soundMenu==true">\n        <audio controls>\n          <source src="{{sound}}" type="audio/mpeg">\n          Your browser does not support the audio element.\n        </audio>\n      </div>\n    </ion-row>\n    <ion-row no-padding>\n      <ion-col>\n        <button ion-button clear small (click)="fbShare(); vibrate();" color="danger" icon-start>\n          <ion-icon name=\'logo-facebook\'></ion-icon>\n          facebook\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button clear small (click)="twShare(); vibrate();" color="danger" icon-start>\n          <ion-icon name=\'logo-twitter\'></ion-icon>\n          twitter\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button clear small (click)="Share(); vibrate();" color="danger" icon-start>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          plus\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/staff/Desktop/ProjetsIonic/Ionic_CDDC/src/pages/detail/detail.html"*/,
        providers: [[__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */]]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */]])
], DetailPage);

//# sourceMappingURL=detail.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map