(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "../../libs/chassis/src/index.ts":
    /*!*******************************************************!*\
      !*** /home/schumajr/cosmos/libs/chassis/src/index.ts ***!
      \*******************************************************/

    /*! exports provided: ChassisModule, ChassisService */

    /***/
    function libsChassisSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_chassis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/chassis.module */
      "../../libs/chassis/src/lib/chassis.module.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ChassisModule", function () {
        return _lib_chassis_module__WEBPACK_IMPORTED_MODULE_0__["ChassisModule"];
      });
      /* harmony import */


      var _lib_chassis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lib/chassis.service */
      "../../libs/chassis/src/lib/chassis.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ChassisService", function () {
        return _lib_chassis_service__WEBPACK_IMPORTED_MODULE_1__["ChassisService"];
      });
      /***/

    },

    /***/
    "../../libs/chassis/src/lib/chassis.module.ts":
    /*!********************************************************************!*\
      !*** /home/schumajr/cosmos/libs/chassis/src/lib/chassis.module.ts ***!
      \********************************************************************/

    /*! exports provided: ChassisModule */

    /***/
    function libsChassisSrcLibChassisModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChassisModule", function () {
        return ChassisModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/divider */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/list */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/menu */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
      /* harmony import */


      var _cosmos_user_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @cosmos/user-auth */
      "../../libs/user-auth/src/index.ts");
      /* harmony import */


      var _cosmos_user_profiles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @cosmos/user-profiles */
      "../../libs/user-profiles/src/index.ts");
      /* harmony import */


      var _chassis_chassis_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./chassis/chassis.component */
      "../../libs/chassis/src/lib/chassis/chassis.component.ts");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./header/header.component */
      "../../libs/chassis/src/lib/header/header.component.ts");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./footer/footer.component */
      "../../libs/chassis/src/lib/footer/footer.component.ts");
      /* harmony import */


      var _sidebar_outer_left_sidebar_outer_left_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./sidebar-outer-left/sidebar-outer-left.component */
      "../../libs/chassis/src/lib/sidebar-outer-left/sidebar-outer-left.component.ts");
      /* harmony import */


      var _sidebar_outer_right_sidebar_outer_right_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./sidebar-outer-right/sidebar-outer-right.component */
      "../../libs/chassis/src/lib/sidebar-outer-right/sidebar-outer-right.component.ts");
      /* harmony import */


      var _sidebar_inner_left_sidebar_inner_left_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./sidebar-inner-left/sidebar-inner-left.component */
      "../../libs/chassis/src/lib/sidebar-inner-left/sidebar-inner-left.component.ts");
      /* harmony import */


      var _sidebar_inner_right_sidebar_inner_right_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./sidebar-inner-right/sidebar-inner-right.component */
      "../../libs/chassis/src/lib/sidebar-inner-right/sidebar-inner-right.component.ts");

      var ChassisModule = function ChassisModule() {
        _classCallCheck(this, ChassisModule);
      };

      ChassisModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ChassisModule
      });
      ChassisModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ChassisModule_Factory(t) {
          return new (t || ChassisModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"], _cosmos_user_auth__WEBPACK_IMPORTED_MODULE_15__["UserAuthModule"], _cosmos_user_profiles__WEBPACK_IMPORTED_MODULE_16__["UserProfilesModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChassisModule, {
          declarations: [_chassis_chassis_component__WEBPACK_IMPORTED_MODULE_17__["ChassisComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"], _sidebar_outer_left_sidebar_outer_left_component__WEBPACK_IMPORTED_MODULE_20__["SidebarOuterLeftComponent"], _sidebar_outer_right_sidebar_outer_right_component__WEBPACK_IMPORTED_MODULE_21__["SidebarOuterRightComponent"], _sidebar_inner_left_sidebar_inner_left_component__WEBPACK_IMPORTED_MODULE_22__["SidebarInnerLeftComponent"], _sidebar_inner_right_sidebar_inner_right_component__WEBPACK_IMPORTED_MODULE_23__["SidebarInnerRightComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"], _cosmos_user_auth__WEBPACK_IMPORTED_MODULE_15__["UserAuthModule"], _cosmos_user_profiles__WEBPACK_IMPORTED_MODULE_16__["UserProfilesModule"]],
          exports: [_chassis_chassis_component__WEBPACK_IMPORTED_MODULE_17__["ChassisComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"], _sidebar_outer_left_sidebar_outer_left_component__WEBPACK_IMPORTED_MODULE_20__["SidebarOuterLeftComponent"], _sidebar_outer_right_sidebar_outer_right_component__WEBPACK_IMPORTED_MODULE_21__["SidebarOuterRightComponent"], _sidebar_inner_left_sidebar_inner_left_component__WEBPACK_IMPORTED_MODULE_22__["SidebarInnerLeftComponent"], _sidebar_inner_right_sidebar_inner_right_component__WEBPACK_IMPORTED_MODULE_23__["SidebarInnerRightComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChassisModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_chassis_chassis_component__WEBPACK_IMPORTED_MODULE_17__["ChassisComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"], _sidebar_outer_left_sidebar_outer_left_component__WEBPACK_IMPORTED_MODULE_20__["SidebarOuterLeftComponent"], _sidebar_outer_right_sidebar_outer_right_component__WEBPACK_IMPORTED_MODULE_21__["SidebarOuterRightComponent"], _sidebar_inner_left_sidebar_inner_left_component__WEBPACK_IMPORTED_MODULE_22__["SidebarInnerLeftComponent"], _sidebar_inner_right_sidebar_inner_right_component__WEBPACK_IMPORTED_MODULE_23__["SidebarInnerRightComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"], _cosmos_user_auth__WEBPACK_IMPORTED_MODULE_15__["UserAuthModule"], _cosmos_user_profiles__WEBPACK_IMPORTED_MODULE_16__["UserProfilesModule"]],
            exports: [_chassis_chassis_component__WEBPACK_IMPORTED_MODULE_17__["ChassisComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"], _sidebar_outer_left_sidebar_outer_left_component__WEBPACK_IMPORTED_MODULE_20__["SidebarOuterLeftComponent"], _sidebar_outer_right_sidebar_outer_right_component__WEBPACK_IMPORTED_MODULE_21__["SidebarOuterRightComponent"], _sidebar_inner_left_sidebar_inner_left_component__WEBPACK_IMPORTED_MODULE_22__["SidebarInnerLeftComponent"], _sidebar_inner_right_sidebar_inner_right_component__WEBPACK_IMPORTED_MODULE_23__["SidebarInnerRightComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "../../libs/chassis/src/lib/chassis.service.ts":
    /*!*********************************************************************!*\
      !*** /home/schumajr/cosmos/libs/chassis/src/lib/chassis.service.ts ***!
      \*********************************************************************/

    /*! exports provided: ChassisService */

    /***/
    function libsChassisSrcLibChassisServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChassisService", function () {
        return ChassisService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "../../node_modules/rxjs/_esm2015/index.js");

      var ChassisService = /*#__PURE__*/function () {
        function ChassisService() {
          _classCallCheck(this, ChassisService);

          this.headerEnabled = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
          this.headerEnabled$ = this.headerEnabled.asObservable();
          this.headerVisible = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.headerVisible$ = this.headerVisible.asObservable();
          this.headerContent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
            links: []
          });
          this.headerContent$ = this.headerContent.asObservable();
          this.footerEnabled = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
          this.footerEnabled$ = this.footerEnabled.asObservable();
          this.footerVisible = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.footerVisible$ = this.footerVisible.asObservable();
          this.footerContent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
            links: []
          });
          this.footerContent$ = this.footerContent.asObservable();
          this.sidebarOuterLeftEnabled = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
          this.sidebarOuterLeftEnabled$ = this.sidebarOuterLeftEnabled.asObservable();
          this.sidebarOuterLeftContent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
          this.sidebarOuterLeftContent$ = this.sidebarOuterLeftContent.asObservable();
          this.sidebarOuterRightEnabled = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
          this.sidebarOuterRightEnabled$ = this.sidebarOuterRightEnabled.asObservable();
          this.sidebarOuterRightContent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
          this.sidebarOuterRightContent$ = this.sidebarOuterRightContent.asObservable();
          this.sidebarInnerLeftEnabled = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
          this.sidebarInnerLeftEnabled$ = this.sidebarInnerLeftEnabled.asObservable();
          this.sidebarInnerLeftContent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
          this.sidebarInnerLeftContent$ = this.sidebarInnerLeftContent.asObservable();
          this.sidebarInnerRightEnabled = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
          this.sidebarInnerRightEnabled$ = this.sidebarInnerRightEnabled.asObservable();
          this.sidebarInnerRightContent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
          this.sidebarInnerRightContent$ = this.sidebarInnerRightContent.asObservable();
        }

        _createClass(ChassisService, [{
          key: "enableHeader",
          value: function enableHeader(headerEnabled) {
            this.headerEnabled.next(headerEnabled);
            console.log("headerEnabled$ set to ".concat(this.headerEnabled.getValue()));
          }
        }, {
          key: "showHeader",
          value: function showHeader(headerVisible) {
            this.headerVisible.next(headerVisible);
            console.log("headerVisible$ set to ".concat(this.headerVisible.getValue()));
          }
        }, {
          key: "setHeaderContent",
          value: function setHeaderContent(headerContent) {
            this.headerContent.next(headerContent);
            console.log("headerContent$ set to ".concat(this.headerContent.getValue()));
          }
        }, {
          key: "enableFooter",
          value: function enableFooter(footerEnabled) {
            this.footerEnabled.next(footerEnabled);
            console.log("footerEnabled$ set to ".concat(this.footerEnabled.getValue()));
          }
        }, {
          key: "showFooter",
          value: function showFooter(footerVisible) {
            this.footerVisible.next(footerVisible);
            console.log("footerVisible$ set to ".concat(this.footerVisible.getValue()));
          }
        }, {
          key: "setFooterContent",
          value: function setFooterContent(footerContent) {
            this.footerContent.next(footerContent);
            console.log("footerContent$ set to ".concat(this.footerContent.getValue()));
          }
        }, {
          key: "enableSidebarOuterLeft",
          value: function enableSidebarOuterLeft(sidebarOuterLeftEnabled) {
            this.sidebarOuterLeftEnabled.next(sidebarOuterLeftEnabled);
            console.log("sidebarOuterLeftEnabled$ set to ".concat(this.sidebarOuterLeftEnabled.getValue()));
          }
        }, {
          key: "getSidebarOuterLeft",
          value: function getSidebarOuterLeft() {
            return this.sidebarOuterLeft;
          }
        }, {
          key: "setSidebarOuterLeft",
          value: function setSidebarOuterLeft(sidenav) {
            this.sidebarOuterLeft = sidenav;
          }
        }, {
          key: "openSidebarOuterLeft",
          value: function openSidebarOuterLeft() {
            return this.sidebarOuterLeft.open();
          }
        }, {
          key: "closeSidebarOuterLeft",
          value: function closeSidebarOuterLeft() {
            return this.sidebarOuterLeft.close();
          }
        }, {
          key: "toggleSidebarOuterLeft",
          value: function toggleSidebarOuterLeft() {
            console.log('toggleSidebarOuterLeft');
            this.sidebarOuterLeft.toggle();
          }
        }, {
          key: "setsidebarOuterLeftContent",
          value: function setsidebarOuterLeftContent(sidebarOuterLeftContent) {
            this.sidebarOuterLeftContent.next(sidebarOuterLeftContent);
            console.log("sidebarOuterLeftContent$ set to ".concat(this.sidebarOuterLeftContent.getValue()));
          }
        }, {
          key: "enableSidebarOuterRight",
          value: function enableSidebarOuterRight(sidebarOuterRightEnabled) {
            this.sidebarOuterRightEnabled.next(sidebarOuterRightEnabled);
            console.log("sidebarOuterRightEnabled$ set to ".concat(this.sidebarOuterRightEnabled.getValue()));
          }
        }, {
          key: "getSidebarOuterRight",
          value: function getSidebarOuterRight() {
            return this.sidebarOuterRight;
          }
        }, {
          key: "setSidebarOuterRight",
          value: function setSidebarOuterRight(sidenav) {
            this.sidebarOuterRight = sidenav;
          }
        }, {
          key: "openSidebarOuterRight",
          value: function openSidebarOuterRight() {
            return this.sidebarOuterRight.open();
          }
        }, {
          key: "closeSidebarOuterRight",
          value: function closeSidebarOuterRight() {
            return this.sidebarOuterRight.close();
          }
        }, {
          key: "toggleSidebarOuterRight",
          value: function toggleSidebarOuterRight() {
            console.log('toggleSidebarOuterRight');
            this.sidebarOuterRight.toggle();
          }
        }, {
          key: "setsidebarOuterRightContent",
          value: function setsidebarOuterRightContent(sidebarOuterRightContent) {
            this.sidebarOuterRightContent.next(sidebarOuterRightContent);
            console.log("sidebarOuterRightContent$ set to ".concat(this.sidebarOuterRightContent.getValue()));
          }
        }, {
          key: "enableSidebarInnerLeft",
          value: function enableSidebarInnerLeft(sidebarInnerLeftEnabled) {
            this.sidebarInnerLeftEnabled.next(sidebarInnerLeftEnabled);
            console.log("sidebarInnerLeftEnabled$ set to ".concat(this.sidebarInnerLeftEnabled.getValue()));
          }
        }, {
          key: "getSidebarInnerLeft",
          value: function getSidebarInnerLeft() {
            return this.sidebarInnerLeft;
          }
        }, {
          key: "setSidebarInnerLeft",
          value: function setSidebarInnerLeft(sidenav) {
            this.sidebarInnerLeft = sidenav;
          }
        }, {
          key: "openSidebarInnerLeft",
          value: function openSidebarInnerLeft() {
            return this.sidebarInnerLeft.open();
          }
        }, {
          key: "closeSidebarInnerLeft",
          value: function closeSidebarInnerLeft() {
            return this.sidebarInnerLeft.close();
          }
        }, {
          key: "toggleSidebarInnerLeft",
          value: function toggleSidebarInnerLeft() {
            console.log('toggleSidebarInnerLeft');
            this.sidebarInnerLeft.toggle();
          }
        }, {
          key: "setsidebarInnerLeftContent",
          value: function setsidebarInnerLeftContent(sidebarInnerLeftContent) {
            this.sidebarInnerLeftContent.next(sidebarInnerLeftContent);
            console.log("sidebarInnerLeftContent$ set to ".concat(this.sidebarInnerLeftContent.getValue()));
          }
        }, {
          key: "enableSidebarInnerRight",
          value: function enableSidebarInnerRight(sidebarInnerRightEnabled) {
            this.sidebarInnerRightEnabled.next(sidebarInnerRightEnabled);
            console.log("sidebarInnerRightEnabled$ set to ".concat(this.sidebarInnerRightEnabled.getValue()));
          }
        }, {
          key: "getSidebarInnerRight",
          value: function getSidebarInnerRight() {
            return this.sidebarInnerRight;
          }
        }, {
          key: "setSidebarInnerRight",
          value: function setSidebarInnerRight(sidenav) {
            this.sidebarInnerRight = sidenav;
          }
        }, {
          key: "openSidebarInnerRight",
          value: function openSidebarInnerRight() {
            return this.sidebarInnerRight.open();
          }
        }, {
          key: "closeSidebarInnerRight",
          value: function closeSidebarInnerRight() {
            return this.sidebarInnerRight.close();
          }
        }, {
          key: "toggleSidebarInnerRight",
          value: function toggleSidebarInnerRight() {
            console.log('toggleSidebarInnerRight');
            this.sidebarInnerRight.toggle();
          }
        }, {
          key: "setsidebarInnerRightContent",
          value: function setsidebarInnerRightContent(sidebarInnerRightContent) {
            this.sidebarInnerRightContent.next(sidebarInnerRightContent);
            console.log("sidebarInnerRightContent$ set to ".concat(this.sidebarInnerRightContent.getValue()));
          }
        }]);

        return ChassisService;
      }();

      ChassisService.ɵfac = function ChassisService_Factory(t) {
        return new (t || ChassisService)();
      };

      ChassisService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ChassisService,
        factory: ChassisService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChassisService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/chassis/src/lib/chassis/chassis.component.ts":
    /*!*******************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/chassis/src/lib/chassis/chassis.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: ChassisComponent */

    /***/
    function libsChassisSrcLibChassisChassisComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChassisComponent", function () {
        return ChassisComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _chassis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../chassis.service */
      "../../libs/chassis/src/lib/chassis.service.ts");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
      /* harmony import */


      var _sidebar_outer_left_sidebar_outer_left_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../sidebar-outer-left/sidebar-outer-left.component */
      "../../libs/chassis/src/lib/sidebar-outer-left/sidebar-outer-left.component.ts");
      /* harmony import */


      var _sidebar_outer_right_sidebar_outer_right_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../sidebar-outer-right/sidebar-outer-right.component */
      "../../libs/chassis/src/lib/sidebar-outer-right/sidebar-outer-right.component.ts");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../header/header.component */
      "../../libs/chassis/src/lib/header/header.component.ts");
      /* harmony import */


      var _sidebar_inner_left_sidebar_inner_left_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../sidebar-inner-left/sidebar-inner-left.component */
      "../../libs/chassis/src/lib/sidebar-inner-left/sidebar-inner-left.component.ts");
      /* harmony import */


      var _sidebar_inner_right_sidebar_inner_right_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../sidebar-inner-right/sidebar-inner-right.component */
      "../../libs/chassis/src/lib/sidebar-inner-right/sidebar-inner-right.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../footer/footer.component */
      "../../libs/chassis/src/lib/footer/footer.component.ts");

      var _c0 = ["sidebarOuterLeft"];
      var _c1 = ["sidebarOuterRight"];
      var _c2 = ["sidebarInnerLeft"];
      var _c3 = ["sidebarInnerRight"];

      var ChassisComponent = /*#__PURE__*/function () {
        function ChassisComponent(chassisService) {
          _classCallCheck(this, ChassisComponent);

          this.chassisService = chassisService;
        }

        _createClass(ChassisComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log('init chassis');
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.chassisService.setSidebarOuterLeft(this.sidebarOuterLeft);
            this.chassisService.setSidebarOuterRight(this.sidebarOuterRight);
            this.chassisService.setSidebarInnerLeft(this.sidebarInnerLeft);
            this.chassisService.setSidebarInnerRight(this.sidebarInnerRight);
          }
        }]);

        return ChassisComponent;
      }();

      ChassisComponent.ɵfac = function ChassisComponent_Factory(t) {
        return new (t || ChassisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chassis_service__WEBPACK_IMPORTED_MODULE_1__["ChassisService"]));
      };

      ChassisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChassisComponent,
        selectors: [["cosmos-chassis"]],
        viewQuery: function ChassisComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidebarOuterLeft = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidebarOuterRight = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidebarInnerLeft = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidebarInnerRight = _t.first);
          }
        },
        decls: 20,
        vars: 2,
        consts: [["fullscreen", "", 1, "console-container", 3, "hasBackdrop"], ["mode", "over", "position", "start", "fixedInViewport", "false", "closed", ""], ["sidebarOuterLeft", ""], ["mode", "over", "position", "end", "fixedInViewport", "false", "closed", ""], ["sidebarOuterRight", ""], ["id", "console", 1, "console-content"], [1, "main-container", 3, "hasBackdrop"], ["sidebarInnerLeft", ""], ["sidebarInnerRight", ""], ["id", "main", 1, "main-content"]],
        template: function ChassisComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "cosmos-sidebar-outer-left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-sidenav", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "cosmos-sidebar-outer-right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-sidenav-content", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "cosmos-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-sidenav-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-sidenav", 1, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "cosmos-sidebar-inner-left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-sidenav", 3, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "cosmos-sidebar-inner-right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-sidenav-content", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "cosmos-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasBackdrop", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasBackdrop", false);
          }
        },
        directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], _sidebar_outer_left_sidebar_outer_left_component__WEBPACK_IMPORTED_MODULE_3__["SidebarOuterLeftComponent"], _sidebar_outer_right_sidebar_outer_right_component__WEBPACK_IMPORTED_MODULE_4__["SidebarOuterRightComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _sidebar_inner_left_sidebar_inner_left_component__WEBPACK_IMPORTED_MODULE_6__["SidebarInnerLeftComponent"], _sidebar_inner_right_sidebar_inner_right_component__WEBPACK_IMPORTED_MODULE_7__["SidebarInnerRightComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]],
        styles: [".console-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-areas: \"header\" \"center\" \"footer\";\n  grid-template-rows: 70px auto 70px;\n  height: 100vh;\n  padding: 0;\n}\n\ncosmos-header[_ngcontent-%COMP%] {\n  grid-area: header;\n}\n\ncosmos-footer[_ngcontent-%COMP%] {\n  grid-area: footer;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  grid-area: center;\n}\n\n.mat-drawer-container[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\n.mat-drawer[_ngcontent-%COMP%] {\n  background-color: rgba(10, 10, 10, 0.5);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n\n.mat-drawer[_ngcontent-%COMP%]:not(.mat-drawer-side) {\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvY2hhc3Npcy9zcmMvbGliL2NoYXNzaXMvY2hhc3Npcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFFQSwrQ0FDRTtFQUlGLGtDQUFBO0VBRUEsYUFBQTtFQUNBLFVBQUE7QUFMRjs7QUFRQTtFQUNFLGlCQUFBO0FBTEY7O0FBUUE7RUFDRSxpQkFBQTtBQUxGOztBQVFBO0VBQ0ksaUJBQUE7QUFMSjs7QUFRQTtFQUNFLDZCQUFBO0FBTEY7O0FBUUE7RUFDRSx1Q0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUFMRjs7QUFRQTtFQUNFLGdCQUFBO0FBTEYiLCJmaWxlIjoibGlicy9jaGFzc2lzL3NyYy9saWIvY2hhc3Npcy9jaGFzc2lzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnNvbGUtY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG5cbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAnaGVhZGVyJ1xuICAgICdjZW50ZXInXG4gICAgJ2Zvb3Rlcic7XG5cbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IGF1dG8gNzBweDtcblxuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAwO1xufVxuXG5jb3Ntb3MtaGVhZGVyIHtcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XG59XG5cbmNvc21vcy1mb290ZXIge1xuICBncmlkLWFyZWE6IGZvb3Rlcjtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgICBncmlkLWFyZWE6IGNlbnRlcjtcbn1cblxuLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5tYXQtZHJhd2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMCwgMTAsIDEwLCAwLjUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG59XG5cbi5tYXQtZHJhd2VyOm5vdCgubWF0LWRyYXdlci1zaWRlKSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChassisComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cosmos-chassis',
            templateUrl: './chassis.component.html',
            styleUrls: ['./chassis.component.scss']
          }]
        }], function () {
          return [{
            type: _chassis_service__WEBPACK_IMPORTED_MODULE_1__["ChassisService"]
          }];
        }, {
          sidebarOuterLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sidebarOuterLeft']
          }],
          sidebarOuterRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sidebarOuterRight']
          }],
          sidebarInnerLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sidebarInnerLeft']
          }],
          sidebarInnerRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sidebarInnerRight']
          }]
        });
      })();
      /***/

    },

    /***/
    "../../libs/chassis/src/lib/footer/footer.component.ts":
    /*!*****************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/chassis/src/lib/footer/footer.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function libsChassisSrcLibFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _cosmos_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @cosmos/environment */
      "../../libs/environment/src/index.ts");
      /* harmony import */


      var _chassis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../chassis.service */
      "../../libs/chassis/src/lib/chassis.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/menu */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      function FooterComponent_ng_container_0_ul_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var link_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", link_r4.link);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r4.name);
        }
      }

      function FooterComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "apps");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-menu", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "dialpad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Houston");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "bar_chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Viewfinder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "all_inclusive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Codex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "scatter_plot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Sorting Hat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "voicemail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Panama");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "school");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Flenderson");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "school");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Skinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "notifications_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "H.A.G.A.R.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "notifications_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "I.G.O.R.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "notifications_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "R.A.D.A.R.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "mediation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Flynn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "share");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Relay");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "dialpad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Skyline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-menu", 4, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "contactless");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Ping!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, FooterComponent_ng_container_0_ul_84_Template, 3, 2, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Release 20.36");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](77);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("showFooter", ctx_r0.visible)("hideFooter", ctx_r0.visible === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.content.links);
        }
      }

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent(environmentService, chassisService) {
          _classCallCheck(this, FooterComponent);

          this.environmentService = environmentService;
          this.chassisService = chassisService;
          this.enabled$ = this.chassisService.footerEnabled$;
          this.visible$ = this.chassisService.footerVisible$;
          this.content$ = this.chassisService.footerContent$;
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getEnabled();
            this.getVisible();
            this.getContent();
          }
        }, {
          key: "getEnabled",
          value: function getEnabled() {
            var _this = this;

            this.enabled$.subscribe(function (enabled) {
              return _this.enabled = enabled;
            });
            console.log("footer enabled: ".concat(this.enabled));
          }
        }, {
          key: "getVisible",
          value: function getVisible() {
            var _this2 = this;

            this.visible$.subscribe(function (visible) {
              return _this2.visible = visible;
            });
            console.log("footer visible: ".concat(this.visible));
          }
        }, {
          key: "getContent",
          value: function getContent() {
            var _this3 = this;

            this.content$.subscribe(function (content) {
              return _this3.content = content;
            });
            console.log("footer content: ".concat(this.content));
          }
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cosmos_environment__WEBPACK_IMPORTED_MODULE_1__["EnvironmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chassis_service__WEBPACK_IMPORTED_MODULE_2__["ChassisService"]));
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["cosmos-footer"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "footer"], ["color", "primary", 1, "mat-toolbar-single-row"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["backdropClass", "customWaffle"], ["appsMenu", "matMenu"], ["mat-menu-item", ""], [1, "material-icons-outlined"], ["statusMenu", "matMenu"], ["mat-menu-item", "", "routerLink", "/ping"], [1, "footer-spacer"], [4, "ngFor", "ngForOf"], [1, "release-number"], [3, "routerLink"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FooterComponent_ng_container_0_Template, 87, 7, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enabled);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: ["[_nghost-%COMP%] {\n  margin: 0;\n  padding: 0;\n  z-index: 1;\n  background-color: transparent;\n  font-family: \"Jura\", sans-serif;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n}\n[_nghost-%COMP%]   .footer-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Jura\", sans-serif;\n  font-size: 18px;\n  font-weight: normal;\n  color: white;\n  text-decoration: none;\n}\n[_nghost-%COMP%]   .release-number[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  font-family: \"Jura\", sans-serif;\n  font-size: 18px;\n  font-weight: normal;\n  color: white;\n  text-decoration: none;\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: inline;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  font-family: \"Jura\", sans-serif;\n  font-size: 18px;\n  font-weight: normal;\n  color: white;\n  text-decoration: none;\n}\n[_nghost-%COMP%]   .customWaffle[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvY2hhc3Npcy9zcmMvbGliL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFFQSw2QkFBQTtFQUVBLCtCQUFBO0FBREY7QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBREo7QUFJRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsNkJBQUE7QUFISjtBQU1FO0VBQ0UsY0FBQTtBQUpKO0FBT0U7RUFDRSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUxKO0FBUUU7RUFDRSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBTko7QUFTRTtFQUNFLGVBQUE7QUFQSjtBQVVFO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBUko7QUFXRTtFQUNFLDZCQUFBO0FBVEoiLCJmaWxlIjoibGlicy9jaGFzc2lzL3NyYy9saWIvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB6LWluZGV4OiAxO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gIGZvbnQtZmFtaWx5OiAnSnVyYScsIHNhbnMtc2VyaWY7XG5cbiAgZm9vdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAubWF0LXRvb2xiYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLmZvb3Rlci1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG5cbiAgYSB7XG4gICAgZm9udC1mYW1pbHk6ICdKdXJhJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgLnJlbGVhc2UtbnVtYmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdKdXJhJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgdWwge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuXG4gIGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgZm9udC1mYW1pbHk6ICdKdXJhJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgLmN1c3RvbVdhZmZsZSsqIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cosmos-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.scss']
          }]
        }], function () {
          return [{
            type: _cosmos_environment__WEBPACK_IMPORTED_MODULE_1__["EnvironmentService"]
          }, {
            type: _chassis_service__WEBPACK_IMPORTED_MODULE_2__["ChassisService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/chassis/src/lib/header/header.component.ts":
    /*!*****************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/chassis/src/lib/header/header.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function libsChassisSrcLibHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _cosmos_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @cosmos/environment */
      "../../libs/environment/src/index.ts");
      /* harmony import */


      var _chassis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../chassis.service */
      "../../libs/chassis/src/lib/chassis.service.ts");
      /* harmony import */


      var _cosmos_user_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @cosmos/user-auth */
      "../../libs/user-auth/src/index.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/menu */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _user_auth_src_lib_sign_in_out_button_sign_in_out_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../user-auth/src/lib/sign-in-out-button/sign-in-out-button.component */
      "../../libs/user-auth/src/lib/sign-in-out-button/sign-in-out-button.component.ts");

      function HeaderComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_container_0_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.toggleSidebarOuterLeft();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_container_0_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.toggleNotificationsPanel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_container_0_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.toggleHelpPanel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "help_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_container_0_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.toggleFeedbackPanel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "feedback");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_container_0_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.toggleSettingsPanel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "account_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-menu", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "account_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "cosmos-sign-in-out-button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("showHeader", ctx_r0.visible)("hideHeader", ctx_r0.visible === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.appName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        }
      }

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(userAuthService, environmentService, chassisService) {
          _classCallCheck(this, HeaderComponent);

          this.userAuthService = userAuthService;
          this.environmentService = environmentService;
          this.chassisService = chassisService;
          this.appName = this.environmentService.appName;
          this.enabled$ = this.chassisService.headerEnabled$;
          this.visible$ = this.chassisService.headerVisible$;
          this.content$ = this.chassisService.headerContent$;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getEnabled();
            this.getVisible();
            this.getContent();
          }
        }, {
          key: "getEnabled",
          value: function getEnabled() {
            var _this4 = this;

            this.enabled$.subscribe(function (enabled) {
              return _this4.enabled = enabled;
            });
            console.log("header enabled: ".concat(this.enabled));
          }
        }, {
          key: "getVisible",
          value: function getVisible() {
            var _this5 = this;

            this.visible$.subscribe(function (visible) {
              return _this5.visible = visible;
            });
            console.log("header visible: ".concat(this.visible));
          }
        }, {
          key: "getContent",
          value: function getContent() {
            var _this6 = this;

            this.content$.subscribe(function (content) {
              return _this6.content = content;
            });
            console.log("header content: ".concat(this.content));
          }
        }, {
          key: "toggleSidebarOuterLeft",
          value: function toggleSidebarOuterLeft() {
            this.chassisService.toggleSidebarOuterLeft();
            console.log('toggle sidebarOuterLeft');
          }
        }, {
          key: "toggleNotificationsPanel",
          value: function toggleNotificationsPanel() {
            this.chassisService.setsidebarOuterRightContent('Notifications');
            this.chassisService.toggleSidebarOuterRight();
            console.log('toggle sidebarOuterRight');
          }
        }, {
          key: "toggleHelpPanel",
          value: function toggleHelpPanel() {
            this.chassisService.setsidebarOuterRightContent('Help');
            this.chassisService.toggleSidebarOuterRight();
            console.log('toggle sidebarOuterRight');
          }
        }, {
          key: "toggleFeedbackPanel",
          value: function toggleFeedbackPanel() {
            this.chassisService.setsidebarOuterRightContent('Feedback');
            this.chassisService.toggleSidebarOuterRight();
            console.log('toggle sidebarOuterRight');
          }
        }, {
          key: "toggleSettingsPanel",
          value: function toggleSettingsPanel() {
            this.chassisService.setsidebarOuterRightContent('Settings');
            this.chassisService.toggleSidebarOuterRight();
            console.log('toggle sidebarOuterRight');
          }
        }, {
          key: "toggleAccountPanel",
          value: function toggleAccountPanel() {
            this.chassisService.setsidebarOuterRightContent('Account');
            this.chassisService.toggleSidebarOuterRight();
            console.log('toggle sidebarOuterRight');
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cosmos_user_auth__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cosmos_environment__WEBPACK_IMPORTED_MODULE_1__["EnvironmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chassis_service__WEBPACK_IMPORTED_MODULE_2__["ChassisService"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["cosmos-header"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "header"], ["mat-icon-button", "", 1, "material-icons", 3, "click"], [1, "header-spacer"], ["id", "headerTitle", "routerLink", "/"], [1, "material-icons-outlined"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["backdropClass", "customWaffle"], ["accountMenu", "matMenu"], ["mat-menu-item", "", "routerLink", "/profile"], ["mat-menu-item", ""]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeaderComponent_ng_container_0_Template, 36, 6, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enabled);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _user_auth_src_lib_sign_in_out_button_sign_in_out_button_component__WEBPACK_IMPORTED_MODULE_10__["SignInOutButtonComponent"]],
        styles: ["[_nghost-%COMP%] {\n  margin: 0;\n  padding: 0;\n  z-index: 1;\n  background-color: transparent;\n  font-family: \"Jura\", sans-serif;\n}\n[_nghost-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n[_nghost-%COMP%]   .header-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n[_nghost-%COMP%]   #headerTitle[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Jura\", sans-serif;\n  font-size: 25px;\n  font-weight: normal;\n  color: white;\n  text-decoration: none;\n}\n[_nghost-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: inline;\n  margin: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: inline;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvY2hhc3Npcy9zcmMvbGliL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFFQSw2QkFBQTtFQUVBLCtCQUFBO0FBREY7QUFHRTtFQUNFLDZCQUFBO0FBREo7QUFJRTtFQUNFLGNBQUE7QUFGSjtBQUtFO0VBQ0Usa0JBQUE7QUFISjtBQU1FO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFKSjtBQU9FO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQVFFO0VBQ0UsZUFBQTtBQU5KO0FBU0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQVBKIiwiZmlsZSI6ImxpYnMvY2hhc3Npcy9zcmMvbGliL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgei1pbmRleDogMTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICBmb250LWZhbWlseTogJ0p1cmEnLCBzYW5zLXNlcmlmO1xuXG4gIC5tYXQtdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAuaGVhZGVyLXNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cblxuICAjaGVhZGVyVGl0bGUge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuXG4gIGEge1xuICAgIGZvbnQtZmFtaWx5OiAnSnVyYScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIGgxIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuXG4gIHVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cblxuICBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB9XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cosmos-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
          }]
        }], function () {
          return [{
            type: _cosmos_user_auth__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"]
          }, {
            type: _cosmos_environment__WEBPACK_IMPORTED_MODULE_1__["EnvironmentService"]
          }, {
            type: _chassis_service__WEBPACK_IMPORTED_MODULE_2__["ChassisService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/chassis/src/lib/sidebar-inner-left/sidebar-inner-left.component.ts":
    /*!*****************************************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/chassis/src/lib/sidebar-inner-left/sidebar-inner-left.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: SidebarInnerLeftComponent */

    /***/
    function libsChassisSrcLibSidebarInnerLeftSidebarInnerLeftComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarInnerLeftComponent", function () {
        return SidebarInnerLeftComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _chassis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../chassis.service */
      "../../libs/chassis/src/lib/chassis.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

      function SidebarInnerLeftComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarInnerLeftComponent_ng_container_0_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.toggleSidebarInnerLeft();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.content, " ");
        }
      }

      var SidebarInnerLeftComponent = /*#__PURE__*/function () {
        function SidebarInnerLeftComponent(chassisService) {
          _classCallCheck(this, SidebarInnerLeftComponent);

          this.chassisService = chassisService;
          this.title = 'Panel Title';
          this.enabled$ = this.chassisService.sidebarInnerLeftEnabled$;
          this.content$ = this.chassisService.sidebarInnerLeftContent$;
        }

        _createClass(SidebarInnerLeftComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getEnabled();
            this.getContent();
          }
        }, {
          key: "getEnabled",
          value: function getEnabled() {
            var _this7 = this;

            this.enabled$.subscribe(function (enabled) {
              return _this7.enabled = enabled;
            });
            console.log("sidebar-inner-left enabled: ".concat(this.enabled));
          }
        }, {
          key: "getContent",
          value: function getContent() {
            var _this8 = this;

            this.content$.subscribe(function (content) {
              return _this8.content = content;
            });
            console.log("sidebar-inner-left content: ".concat(this.content));
          }
        }, {
          key: "toggleSidebarInnerLeft",
          value: function toggleSidebarInnerLeft() {
            this.chassisService.toggleSidebarInnerLeft();
            console.log('toggle sidebarInnerLeft');
          }
        }]);

        return SidebarInnerLeftComponent;
      }();

      SidebarInnerLeftComponent.ɵfac = function SidebarInnerLeftComponent_Factory(t) {
        return new (t || SidebarInnerLeftComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chassis_service__WEBPACK_IMPORTED_MODULE_1__["ChassisService"]));
      };

      SidebarInnerLeftComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidebarInnerLeftComponent,
        selectors: [["cosmos-sidebar-inner-left"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "toolbar-spacer"], ["mat-button", "", 3, "click"]],
        template: function SidebarInnerLeftComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SidebarInnerLeftComponent_ng_container_0_Template, 8, 2, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enabled);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]],
        styles: ["[_nghost-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n[_nghost-%COMP%]   .toolbar-spacer[_ngcontent-%COMP%] {\n  min-width: 20px;\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvY2hhc3Npcy9zcmMvbGliL3NpZGViYXItaW5uZXItbGVmdC9zaWRlYmFyLWlubmVyLWxlZnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSw2QkFBQTtBQUFKO0FBR0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQURKIiwiZmlsZSI6ImxpYnMvY2hhc3Npcy9zcmMvbGliL3NpZGViYXItaW5uZXItbGVmdC9zaWRlYmFyLWlubmVyLWxlZnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5tYXQtdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAudG9vbGJhci1zcGFjZXIge1xuICAgIG1pbi13aWR0aDogMjBweDtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarInnerLeftComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cosmos-sidebar-inner-left',
            templateUrl: './sidebar-inner-left.component.html',
            styleUrls: ['./sidebar-inner-left.component.scss']
          }]
        }], function () {
          return [{
            type: _chassis_service__WEBPACK_IMPORTED_MODULE_1__["ChassisService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/chassis/src/lib/sidebar-inner-right/sidebar-inner-right.component.ts":
    /*!*******************************************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/chassis/src/lib/sidebar-inner-right/sidebar-inner-right.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: SidebarInnerRightComponent */

    /***/
    function libsChassisSrcLibSidebarInnerRightSidebarInnerRightComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarInnerRightComponent", function () {
        return SidebarInnerRightComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _chassis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../chassis.service */
      "../../libs/chassis/src/lib/chassis.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

      function SidebarInnerRightComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarInnerRightComponent_ng_container_0_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.toggleSidebarInnerRight();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.content, " ");
        }
      }

      var SidebarInnerRightComponent = /*#__PURE__*/function () {
        function SidebarInnerRightComponent(chassisService) {
          _classCallCheck(this, SidebarInnerRightComponent);

          this.chassisService = chassisService;
          this.title = 'Panel Title';
          this.enabled$ = this.chassisService.sidebarInnerRightEnabled$;
          this.content$ = this.chassisService.sidebarInnerRightContent$;
        }

        _createClass(SidebarInnerRightComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getEnabled();
            this.getContent();
          }
        }, {
          key: "getEnabled",
          value: function getEnabled() {
            var _this9 = this;

            this.enabled$.subscribe(function (enabled) {
              return _this9.enabled = enabled;
            });
            console.log("sidebar-inner-right enabled: ".concat(this.enabled));
          }
        }, {
          key: "getContent",
          value: function getContent() {
            var _this10 = this;

            this.content$.subscribe(function (content) {
              return _this10.content = content;
            });
            console.log("sidebar-inner-right content: ".concat(this.content));
          }
        }, {
          key: "toggleSidebarInnerRight",
          value: function toggleSidebarInnerRight() {
            this.chassisService.toggleSidebarInnerRight();
            console.log('toggle sidebarInnerRight');
          }
        }]);

        return SidebarInnerRightComponent;
      }();

      SidebarInnerRightComponent.ɵfac = function SidebarInnerRightComponent_Factory(t) {
        return new (t || SidebarInnerRightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chassis_service__WEBPACK_IMPORTED_MODULE_1__["ChassisService"]));
      };

      SidebarInnerRightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidebarInnerRightComponent,
        selectors: [["cosmos-sidebar-inner-right"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "toolbar-spacer"], ["mat-button", "", 3, "click"]],
        template: function SidebarInnerRightComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SidebarInnerRightComponent_ng_container_0_Template, 8, 2, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enabled);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]],
        styles: ["[_nghost-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n[_nghost-%COMP%]   .toolbar-spacer[_ngcontent-%COMP%] {\n  min-width: 20px;\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvY2hhc3Npcy9zcmMvbGliL3NpZGViYXItaW5uZXItcmlnaHQvc2lkZWJhci1pbm5lci1yaWdodC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDZCQUFBO0FBQUo7QUFHRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBREoiLCJmaWxlIjoibGlicy9jaGFzc2lzL3NyYy9saWIvc2lkZWJhci1pbm5lci1yaWdodC9zaWRlYmFyLWlubmVyLXJpZ2h0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAubWF0LXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLnRvb2xiYXItc3BhY2VyIHtcbiAgICBtaW4td2lkdGg6IDIwcHg7XG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarInnerRightComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cosmos-sidebar-inner-right',
            templateUrl: './sidebar-inner-right.component.html',
            styleUrls: ['./sidebar-inner-right.component.scss']
          }]
        }], function () {
          return [{
            type: _chassis_service__WEBPACK_IMPORTED_MODULE_1__["ChassisService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/chassis/src/lib/sidebar-outer-left/sidebar-outer-left.component.ts":
    /*!*****************************************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/chassis/src/lib/sidebar-outer-left/sidebar-outer-left.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: SidebarOuterLeftComponent */

    /***/
    function libsChassisSrcLibSidebarOuterLeftSidebarOuterLeftComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarOuterLeftComponent", function () {
        return SidebarOuterLeftComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _chassis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../chassis.service */
      "../../libs/chassis/src/lib/chassis.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

      function SidebarOuterLeftComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarOuterLeftComponent_ng_container_0_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.toggleSidebarOuterLeft();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.content, " ");
        }
      }

      var SidebarOuterLeftComponent = /*#__PURE__*/function () {
        function SidebarOuterLeftComponent(chassisService) {
          _classCallCheck(this, SidebarOuterLeftComponent);

          this.chassisService = chassisService;
          this.title = 'Panel Title';
          this.enabled$ = this.chassisService.sidebarOuterLeftEnabled$;
          this.content$ = this.chassisService.sidebarOuterLeftContent$;
        }

        _createClass(SidebarOuterLeftComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getEnabled();
            this.getContent();
          }
        }, {
          key: "getEnabled",
          value: function getEnabled() {
            var _this11 = this;

            this.enabled$.subscribe(function (enabled) {
              return _this11.enabled = enabled;
            });
            console.log("sidebar-outer-left enabled: ".concat(this.enabled));
          }
        }, {
          key: "getContent",
          value: function getContent() {
            var _this12 = this;

            this.content$.subscribe(function (content) {
              return _this12.content = content;
            });
            console.log("sidebar-outer-left content: ".concat(this.content));
          }
        }, {
          key: "toggleSidebarOuterLeft",
          value: function toggleSidebarOuterLeft() {
            this.chassisService.toggleSidebarOuterLeft();
            console.log('toggle sidebarOuterLeft');
          }
        }]);

        return SidebarOuterLeftComponent;
      }();

      SidebarOuterLeftComponent.ɵfac = function SidebarOuterLeftComponent_Factory(t) {
        return new (t || SidebarOuterLeftComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chassis_service__WEBPACK_IMPORTED_MODULE_1__["ChassisService"]));
      };

      SidebarOuterLeftComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidebarOuterLeftComponent,
        selectors: [["cosmos-sidebar-outer-left"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "toolbar-spacer"], ["mat-button", "", 3, "click"]],
        template: function SidebarOuterLeftComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SidebarOuterLeftComponent_ng_container_0_Template, 8, 2, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enabled);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]],
        styles: ["[_nghost-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n[_nghost-%COMP%]   .toolbar-spacer[_ngcontent-%COMP%] {\n  min-width: 20px;\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvY2hhc3Npcy9zcmMvbGliL3NpZGViYXItb3V0ZXItbGVmdC9zaWRlYmFyLW91dGVyLWxlZnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSw2QkFBQTtBQUFOO0FBR0k7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUROIiwiZmlsZSI6ImxpYnMvY2hhc3Npcy9zcmMvbGliL3NpZGViYXItb3V0ZXItbGVmdC9zaWRlYmFyLW91dGVyLWxlZnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLm1hdC10b29sYmFyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgXG4gICAgLnRvb2xiYXItc3BhY2VyIHtcbiAgICAgIG1pbi13aWR0aDogMjBweDtcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIH1cbiAgfVxuICAiXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarOuterLeftComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cosmos-sidebar-outer-left',
            templateUrl: './sidebar-outer-left.component.html',
            styleUrls: ['./sidebar-outer-left.component.scss']
          }]
        }], function () {
          return [{
            type: _chassis_service__WEBPACK_IMPORTED_MODULE_1__["ChassisService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/chassis/src/lib/sidebar-outer-right/sidebar-outer-right.component.ts":
    /*!*******************************************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/chassis/src/lib/sidebar-outer-right/sidebar-outer-right.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: SidebarOuterRightComponent */

    /***/
    function libsChassisSrcLibSidebarOuterRightSidebarOuterRightComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarOuterRightComponent", function () {
        return SidebarOuterRightComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _chassis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../chassis.service */
      "../../libs/chassis/src/lib/chassis.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

      function SidebarOuterRightComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarOuterRightComponent_ng_container_0_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.toggleSidebarOuterRight();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.content, " ");
        }
      }

      var SidebarOuterRightComponent = /*#__PURE__*/function () {
        function SidebarOuterRightComponent(chassisService) {
          _classCallCheck(this, SidebarOuterRightComponent);

          this.chassisService = chassisService;
          this.title = 'Panel Title';
          this.enabled$ = this.chassisService.sidebarOuterRightEnabled$;
          this.content$ = this.chassisService.sidebarOuterRightContent$;
        }

        _createClass(SidebarOuterRightComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getEnabled();
            this.getContent();
          }
        }, {
          key: "getEnabled",
          value: function getEnabled() {
            var _this13 = this;

            this.enabled$.subscribe(function (enabled) {
              return _this13.enabled = enabled;
            });
            console.log("sidebar-outer-right enabled: ".concat(this.enabled));
          }
        }, {
          key: "getContent",
          value: function getContent() {
            var _this14 = this;

            this.content$.subscribe(function (content) {
              return _this14.content = content;
            });
            console.log("sidebar-outer-right content: ".concat(this.content));
          }
        }, {
          key: "toggleSidebarOuterRight",
          value: function toggleSidebarOuterRight() {
            this.chassisService.toggleSidebarOuterRight();
            console.log('toggle sidebarOuterRight');
          }
        }]);

        return SidebarOuterRightComponent;
      }();

      SidebarOuterRightComponent.ɵfac = function SidebarOuterRightComponent_Factory(t) {
        return new (t || SidebarOuterRightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chassis_service__WEBPACK_IMPORTED_MODULE_1__["ChassisService"]));
      };

      SidebarOuterRightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidebarOuterRightComponent,
        selectors: [["cosmos-sidebar-outer-right"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "toolbar-spacer"], ["mat-button", "", 3, "click"]],
        template: function SidebarOuterRightComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SidebarOuterRightComponent_ng_container_0_Template, 8, 2, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enabled);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]],
        styles: ["[_nghost-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n[_nghost-%COMP%]   .toolbar-spacer[_ngcontent-%COMP%] {\n  min-width: 20px;\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvY2hhc3Npcy9zcmMvbGliL3NpZGViYXItb3V0ZXItcmlnaHQvc2lkZWJhci1vdXRlci1yaWdodC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDZCQUFBO0FBQUo7QUFHRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBREoiLCJmaWxlIjoibGlicy9jaGFzc2lzL3NyYy9saWIvc2lkZWJhci1vdXRlci1yaWdodC9zaWRlYmFyLW91dGVyLXJpZ2h0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAubWF0LXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLnRvb2xiYXItc3BhY2VyIHtcbiAgICBtaW4td2lkdGg6IDIwcHg7XG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarOuterRightComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cosmos-sidebar-outer-right',
            templateUrl: './sidebar-outer-right.component.html',
            styleUrls: ['./sidebar-outer-right.component.scss']
          }]
        }], function () {
          return [{
            type: _chassis_service__WEBPACK_IMPORTED_MODULE_1__["ChassisService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/environment/src/index.ts":
    /*!***********************************************************!*\
      !*** /home/schumajr/cosmos/libs/environment/src/index.ts ***!
      \***********************************************************/

    /*! exports provided: EnvironmentModule, EnvironmentService */

    /***/
    function libsEnvironmentSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_environment_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/environment.module */
      "../../libs/environment/src/lib/environment.module.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EnvironmentModule", function () {
        return _lib_environment_module__WEBPACK_IMPORTED_MODULE_0__["EnvironmentModule"];
      });
      /* harmony import */


      var _lib_environment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lib/environment.service */
      "../../libs/environment/src/lib/environment.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EnvironmentService", function () {
        return _lib_environment_service__WEBPACK_IMPORTED_MODULE_1__["EnvironmentService"];
      });
      /***/

    },

    /***/
    "../../libs/environment/src/lib/environment.module.ts":
    /*!****************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/environment/src/lib/environment.module.ts ***!
      \****************************************************************************/

    /*! exports provided: EnvironmentModule */

    /***/
    function libsEnvironmentSrcLibEnvironmentModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnvironmentModule", function () {
        return EnvironmentModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var EnvironmentModule = function EnvironmentModule() {
        _classCallCheck(this, EnvironmentModule);
      };

      EnvironmentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: EnvironmentModule
      });
      EnvironmentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function EnvironmentModule_Factory(t) {
          return new (t || EnvironmentModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EnvironmentModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnvironmentModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "../../libs/environment/src/lib/environment.service.ts":
    /*!*****************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/environment/src/lib/environment.service.ts ***!
      \*****************************************************************************/

    /*! exports provided: EnvironmentService */

    /***/
    function libsEnvironmentSrcLibEnvironmentServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnvironmentService", function () {
        return EnvironmentService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var EnvironmentService = function EnvironmentService(environment) {
        _classCallCheck(this, EnvironmentService);

        this.production = environment.production;
        this.appName = environment.appName;
        this.aadClientId = environment.aadClientId;
        this.aadAuthority = environment.aadAuthority;
        this.aadValidateAuthority = environment.aadValidateAuthority;
        this.aadRedirectUri = environment.aadRedirectUri;
        this.aadPostLogoutRedirectUri = environment.aadPostLogoutRedirectUri;
        this.aadNavigateToLoginRequestUrl = environment.aadNavigateToLoginRequestUrl;
      };

      EnvironmentService.ɵfac = function EnvironmentService_Factory(t) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"]();
      };

      EnvironmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: EnvironmentService,
        factory: EnvironmentService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnvironmentService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/guards/src/index.ts":
    /*!******************************************************!*\
      !*** /home/schumajr/cosmos/libs/guards/src/index.ts ***!
      \******************************************************/

    /*! exports provided: GuardsModule, RolesGuard */

    /***/
    function libsGuardsSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_guards_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/guards.module */
      "../../libs/guards/src/lib/guards.module.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GuardsModule", function () {
        return _lib_guards_module__WEBPACK_IMPORTED_MODULE_0__["GuardsModule"];
      });
      /* harmony import */


      var _lib_roles_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lib/roles.guard */
      "../../libs/guards/src/lib/roles.guard.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RolesGuard", function () {
        return _lib_roles_guard__WEBPACK_IMPORTED_MODULE_1__["RolesGuard"];
      });
      /***/

    },

    /***/
    "../../libs/guards/src/lib/guards.module.ts":
    /*!******************************************************************!*\
      !*** /home/schumajr/cosmos/libs/guards/src/lib/guards.module.ts ***!
      \******************************************************************/

    /*! exports provided: GuardsModule */

    /***/
    function libsGuardsSrcLibGuardsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GuardsModule", function () {
        return GuardsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var GuardsModule = function GuardsModule() {
        _classCallCheck(this, GuardsModule);
      };

      GuardsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: GuardsModule
      });
      GuardsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function GuardsModule_Factory(t) {
          return new (t || GuardsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GuardsModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuardsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "../../libs/guards/src/lib/roles.guard.ts":
    /*!****************************************************************!*\
      !*** /home/schumajr/cosmos/libs/guards/src/lib/roles.guard.ts ***!
      \****************************************************************/

    /*! exports provided: RolesGuard */

    /***/
    function libsGuardsSrcLibRolesGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RolesGuard", function () {
        return RolesGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @azure/msal-angular */
      "../../node_modules/@azure/msal-angular/__ivy_ngcc__/fesm2015/azure-msal-angular.js");

      var RolesGuard = /*#__PURE__*/function () {
        function RolesGuard(msalService) {
          _classCallCheck(this, RolesGuard);

          this.msalService = msalService;
        }

        _createClass(RolesGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var userRoles = this.msalService.getAccount().idToken.roles;
            var allowedRoles = next.data["roles"];
            var matchingRoles = userRoles.filter(function (x) {
              return allowedRoles.includes(x);
            });
            return matchingRoles.length > 0;
          }
        }]);

        return RolesGuard;
      }();

      RolesGuard.ɵfac = function RolesGuard_Factory(t) {
        return new (t || RolesGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__["MsalService"]));
      };

      RolesGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RolesGuard,
        factory: RolesGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolesGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__["MsalService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/http-interceptors/src/index.ts":
    /*!*****************************************************************!*\
      !*** /home/schumajr/cosmos/libs/http-interceptors/src/index.ts ***!
      \*****************************************************************/

    /*! exports provided: httpInterceptorProviders */

    /***/
    function libsHttpInterceptorsSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function () {
        return httpInterceptorProviders;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @azure/msal-angular */
      "../../node_modules/@azure/msal-angular/__ivy_ngcc__/fesm2015/azure-msal-angular.js");
      /* harmony import */


      var _lib_noop_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lib/noop-interceptor */
      "../../libs/http-interceptors/src/lib/noop-interceptor.ts");
      /* harmony import */


      var _lib_logging_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lib/logging-interceptor */
      "../../libs/http-interceptors/src/lib/logging-interceptor.ts");
      /* "Barrel" of Http Interceptors */

      /** Http interceptor providers in outside-in order */


      var httpInterceptorProviders = [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__["MsalInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: _lib_noop_interceptor__WEBPACK_IMPORTED_MODULE_2__["NoopInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: _lib_logging_interceptor__WEBPACK_IMPORTED_MODULE_3__["LoggingInterceptor"],
        multi: true
      }];
      /***/
    },

    /***/
    "../../libs/http-interceptors/src/lib/logging-interceptor.ts":
    /*!***********************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/http-interceptors/src/lib/logging-interceptor.ts ***!
      \***********************************************************************************/

    /*! exports provided: LoggingInterceptor */

    /***/
    function libsHttpInterceptorsSrcLibLoggingInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoggingInterceptor", function () {
        return LoggingInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "../../node_modules/rxjs/_esm2015/operators/index.js");

      var LoggingInterceptor = /*#__PURE__*/function () {
        function LoggingInterceptor() {
          _classCallCheck(this, LoggingInterceptor);
        }

        _createClass(LoggingInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var started = Date.now();
            var ok; // extend server response observable with logging

            return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])( // Succeeds when there is a response; ignore other events
            function (event) {
              return ok = event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"] ? 'succeeded' : '';
            }, // Operation failed; error is an HttpErrorResponse
            function (error) {
              return ok = 'failed';
            }), // Log when response observable either completes or errors
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
              var elapsed = Date.now() - started;
              var msg = "".concat(req.method, " \"").concat(req.urlWithParams, "\"\n             ").concat(ok, " in ").concat(elapsed, " ms.");
              console.log(msg);
            }));
          }
        }]);

        return LoggingInterceptor;
      }();

      LoggingInterceptor.ɵfac = function LoggingInterceptor_Factory(t) {
        return new (t || LoggingInterceptor)();
      };

      LoggingInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LoggingInterceptor,
        factory: LoggingInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggingInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/http-interceptors/src/lib/noop-interceptor.ts":
    /*!********************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/http-interceptors/src/lib/noop-interceptor.ts ***!
      \********************************************************************************/

    /*! exports provided: NoopInterceptor */

    /***/
    function libsHttpInterceptorsSrcLibNoopInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoopInterceptor", function () {
        return NoopInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /** Pass untouched request through to the next request handler. */


      var NoopInterceptor = /*#__PURE__*/function () {
        function NoopInterceptor() {
          _classCallCheck(this, NoopInterceptor);
        }

        _createClass(NoopInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            console.log('noop interceptor fired');
            return next.handle(req);
          }
        }]);

        return NoopInterceptor;
      }();

      NoopInterceptor.ɵfac = function NoopInterceptor_Factory(t) {
        return new (t || NoopInterceptor)();
      };

      NoopInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NoopInterceptor,
        factory: NoopInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoopInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /***/

    },

    /***/
    "../../libs/msgraph-service/src/index.ts":
    /*!***************************************************************!*\
      !*** /home/schumajr/cosmos/libs/msgraph-service/src/index.ts ***!
      \***************************************************************/

    /*! exports provided: MSGraphServiceModule, GraphService */

    /***/
    function libsMsgraphServiceSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_msgraph_service_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/msgraph-service.module */
      "../../libs/msgraph-service/src/lib/msgraph-service.module.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MSGraphServiceModule", function () {
        return _lib_msgraph_service_module__WEBPACK_IMPORTED_MODULE_0__["MSGraphServiceModule"];
      });
      /* harmony import */


      var _lib_graph_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lib/graph.service */
      "../../libs/msgraph-service/src/lib/graph.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GraphService", function () {
        return _lib_graph_service__WEBPACK_IMPORTED_MODULE_1__["GraphService"];
      });
      /***/

    },

    /***/
    "../../libs/msgraph-service/src/lib/graph.service.ts":
    /*!***************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/msgraph-service/src/lib/graph.service.ts ***!
      \***************************************************************************/

    /*! exports provided: GraphService */

    /***/
    function libsMsgraphServiceSrcLibGraphServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GraphService", function () {
        return GraphService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @azure/msal-angular */
      "../../node_modules/@azure/msal-angular/__ivy_ngcc__/fesm2015/azure-msal-angular.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "../../node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "../../node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _msgraph_service_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./msgraph-service.module */
      "../../libs/msgraph-service/src/lib/msgraph-service.module.ts");

      var GraphService = /*#__PURE__*/function () {
        function GraphService(authService, http) {
          _classCallCheck(this, GraphService);

          this.authService = authService;
          this.http = http;
        }

        _createClass(GraphService, [{
          key: "getProfile",
          value: function getProfile() {
            var _this15 = this;

            this.log('getProfile()');
            var GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';
            return this.http.get(GRAPH_ENDPOINT).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
              return _this15.log('fetched profile');
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getProfile')));
          }
          /**
           * Handle Http operation that failed.
           * Let the app continue.
           * @param operation - name of the operation that failed
           * @param result - optional value to return as the observable result
           */

        }, {
          key: "handleError",
          value: function handleError() {
            var _this16 = this;

            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
            var result = arguments.length > 1 ? arguments[1] : undefined;
            return function (error) {
              // TODO: send the error to remote logging infrastructure
              console.error(error); // log to console instead
              // TODO: better job of transforming error for user consumption

              _this16.log("".concat(operation, " failed: ").concat(error.message)); // Let the app keep running by returning an empty result.


              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
            };
          }
          /** Log a HeroService message with the MessageService */

        }, {
          key: "log",
          value: function log(message) {
            console.log("GraphService: ".concat(message));
          }
        }]);

        return GraphService;
      }();

      GraphService.ɵfac = function GraphService_Factory(t) {
        return new (t || GraphService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__["MsalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      GraphService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GraphService,
        factory: GraphService.ɵfac,
        providedIn: _msgraph_service_module__WEBPACK_IMPORTED_MODULE_5__["MSGraphServiceModule"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: _msgraph_service_module__WEBPACK_IMPORTED_MODULE_5__["MSGraphServiceModule"]
          }]
        }], function () {
          return [{
            type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__["MsalService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/msgraph-service/src/lib/msgraph-service.module.ts":
    /*!************************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/msgraph-service/src/lib/msgraph-service.module.ts ***!
      \************************************************************************************/

    /*! exports provided: MSGraphServiceModule */

    /***/
    function libsMsgraphServiceSrcLibMsgraphServiceModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MSGraphServiceModule", function () {
        return MSGraphServiceModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var MSGraphServiceModule = function MSGraphServiceModule() {
        _classCallCheck(this, MSGraphServiceModule);
      };

      MSGraphServiceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MSGraphServiceModule
      });
      MSGraphServiceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MSGraphServiceModule_Factory(t) {
          return new (t || MSGraphServiceModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MSGraphServiceModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MSGraphServiceModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "../../libs/notifications/src/index.ts":
    /*!*************************************************************!*\
      !*** /home/schumajr/cosmos/libs/notifications/src/index.ts ***!
      \*************************************************************/

    /*! exports provided: NotificationsModule, NotificationsService */

    /***/
    function libsNotificationsSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_notifications_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/notifications.module */
      "../../libs/notifications/src/lib/notifications.module.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NotificationsModule", function () {
        return _lib_notifications_module__WEBPACK_IMPORTED_MODULE_0__["NotificationsModule"];
      });
      /* harmony import */


      var _lib_notifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lib/notifications.service */
      "../../libs/notifications/src/lib/notifications.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NotificationsService", function () {
        return _lib_notifications_service__WEBPACK_IMPORTED_MODULE_1__["NotificationsService"];
      });
      /***/

    },

    /***/
    "../../libs/notifications/src/lib/notifications.module.ts":
    /*!********************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/notifications/src/lib/notifications.module.ts ***!
      \********************************************************************************/

    /*! exports provided: NotificationsModule */

    /***/
    function libsNotificationsSrcLibNotificationsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsModule", function () {
        return NotificationsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var NotificationsModule = function NotificationsModule() {
        _classCallCheck(this, NotificationsModule);
      };

      NotificationsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NotificationsModule
      });
      NotificationsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NotificationsModule_Factory(t) {
          return new (t || NotificationsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotificationsModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "../../libs/notifications/src/lib/notifications.service.ts":
    /*!*********************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/notifications/src/lib/notifications.service.ts ***!
      \*********************************************************************************/

    /*! exports provided: NotificationsService */

    /***/
    function libsNotificationsSrcLibNotificationsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsService", function () {
        return NotificationsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var NotificationsService = /*#__PURE__*/function () {
        function NotificationsService() {
          _classCallCheck(this, NotificationsService);

          this.notifications = [];
        }

        _createClass(NotificationsService, [{
          key: "add",
          value: function add(message) {
            this.notifications.push(message);
          }
        }, {
          key: "clear",
          value: function clear() {
            this.notifications = [];
          }
        }]);

        return NotificationsService;
      }();

      NotificationsService.ɵfac = function NotificationsService_Factory(t) {
        return new (t || NotificationsService)();
      };

      NotificationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NotificationsService,
        factory: NotificationsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "../../libs/pages/src/index.ts":
    /*!*****************************************************!*\
      !*** /home/schumajr/cosmos/libs/pages/src/index.ts ***!
      \*****************************************************/

    /*! exports provided: PagesModule */

    /***/
    function libsPagesSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/pages.module */
      "../../libs/pages/src/lib/pages.module.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PagesModule", function () {
        return _lib_pages_module__WEBPACK_IMPORTED_MODULE_0__["PagesModule"];
      });
      /***/

    },

    /***/
    "../../libs/pages/src/lib/home-page/home-page.component.ts":
    /*!*********************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/pages/src/lib/home-page/home-page.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: HomePageComponent */

    /***/
    function libsPagesSrcLibHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
        return HomePageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _cosmos_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @cosmos/environment */
      "../../libs/environment/src/index.ts");
      /* harmony import */


      var _user_auth_src_lib_sign_in_out_button_sign_in_out_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../user-auth/src/lib/sign-in-out-button/sign-in-out-button.component */
      "../../libs/user-auth/src/lib/sign-in-out-button/sign-in-out-button.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var HomePageComponent = /*#__PURE__*/function () {
        function HomePageComponent(environmentService) {
          _classCallCheck(this, HomePageComponent);

          this.environmentService = environmentService;
          this.title = this.environmentService.appName;
        }

        _createClass(HomePageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomePageComponent;
      }();

      HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
        return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cosmos_environment__WEBPACK_IMPORTED_MODULE_1__["EnvironmentService"]));
      };

      HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomePageComponent,
        selectors: [["cosmos-home-page"]],
        decls: 6,
        vars: 1,
        consts: [["routerLink", "/google/groups/list"]],
        template: function HomePageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "cosmos-sign-in-out-button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Google Groups");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
          }
        },
        directives: [_user_auth_src_lib_sign_in_out_button_sign_in_out_button_component__WEBPACK_IMPORTED_MODULE_2__["SignInOutButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3BhZ2VzL3NyYy9saWIvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cosmos-home-page',
            templateUrl: './home-page.component.html',
            styleUrls: ['./home-page.component.scss']
          }]
        }], function () {
          return [{
            type: _cosmos_environment__WEBPACK_IMPORTED_MODULE_1__["EnvironmentService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/pages/src/lib/not-found-page/not-found-page.component.ts":
    /*!*******************************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/pages/src/lib/not-found-page/not-found-page.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: NotFoundPageComponent */

    /***/
    function libsPagesSrcLibNotFoundPageNotFoundPageComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function () {
        return NotFoundPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var NotFoundPageComponent = /*#__PURE__*/function () {
        function NotFoundPageComponent() {
          _classCallCheck(this, NotFoundPageComponent);
        }

        _createClass(NotFoundPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotFoundPageComponent;
      }();

      NotFoundPageComponent.ɵfac = function NotFoundPageComponent_Factory(t) {
        return new (t || NotFoundPageComponent)();
      };

      NotFoundPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotFoundPageComponent,
        selectors: [["cosmos-not-found-page"]],
        decls: 2,
        vars: 0,
        template: function NotFoundPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found-page works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3BhZ2VzL3NyYy9saWIvbm90LWZvdW5kLXBhZ2Uvbm90LWZvdW5kLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundPageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cosmos-not-found-page',
            templateUrl: './not-found-page.component.html',
            styleUrls: ['./not-found-page.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/pages/src/lib/pages.module.ts":
    /*!****************************************************************!*\
      !*** /home/schumajr/cosmos/libs/pages/src/lib/pages.module.ts ***!
      \****************************************************************/

    /*! exports provided: PagesModule */

    /***/
    function libsPagesSrcLibPagesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagesModule", function () {
        return PagesModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _cosmos_user_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @cosmos/user-auth */
      "../../libs/user-auth/src/index.ts");
      /* harmony import */


      var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home-page/home-page.component */
      "../../libs/pages/src/lib/home-page/home-page.component.ts");
      /* harmony import */


      var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./not-found-page/not-found-page.component */
      "../../libs/pages/src/lib/not-found-page/not-found-page.component.ts");

      var PagesModule = function PagesModule() {
        _classCallCheck(this, PagesModule);
      };

      PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PagesModule
      });
      PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PagesModule_Factory(t) {
          return new (t || PagesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _cosmos_user_auth__WEBPACK_IMPORTED_MODULE_3__["UserAuthModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          pathMatch: 'full',
          component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"]
        }, {
          path: '**',
          pathMatch: 'full',
          component: _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundPageComponent"]
        }])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, {
          declarations: [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"], _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundPageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _cosmos_user_auth__WEBPACK_IMPORTED_MODULE_3__["UserAuthModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"], _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundPageComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"], _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundPageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _cosmos_user_auth__WEBPACK_IMPORTED_MODULE_3__["UserAuthModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
              path: '',
              pathMatch: 'full',
              component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"]
            }, {
              path: '**',
              pathMatch: 'full',
              component: _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundPageComponent"]
            }])],
            exports: [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"], _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundPageComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "../../libs/panels/src/index.ts":
    /*!******************************************************!*\
      !*** /home/schumajr/cosmos/libs/panels/src/index.ts ***!
      \******************************************************/

    /*! exports provided: PanelsModule, PanelsService */

    /***/
    function libsPanelsSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_panels_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/panels.module */
      "../../libs/panels/src/lib/panels.module.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PanelsModule", function () {
        return _lib_panels_module__WEBPACK_IMPORTED_MODULE_0__["PanelsModule"];
      });
      /* harmony import */


      var _lib_panels_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lib/panels.service */
      "../../libs/panels/src/lib/panels.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PanelsService", function () {
        return _lib_panels_service__WEBPACK_IMPORTED_MODULE_1__["PanelsService"];
      });
      /***/

    },

    /***/
    "../../libs/panels/src/lib/apps-menu-panel/apps-menu-panel.component.ts":
    /*!**********************************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/panels/src/lib/apps-menu-panel/apps-menu-panel.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: AppsMenuPanelComponent */

    /***/
    function libsPanelsSrcLibAppsMenuPanelAppsMenuPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppsMenuPanelComponent", function () {
        return AppsMenuPanelComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AppsMenuPanelComponent = /*#__PURE__*/function () {
        function AppsMenuPanelComponent() {
          _classCallCheck(this, AppsMenuPanelComponent);
        }

        _createClass(AppsMenuPanelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppsMenuPanelComponent;
      }();

      AppsMenuPanelComponent.ɵfac = function AppsMenuPanelComponent_Factory(t) {
        return new (t || AppsMenuPanelComponent)();
      };

      AppsMenuPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppsMenuPanelComponent,
        selectors: [["cosmos-apps-menu-panel"]],
        decls: 2,
        vars: 0,
        template: function AppsMenuPanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "apps-menu-panel works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3BhbmVscy9zcmMvbGliL2FwcHMtbWVudS1wYW5lbC9hcHBzLW1lbnUtcGFuZWwuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppsMenuPanelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cosmos-apps-menu-panel',
            templateUrl: './apps-menu-panel.component.html',
            styleUrls: ['./apps-menu-panel.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/panels/src/lib/feedback-panel/feedback-panel.component.ts":
    /*!********************************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/panels/src/lib/feedback-panel/feedback-panel.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: FeedbackPanelComponent */

    /***/
    function libsPanelsSrcLibFeedbackPanelFeedbackPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedbackPanelComponent", function () {
        return FeedbackPanelComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FeedbackPanelComponent = /*#__PURE__*/function () {
        function FeedbackPanelComponent() {
          _classCallCheck(this, FeedbackPanelComponent);
        }

        _createClass(FeedbackPanelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FeedbackPanelComponent;
      }();

      FeedbackPanelComponent.ɵfac = function FeedbackPanelComponent_Factory(t) {
        return new (t || FeedbackPanelComponent)();
      };

      FeedbackPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FeedbackPanelComponent,
        selectors: [["cosmos-feedback-panel"]],
        decls: 2,
        vars: 0,
        template: function FeedbackPanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "feedback-panel works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3BhbmVscy9zcmMvbGliL2ZlZWRiYWNrLXBhbmVsL2ZlZWRiYWNrLXBhbmVsLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackPanelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cosmos-feedback-panel',
            templateUrl: './feedback-panel.component.html',
            styleUrls: ['./feedback-panel.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/panels/src/lib/footer-panel/footer-panel.component.ts":
    /*!****************************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/panels/src/lib/footer-panel/footer-panel.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: FooterPanelComponent */

    /***/
    function libsPanelsSrcLibFooterPanelFooterPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterPanelComponent", function () {
        return FooterPanelComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FooterPanelComponent = /*#__PURE__*/function () {
        function FooterPanelComponent() {
          _classCallCheck(this, FooterPanelComponent);
        }

        _createClass(FooterPanelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterPanelComponent;
      }();

      FooterPanelComponent.ɵfac = function FooterPanelComponent_Factory(t) {
        return new (t || FooterPanelComponent)();
      };

      FooterPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterPanelComponent,
        selectors: [["cosmos-footer-panel"]],
        decls: 2,
        vars: 0,
        template: function FooterPanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer-panel works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3BhbmVscy9zcmMvbGliL2Zvb3Rlci1wYW5lbC9mb290ZXItcGFuZWwuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterPanelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cosmos-footer-panel',
            templateUrl: './footer-panel.component.html',
            styleUrls: ['./footer-panel.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/panels/src/lib/header-panel/header-panel.component.ts":
    /*!****************************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/panels/src/lib/header-panel/header-panel.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: HeaderPanelComponent */

    /***/
    function libsPanelsSrcLibHeaderPanelHeaderPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderPanelComponent", function () {
        return HeaderPanelComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HeaderPanelComponent = /*#__PURE__*/function () {
        function HeaderPanelComponent() {
          _classCallCheck(this, HeaderPanelComponent);
        }

        _createClass(HeaderPanelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderPanelComponent;
      }();

      HeaderPanelComponent.ɵfac = function HeaderPanelComponent_Factory(t) {
        return new (t || HeaderPanelComponent)();
      };

      HeaderPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderPanelComponent,
        selectors: [["cosmos-header-panel"]],
        decls: 2,
        vars: 0,
        template: function HeaderPanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "header-panel works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3BhbmVscy9zcmMvbGliL2hlYWRlci1wYW5lbC9oZWFkZXItcGFuZWwuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderPanelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cosmos-header-panel',
            templateUrl: './header-panel.component.html',
            styleUrls: ['./header-panel.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/panels/src/lib/help-panel/help-panel.component.ts":
    /*!************************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/panels/src/lib/help-panel/help-panel.component.ts ***!
      \************************************************************************************/

    /*! exports provided: HelpPanelComponent */

    /***/
    function libsPanelsSrcLibHelpPanelHelpPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpPanelComponent", function () {
        return HelpPanelComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HelpPanelComponent = /*#__PURE__*/function () {
        function HelpPanelComponent() {
          _classCallCheck(this, HelpPanelComponent);
        }

        _createClass(HelpPanelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HelpPanelComponent;
      }();

      HelpPanelComponent.ɵfac = function HelpPanelComponent_Factory(t) {
        return new (t || HelpPanelComponent)();
      };

      HelpPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HelpPanelComponent,
        selectors: [["cosmos-help-panel"]],
        decls: 2,
        vars: 0,
        template: function HelpPanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "help-panel works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3BhbmVscy9zcmMvbGliL2hlbHAtcGFuZWwvaGVscC1wYW5lbC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpPanelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cosmos-help-panel',
            templateUrl: './help-panel.component.html',
            styleUrls: ['./help-panel.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/panels/src/lib/menu-panel/menu-panel.component.ts":
    /*!************************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/panels/src/lib/menu-panel/menu-panel.component.ts ***!
      \************************************************************************************/

    /*! exports provided: MenuPanelComponent */

    /***/
    function libsPanelsSrcLibMenuPanelMenuPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuPanelComponent", function () {
        return MenuPanelComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _cosmos_chassis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @cosmos/chassis */
      "../../libs/chassis/src/index.ts");
      /* harmony import */


      var _cosmos_ui_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @cosmos/ui-navigation */
      "../../libs/ui-navigation/src/index.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      function MenuPanelComponent_ul_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var link_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", link_r1.link);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r1.name);
        }
      }

      var MenuPanelComponent = /*#__PURE__*/function () {
        function MenuPanelComponent(navigationService, chassisService) {
          _classCallCheck(this, MenuPanelComponent);

          this.navigationService = navigationService;
          this.chassisService = chassisService;
        }

        _createClass(MenuPanelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getSideMenu();
          }
        }, {
          key: "getSideMenu",
          value: function getSideMenu() {
            var _this17 = this;

            this.navigationService.getSide().subscribe(function (menu) {
              return _this17.sideMenu = menu;
            });
          }
        }]);

        return MenuPanelComponent;
      }();

      MenuPanelComponent.ɵfac = function MenuPanelComponent_Factory(t) {
        return new (t || MenuPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cosmos_ui_navigation__WEBPACK_IMPORTED_MODULE_2__["UINavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cosmos_chassis__WEBPACK_IMPORTED_MODULE_1__["ChassisService"]));
      };

      MenuPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MenuPanelComponent,
        selectors: [["cosmos-menu-panel"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngFor", "ngForOf"], [3, "routerLink"]],
        template: function MenuPanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MenuPanelComponent_ul_0_Template, 4, 2, "ul", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sideMenu.links);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
        styles: ["nav[_ngcontent-%COMP%] {\n  height: 100%;\n  transform: translateX(-9999px);\n  opacity: 0.95;\n  background: lightgrey;\n  border-right: 3px solid darkgrey;\n  padding: 15px;\n  overflow: auto;\n}\nnav[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 15px;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\nnav[_ngcontent-%COMP%]   .currentSelection[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n@keyframes slideIn {\n  from {\n    transform: translateX(-500px);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n@keyframes slideOut {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-500px);\n  }\n}\n.showNav[_ngcontent-%COMP%] {\n  animation: slideIn 500ms;\n  animation-fill-mode: forwards;\n}\n.hideNav[_ngcontent-%COMP%] {\n  animation: slideOut 500ms;\n  animation-fill-mode: forwards;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvcGFuZWxzL3NyYy9saWIvbWVudS1wYW5lbC9tZW51LXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsWUFBQTtFQUVBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUpKO0FBTUk7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFKTjtBQU9JO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FBTE47QUFRSTtFQUNFLHFCQUFBO0FBTk47QUFTSTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFQTjtBQVVJO0VBQ0UsaUJBQUE7QUFSTjtBQVlFO0VBQ0U7SUFDRSw2QkFBQTtFQVRKO0VBV0U7SUFDRSx3QkFBQTtFQVRKO0FBQ0Y7QUFZRTtFQUNFO0lBQ0Usd0JBQUE7RUFWSjtFQVlFO0lBQ0UsNkJBQUE7RUFWSjtBQUNGO0FBYUU7RUFDRSx3QkFBQTtFQUNBLDZCQUFBO0FBWEo7QUFjRTtFQUNFLHlCQUFBO0VBQ0EsNkJBQUE7QUFYSiIsImZpbGUiOiJsaWJzL3BhbmVscy9zcmMvbGliL21lbnUtcGFuZWwvbWVudS1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbn1cbiAgICBcbiAgbmF2IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOTk5OXB4KTtcbiAgXG4gICAgb3BhY2l0eTogMC45NTtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgZGFya2dyZXk7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgXG4gICAgJj4qIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG4gIFxuICAgIGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgXG4gICAgdWwge1xuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIH1cbiAgXG4gICAgbGkge1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICBcbiAgICAuY3VycmVudFNlbGVjdGlvbiB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgc2xpZGVJbiB7XG4gICAgZnJvbSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwMHB4KTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzbGlkZU91dCB7XG4gICAgZnJvbSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAwcHgpO1xuICAgIH1cbiAgfVxuICBcbiAgLnNob3dOYXYge1xuICAgIGFuaW1hdGlvbjogc2xpZGVJbiA1MDBtcztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgfVxuICBcbiAgLmhpZGVOYXYge1xuICAgIGFuaW1hdGlvbjogc2xpZGVPdXQgNTAwbXM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIH1cbiAgIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuPanelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cosmos-menu-panel',
            templateUrl: './menu-panel.component.html',
            styleUrls: ['./menu-panel.component.scss']
          }]
        }], function () {
          return [{
            type: _cosmos_ui_navigation__WEBPACK_IMPORTED_MODULE_2__["UINavigationService"]
          }, {
            type: _cosmos_chassis__WEBPACK_IMPORTED_MODULE_1__["ChassisService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/panels/src/lib/notifictaions-panel/notifictaions-panel.component.ts":
    /*!******************************************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/panels/src/lib/notifictaions-panel/notifictaions-panel.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: NotifictaionsPanelComponent */

    /***/
    function libsPanelsSrcLibNotifictaionsPanelNotifictaionsPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotifictaionsPanelComponent", function () {
        return NotifictaionsPanelComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var NotifictaionsPanelComponent = /*#__PURE__*/function () {
        function NotifictaionsPanelComponent() {
          _classCallCheck(this, NotifictaionsPanelComponent);
        }

        _createClass(NotifictaionsPanelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotifictaionsPanelComponent;
      }();

      NotifictaionsPanelComponent.ɵfac = function NotifictaionsPanelComponent_Factory(t) {
        return new (t || NotifictaionsPanelComponent)();
      };

      NotifictaionsPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotifictaionsPanelComponent,
        selectors: [["cosmos-notifictaions-panel"]],
        decls: 2,
        vars: 0,
        template: function NotifictaionsPanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "notifictaions-panel works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3BhbmVscy9zcmMvbGliL25vdGlmaWN0YWlvbnMtcGFuZWwvbm90aWZpY3RhaW9ucy1wYW5lbC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotifictaionsPanelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cosmos-notifictaions-panel',
            templateUrl: './notifictaions-panel.component.html',
            styleUrls: ['./notifictaions-panel.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/panels/src/lib/panels.module.ts":
    /*!******************************************************************!*\
      !*** /home/schumajr/cosmos/libs/panels/src/lib/panels.module.ts ***!
      \******************************************************************/

    /*! exports provided: PanelsModule */

    /***/
    function libsPanelsSrcLibPanelsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PanelsModule", function () {
        return PanelsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _feedback_panel_feedback_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./feedback-panel/feedback-panel.component */
      "../../libs/panels/src/lib/feedback-panel/feedback-panel.component.ts");
      /* harmony import */


      var _help_panel_help_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./help-panel/help-panel.component */
      "../../libs/panels/src/lib/help-panel/help-panel.component.ts");
      /* harmony import */


      var _menu_panel_menu_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./menu-panel/menu-panel.component */
      "../../libs/panels/src/lib/menu-panel/menu-panel.component.ts");
      /* harmony import */


      var _notifictaions_panel_notifictaions_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./notifictaions-panel/notifictaions-panel.component */
      "../../libs/panels/src/lib/notifictaions-panel/notifictaions-panel.component.ts");
      /* harmony import */


      var _profile_panel_profile_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./profile-panel/profile-panel.component */
      "../../libs/panels/src/lib/profile-panel/profile-panel.component.ts");
      /* harmony import */


      var _settings_panel_settings_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./settings-panel/settings-panel.component */
      "../../libs/panels/src/lib/settings-panel/settings-panel.component.ts");
      /* harmony import */


      var _footer_panel_footer_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./footer-panel/footer-panel.component */
      "../../libs/panels/src/lib/footer-panel/footer-panel.component.ts");
      /* harmony import */


      var _header_panel_header_panel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./header-panel/header-panel.component */
      "../../libs/panels/src/lib/header-panel/header-panel.component.ts");
      /* harmony import */


      var _apps_menu_panel_apps_menu_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./apps-menu-panel/apps-menu-panel.component */
      "../../libs/panels/src/lib/apps-menu-panel/apps-menu-panel.component.ts");

      var PanelsModule = function PanelsModule() {
        _classCallCheck(this, PanelsModule);
      };

      PanelsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PanelsModule
      });
      PanelsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PanelsModule_Factory(t) {
          return new (t || PanelsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PanelsModule, {
          declarations: [_feedback_panel_feedback_panel_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackPanelComponent"], _help_panel_help_panel_component__WEBPACK_IMPORTED_MODULE_4__["HelpPanelComponent"], _menu_panel_menu_panel_component__WEBPACK_IMPORTED_MODULE_5__["MenuPanelComponent"], _notifictaions_panel_notifictaions_panel_component__WEBPACK_IMPORTED_MODULE_6__["NotifictaionsPanelComponent"], _profile_panel_profile_panel_component__WEBPACK_IMPORTED_MODULE_7__["ProfilePanelComponent"], _settings_panel_settings_panel_component__WEBPACK_IMPORTED_MODULE_8__["SettingsPanelComponent"], _footer_panel_footer_panel_component__WEBPACK_IMPORTED_MODULE_9__["FooterPanelComponent"], _header_panel_header_panel_component__WEBPACK_IMPORTED_MODULE_10__["HeaderPanelComponent"], _apps_menu_panel_apps_menu_panel_component__WEBPACK_IMPORTED_MODULE_11__["AppsMenuPanelComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_feedback_panel_feedback_panel_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackPanelComponent"], _help_panel_help_panel_component__WEBPACK_IMPORTED_MODULE_4__["HelpPanelComponent"], _menu_panel_menu_panel_component__WEBPACK_IMPORTED_MODULE_5__["MenuPanelComponent"], _notifictaions_panel_notifictaions_panel_component__WEBPACK_IMPORTED_MODULE_6__["NotifictaionsPanelComponent"], _profile_panel_profile_panel_component__WEBPACK_IMPORTED_MODULE_7__["ProfilePanelComponent"], _settings_panel_settings_panel_component__WEBPACK_IMPORTED_MODULE_8__["SettingsPanelComponent"], _footer_panel_footer_panel_component__WEBPACK_IMPORTED_MODULE_9__["FooterPanelComponent"], _header_panel_header_panel_component__WEBPACK_IMPORTED_MODULE_10__["HeaderPanelComponent"], _apps_menu_panel_apps_menu_panel_component__WEBPACK_IMPORTED_MODULE_11__["AppsMenuPanelComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_feedback_panel_feedback_panel_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackPanelComponent"], _help_panel_help_panel_component__WEBPACK_IMPORTED_MODULE_4__["HelpPanelComponent"], _menu_panel_menu_panel_component__WEBPACK_IMPORTED_MODULE_5__["MenuPanelComponent"], _notifictaions_panel_notifictaions_panel_component__WEBPACK_IMPORTED_MODULE_6__["NotifictaionsPanelComponent"], _profile_panel_profile_panel_component__WEBPACK_IMPORTED_MODULE_7__["ProfilePanelComponent"], _settings_panel_settings_panel_component__WEBPACK_IMPORTED_MODULE_8__["SettingsPanelComponent"], _footer_panel_footer_panel_component__WEBPACK_IMPORTED_MODULE_9__["FooterPanelComponent"], _header_panel_header_panel_component__WEBPACK_IMPORTED_MODULE_10__["HeaderPanelComponent"], _apps_menu_panel_apps_menu_panel_component__WEBPACK_IMPORTED_MODULE_11__["AppsMenuPanelComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            exports: [_feedback_panel_feedback_panel_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackPanelComponent"], _help_panel_help_panel_component__WEBPACK_IMPORTED_MODULE_4__["HelpPanelComponent"], _menu_panel_menu_panel_component__WEBPACK_IMPORTED_MODULE_5__["MenuPanelComponent"], _notifictaions_panel_notifictaions_panel_component__WEBPACK_IMPORTED_MODULE_6__["NotifictaionsPanelComponent"], _profile_panel_profile_panel_component__WEBPACK_IMPORTED_MODULE_7__["ProfilePanelComponent"], _settings_panel_settings_panel_component__WEBPACK_IMPORTED_MODULE_8__["SettingsPanelComponent"], _footer_panel_footer_panel_component__WEBPACK_IMPORTED_MODULE_9__["FooterPanelComponent"], _header_panel_header_panel_component__WEBPACK_IMPORTED_MODULE_10__["HeaderPanelComponent"], _apps_menu_panel_apps_menu_panel_component__WEBPACK_IMPORTED_MODULE_11__["AppsMenuPanelComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "../../libs/panels/src/lib/panels.service.ts":
    /*!*******************************************************************!*\
      !*** /home/schumajr/cosmos/libs/panels/src/lib/panels.service.ts ***!
      \*******************************************************************/

    /*! exports provided: PanelsService */

    /***/
    function libsPanelsSrcLibPanelsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PanelsService", function () {
        return PanelsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "../../node_modules/rxjs/_esm2015/index.js");

      var PanelsService = /*#__PURE__*/function () {
        function PanelsService() {
          _classCallCheck(this, PanelsService);

          this.feedbackPanelEnabled = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.feedbackPanelEnabled$ = this.feedbackPanelEnabled.asObservable();
          this.feedbackPanelVisible = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.feedbackPanelVisible$ = this.feedbackPanelVisible.asObservable();
          this.helpPanelEnabled = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.helpPanelEnabled$ = this.helpPanelEnabled.asObservable();
          this.helpPanelVisible = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.helpPanelVisible$ = this.helpPanelVisible.asObservable();
          this.menuPanelEnabled = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.menuPanelEnabled$ = this.menuPanelEnabled.asObservable();
          this.menuPanelVisible = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.menuPanelVisible$ = this.menuPanelVisible.asObservable();
          this.notificationsPanelEnabled = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.notificationsPanelEnabled$ = this.notificationsPanelEnabled.asObservable();
          this.notificationsPanelVisible = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.notificationsPanelVisible$ = this.notificationsPanelVisible.asObservable();
          this.profilePanelEnabled = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.profilePanelEnabled$ = this.profilePanelEnabled.asObservable();
          this.profilePanelVisible = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.profilePanelVisible$ = this.profilePanelVisible.asObservable();
          this.settingsPanelEnabled = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.settingsPanelEnabled$ = this.settingsPanelEnabled.asObservable();
          this.settingsPanelVisible = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.settingsPanelVisible$ = this.settingsPanelVisible.asObservable();
        }

        _createClass(PanelsService, [{
          key: "enableFeedbackPanel",
          value: function enableFeedbackPanel(feedbackPanelEnabled) {
            this.feedbackPanelEnabled.next(feedbackPanelEnabled);
            console.log("feedbackPanelEnabled$ set to ".concat(this.feedbackPanelEnabled.getValue()));
          }
        }, {
          key: "showFeedbackPanel",
          value: function showFeedbackPanel(feedbackPanelVisible) {
            this.feedbackPanelVisible.next(feedbackPanelVisible);
            console.log("feedbackPanelVisible$ set to ".concat(this.feedbackPanelVisible.getValue()));
          }
        }, {
          key: "enableHelpPanel",
          value: function enableHelpPanel(helpPanelEnabled) {
            this.helpPanelEnabled.next(helpPanelEnabled);
            console.log("helpPanelEnabled$ set to ".concat(this.helpPanelEnabled.getValue()));
          }
        }, {
          key: "showHelpPanel",
          value: function showHelpPanel(helpPanelVisible) {
            this.helpPanelVisible.next(helpPanelVisible);
            console.log("helpPanelVisible$ set to ".concat(this.helpPanelVisible.getValue()));
          }
        }, {
          key: "enableMenuPanel",
          value: function enableMenuPanel(menuPanelEnabled) {
            this.menuPanelEnabled.next(menuPanelEnabled);
            console.log("menuPanelEnabled$ set to ".concat(this.menuPanelEnabled.getValue()));
          }
        }, {
          key: "showMenuPanel",
          value: function showMenuPanel(menuPanelVisible) {
            this.menuPanelVisible.next(menuPanelVisible);
            console.log("menuPanelVisible$ set to ".concat(this.menuPanelVisible.getValue()));
          }
        }, {
          key: "enableNotificationsPanel",
          value: function enableNotificationsPanel(notificationsPanelEnabled) {
            this.notificationsPanelEnabled.next(notificationsPanelEnabled);
            console.log("notificationsPanelEnabled$ set to ".concat(this.notificationsPanelEnabled.getValue()));
          }
        }, {
          key: "showNotificationsPanel",
          value: function showNotificationsPanel(notificationsPanelVisible) {
            this.notificationsPanelVisible.next(notificationsPanelVisible);
            console.log("notificationsPanelVisible$ set to ".concat(this.notificationsPanelVisible.getValue()));
          }
        }, {
          key: "enableProfilePanel",
          value: function enableProfilePanel(profilePanelEnabled) {
            this.profilePanelEnabled.next(profilePanelEnabled);
            console.log("profilePanelEnabled$ set to ".concat(this.profilePanelEnabled.getValue()));
          }
        }, {
          key: "showProfilePanel",
          value: function showProfilePanel(profilePanelVisible) {
            this.profilePanelVisible.next(profilePanelVisible);
            console.log("profilePanelVisible$ set to ".concat(this.profilePanelVisible.getValue()));
          }
        }, {
          key: "enableSettingsPanel",
          value: function enableSettingsPanel(settingsPanelEnabled) {
            this.settingsPanelEnabled.next(settingsPanelEnabled);
            console.log("settingsPanelEnabled$ set to ".concat(this.settingsPanelEnabled.getValue()));
          }
        }, {
          key: "showSettingsPanel",
          value: function showSettingsPanel(settingsPanelVisible) {
            this.settingsPanelVisible.next(settingsPanelVisible);
            console.log("settingsPanelVisible$ set to ".concat(this.settingsPanelVisible.getValue()));
          }
        }]);

        return PanelsService;
      }();

      PanelsService.ɵfac = function PanelsService_Factory(t) {
        return new (t || PanelsService)();
      };

      PanelsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PanelsService,
        factory: PanelsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/panels/src/lib/profile-panel/profile-panel.component.ts":
    /*!******************************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/panels/src/lib/profile-panel/profile-panel.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: ProfilePanelComponent */

    /***/
    function libsPanelsSrcLibProfilePanelProfilePanelComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePanelComponent", function () {
        return ProfilePanelComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _microsoft_mgt_dist_es6_components_mgt_person_mgt_person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @microsoft/mgt/dist/es6/components/mgt-person/mgt-person */
      "../../node_modules/@microsoft/mgt/dist/es6/components/mgt-person/mgt-person.js");
      /* harmony import */


      var _cosmos_msgraph_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @cosmos/msgraph-service */
      "../../libs/msgraph-service/src/index.ts");

      var ProfilePanelComponent = /*#__PURE__*/function () {
        function ProfilePanelComponent(graphService) {
          _classCallCheck(this, ProfilePanelComponent);

          this.graphService = graphService;
          this.profile$ = this.graphService.getProfile();
        }

        _createClass(ProfilePanelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getProfile();
          }
        }, {
          key: "profileString",
          value: function profileString() {
            return JSON.stringify(this.profile);
          }
        }, {
          key: "getProfile",
          value: function getProfile() {
            var _this18 = this;

            this.profile$.subscribe(function (profile) {
              return _this18.profile = profile;
            });
          }
        }]);

        return ProfilePanelComponent;
      }();

      ProfilePanelComponent.ɵfac = function ProfilePanelComponent_Factory(t) {
        return new (t || ProfilePanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cosmos_msgraph_service__WEBPACK_IMPORTED_MODULE_2__["GraphService"]));
      };

      ProfilePanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfilePanelComponent,
        selectors: [["cosmos-profile-panel"]],
        decls: 5,
        vars: 3,
        consts: [["show-name", "", "show-email", "", 3, "personDetails"]],
        template: function ProfilePanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mgt-person", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Welcome ", ctx.profile == null ? null : ctx.profile.displayName, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.profileString(), "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("personDetails", ctx.profile);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3BhbmVscy9zcmMvbGliL3Byb2ZpbGUtcGFuZWwvcHJvZmlsZS1wYW5lbC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilePanelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cosmos-profile-panel',
            templateUrl: './profile-panel.component.html',
            styleUrls: ['./profile-panel.component.scss']
          }]
        }], function () {
          return [{
            type: _cosmos_msgraph_service__WEBPACK_IMPORTED_MODULE_2__["GraphService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/panels/src/lib/settings-panel/settings-panel.component.ts":
    /*!********************************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/panels/src/lib/settings-panel/settings-panel.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: SettingsPanelComponent */

    /***/
    function libsPanelsSrcLibSettingsPanelSettingsPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsPanelComponent", function () {
        return SettingsPanelComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SettingsPanelComponent = /*#__PURE__*/function () {
        function SettingsPanelComponent() {
          _classCallCheck(this, SettingsPanelComponent);
        }

        _createClass(SettingsPanelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SettingsPanelComponent;
      }();

      SettingsPanelComponent.ɵfac = function SettingsPanelComponent_Factory(t) {
        return new (t || SettingsPanelComponent)();
      };

      SettingsPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SettingsPanelComponent,
        selectors: [["cosmos-settings-panel"]],
        decls: 2,
        vars: 0,
        template: function SettingsPanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "settings-panel works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3BhbmVscy9zcmMvbGliL3NldHRpbmdzLXBhbmVsL3NldHRpbmdzLXBhbmVsLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsPanelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cosmos-settings-panel',
            templateUrl: './settings-panel.component.html',
            styleUrls: ['./settings-panel.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/ui-navigation/src/index.ts":
    /*!*************************************************************!*\
      !*** /home/schumajr/cosmos/libs/ui-navigation/src/index.ts ***!
      \*************************************************************/

    /*! exports provided: UINavigationModule, UINavigationService, SIDE, HEADER, FOOTER */

    /***/
    function libsUiNavigationSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_ui_navigation_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/ui-navigation.module */
      "../../libs/ui-navigation/src/lib/ui-navigation.module.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UINavigationModule", function () {
        return _lib_ui_navigation_module__WEBPACK_IMPORTED_MODULE_0__["UINavigationModule"];
      });
      /* harmony import */


      var _lib_ui_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lib/ui-navigation.service */
      "../../libs/ui-navigation/src/lib/ui-navigation.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UINavigationService", function () {
        return _lib_ui_navigation_service__WEBPACK_IMPORTED_MODULE_1__["UINavigationService"];
      });
      /* harmony import */


      var _lib_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lib/navigation */
      "../../libs/ui-navigation/src/lib/navigation.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SIDE", function () {
        return _lib_navigation__WEBPACK_IMPORTED_MODULE_2__["SIDE"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HEADER", function () {
        return _lib_navigation__WEBPACK_IMPORTED_MODULE_2__["HEADER"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FOOTER", function () {
        return _lib_navigation__WEBPACK_IMPORTED_MODULE_2__["FOOTER"];
      });

      "";
      /***/
    },

    /***/
    "../../libs/ui-navigation/src/lib/navigation.ts":
    /*!**********************************************************************!*\
      !*** /home/schumajr/cosmos/libs/ui-navigation/src/lib/navigation.ts ***!
      \**********************************************************************/

    /*! exports provided: SIDE, HEADER, FOOTER */

    /***/
    function libsUiNavigationSrcLibNavigationTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SIDE", function () {
        return SIDE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HEADER", function () {
        return HEADER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FOOTER", function () {
        return FOOTER;
      });

      var SIDE = {
        links: [{
          link: '/people-set-definitions',
          name: 'Definitions'
        }, {
          link: '/people-set-memberships',
          name: 'Memberships'
        }]
      };
      var HEADER = {
        links: [{
          link: '/sets',
          name: 'Sets'
        }, {
          link: '/people-set-definitions',
          name: 'Definitions'
        }, {
          link: '/people-set-memberships',
          name: 'Memberships'
        }]
      };
      var FOOTER = {
        links: [{
          link: 'http://localhost:4270',
          name: 'Skyline'
        }, {
          link: 'http://localhost:4276',
          name: 'Sorting Hat'
        }, {
          link: 'http://localhost:4290',
          name: 'Viewfinder'
        }]
      };
      /***/
    },

    /***/
    "../../libs/ui-navigation/src/lib/ui-navigation.module.ts":
    /*!********************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/ui-navigation/src/lib/ui-navigation.module.ts ***!
      \********************************************************************************/

    /*! exports provided: UINavigationModule */

    /***/
    function libsUiNavigationSrcLibUiNavigationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UINavigationModule", function () {
        return UINavigationModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var UINavigationModule = function UINavigationModule() {
        _classCallCheck(this, UINavigationModule);
      };

      UINavigationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UINavigationModule
      });
      UINavigationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UINavigationModule_Factory(t) {
          return new (t || UINavigationModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UINavigationModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UINavigationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "../../libs/ui-navigation/src/lib/ui-navigation.service.ts":
    /*!*********************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/ui-navigation/src/lib/ui-navigation.service.ts ***!
      \*********************************************************************************/

    /*! exports provided: UINavigationService */

    /***/
    function libsUiNavigationSrcLibUiNavigationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UINavigationService", function () {
        return UINavigationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "../../node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./navigation */
      "../../libs/ui-navigation/src/lib/navigation.ts");

      var UINavigationService = /*#__PURE__*/function () {
        function UINavigationService() {
          _classCallCheck(this, UINavigationService);
        }

        _createClass(UINavigationService, [{
          key: "getFooter",
          value: function getFooter() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_navigation__WEBPACK_IMPORTED_MODULE_2__["FOOTER"]);
          }
        }, {
          key: "getHeader",
          value: function getHeader() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_navigation__WEBPACK_IMPORTED_MODULE_2__["HEADER"]);
          }
        }, {
          key: "getSide",
          value: function getSide() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_navigation__WEBPACK_IMPORTED_MODULE_2__["SIDE"]);
          }
        }]);

        return UINavigationService;
      }();

      UINavigationService.ɵfac = function UINavigationService_Factory(t) {
        return new (t || UINavigationService)();
      };

      UINavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UINavigationService,
        factory: UINavigationService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UINavigationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/user-auth/src/index.ts":
    /*!*********************************************************!*\
      !*** /home/schumajr/cosmos/libs/user-auth/src/index.ts ***!
      \*********************************************************/

    /*! exports provided: protectedResourceMap, UserAuthModule, UserAuthService */

    /***/
    function libsUserAuthSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_user_auth_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/user-auth.module */
      "../../libs/user-auth/src/lib/user-auth.module.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "protectedResourceMap", function () {
        return _lib_user_auth_module__WEBPACK_IMPORTED_MODULE_0__["protectedResourceMap"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserAuthModule", function () {
        return _lib_user_auth_module__WEBPACK_IMPORTED_MODULE_0__["UserAuthModule"];
      });
      /* harmony import */


      var _lib_user_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lib/user-auth.service */
      "../../libs/user-auth/src/lib/user-auth.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserAuthService", function () {
        return _lib_user_auth_service__WEBPACK_IMPORTED_MODULE_1__["UserAuthService"];
      });
      /***/

    },

    /***/
    "../../libs/user-auth/src/lib/sign-in-out-button/sign-in-out-button.component.ts":
    /*!*******************************************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/user-auth/src/lib/sign-in-out-button/sign-in-out-button.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: SignInOutButtonComponent */

    /***/
    function libsUserAuthSrcLibSignInOutButtonSignInOutButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignInOutButtonComponent", function () {
        return SignInOutButtonComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @azure/msal-angular */
      "../../node_modules/@azure/msal-angular/__ivy_ngcc__/fesm2015/azure-msal-angular.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function SignInOutButtonComponent_button_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInOutButtonComponent_button_0_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignInOutButtonComponent_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInOutButtonComponent_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SignInOutButtonComponent = /*#__PURE__*/function () {
        function SignInOutButtonComponent(authService) {
          _classCallCheck(this, SignInOutButtonComponent);

          this.authService = authService;
          this.loggedIn = false;
        }

        _createClass(SignInOutButtonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.checkoutAccount();
          }
        }, {
          key: "checkoutAccount",
          value: function checkoutAccount() {
            this.loggedIn = !!this.authService.getAccount();
          }
        }, {
          key: "login",
          value: function login() {
            this.authService.loginRedirect();
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authService.logout();
          }
        }]);

        return SignInOutButtonComponent;
      }();

      SignInOutButtonComponent.ɵfac = function SignInOutButtonComponent_Factory(t) {
        return new (t || SignInOutButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__["MsalService"]));
      };

      SignInOutButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignInOutButtonComponent,
        selectors: [["cosmos-sign-in-out-button"]],
        decls: 2,
        vars: 2,
        consts: [[3, "click", 4, "ngIf"], [3, "click"]],
        template: function SignInOutButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SignInOutButtonComponent_button_0_Template, 2, 0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignInOutButtonComponent_button_1_Template, 2, 0, "button", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3VzZXItYXV0aC9zcmMvbGliL3NpZ24taW4tb3V0LWJ1dHRvbi9zaWduLWluLW91dC1idXR0b24uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInOutButtonComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cosmos-sign-in-out-button',
            templateUrl: './sign-in-out-button.component.html',
            styleUrls: ['./sign-in-out-button.component.scss']
          }]
        }], function () {
          return [{
            type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__["MsalService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/user-auth/src/lib/user-auth.module.ts":
    /*!************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/user-auth/src/lib/user-auth.module.ts ***!
      \************************************************************************/

    /*! exports provided: protectedResourceMap, UserAuthModule */

    /***/
    function libsUserAuthSrcLibUserAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "protectedResourceMap", function () {
        return protectedResourceMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserAuthModule", function () {
        return UserAuthModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _cosmos_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @cosmos/environment */
      "../../libs/environment/src/index.ts");
      /* harmony import */


      var _cosmos_msgraph_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @cosmos/msgraph-service */
      "../../libs/msgraph-service/src/index.ts");
      /* harmony import */


      var _sign_in_out_button_sign_in_out_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sign-in-out-button/sign-in-out-button.component */
      "../../libs/user-auth/src/lib/sign-in-out-button/sign-in-out-button.component.ts");
      /* harmony import */


      var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @azure/msal-angular */
      "../../node_modules/@azure/msal-angular/__ivy_ngcc__/fesm2015/azure-msal-angular.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var protectedResourceMap = [['https://wrdsb-codex.azurewebsites.net/api/ping', ['https://wrdsb-codex.azurewebsites.net/user_impersonation']], ['https://wrdsb-codex.azurewebsites.net/api/igor-groups-groups-search', ['https://wrdsb-codex.azurewebsites.net/user_impersonation']], ['https://wrdsb-igor3.azurewebsites.net/api/ping', ['https://wrdsb-igor3.azurewebsites.net/user_impersonation']], ['https://wrdsb-igor3.azurewebsites.net/api/group-query', ['https://wrdsb-igor3.azurewebsites.net/user_impersonation']], ['https://wrdsb-hagar.azurewebsites.net/api/ping', ['https://wrdsb-hagar.azurewebsites.net/user_impersonation']], ['https://wrdsb-hagar.azurewebsites.net/api/aad-group-query', ['https://wrdsb-hagar.azurewebsites.net/user_impersonation']], ['https://graph.microsoft.com/v1.0/me', ['user.read']]];
      var isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;

      function MSALConfigFactory(env) {
        return {
          auth: {
            clientId: env.aadClientId,
            authority: env.aadAuthority,
            validateAuthority: env.aadValidateAuthority,
            redirectUri: env.aadRedirectUri,
            postLogoutRedirectUri: env.aadPostLogoutRedirectUri,
            navigateToLoginRequestUrl: env.aadNavigateToLoginRequestUrl
          },
          cache: {
            cacheLocation: "localStorage",
            storeAuthStateInCookie: isIE
          }
        };
      }

      function MSALAngularConfigFactory() {
        return {
          //popUp: !isIE,
          consentScopes: ["user.read", "openid", "profile"],
          unprotectedResources: ["https://www.microsoft.com/en-us/"],
          protectedResourceMap: protectedResourceMap,
          extraQueryParameters: {}
        };
      }

      var UserAuthModule = function UserAuthModule() {
        _classCallCheck(this, UserAuthModule);
      };

      UserAuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UserAuthModule
      });
      UserAuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UserAuthModule_Factory(t) {
          return new (t || UserAuthModule)();
        },
        providers: [_cosmos_msgraph_service__WEBPACK_IMPORTED_MODULE_3__["GraphService"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
          useClass: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_5__["MsalInterceptor"],
          multi: true
        }, {
          provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_5__["MSAL_CONFIG"],
          useFactory: MSALConfigFactory,
          deps: [_cosmos_environment__WEBPACK_IMPORTED_MODULE_2__["EnvironmentService"]]
        }, {
          provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_5__["MSAL_CONFIG_ANGULAR"],
          useFactory: MSALAngularConfigFactory
        }, _azure_msal_angular__WEBPACK_IMPORTED_MODULE_5__["MsalService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _azure_msal_angular__WEBPACK_IMPORTED_MODULE_5__["MsalModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserAuthModule, {
          declarations: [_sign_in_out_button_sign_in_out_button_component__WEBPACK_IMPORTED_MODULE_4__["SignInOutButtonComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _azure_msal_angular__WEBPACK_IMPORTED_MODULE_5__["MsalModule"]],
          exports: [_sign_in_out_button_sign_in_out_button_component__WEBPACK_IMPORTED_MODULE_4__["SignInOutButtonComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserAuthModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_sign_in_out_button_sign_in_out_button_component__WEBPACK_IMPORTED_MODULE_4__["SignInOutButtonComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _azure_msal_angular__WEBPACK_IMPORTED_MODULE_5__["MsalModule"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [_cosmos_msgraph_service__WEBPACK_IMPORTED_MODULE_3__["GraphService"], {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
              useClass: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_5__["MsalInterceptor"],
              multi: true
            }, {
              provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_5__["MSAL_CONFIG"],
              useFactory: MSALConfigFactory,
              deps: [_cosmos_environment__WEBPACK_IMPORTED_MODULE_2__["EnvironmentService"]]
            }, {
              provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_5__["MSAL_CONFIG_ANGULAR"],
              useFactory: MSALAngularConfigFactory
            }, _azure_msal_angular__WEBPACK_IMPORTED_MODULE_5__["MsalService"]],
            exports: [_sign_in_out_button_sign_in_out_button_component__WEBPACK_IMPORTED_MODULE_4__["SignInOutButtonComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "../../libs/user-auth/src/lib/user-auth.service.ts":
    /*!*************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/user-auth/src/lib/user-auth.service.ts ***!
      \*************************************************************************/

    /*! exports provided: UserAuthService */

    /***/
    function libsUserAuthSrcLibUserAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserAuthService", function () {
        return UserAuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var UserAuthService = /*#__PURE__*/function () {
        function UserAuthService() {
          _classCallCheck(this, UserAuthService);

          this.clientApplication = null;
        }

        _createClass(UserAuthService, [{
          key: "getAccessToken",
          value: function getAccessToken() {
            console.log('getting access token...');

            if (localStorage.getItem('msal.idtoken') !== undefined && localStorage.getItem('msal.idtoken') != null) {
              this.accessToken = localStorage.getItem('msal.idtoken');
              console.log("access token: ".concat(this.accessToken));
            }

            return this.accessToken;
          }
        }]);

        return UserAuthService;
      }();

      UserAuthService.ɵfac = function UserAuthService_Factory(t) {
        return new (t || UserAuthService)();
      };

      UserAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserAuthService,
        factory: UserAuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserAuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/user-profiles/src/index.ts":
    /*!*************************************************************!*\
      !*** /home/schumajr/cosmos/libs/user-profiles/src/index.ts ***!
      \*************************************************************/

    /*! exports provided: UserProfilesModule */

    /***/
    function libsUserProfilesSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_user_profiles_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/user-profiles.module */
      "../../libs/user-profiles/src/lib/user-profiles.module.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserProfilesModule", function () {
        return _lib_user_profiles_module__WEBPACK_IMPORTED_MODULE_0__["UserProfilesModule"];
      });
      /***/

    },

    /***/
    "../../libs/user-profiles/src/lib/profile-badge/profile-badge.component.ts":
    /*!*************************************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/user-profiles/src/lib/profile-badge/profile-badge.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: ProfileBadgeComponent */

    /***/
    function libsUserProfilesSrcLibProfileBadgeProfileBadgeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileBadgeComponent", function () {
        return ProfileBadgeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _cosmos_msgraph_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @cosmos/msgraph-service */
      "../../libs/msgraph-service/src/index.ts");
      /* harmony import */


      var _microsoft_mgt_dist_es6_components_mgt_person_mgt_person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @microsoft/mgt/dist/es6/components/mgt-person/mgt-person */
      "../../node_modules/@microsoft/mgt/dist/es6/components/mgt-person/mgt-person.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var _c0 = function _c0() {
        return ["profile"];
      };

      var ProfileBadgeComponent = /*#__PURE__*/function () {
        function ProfileBadgeComponent(graphService) {
          _classCallCheck(this, ProfileBadgeComponent);

          this.graphService = graphService;
          this.profile$ = this.graphService.getProfile();
        }

        _createClass(ProfileBadgeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getProfile();
          }
        }, {
          key: "getProfile",
          value: function getProfile() {
            var _this19 = this;

            this.profile$.subscribe(function (profile) {
              return _this19.profile = profile;
            });
          }
        }]);

        return ProfileBadgeComponent;
      }();

      ProfileBadgeComponent.ɵfac = function ProfileBadgeComponent_Factory(t) {
        return new (t || ProfileBadgeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cosmos_msgraph_service__WEBPACK_IMPORTED_MODULE_1__["GraphService"]));
      };

      ProfileBadgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfileBadgeComponent,
        selectors: [["cosmos-profile-badge"]],
        decls: 2,
        vars: 3,
        consts: [["id", "profileLink", 3, "routerLink"], ["id", "profileBadge", "show-name", "", "show-email", "", 3, "personDetails"]],
        template: function ProfileBadgeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mgt-person", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("personDetails", ctx.profile);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3VzZXItcHJvZmlsZXMvc3JjL2xpYi9wcm9maWxlLWJhZGdlL3Byb2ZpbGUtYmFkZ2UuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileBadgeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cosmos-profile-badge',
            templateUrl: './profile-badge.component.html',
            styleUrls: ['./profile-badge.component.scss']
          }]
        }], function () {
          return [{
            type: _cosmos_msgraph_service__WEBPACK_IMPORTED_MODULE_1__["GraphService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/user-profiles/src/lib/profile-page/profile-page.component.ts":
    /*!***********************************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/user-profiles/src/lib/profile-page/profile-page.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: ProfilePageComponent */

    /***/
    function libsUserProfilesSrcLibProfilePageProfilePageComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageComponent", function () {
        return ProfilePageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _microsoft_mgt_dist_es6_components_mgt_person_mgt_person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @microsoft/mgt/dist/es6/components/mgt-person/mgt-person */
      "../../node_modules/@microsoft/mgt/dist/es6/components/mgt-person/mgt-person.js");
      /* harmony import */


      var _cosmos_msgraph_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @cosmos/msgraph-service */
      "../../libs/msgraph-service/src/index.ts");
      /* harmony import */


      var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @azure/msal-angular */
      "../../node_modules/@azure/msal-angular/__ivy_ngcc__/fesm2015/azure-msal-angular.js");

      var ProfilePageComponent = /*#__PURE__*/function () {
        function ProfilePageComponent(msalService, graphService) {
          _classCallCheck(this, ProfilePageComponent);

          this.msalService = msalService;
          this.graphService = graphService;
          this.profile$ = this.graphService.getProfile();
        }

        _createClass(ProfilePageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getProfile();
            var account = this.msalService.getAccount();
            this.roles = account.idToken.roles;
          }
        }, {
          key: "profileString",
          value: function profileString() {
            return JSON.stringify(this.profile);
          }
        }, {
          key: "getProfile",
          value: function getProfile() {
            var _this20 = this;

            this.profile$.subscribe(function (profile) {
              return _this20.profile = profile;
            });
          }
        }]);

        return ProfilePageComponent;
      }();

      ProfilePageComponent.ɵfac = function ProfilePageComponent_Factory(t) {
        return new (t || ProfilePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__["MsalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cosmos_msgraph_service__WEBPACK_IMPORTED_MODULE_2__["GraphService"]));
      };

      ProfilePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfilePageComponent,
        selectors: [["cosmos-profile-page"]],
        decls: 28,
        vars: 14,
        template: function ProfilePageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Welcome ", ctx.profile == null ? null : ctx.profile.displayName, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.profileString(), "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profile == null ? null : ctx.profile.businessPhones);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profile == null ? null : ctx.profile.displayName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profile == null ? null : ctx.profile.givenName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profile == null ? null : ctx.profile.jobTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profile == null ? null : ctx.profile.mail);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profile == null ? null : ctx.profile.mobilePhone);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profile == null ? null : ctx.profile.officeLocation);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profile == null ? null : ctx.profile.preferredLanguage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profile == null ? null : ctx.profile.surname);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profile == null ? null : ctx.profile.userPrincipalName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profile == null ? null : ctx.profile.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.roles);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3VzZXItcHJvZmlsZXMvc3JjL2xpYi9wcm9maWxlLXBhZ2UvcHJvZmlsZS1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilePageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cosmos-profile-page',
            templateUrl: './profile-page.component.html',
            styleUrls: ['./profile-page.component.scss']
          }]
        }], function () {
          return [{
            type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__["MsalService"]
          }, {
            type: _cosmos_msgraph_service__WEBPACK_IMPORTED_MODULE_2__["GraphService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/user-profiles/src/lib/user-profiles.module.ts":
    /*!********************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/user-profiles/src/lib/user-profiles.module.ts ***!
      \********************************************************************************/

    /*! exports provided: UserProfilesModule */

    /***/
    function libsUserProfilesSrcLibUserProfilesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserProfilesModule", function () {
        return UserProfilesModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @azure/msal-angular */
      "../../node_modules/@azure/msal-angular/__ivy_ngcc__/fesm2015/azure-msal-angular.js");
      /* harmony import */


      var _cosmos_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @cosmos/guards */
      "../../libs/guards/src/index.ts");
      /* harmony import */


      var _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-page/profile-page.component */
      "../../libs/user-profiles/src/lib/profile-page/profile-page.component.ts");
      /* harmony import */


      var _profile_badge_profile_badge_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile-badge/profile-badge.component */
      "../../libs/user-profiles/src/lib/profile-badge/profile-badge.component.ts");

      var UserProfilesModule = function UserProfilesModule() {
        _classCallCheck(this, UserProfilesModule);
      };

      UserProfilesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UserProfilesModule
      });
      UserProfilesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UserProfilesModule_Factory(t) {
          return new (t || UserProfilesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          pathMatch: 'full',
          component: _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_5__["ProfilePageComponent"],
          data: {
            roles: ['cosmos-superuser', 'cosmos-user-its']
          },
          canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__["MsalGuard"], _cosmos_guards__WEBPACK_IMPORTED_MODULE_4__["RolesGuard"]]
        }])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserProfilesModule, {
          declarations: [_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_5__["ProfilePageComponent"], _profile_badge_profile_badge_component__WEBPACK_IMPORTED_MODULE_6__["ProfileBadgeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_5__["ProfilePageComponent"], _profile_badge_profile_badge_component__WEBPACK_IMPORTED_MODULE_6__["ProfileBadgeComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfilesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_5__["ProfilePageComponent"], _profile_badge_profile_badge_component__WEBPACK_IMPORTED_MODULE_6__["ProfileBadgeComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
              path: '',
              pathMatch: 'full',
              component: _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_5__["ProfilePageComponent"],
              data: {
                roles: ['cosmos-superuser', 'cosmos-user-its']
              },
              canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__["MsalGuard"], _cosmos_guards__WEBPACK_IMPORTED_MODULE_4__["RolesGuard"]]
            }])],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            exports: [_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_5__["ProfilePageComponent"], _profile_badge_profile_badge_component__WEBPACK_IMPORTED_MODULE_6__["ProfileBadgeComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @azure/msal-angular */
      "../../node_modules/@azure/msal-angular/__ivy_ngcc__/fesm2015/azure-msal-angular.js");
      /* harmony import */


      var _cosmos_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @cosmos/guards */
      "../../libs/guards/src/index.ts");

      var routes = [{
        path: 'ping',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | cosmos-pings */
          [__webpack_require__.e("common"), __webpack_require__.e("cosmos-pings")]).then(__webpack_require__.bind(null,
          /*! @cosmos/pings */
          "../../libs/pings/src/index.ts")).then(function (m) {
            return m.PingsModule;
          });
        },
        data: {
          roles: ['cosmos-superuser', 'cosmos-user-its']
        },
        canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalGuard"], _cosmos_guards__WEBPACK_IMPORTED_MODULE_3__["RolesGuard"]]
      }, {
        path: 'google/groups',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | cosmos-google-groups */
          [__webpack_require__.e("common"), __webpack_require__.e("cosmos-google-groups")]).then(__webpack_require__.bind(null,
          /*! @cosmos/google-groups */
          "../../libs/google-groups/src/index.ts")).then(function (m) {
            return m.GoogleGroupsModule;
          });
        },
        data: {
          roles: ['cosmos-superuser', 'cosmos-user-its']
        },
        canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalGuard"], _cosmos_guards__WEBPACK_IMPORTED_MODULE_3__["RolesGuard"]]
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! @cosmos/user-profiles */
          "../../libs/user-profiles/src/index.ts")).then(function (m) {
            return m.UserProfilesModule;
          });
        },
        canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalGuard"]]
      }, {
        path: '',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! @cosmos/pages */
          "../../libs/pages/src/index.ts")).then(function (m) {
            return m.PagesModule;
          });
        }
      }, {
        path: '**',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! @cosmos/pages */
          "../../libs/pages/src/index.ts")).then(function (m) {
            return m.PagesModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          useHash: false
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              useHash: false
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @azure/msal-angular */
      "../../node_modules/@azure/msal-angular/__ivy_ngcc__/fesm2015/azure-msal-angular.js");
      /* harmony import */


      var msal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! msal */
      "../../node_modules/msal/lib-es6/index.js");
      /* harmony import */


      var _cosmos_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @cosmos/environment */
      "../../libs/environment/src/index.ts");
      /* harmony import */


      var _cosmos_chassis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @cosmos/chassis */
      "../../libs/chassis/src/index.ts");
      /* harmony import */


      var _libs_chassis_src_lib_chassis_chassis_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../libs/chassis/src/lib/chassis/chassis.component */
      "../../libs/chassis/src/lib/chassis/chassis.component.ts");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(environmentService, chassisService, broadcastService, authService) {
          _classCallCheck(this, AppComponent);

          this.environmentService = environmentService;
          this.chassisService = chassisService;
          this.broadcastService = broadcastService;
          this.authService = authService;
          this.isIframe = false;
          this.loggedIn = false;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this21 = this;

            this.chassisService.setHeaderContent({
              links: []
            });
            this.chassisService.setFooterContent({
              links: []
            });
            this.isIframe = window !== window.parent && !window.opener;
            this.checkoutAccount();
            this.broadcastService.subscribe('msal:loginSuccess', function () {
              _this21.checkoutAccount();
            });
            this.authService.handleRedirectCallback(function (authError, response) {
              if (authError) {
                console.error('Redirect Error: ', authError.errorMessage);
                return;
              }

              console.log('Redirect Success: ', response);
            });
            this.authService.setLogger(new msal__WEBPACK_IMPORTED_MODULE_2__["Logger"](function (logLevel, message, piiEnabled) {
              console.log('MSAL Logging: ', message);
            }, {
              correlationId: msal__WEBPACK_IMPORTED_MODULE_2__["CryptoUtils"].createNewGuid(),
              piiLoggingEnabled: false
            }));
          }
        }, {
          key: "checkoutAccount",
          value: function checkoutAccount() {
            this.loggedIn = !!this.authService.getAccount();
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cosmos_environment__WEBPACK_IMPORTED_MODULE_3__["EnvironmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cosmos_chassis__WEBPACK_IMPORTED_MODULE_4__["ChassisService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__["BroadcastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__["MsalService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cosmos-chassis");
          }
        },
        directives: [_libs_chassis_src_lib_chassis_chassis_component__WEBPACK_IMPORTED_MODULE_5__["ChassisComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL3ZpZXdmaW5kZXItY29uc29sZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _cosmos_environment__WEBPACK_IMPORTED_MODULE_3__["EnvironmentService"]
          }, {
            type: _cosmos_chassis__WEBPACK_IMPORTED_MODULE_4__["ChassisService"]
          }, {
            type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__["BroadcastService"]
          }, {
            type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__["MsalService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @azure/msal-angular */
      "../../node_modules/@azure/msal-angular/__ivy_ngcc__/fesm2015/azure-msal-angular.js");
      /* harmony import */


      var _cosmos_http_interceptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @cosmos/http-interceptors */
      "../../libs/http-interceptors/src/index.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _cosmos_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @cosmos/environment */
      "../../libs/environment/src/index.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _cosmos_user_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @cosmos/user-auth */
      "../../libs/user-auth/src/index.ts");
      /* harmony import */


      var _cosmos_chassis__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @cosmos/chassis */
      "../../libs/chassis/src/index.ts");
      /* harmony import */


      var _cosmos_panels__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @cosmos/panels */
      "../../libs/panels/src/index.ts");
      /* harmony import */


      var _cosmos_pages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @cosmos/pages */
      "../../libs/pages/src/index.ts");
      /* harmony import */


      var _cosmos_notifications__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @cosmos/notifications */
      "../../libs/notifications/src/index.ts");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/service-worker */
      "../../node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js"); //import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
      //import { InMemoryDataService }  from '@cosmos/people-sets';


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_cosmos_http_interceptors__WEBPACK_IMPORTED_MODULE_5__["httpInterceptorProviders"], {
          provide: _cosmos_environment__WEBPACK_IMPORTED_MODULE_7__["EnvironmentService"],
          useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"]
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__["MsalModule"], // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        //HttpClientInMemoryWebApiModule.forRoot(
        //InMemoryDataService, { dataEncapsulation: false }
        //),
        _cosmos_user_auth__WEBPACK_IMPORTED_MODULE_10__["UserAuthModule"], _cosmos_chassis__WEBPACK_IMPORTED_MODULE_11__["ChassisModule"], _cosmos_panels__WEBPACK_IMPORTED_MODULE_12__["PanelsModule"], _cosmos_pages__WEBPACK_IMPORTED_MODULE_13__["PagesModule"], _cosmos_notifications__WEBPACK_IMPORTED_MODULE_14__["NotificationsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__["ServiceWorkerModule"].register('ngsw-worker.js', {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__["MsalModule"], // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
          // and returns simulated server responses.
          // Remove it when a real server is ready to receive requests.
          //HttpClientInMemoryWebApiModule.forRoot(
          //InMemoryDataService, { dataEncapsulation: false }
          //),
          _cosmos_user_auth__WEBPACK_IMPORTED_MODULE_10__["UserAuthModule"], _cosmos_chassis__WEBPACK_IMPORTED_MODULE_11__["ChassisModule"], _cosmos_panels__WEBPACK_IMPORTED_MODULE_12__["PanelsModule"], _cosmos_pages__WEBPACK_IMPORTED_MODULE_13__["PagesModule"], _cosmos_notifications__WEBPACK_IMPORTED_MODULE_14__["NotificationsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__["ServiceWorkerModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__["MsalModule"], // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
            // and returns simulated server responses.
            // Remove it when a real server is ready to receive requests.
            //HttpClientInMemoryWebApiModule.forRoot(
            //InMemoryDataService, { dataEncapsulation: false }
            //),
            _cosmos_user_auth__WEBPACK_IMPORTED_MODULE_10__["UserAuthModule"], _cosmos_chassis__WEBPACK_IMPORTED_MODULE_11__["ChassisModule"], _cosmos_panels__WEBPACK_IMPORTED_MODULE_12__["PanelsModule"], _cosmos_pages__WEBPACK_IMPORTED_MODULE_13__["PagesModule"], _cosmos_notifications__WEBPACK_IMPORTED_MODULE_14__["NotificationsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__["ServiceWorkerModule"].register('ngsw-worker.js', {
              enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
            })],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [_cosmos_http_interceptors__WEBPACK_IMPORTED_MODULE_5__["httpInterceptorProviders"], {
              provide: _cosmos_environment__WEBPACK_IMPORTED_MODULE_7__["EnvironmentService"],
              useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"]
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: false,
        appName: 'Viewfinder (Beta)',
        aadClientId: 'd15732c7-13e4-41fc-9d8f-c7776b875e58',
        aadAuthority: "https://login.microsoftonline.com/cd25c694-bfb8-48f4-9d0d-b9af282c4ab4",
        aadValidateAuthority: true,
        aadRedirectUri: "http://localhost:4290/",
        aadPostLogoutRedirectUri: "http://localhost:4290/",
        aadNavigateToLoginRequestUrl: true
      };
      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/schumajr/cosmos/apps/viewfinder-console/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map