webpackJsonp([1],{

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detail/detail.module": [
		281,
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
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_vibration__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(203);
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
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
    }
    vibrate() {
        this.vibration.vibrate([30]);
    }
};
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/staff/Desktop/ProjetsIonic/Ionic_Exposition/src/pages/tabs/tabs.html"*/'<ion-tabs preloadTabs (ionChange)="vibrate()" >\n  <ion-tab (click)="vibrate()" [root]="tab1Root" tabTitle="Accueil" tabIcon="home"></ion-tab>\n  <ion-tab (click)="vibrate()" [root]="tab3Root" tabTitle="Les oeuvres" tabIcon="photos"></ion-tab>\n  <ion-tab (click)="vibrate()" [root]="tab2Root" tabTitle="Aventure QR" tabIcon="navigate"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/staff/Desktop/ProjetsIonic/Ionic_Exposition/src/pages/tabs/tabs.html"*/,
        providers: [[__WEBPACK_IMPORTED_MODULE_1__ionic_native_vibration__["a" /* Vibration */]]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_vibration__["a" /* Vibration */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




let AboutPage = class AboutPage {
    constructor(nav, barcode) {
        this.nav = nav;
        this.barcode = barcode;
        this.nav = nav;
        this.contacts = [
            { "id": 0,
                "author": "Jonathan Callan",
                "title": "AMERICA THE BEAUTIFUL",
                "image": "assets/imgs/americathebeautiful.jpg",
                "description": "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
                "url": "http://www.fondationfrances.com/artistes/jonathan-callan/",
                "sound": "assets/sounds/School-bell-sound-effect.mp3"
            },
            { "id": 1,
                "author": "Lynette Yiadom-Boakye",
                "title": "A QUARTER",
                "image": "assets/imgs/aQuarter.jpg",
                "description": "BLABLABLABLABLABLABLABLALBLBLAL",
                "url": "http://www.fondationfrances.com/artistes/lynette-yiadom-boakye/#930",
                "sound": "assets/sounds/School-bell-sound-effect.mp3"
            },
            { "id": 2,
                "author": "James Casebere",
                "title": "A BARREL VAULTED ROOM",
                "image": "assets/imgs/barrelVaultedRoom.jpg",
                "description": "BLABLABLABLABLABLABLABLALBLBLAL",
                "url": "http://www.fondationfrances.com/artistes/james-casebere/#260",
                "sound": "assets/sounds/School-bell-sound-effect.mp3"
            },
            { "id": 3,
                "author": "Claire Morgan",
                "title": "A HANGING FOG",
                "image": "assets/imgs/hangingFog.jpg",
                "description": "BLABLABLABLABLABLABLABLALBLBLAL",
                "url": "http://www.fondationfrances.com/artistes/claire-morgan/#624",
                "sound": "assets/sounds/School-bell-sound-effect.mp3"
            },
        ];
    }
    goToDetail(contact) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__detail_detail__["a" /* DetailPage */], {
            contact: contact
        });
    }
    scanBarcode() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.barcode.scan()
                .then((result) => {
                for (var i = 0, len = this.contacts.length; i < len; i++) {
                    if (result.text == this.contacts[i].id) {
                        this.goToDetail(this.contacts[i]);
                    }
                }
            })
                .catch((error) => {
                alert(error);
            });
        });
    }
};
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/staff/Desktop/ProjetsIonic/Ionic_Exposition/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <div style="color:black;">L\'aventure QR</div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <blockquote>\n    <p>“Emplacement pour une quote / phrase ”</p>\n    <p class="author">- Anonyme</p>\n  </blockquote>\n  <ion-row>\n    <button ion-button center small color="danger" (click)="scanBarcode()" icon-start>\n      <ion-icon name=\'search\'></ion-icon>\n      Cherchez les codes cachés !\n    </button>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/staff/Desktop/ProjetsIonic/Ionic_Exposition/src/pages/about/about.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail__ = __webpack_require__(51);
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
    constructor(nav, vibration) {
        this.nav = nav;
        this.vibration = vibration;
        this.nav = nav;
        this.contacts = [
            { "id": 0,
                "author": "Jonathan Callan",
                "title": "AMERICA THE BEAUTIFUL",
                "image": "assets/imgs/americathebeautiful.jpg",
                "description": "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
                "url": "http://www.fondationfrances.com/artistes/jonathan-callan/",
                "sound": "assets/sounds/School-bell-sound-effect.mp3"
            },
            { "id": 1,
                "author": "Lynette Yiadom-Boakye",
                "title": "A QUARTER",
                "image": "assets/imgs/aQuarter.jpg",
                "description": "BLABLABLABLABLABLABLABLALBLBLAL",
                "url": "http://www.fondationfrances.com/artistes/lynette-yiadom-boakye/#930",
                "sound": "assets/sounds/School-bell-sound-effect.mp3"
            },
            { "id": 2,
                "author": "James Casebere",
                "title": "A BARREL VAULTED ROOM",
                "image": "assets/imgs/barrelVaultedRoom.jpg",
                "description": "BLABLABLABLABLABLABLABLALBLBLAL",
                "url": "http://www.fondationfrances.com/artistes/james-casebere/#260",
                "sound": "assets/sounds/School-bell-sound-effect.mp3"
            },
            { "id": 3,
                "author": "Claire Morgan",
                "title": "A HANGING FOG",
                "image": "assets/imgs/hangingFog.jpg",
                "description": "BLABLABLABLABLABLABLABLALBLBLAL",
                "url": "http://www.fondationfrances.com/artistes/claire-morgan/#624",
                "sound": "assets/sounds/School-bell-sound-effect.mp3"
            },
        ];
    }
    vibrate() {
        this.vibration.vibrate([30]);
    }
    goToDetail(contact) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__detail_detail__["a" /* DetailPage */], {
            contact: contact
        });
    }
};
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/Users/staff/Desktop/ProjetsIonic/Ionic_Exposition/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title style="color:white;">\n      <div style="color:black;">Les œuvres</div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page ">\n    <ion-card (click)="goToDetail(contact); vibrate();" *ngFor="let contact of contacts">\n      <img src={{contact.image}}/>\n      <div class="card-title">{{contact.title}}</div>\n      <div class="card-subtitle">{{contact.author}}</div>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/staff/Desktop/ProjetsIonic/Ionic_Exposition/src/pages/contact/contact.html"*/,
        providers: [[__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */]]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
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
        selector: 'page-home',template:/*ion-inline-start:"/Users/staff/Desktop/ProjetsIonic/Ionic_Exposition/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="homeBack">\n  <!-- Real floating action button, fixed. It will not scroll with the content -->\n  <ion-fab top right edge #fab1>\n    <button ion-fab mini color="danger"><ion-icon name="heart"></ion-icon></button>\n    <ion-fab-list #fabList>\n      <div *ngIf="fabList.classList.contains(\'fab-list-active\')" class="backdrop" (click)="fab1.close();"></div>\n      <a button ion-fab href="https://fr-fr.facebook.com/fondationfrances/">\n        <ion-icon name="logo-facebook"></ion-icon>\n        <div class="label">Facebook</div>\n      </a>\n      <a button ion-fab href="https://twitter.com/FFrancesArt">\n        <ion-icon name="logo-twitter"></ion-icon>\n        <div class="label">Twitter</div>\n      </a>\n      <a button ion-fab href="tel:0688360209" clear>\n        <ion-icon name="call"></ion-icon>\n        <div class="label">Besoin d\'info ?</div>\n      </a>\n    </ion-fab-list>\n  </ion-fab>\n  <blockquote>\n    <p class="title">La Fabrique de l\'Esprit</p>\n    <p class="author">-by William Decourty    </p>\n  </blockquote>\n</ion-content>\n'/*ion-inline-end:"/Users/staff/Desktop/ProjetsIonic/Ionic_Exposition/src/pages/home/home.html"*/,
        providers: [[__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_detail_detail__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_onesignal__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_barcode_scanner__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_header_color__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_in_app_browser__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_social_sharing__ = __webpack_require__(156);
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
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_detail_detail__["a" /* DetailPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_detail_detail__["a" /* DetailPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_header_color__["a" /* HeaderColor */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_social_sharing__["a" /* SocialSharing */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(199);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/staff/Desktop/ProjetsIonic/Ionic_Exposition/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/staff/Desktop/ProjetsIonic/Ionic_Exposition/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(156);
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
        this.title = this.navParams.get('contact').title;
        this.description = this.navParams.get('contact').description;
        this.image = this.navParams.get('contact').image;
        this.author = this.navParams.get('contact').author;
        this.url = this.navParams.get('contact').url;
        this.sound = this.navParams.get('contact').sound;
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
            console.log(this.image);
        });
    }
    fbShare() {
        this.socialSharing.shareViaFacebook("Parlez de l'exposition @fondationfrances", null, this.url).then(() => {
            console.log("shareViaFacebook: Success");
        }).catch(() => {
            console.error("shareViaFacebook: failed");
            console.log(this.image);
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
        selector: 'page-detail',template:/*ion-inline-start:"/Users/staff/Desktop/ProjetsIonic/Ionic_Exposition/src/pages/detail/detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="cards-bg">\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n        Par {{author}}\n      </ion-card-title>\n      <p>{{description}}</p>\n    </ion-card-content>\n    <img src={{image}}/>\n    <ion-row no-padding>\n      <ion-col>\n        <button ion-button clear small (click)="playAudio(); vibrate();" color="danger" icon-start>\n          <ion-icon name=\'headset\'></ion-icon>\n          Ecouter le guide\n        </button>\n      </ion-col>\n      <ion-col>\n        <a button ion-button clear small href="{{url}}" onclick="window.open(this.href, \'_blank\', \'location=yes\', \'zoom=no\');return false;" (click)="vibrate();" color="danger" icon-start>\n          <ion-icon name=\'book\'></ion-icon>\n          En savoir plus\n        </a>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <div *ngIf="soundMenu==true">\n        <audio controls>\n          <source src="{{sound}}" type="audio/mpeg">\n          Your browser does not support the audio element.\n        </audio>\n      </div>\n    </ion-row>\n    <ion-row no-padding>\n      <ion-col>\n        <button ion-button clear small (click)="fbShare(); vibrate();" color="danger" icon-start>\n          <ion-icon name=\'logo-facebook\'></ion-icon>\n          facebook\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button clear small (click)="twShare(); vibrate();" color="danger" icon-start>\n          <ion-icon name=\'logo-twitter\'></ion-icon>\n          twitter\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button clear small (click)="Share(); vibrate();" color="danger" icon-start>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          plus\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/staff/Desktop/ProjetsIonic/Ionic_Exposition/src/pages/detail/detail.html"*/,
        providers: [[__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */]]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */]])
], DetailPage);

//# sourceMappingURL=detail.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map