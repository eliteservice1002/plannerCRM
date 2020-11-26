(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var dict = {
  custom: {
    name: {
      required: 'O campo "Nome" é obrigatório'
    },
    business_name: {
      required: 'O campo "Nome de Empresa" é obrigatório'
    },
    email: {
      required: 'O campo "E-Mail" é obrigatório',
      email: 'O campo "E-Mail" precisa ser válido'
    },
    password: {
      required: 'O campo "Senha" é obrigatório'
    },
    confirm_password: {
      required: 'O campo "Confirmar Senha" é obrigatório'
    }
  }
};
vee_validate__WEBPACK_IMPORTED_MODULE_0__["Validator"].localize('en', dict);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      name: "",
      email: "",
      business_name: "",
      password: "",
      confirm_password: "",
      error: "",
      pass_show: false,
      pass_show_confirm: false
    };
  },
  methods: {
    submitForm: function submitForm() {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          if (_this.password != _this.confirm_password) {
            _this.error = "Senha e confirmação de senha precisam ser iguais";
            return false;
          }

          _this.$http.post('/api/register', {
            name: _this.name,
            email: _this.email,
            business_name: _this.business_name,
            password: _this.password
          }).then(function (response) {
            if (response.data.status) {
              _this.$store.commit('auth/SET_LOGIN', true);

              _this.$store.commit('UPDATE_USER_INFO', response.data.userInfo);

              _this.$store.commit('SET_REGISTER', true);

              localStorage.uid = response.data.userInfo.uid;
              localStorage.displayName = response.data.userInfo.displayName;
              localStorage.isRegistered = 0;

              _this.$router.push('/');
            } else {
              _this.$store.commit('auth/SET_LOGIN', false);

              _this.error = response.data.error;
            }
          }).catch(function (error) {
            _this.$store.commit('auth/SET_LOGIN', false);

            _this.error = error;
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Register.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Register.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .login-tabs-container {\n  padding: 6rem 8rem 4rem 8rem;\n}\n[dir] .login-tabs-container .input-icon-validate {\n  background: none;\n}\n[dir=ltr] .login-tabs-container .input-icon-validate {\n  right: 6px;\n}\n[dir=rtl] .login-tabs-container .input-icon-validate {\n  left: 6px;\n}\n[dir] .login-tabs-container .mb-base {\n  margin-top: 2.2rem;\n}\n.login-tabs-container .custom-placeholder {\n  font-size: 0.8rem;\n  position: relative;\n  top: -5px;\n}\n.login-tabs-container .password-show {\n  position: absolute;\n  top: 30px;\n  z-index: 1;\n}\n[dir=ltr] .login-tabs-container .password-show {\n  right: 10px;\n}\n[dir=rtl] .login-tabs-container .password-show {\n  left: 10px;\n}\n@media only screen and (max-width: 1200px) {\n[dir] .login-tabs-container {\n    padding: 5rem 4rem 2rem 4rem;\n}\n[dir] .login-tabs-container .input-icon-validate {\n    background: none;\n}\n[dir=ltr] .login-tabs-container .input-icon-validate {\n    right: 6px;\n}\n[dir=rtl] .login-tabs-container .input-icon-validate {\n    left: 6px;\n}\n[dir] .login-tabs-container .mb-base {\n    margin-top: 2.2rem;\n}\n.login-tabs-container .custom-placeholder {\n    font-size: 0.8rem;\n    position: relative;\n    top: -5px;\n}\n.login-tabs-container .password-show {\n    position: absolute;\n    top: 30px;\n    z-index: 1;\n}\n[dir=ltr] .login-tabs-container .password-show {\n    right: 10px;\n}\n[dir=rtl] .login-tabs-container .password-show {\n    left: 10px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Register.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Register.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Register.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "h-screen flex w-full vx-row no-gutter items-center justify-center full-page-bg-color",
      attrs: { id: "page-login" }
    },
    [
      _c(
        "div",
        {
          staticClass: "vx-col sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-3/7 sm:m-0 m-4"
        },
        [
          _c("vx-card", [
            _c(
              "div",
              {
                staticClass: "main-bg-color",
                attrs: { slot: "no-body" },
                slot: "no-body"
              },
              [
                _c("div", { staticClass: "vx-row no-gutter justify-center" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "vx-col sm:w-full md:w-full lg:w-1/1 d-theme-dark-bg"
                    },
                    [
                      _c("div", { staticClass: "login-tabs-container" }, [
                        _c(
                          "div",
                          { staticClass: "vx-card__title mb-4 text-center" },
                          [
                            _c("img", {
                              staticClass: "centered",
                              staticStyle: { height: "2rem" },
                              attrs: {
                                src: __webpack_require__(/*! @assets/images/pages/logo.png */ "./resources/assets/images/pages/logo.png"),
                                alt: "logo"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  "font-weight": "lighter",
                                  "margin-bottom": "3rem",
                                  "margin-top": ".5rem"
                                }
                              },
                              [_vm._v("Comece agora mesmo")]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("form", [
                          _c(
                            "div",
                            { staticClass: "mb-6" },
                            [
                              _c(
                                "span",
                                { staticClass: "custom-placeholder" },
                                [_vm._v("Nome")]
                              ),
                              _vm._v(" "),
                              _c("vs-input", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required",
                                    expression: "'required'"
                                  }
                                ],
                                staticClass: "w-full",
                                attrs: {
                                  type: "text",
                                  name: "name",
                                  danger: _vm.errors.has("name"),
                                  placeholder: "Ex. Renato Amaral",
                                  "val-icon-success": "done",
                                  "val-icon-danger": "clear"
                                },
                                model: {
                                  value: _vm.name,
                                  callback: function($$v) {
                                    _vm.name = $$v
                                  },
                                  expression: "name"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "text-danger text-sm" },
                                [_vm._v(_vm._s(_vm.errors.first("name")))]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "mb-6" },
                            [
                              _c(
                                "span",
                                { staticClass: "custom-placeholder" },
                                [_vm._v("Email")]
                              ),
                              _vm._v(" "),
                              _c("vs-input", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required|email",
                                    expression: "'required|email'"
                                  }
                                ],
                                staticClass: "w-full",
                                attrs: {
                                  type: "email",
                                  name: "email",
                                  danger: _vm.errors.has("email"),
                                  placeholder: "Preencha com seu melhor e-mail",
                                  "val-icon-success": "done",
                                  "val-icon-danger": "clear"
                                },
                                model: {
                                  value: _vm.email,
                                  callback: function($$v) {
                                    _vm.email = $$v
                                  },
                                  expression: "email"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "text-danger text-sm" },
                                [_vm._v(_vm._s(_vm.errors.first("email")))]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "mb-6" },
                            [
                              _c(
                                "span",
                                { staticClass: "custom-placeholder" },
                                [_vm._v("Nome de Empresa")]
                              ),
                              _vm._v(" "),
                              _c("vs-input", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required",
                                    expression: "'required'"
                                  }
                                ],
                                staticClass: "w-full",
                                attrs: {
                                  type: "text",
                                  name: "business_name",
                                  danger: _vm.errors.has("business_name"),
                                  placeholder: "Preencha o nome da empresa",
                                  "val-icon-success": "done",
                                  "val-icon-danger": "clear"
                                },
                                model: {
                                  value: _vm.business_name,
                                  callback: function($$v) {
                                    _vm.business_name = $$v
                                  },
                                  expression: "business_name"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "text-danger text-sm" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.errors.first("business_name"))
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "position-relative mb-6" },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "password-show",
                                  on: {
                                    click: function($event) {
                                      _vm.pass_show = !_vm.pass_show
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    class: _vm.pass_show
                                      ? "vs-icon feather icon-eye-off"
                                      : "vs-icon feather icon-eye"
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "custom-placeholder" },
                                [_vm._v("Criar Senha")]
                              ),
                              _vm._v(" "),
                              _c("vs-input", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required",
                                    expression: "'required'"
                                  }
                                ],
                                staticClass: "w-full mt-0",
                                attrs: {
                                  type: _vm.pass_show ? "text" : "password",
                                  name: "password",
                                  placeholder: "Escolha uma senha segura",
                                  danger: _vm.errors.has("password")
                                },
                                model: {
                                  value: _vm.password,
                                  callback: function($$v) {
                                    _vm.password = $$v
                                  },
                                  expression: "password"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "text-danger text-sm" },
                                [_vm._v(_vm._s(_vm.errors.first("password")))]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "position-relative mb-4" },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "password-show",
                                  on: {
                                    click: function($event) {
                                      _vm.pass_show_confirm = !_vm.pass_show_confirm
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    class: _vm.pass_show
                                      ? "vs-icon feather icon-eye-off"
                                      : "vs-icon feather icon-eye"
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "custom-placeholder" },
                                [_vm._v("Confirmar Senha")]
                              ),
                              _vm._v(" "),
                              _c("vs-input", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required",
                                    expression: "'required'"
                                  }
                                ],
                                staticClass: "w-full mt-0",
                                attrs: {
                                  type: _vm.pass_show_confirm
                                    ? "text"
                                    : "password",
                                  name: "confirm_password",
                                  placeholder: "Digite sua senha novamente",
                                  danger: _vm.errors.has("confirm_password")
                                },
                                model: {
                                  value: _vm.confirm_password,
                                  callback: function($$v) {
                                    _vm.confirm_password = $$v
                                  },
                                  expression: "confirm_password"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "text-danger text-sm" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.errors.first("confirm_password"))
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "mb-6" }, [
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.error))
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "flex flex-wrap justify-between my-5"
                            },
                            [
                              _c(
                                "vs-button",
                                {
                                  staticClass: "custom-filled-button btn-block",
                                  attrs: { color: "white", type: "filed" },
                                  on: { click: _vm.submitForm }
                                },
                                [_vm._v("Criar Conta")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "text-center" },
                            [
                              _c(
                                "span",
                                { staticStyle: { "font-weight": "lighter" } },
                                [_vm._v("Já possui uma conta?")]
                              ),
                              _vm._v(" "),
                              _c(
                                "router-link",
                                {
                                  staticClass: "main-color vertical-centered",
                                  staticStyle: { "font-size": "0.9rem" },
                                  attrs: { to: "login" }
                                },
                                [_vm._v("Faça Login")]
                              )
                            ],
                            1
                          )
                        ])
                      ])
                    ]
                  )
                ])
              ]
            )
          ])
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/images/pages/logo.png":
/*!************************************************!*\
  !*** ./resources/assets/images/pages/logo.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo.png?e478e2c6f21104dfe2722f98757dfddf";

/***/ }),

/***/ "./resources/js/src/views/pages/Register.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/pages/Register.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=09126b38& */ "./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/Register.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Register.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Register.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Register.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=09126b38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);