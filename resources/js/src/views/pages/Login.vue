<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="h-screen flex w-full vx-row no-gutter items-center justify-center full-page-bg-color" id="page-login">
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-5/6 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="main-bg-color">

          <div class="vx-row no-gutter justify-center">

            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="login-tabs-container">

                <div class="vx-card__title mb-4 text-center">
                    <img src="@assets/images/pages/logo.png" alt="logo" class="centered" style="height: 2.5rem;">
                    <p style="font-size: 16px;font-weight: lighter;margin-bottom:3rem;margin-top:.5rem;">Informe seus dados para entar</p>
                </div>

                <form>
                    <div class="mb-8">
                        <span class="custom-placeholder">Nome do usuário</span>
                        <vs-input
                            type="text"
                            v-validate="'required'"
                            name="username"
                            :danger="errors.has('username')"
                            placeholder="Preencha com seu melhor nome do usuário"
                            val-icon-success="done"
                            val-icon-danger="clear"
                            v-model="username"
                            class="w-full" />
                        <span class="text-danger text-sm">{{ errors.first('username') }}</span>
                    </div>

                    <div class="position-relative mb-6">
                        <div class="password-show" @click="pass_show=!pass_show">
                            <i :class="pass_show ? 'vs-icon feather icon-eye-off' : 'vs-icon feather icon-eye'"></i>
                        </div>
                        <span class="custom-placeholder">Senha</span>
                        <vs-input
                            :type="pass_show ? 'text' : 'password'"
                            v-validate="'required'"
                            name="password"
                            placeholder="Acesse com sua senha"
                            :danger="errors.has('password')"
                            v-model="password"
                            v-on:keyup="checkEnter"
                            class="w-full mt-0" />
                        <span class="text-danger text-sm">{{ errors.first('password') }}</span>
                    </div>

                    <div class="mb-6">
                        <span class="text-danger">{{error}}</span>
                    </div>
                    <div class="vx-row no-gutter justify-center">
                        <div class="vx-col w-1/2">
                            <router-link to="" class="main-color vertical-centered" style="font-size:0.9rem;">Esqueceu sua Senha?</router-link>
                        </div>
                        <div class="vx-col w-1/2">
                            <vs-button color="white" class="float-right custom-filled-button " type="filed" @click.prevent="submitForm">Acessar Conta</vs-button>
                        </div>
                    </div>
                </form>

                <div class="text-center pt-6" v-if="windowWidth < 993">
                    <span style="font-weight:lighter;">Não tem uma conta? </span>
                    <router-link to="register" class="main-color vertical-centered" style="font-size:0.9rem;">Cadastre-se</router-link>
                </div>

              </div>
            </div>

            <div class="vx-col hidden lg:block lg:w-1/2 main-bg-color position-relative text-center">
                <img src="@assets/images/pages/Group 8.png" alt="group_8" class="group-img-top-right">
                <img src="@assets/images/pages/Group 8.png" alt="group_8" class="group-img-bottom-left">
                <div class="centered">
                  <h1 class="head-text">Sobre nosso sistema</h1><br>
                  <span class="sub-text">Não perca os beneficios do </span>
                  <span class="sub-text" style="font-weight:bold;">FIXCOB</span><br>
                </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>

import { Validator } from 'vee-validate';
const dict = {
  custom: {
    username: {
      required: 'O campo "Nome do usuário" é obrigatório'
    },
    password: {
      required: 'O campo "Senha" é obrigatório'
    },
  }
};

Validator.localize('en', dict);

export default{
  data() {
    return {
        username: "",
        password: "",
        checkbox_remember_me: false,
        pass_show: false,
        error: "",
        }
    },
    computed: {
        windowWidth(){ return this.$store.state.windowWidth }
    },
    methods: {
        checkEnter(e) {
            if (e.keyCode === 13) {
                this.submitForm()
            }
        },
        submitForm() {
            this.$validator.validateAll().then(result => {
                if(result) {
                    this.$http.post('/api/login', {
                        username: this.username,
                        password: this.password,
                    })
                    .then(response => {
                        if(response.data.status) {
                            this.$store.commit('auth/SET_LOGIN',true)
                            this.$store.commit('UPDATE_USER_INFO',response.data.userInfo)
                            localStorage.uid = response.data.userInfo.uid
                            localStorage.displayName = response.data.userInfo.displayName
                            this.$router.push('/')
                        } else {
                            this.error = response.data.error
                        }
                    })
                    .catch(error => {
                        this.error = error
                    })
                }
            })
        }
    },
}
</script>

<style lang="scss">
.login-tabs-container {
    padding: 6rem 6.5rem 4rem 6.5rem;
    .input-icon-validate {
        background: none;
        right: 6px;
    }
    .mb-base {
        margin-top: 2.2rem;
    }
    .custom-placeholder {
        font-size: .8rem;
        position: relative;
        top: -5px;
    }
    .password-show {
        position: absolute;
        right: 10px;
        top: 30px;
        z-index: 1;
    }
}

@media only screen and (max-width: 1200px) {
    .login-tabs-container {
        padding: 5rem 4rem 2rem 4rem;
        .input-icon-validate {
            background: none;
            right: 6px;
        }
        .mb-base {
            margin-top: 2.2rem;
        }
        .custom-placeholder {
            font-size: .8rem;
            position: relative;
            top: -5px;
        }
        .password-show {
            position: absolute;
            right: 10px;
            top: 30px;
            z-index: 1;
        }
    }
}
</style>
