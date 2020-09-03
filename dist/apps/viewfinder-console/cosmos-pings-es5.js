(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cosmos-pings"], {
    /***/
    "../../libs/hagar-service/src/index.ts":
    /*!*************************************************************!*\
      !*** /home/schumajr/cosmos/libs/hagar-service/src/index.ts ***!
      \*************************************************************/

    /*! exports provided: HagarService */

    /***/
    function libsHagarServiceSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_hagar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/hagar.service */
      "../../libs/hagar-service/src/lib/hagar.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HagarService", function () {
        return _lib_hagar_service__WEBPACK_IMPORTED_MODULE_0__["HagarService"];
      });
      /***/

    },

    /***/
    "../../libs/hagar-service/src/lib/hagar.service.ts":
    /*!*************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/hagar-service/src/lib/hagar.service.ts ***!
      \*************************************************************************/

    /*! exports provided: HagarService */

    /***/
    function libsHagarServiceSrcLibHagarServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HagarService", function () {
        return HagarService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "../../node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "../../node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _cosmos_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @cosmos/types */
      "../../libs/types/src/index.ts");

      var HagarService = /*#__PURE__*/function () {
        function HagarService(http) {
          _classCallCheck(this, HagarService);

          this.http = http;
          this.pingURL = 'https://wrdsb-hagar.azurewebsites.net/api/ping';
          this.aadGroupsCommandURL = 'https://wrdsb-hagar.azurewebsites.net/api/aad-group-command';
          this.aadGroupsQueryURL = 'https://wrdsb-hagar.azurewebsites.net/api/aad-group-query';
          this.aadGroupsSearchURL = '';
          this.usersURL = '';
          this.pingState = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            payload: {
              message: "",
              chatter: "",
              status: 0,
              timestamp: ""
            }
          });
          this.pingRequestState = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            status: _cosmos_types__WEBPACK_IMPORTED_MODULE_4__["Status"].UNKNOWN,
            response: 'response',
            error: 'error'
          });
          this.pingState$ = this.pingState.asObservable();
          this.pingRequestState$ = this.pingRequestState.asObservable();
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
        }

        _createClass(HagarService, [{
          key: "doPing",
          value: function doPing() {
            var _this = this;

            console.log('Pinging HAGAR...');
            this.pingRequestState.next({
              status: _cosmos_types__WEBPACK_IMPORTED_MODULE_4__["Status"].LOADING,
              response: 'unknown',
              error: 'unknown'
            });
            this.http.get(this.pingURL, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
              return console.log('tap');
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
              console.log('catch error');

              _this.pingRequestState.next({
                status: _cosmos_types__WEBPACK_IMPORTED_MODULE_4__["Status"].ERROR,
                response: '',
                error: error
              });

              _this.pingState.next({
                payload: {
                  message: "error",
                  chatter: "error",
                  status: 200,
                  timestamp: "timestamp"
                }
              });

              throw 'error pinging HAGAR';
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
              _this.pingRequestState.next({
                status: _cosmos_types__WEBPACK_IMPORTED_MODULE_4__["Status"].SUCCESS,
                response: 'success',
                error: ''
              });

              console.log('success pinging HAGAR');
            })).subscribe(function (response) {
              return _this.pingState.next(response);
            });
          }
        }, {
          key: "listGroups",
          value: function listGroups() {
            var req = {
              operation: 'list'
            };
            console.log('HAGAR: list groups');
            this.httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
              })
            };
            var groups = this.http.post(this.aadGroupsQueryURL, req, this.httpOptions);
            return groups;
          }
        }]);

        return HagarService;
      }();

      HagarService.ɵfac = function HagarService_Factory(t) {
        return new (t || HagarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      HagarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HagarService,
        factory: HagarService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HagarService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/pings/src/index.ts":
    /*!*****************************************************!*\
      !*** /home/schumajr/cosmos/libs/pings/src/index.ts ***!
      \*****************************************************/

    /*! exports provided: PingsModule */

    /***/
    function libsPingsSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_pings_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/pings.module */
      "../../libs/pings/src/lib/pings.module.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PingsModule", function () {
        return _lib_pings_module__WEBPACK_IMPORTED_MODULE_0__["PingsModule"];
      });
      /***/

    },

    /***/
    "../../libs/pings/src/lib/all-pings/all-pings.component.ts":
    /*!*********************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/pings/src/lib/all-pings/all-pings.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: AllPingsComponent */

    /***/
    function libsPingsSrcLibAllPingsAllPingsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllPingsComponent", function () {
        return AllPingsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _codex_ping_codex_ping_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../codex-ping/codex-ping.component */
      "../../libs/pings/src/lib/codex-ping/codex-ping.component.ts");
      /* harmony import */


      var _hagar_ping_hagar_ping_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../hagar-ping/hagar-ping.component */
      "../../libs/pings/src/lib/hagar-ping/hagar-ping.component.ts");
      /* harmony import */


      var _igor_ping_igor_ping_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../igor-ping/igor-ping.component */
      "../../libs/pings/src/lib/igor-ping/igor-ping.component.ts");

      var AllPingsComponent = /*#__PURE__*/function () {
        function AllPingsComponent() {
          _classCallCheck(this, AllPingsComponent);
        }

        _createClass(AllPingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AllPingsComponent;
      }();

      AllPingsComponent.ɵfac = function AllPingsComponent_Factory(t) {
        return new (t || AllPingsComponent)();
      };

      AllPingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AllPingsComponent,
        selectors: [["cosmos-all-pings"]],
        decls: 11,
        vars: 0,
        template: function AllPingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Codex: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "cosmos-codex-ping");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "HAGAR: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "cosmos-hagar-ping");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "IGOR: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "cosmos-igor-ping");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_codex_ping_codex_ping_component__WEBPACK_IMPORTED_MODULE_1__["CodexPingComponent"], _hagar_ping_hagar_ping_component__WEBPACK_IMPORTED_MODULE_2__["HagarPingComponent"], _igor_ping_igor_ping_component__WEBPACK_IMPORTED_MODULE_3__["IgorPingComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3BpbmdzL3NyYy9saWIvYWxsLXBpbmdzL2FsbC1waW5ncy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllPingsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cosmos-all-pings',
            templateUrl: './all-pings.component.html',
            styleUrls: ['./all-pings.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/pings/src/lib/codex-ping/codex-ping.component.ts":
    /*!***********************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/pings/src/lib/codex-ping/codex-ping.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: CodexPingComponent */

    /***/
    function libsPingsSrcLibCodexPingCodexPingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CodexPingComponent", function () {
        return CodexPingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _cosmos_codex_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @cosmos/codex-service */
      "../../libs/codex-service/src/index.ts");
      /* harmony import */


      var _cosmos_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @cosmos/types */
      "../../libs/types/src/index.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function CodexPingComponent_ng_container_0_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unknown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CodexPingComponent_ng_container_0_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pinging Codex...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CodexPingComponent_ng_container_0_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Error: ", ctx_r4.pingRequestState$.error, "");
        }
      }

      function CodexPingComponent_ng_container_0_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Success: ", ctx_r5.pingRequestState$.response, "");
        }
      }

      function CodexPingComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CodexPingComponent_ng_container_0_span_2_Template, 2, 0, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CodexPingComponent_ng_container_0_span_3_Template, 2, 0, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CodexPingComponent_ng_container_0_span_4_Template, 2, 1, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CodexPingComponent_ng_container_0_span_5_Template, 2, 1, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var pingRequestState_r1 = ctx.ngIf;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", pingRequestState_r1["status"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.Status.UNKNOWN);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.Status.LOADING);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.Status.ERROR);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.Status.SUCCESS);
        }
      }

      var CodexPingComponent = /*#__PURE__*/function () {
        function CodexPingComponent(codexService) {
          _classCallCheck(this, CodexPingComponent);

          this.codexService = codexService;
          this.Status = _cosmos_types__WEBPACK_IMPORTED_MODULE_2__["Status"];
          this.pingState$ = this.codexService.pingState$;
          this.pingRequestState$ = this.codexService.pingRequestState$;
        }

        _createClass(CodexPingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {//this.doPing();
          }
        }, {
          key: "doPing",
          value: function doPing() {
            this.codexService.doPing();
          }
        }]);

        return CodexPingComponent;
      }();

      CodexPingComponent.ɵfac = function CodexPingComponent_Factory(t) {
        return new (t || CodexPingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cosmos_codex_service__WEBPACK_IMPORTED_MODULE_1__["CodexService"]));
      };

      CodexPingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CodexPingComponent,
        selectors: [["cosmos-codex-ping"]],
        decls: 12,
        vars: 13,
        consts: [[4, "ngIf"], [3, "click"], [3, "ngSwitch"], [4, "ngSwitchCase"]],
        template: function CodexPingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CodexPingComponent_ng_container_0_Template, 6, 5, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CodexPingComponent_Template_button_click_10_listener() {
              return ctx.doPing();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ping!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.pingRequestState$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, ctx.pingRequestState$)), "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 11, ctx.pingState$)), "\n");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3BpbmdzL3NyYy9saWIvY29kZXgtcGluZy9jb2RleC1waW5nLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodexPingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cosmos-codex-ping',
            templateUrl: './codex-ping.component.html',
            styleUrls: ['./codex-ping.component.scss']
          }]
        }], function () {
          return [{
            type: _cosmos_codex_service__WEBPACK_IMPORTED_MODULE_1__["CodexService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/pings/src/lib/hagar-ping/hagar-ping.component.ts":
    /*!***********************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/pings/src/lib/hagar-ping/hagar-ping.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: HagarPingComponent */

    /***/
    function libsPingsSrcLibHagarPingHagarPingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HagarPingComponent", function () {
        return HagarPingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _cosmos_hagar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @cosmos/hagar-service */
      "../../libs/hagar-service/src/index.ts");
      /* harmony import */


      var _cosmos_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @cosmos/types */
      "../../libs/types/src/index.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function HagarPingComponent_ng_container_0_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unknown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HagarPingComponent_ng_container_0_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pinging HAGAR...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HagarPingComponent_ng_container_0_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Error: ", ctx_r4.pingRequestState$.error, "");
        }
      }

      function HagarPingComponent_ng_container_0_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Success: ", ctx_r5.pingRequestState$.response, "");
        }
      }

      function HagarPingComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HagarPingComponent_ng_container_0_span_2_Template, 2, 0, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HagarPingComponent_ng_container_0_span_3_Template, 2, 0, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HagarPingComponent_ng_container_0_span_4_Template, 2, 1, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HagarPingComponent_ng_container_0_span_5_Template, 2, 1, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var pingRequestState_r1 = ctx.ngIf;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", pingRequestState_r1["status"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.Status.UNKNOWN);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.Status.LOADING);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.Status.ERROR);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.Status.SUCCESS);
        }
      }

      var HagarPingComponent = /*#__PURE__*/function () {
        function HagarPingComponent(hagarService) {
          _classCallCheck(this, HagarPingComponent);

          this.hagarService = hagarService;
          this.Status = _cosmos_types__WEBPACK_IMPORTED_MODULE_2__["Status"];
          this.pingState$ = this.hagarService.pingState$;
          this.pingRequestState$ = this.hagarService.pingRequestState$;
        }

        _createClass(HagarPingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {//this.doPing();
          }
        }, {
          key: "doPing",
          value: function doPing() {
            this.hagarService.doPing();
          }
        }]);

        return HagarPingComponent;
      }();

      HagarPingComponent.ɵfac = function HagarPingComponent_Factory(t) {
        return new (t || HagarPingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cosmos_hagar_service__WEBPACK_IMPORTED_MODULE_1__["HagarService"]));
      };

      HagarPingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HagarPingComponent,
        selectors: [["cosmos-hagar-ping"]],
        decls: 12,
        vars: 13,
        consts: [[4, "ngIf"], [3, "click"], [3, "ngSwitch"], [4, "ngSwitchCase"]],
        template: function HagarPingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HagarPingComponent_ng_container_0_Template, 6, 5, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HagarPingComponent_Template_button_click_10_listener() {
              return ctx.doPing();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ping!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.pingRequestState$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, ctx.pingRequestState$)), "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 11, ctx.pingState$)), "\n");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3BpbmdzL3NyYy9saWIvaGFnYXItcGluZy9oYWdhci1waW5nLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HagarPingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cosmos-hagar-ping',
            templateUrl: './hagar-ping.component.html',
            styleUrls: ['./hagar-ping.component.scss']
          }]
        }], function () {
          return [{
            type: _cosmos_hagar_service__WEBPACK_IMPORTED_MODULE_1__["HagarService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/pings/src/lib/igor-ping/igor-ping.component.ts":
    /*!*********************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/pings/src/lib/igor-ping/igor-ping.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: IgorPingComponent */

    /***/
    function libsPingsSrcLibIgorPingIgorPingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IgorPingComponent", function () {
        return IgorPingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _cosmos_igor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @cosmos/igor-service */
      "../../libs/igor-service/src/index.ts");
      /* harmony import */


      var _cosmos_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @cosmos/types */
      "../../libs/types/src/index.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function IgorPingComponent_ng_container_0_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unknown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IgorPingComponent_ng_container_0_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pinging IGOR...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IgorPingComponent_ng_container_0_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Error: ", ctx_r4.pingRequestState$.error, "");
        }
      }

      function IgorPingComponent_ng_container_0_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Success: ", ctx_r5.pingRequestState$.response, "");
        }
      }

      function IgorPingComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IgorPingComponent_ng_container_0_span_2_Template, 2, 0, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IgorPingComponent_ng_container_0_span_3_Template, 2, 0, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, IgorPingComponent_ng_container_0_span_4_Template, 2, 1, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, IgorPingComponent_ng_container_0_span_5_Template, 2, 1, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var pingRequestState_r1 = ctx.ngIf;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", pingRequestState_r1["status"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.Status.UNKNOWN);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.Status.LOADING);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.Status.ERROR);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.Status.SUCCESS);
        }
      }

      var IgorPingComponent = /*#__PURE__*/function () {
        function IgorPingComponent(igorService) {
          _classCallCheck(this, IgorPingComponent);

          this.igorService = igorService;
          this.Status = _cosmos_types__WEBPACK_IMPORTED_MODULE_2__["Status"];
          this.pingState$ = this.igorService.pingState$;
          this.pingRequestState$ = this.igorService.pingRequestState$;
        }

        _createClass(IgorPingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {//this.doPing();
          }
        }, {
          key: "doPing",
          value: function doPing() {
            this.igorService.doPing();
          }
        }]);

        return IgorPingComponent;
      }();

      IgorPingComponent.ɵfac = function IgorPingComponent_Factory(t) {
        return new (t || IgorPingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cosmos_igor_service__WEBPACK_IMPORTED_MODULE_1__["IGORService"]));
      };

      IgorPingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: IgorPingComponent,
        selectors: [["cosmos-igor-ping"]],
        decls: 12,
        vars: 13,
        consts: [[4, "ngIf"], [3, "click"], [3, "ngSwitch"], [4, "ngSwitchCase"]],
        template: function IgorPingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, IgorPingComponent_ng_container_0_Template, 6, 5, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IgorPingComponent_Template_button_click_10_listener() {
              return ctx.doPing();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ping!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.pingRequestState$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, ctx.pingRequestState$)), "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 11, ctx.pingState$)), "\n");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3BpbmdzL3NyYy9saWIvaWdvci1waW5nL2lnb3ItcGluZy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IgorPingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cosmos-igor-ping',
            templateUrl: './igor-ping.component.html',
            styleUrls: ['./igor-ping.component.scss']
          }]
        }], function () {
          return [{
            type: _cosmos_igor_service__WEBPACK_IMPORTED_MODULE_1__["IGORService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/pings/src/lib/pings-routing.module.ts":
    /*!************************************************************************!*\
      !*** /home/schumajr/cosmos/libs/pings/src/lib/pings-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: PingsRoutingModule */

    /***/
    function libsPingsSrcLibPingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PingsRoutingModule", function () {
        return PingsRoutingModule;
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
      /* harmony import */


      var _all_pings_all_pings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./all-pings/all-pings.component */
      "../../libs/pings/src/lib/all-pings/all-pings.component.ts");
      /* harmony import */


      var _codex_ping_codex_ping_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./codex-ping/codex-ping.component */
      "../../libs/pings/src/lib/codex-ping/codex-ping.component.ts");
      /* harmony import */


      var _hagar_ping_hagar_ping_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./hagar-ping/hagar-ping.component */
      "../../libs/pings/src/lib/hagar-ping/hagar-ping.component.ts");
      /* harmony import */


      var _igor_ping_igor_ping_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./igor-ping/igor-ping.component */
      "../../libs/pings/src/lib/igor-ping/igor-ping.component.ts");

      var routes = [{
        path: 'codex',
        component: _codex_ping_codex_ping_component__WEBPACK_IMPORTED_MODULE_5__["CodexPingComponent"],
        data: {
          roles: ['cosmos-superuser', 'cosmos-user-its']
        },
        canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalGuard"], _cosmos_guards__WEBPACK_IMPORTED_MODULE_3__["RolesGuard"]]
      }, {
        path: 'hagar',
        component: _hagar_ping_hagar_ping_component__WEBPACK_IMPORTED_MODULE_6__["HagarPingComponent"],
        data: {
          roles: ['cosmos-superuser', 'cosmos-user-its']
        },
        canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalGuard"], _cosmos_guards__WEBPACK_IMPORTED_MODULE_3__["RolesGuard"]]
      }, {
        path: 'igor',
        component: _igor_ping_igor_ping_component__WEBPACK_IMPORTED_MODULE_7__["IgorPingComponent"],
        data: {
          roles: ['cosmos-superuser', 'cosmos-user-its']
        },
        canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalGuard"], _cosmos_guards__WEBPACK_IMPORTED_MODULE_3__["RolesGuard"]]
      }, {
        path: '',
        component: _all_pings_all_pings_component__WEBPACK_IMPORTED_MODULE_4__["AllPingsComponent"],
        data: {
          roles: ['cosmos-superuser', 'cosmos-user-its']
        },
        canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalGuard"], _cosmos_guards__WEBPACK_IMPORTED_MODULE_3__["RolesGuard"]]
      }];

      var PingsRoutingModule = function PingsRoutingModule() {
        _classCallCheck(this, PingsRoutingModule);
      };

      PingsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PingsRoutingModule
      });
      PingsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PingsRoutingModule_Factory(t) {
          return new (t || PingsRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PingsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PingsRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "../../libs/pings/src/lib/pings.module.ts":
    /*!****************************************************************!*\
      !*** /home/schumajr/cosmos/libs/pings/src/lib/pings.module.ts ***!
      \****************************************************************/

    /*! exports provided: PingsModule */

    /***/
    function libsPingsSrcLibPingsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PingsModule", function () {
        return PingsModule;
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


      var _pings_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pings-routing.module */
      "../../libs/pings/src/lib/pings-routing.module.ts");
      /* harmony import */


      var _all_pings_all_pings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./all-pings/all-pings.component */
      "../../libs/pings/src/lib/all-pings/all-pings.component.ts");
      /* harmony import */


      var _codex_ping_codex_ping_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./codex-ping/codex-ping.component */
      "../../libs/pings/src/lib/codex-ping/codex-ping.component.ts");
      /* harmony import */


      var _hagar_ping_hagar_ping_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./hagar-ping/hagar-ping.component */
      "../../libs/pings/src/lib/hagar-ping/hagar-ping.component.ts");
      /* harmony import */


      var _igor_ping_igor_ping_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./igor-ping/igor-ping.component */
      "../../libs/pings/src/lib/igor-ping/igor-ping.component.ts");

      var PingsModule = function PingsModule() {
        _classCallCheck(this, PingsModule);
      };

      PingsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PingsModule
      });
      PingsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PingsModule_Factory(t) {
          return new (t || PingsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _pings_routing_module__WEBPACK_IMPORTED_MODULE_2__["PingsRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PingsModule, {
          declarations: [_all_pings_all_pings_component__WEBPACK_IMPORTED_MODULE_3__["AllPingsComponent"], _codex_ping_codex_ping_component__WEBPACK_IMPORTED_MODULE_4__["CodexPingComponent"], _hagar_ping_hagar_ping_component__WEBPACK_IMPORTED_MODULE_5__["HagarPingComponent"], _igor_ping_igor_ping_component__WEBPACK_IMPORTED_MODULE_6__["IgorPingComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _pings_routing_module__WEBPACK_IMPORTED_MODULE_2__["PingsRoutingModule"]],
          exports: [_all_pings_all_pings_component__WEBPACK_IMPORTED_MODULE_3__["AllPingsComponent"], _codex_ping_codex_ping_component__WEBPACK_IMPORTED_MODULE_4__["CodexPingComponent"], _hagar_ping_hagar_ping_component__WEBPACK_IMPORTED_MODULE_5__["HagarPingComponent"], _igor_ping_igor_ping_component__WEBPACK_IMPORTED_MODULE_6__["IgorPingComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PingsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_all_pings_all_pings_component__WEBPACK_IMPORTED_MODULE_3__["AllPingsComponent"], _codex_ping_codex_ping_component__WEBPACK_IMPORTED_MODULE_4__["CodexPingComponent"], _hagar_ping_hagar_ping_component__WEBPACK_IMPORTED_MODULE_5__["HagarPingComponent"], _igor_ping_igor_ping_component__WEBPACK_IMPORTED_MODULE_6__["IgorPingComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _pings_routing_module__WEBPACK_IMPORTED_MODULE_2__["PingsRoutingModule"]],
            exports: [_all_pings_all_pings_component__WEBPACK_IMPORTED_MODULE_3__["AllPingsComponent"], _codex_ping_codex_ping_component__WEBPACK_IMPORTED_MODULE_4__["CodexPingComponent"], _hagar_ping_hagar_ping_component__WEBPACK_IMPORTED_MODULE_5__["HagarPingComponent"], _igor_ping_igor_ping_component__WEBPACK_IMPORTED_MODULE_6__["IgorPingComponent"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=cosmos-pings-es5.js.map