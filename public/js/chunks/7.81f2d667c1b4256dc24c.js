(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/rmU":function(t,a){t.exports="/images/Group 8.png?3793978e1e50c12c48cfe02769d6c4c2"},Av6N:function(t,a,e){"use strict";e.r(a);e("e7F3").a.localize("en",{custom:{email:{required:'O campo "E-Mail" é obrigatório',email:'O campo "E-Mail" precisa ser válido'},password:{required:'O campo "Senha" é obrigatório'}}});var s={data:function(){return{email:"",password:"",checkbox_remember_me:!1,pass_show:!1,error:""}},computed:{windowWidth:function(){return this.$store.state.windowWidth}},methods:{checkEnter:function(t){13===t.keyCode&&this.submitForm()},submitForm:function(){var t=this;this.$validator.validateAll().then((function(a){a&&t.$http.post("/api/login",{email:t.email,password:t.password}).then((function(a){a.data.status?(t.$store.commit("auth/SET_LOGIN",!0),t.$store.commit("UPDATE_USER_INFO",a.data.userInfo),t.$store.commit("SET_REGISTER",!a.data.registerFlag),localStorage.uid=a.data.userInfo.uid,localStorage.displayName=a.data.userInfo.displayName,localStorage.isRegistered=a.data.registerFlag,t.$router.push("/")):t.error=a.data.error})).catch((function(a){t.error=a}))}))}}},i=(e("q4Yp"),e("KHd+")),n=Object(i.a)(s,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"h-screen flex w-full vx-row no-gutter items-center justify-center full-page-bg-color",attrs:{id:"page-login"}},[s("div",{staticClass:"vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-5/6 sm:m-0 m-4"},[s("vx-card",[s("div",{staticClass:"main-bg-color",attrs:{slot:"no-body"},slot:"no-body"},[s("div",{staticClass:"vx-row no-gutter justify-center"},[s("div",{staticClass:"vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg"},[s("div",{staticClass:"login-tabs-container"},[s("div",{staticClass:"vx-card__title mb-4 text-center"},[s("img",{staticClass:"centered",staticStyle:{height:"2rem"},attrs:{src:e("Z8mA"),alt:"logo"}}),t._v(" "),s("p",{staticStyle:{"font-size":"16px","font-weight":"lighter","margin-bottom":"3rem","margin-top":".5rem"}},[t._v("Informe seus dados para entar")])]),t._v(" "),s("form",[s("div",{staticClass:"mb-8"},[s("span",{staticClass:"custom-placeholder"},[t._v("Email")]),t._v(" "),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"w-full",attrs:{type:"email",name:"email",danger:t.errors.has("email"),placeholder:"Preencha com seu melhor e-mail","val-icon-success":"done","val-icon-danger":"clear"},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}}),t._v(" "),s("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("email")))])],1),t._v(" "),s("div",{staticClass:"position-relative mb-6"},[s("div",{staticClass:"password-show",on:{click:function(a){t.pass_show=!t.pass_show}}},[s("i",{class:t.pass_show?"vs-icon feather icon-eye-off":"vs-icon feather icon-eye"})]),t._v(" "),s("span",{staticClass:"custom-placeholder"},[t._v("Senha")]),t._v(" "),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-0",attrs:{type:t.pass_show?"text":"password",name:"password",placeholder:"Acesse com sua senha",danger:t.errors.has("password")},on:{keyup:t.checkEnter},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}}),t._v(" "),s("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("password")))])],1),t._v(" "),s("div",{staticClass:"mb-6"},[s("span",{staticClass:"text-danger"},[t._v(t._s(t.error))])]),t._v(" "),s("div",{staticClass:"vx-row no-gutter justify-center"},[s("div",{staticClass:"vx-col w-1/2"},[s("router-link",{staticClass:"main-color vertical-centered",staticStyle:{"font-size":"0.9rem"},attrs:{to:""}},[t._v("Esqueceu sua Senha?")])],1),t._v(" "),s("div",{staticClass:"vx-col w-1/2"},[s("vs-button",{staticClass:"float-right custom-filled-button ",attrs:{color:"white",type:"filed"},on:{click:function(a){return a.preventDefault(),t.submitForm(a)}}},[t._v("Acessar Conta")])],1)])]),t._v(" "),t.windowWidth<993?s("div",{staticClass:"text-center pt-6"},[s("span",{staticStyle:{"font-weight":"lighter"}},[t._v("Não tem uma conta? ")]),t._v(" "),s("router-link",{staticClass:"main-color vertical-centered",staticStyle:{"font-size":"0.9rem"},attrs:{to:"register"}},[t._v("Cadastre-se")])],1):t._e()])]),t._v(" "),s("div",{staticClass:"vx-col hidden lg:block lg:w-1/2 main-bg-color position-relative text-center"},[s("img",{staticClass:"group-img-top-right",attrs:{src:e("/rmU"),alt:"group_8"}}),t._v(" "),s("img",{staticClass:"group-img-bottom-left",attrs:{src:e("/rmU"),alt:"group_8"}}),t._v(" "),s("div",{staticClass:"centered"},[s("h1",{staticClass:"head-text"},[t._v("Não possui uma conta?")]),s("br"),t._v(" "),s("span",{staticClass:"sub-text"},[t._v("Não perca os beneficios do ")]),t._v(" "),s("span",{staticClass:"sub-text",staticStyle:{"font-weight":"bold"}},[t._v("spacecrm")]),s("br"),t._v(" "),s("vs-button",{staticClass:"custom-default-button",staticStyle:{"margin-top":"2rem"},attrs:{color:"white",size:"large",type:"filed"},on:{click:function(a){t.$router.push("register").catch((function(){}))}}},[t._v("Criar Conta Agora!")])],1)])])])])],1)])}),[],!1,null,null,null);a.default=n.exports},Z8mA:function(t,a){t.exports="/images/logo.png?80d8adff9ba7543d938051af067cb66c"},lIua:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,"[dir] .login-tabs-container {\n  padding: 6rem 6.5rem 4rem 6.5rem;\n}\n[dir] .login-tabs-container .input-icon-validate {\n  background: none;\n}\n[dir=ltr] .login-tabs-container .input-icon-validate {\n  right: 6px;\n}\n[dir=rtl] .login-tabs-container .input-icon-validate {\n  left: 6px;\n}\n[dir] .login-tabs-container .mb-base {\n  margin-top: 2.2rem;\n}\n.login-tabs-container .custom-placeholder {\n  font-size: 0.8rem;\n  position: relative;\n  top: -5px;\n}\n.login-tabs-container .password-show {\n  position: absolute;\n  top: 30px;\n  z-index: 1;\n}\n[dir=ltr] .login-tabs-container .password-show {\n  right: 10px;\n}\n[dir=rtl] .login-tabs-container .password-show {\n  left: 10px;\n}\n@media only screen and (max-width: 1200px) {\n[dir] .login-tabs-container {\n    padding: 5rem 4rem 2rem 4rem;\n}\n[dir] .login-tabs-container .input-icon-validate {\n    background: none;\n}\n[dir=ltr] .login-tabs-container .input-icon-validate {\n    right: 6px;\n}\n[dir=rtl] .login-tabs-container .input-icon-validate {\n    left: 6px;\n}\n[dir] .login-tabs-container .mb-base {\n    margin-top: 2.2rem;\n}\n.login-tabs-container .custom-placeholder {\n    font-size: 0.8rem;\n    position: relative;\n    top: -5px;\n}\n.login-tabs-container .password-show {\n    position: absolute;\n    top: 30px;\n    z-index: 1;\n}\n[dir=ltr] .login-tabs-container .password-show {\n    right: 10px;\n}\n[dir=rtl] .login-tabs-container .password-show {\n    left: 10px;\n}\n}",""])},q4Yp:function(t,a,e){"use strict";var s=e("z1ey");e.n(s).a},z1ey:function(t,a,e){var s=e("lIua");"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(s,i);s.locals&&(t.exports=s.locals)}}]);