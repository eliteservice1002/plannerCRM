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
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-3/7 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="main-bg-color">

          <div class="vx-row no-gutter justify-center">

            <div class="vx-col sm:w-full md:w-full lg:w-1/1 d-theme-dark-bg">
              <div class="login-tabs-container">

                <div class="vx-card__title mb-4 text-center">
                    <img src="@assets/images/pages/logo.png" alt="logo" class="centered" style="height: 2rem;">
                    <p style="font-size: 16px;font-weight: lighter;margin-bottom:3rem;margin-top:.5rem;">Comece agora mesmo</p>
                </div>

                <form>
                    <div class="mb-6">
                        <span class="custom-placeholder">Nome</span>
                        <vs-input
                            type="text"
                            v-validate="'required'"
                            name="name"
                            :danger="errors.has('name')"
                            placeholder="Ex. Renato Amaral"
                            val-icon-success="done"
                            val-icon-danger="clear"
                            v-model="name"
                            class="w-full" />
                        <span class="text-danger text-sm">{{ errors.first('name') }}</span>
                    </div>

                    <div class="mb-6">
                        <span class="custom-placeholder">Email</span>
                        <vs-input
                            type="email"
                            v-validate="'required|email'"
                            name="email"
                            :danger="errors.has('email')"
                            placeholder="Preencha com seu melhor e-mail"
                            val-icon-success="done"
                            val-icon-danger="clear"
                            v-model="email"
                            class="w-full" />
                        <span class="text-danger text-sm">{{ errors.first('email') }}</span>
                    </div>

                    <div class="mb-6">
                        <span class="custom-placeholder">Nome de Empresa</span>
                        <vs-input
                            type="text"
                            v-validate="'required'"
                            name="business_name"
                            :danger="errors.has('business_name')"
                            placeholder="Preencha o nome da empresa"
                            val-icon-success="done"
                            val-icon-danger="clear"
                            v-model="business_name"
                            class="w-full" />
                        <span class="text-danger text-sm">{{ errors.first('business_name') }}</span>
                    </div>

                    <div class="position-relative mb-6">
                        <div class="password-show" @click="pass_show=!pass_show">
                            <i :class="pass_show ? 'vs-icon feather icon-eye-off' : 'vs-icon feather icon-eye'"></i>
                        </div>
                        <span class="custom-placeholder">Criar Senha</span>
                        <vs-input
                            :type="pass_show ? 'text' : 'password'"
                            v-validate="'required'"
                            name="password"
                            placeholder="Escolha uma senha segura"
                            :danger="errors.has('password')"
                            v-model="password"
                            class="w-full mt-0" />
                        <span class="text-danger text-sm">{{ errors.first('password') }}</span>
                    </div>

                    <div class="position-relative mb-4">
                        <div class="password-show" @click="pass_show_confirm=!pass_show_confirm">
                            <i :class="pass_show ? 'vs-icon feather icon-eye-off' : 'vs-icon feather icon-eye'"></i>
                        </div>
                        <span class="custom-placeholder">Confirmar Senha</span>
                        <vs-input
                            :type="pass_show_confirm ? 'text' : 'password'"
                            v-validate="'required'"
                            name="confirm_password"
                            placeholder="Digite sua senha novamente"
                            :danger="errors.has('confirm_password')"
                            v-model="confirm_password"
                            class="w-full mt-0" />
                        <span class="text-danger text-sm">{{ errors.first('confirm_password') }}</span>
                    </div>

                    <div class="mb-6">
                        <span class="text-danger">{{error}}</span>
                    </div>

                    <div class="flex flex-wrap justify-between my-5">
                        <vs-button color="white" class="custom-filled-button btn-block" type="filed" @click="submitForm">Criar Conta</vs-button>
                    </div>

                    <div class="text-center">
                        <span style="font-weight:lighter;">Já possui uma conta?</span>
                        <router-link to="login" class="main-color vertical-centered" style="font-size:0.9rem;">Faça Login</router-link>
                    </div>
                </form>

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
    },
  }
};

Validator.localize('en', dict);

export default{
  data() {
    return {
        name: "",
        email: "",
        business_name: "",
        password: "",
        confirm_password: "",
        error: "",
        pass_show: false,
        pass_show_confirm: false,
    }
  },
  methods: {
    submitForm() {
        this.$validator.validateAll().then(result => {
            if(result) {
                if(this.password != this.confirm_password) {
                    this.error = "Senha e confirmação de senha precisam ser iguais"
                    return false
                }
                this.$http.post('/api/register', {
                    name: this.name,
                    email: this.email,
                    business_name: this.business_name,
                    password: this.password,
                })
                .then(response => {
                    if(response.data.status) {
                        this.$store.commit('auth/SET_LOGIN',true)
                        this.$store.commit('UPDATE_USER_INFO',response.data.userInfo)
                        this.$store.commit('SET_REGISTER',true)
                        localStorage.uid = response.data.userInfo.uid
                        localStorage.displayName = response.data.userInfo.displayName
                        localStorage.isRegistered = 0
                        this.$router.push('/')
                    } else {
                        this.$store.commit('auth/SET_LOGIN',false)
                        this.error = response.data.error
                    }
                })
                .catch(error => {
                    this.$store.commit('auth/SET_LOGIN',false)
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
    padding: 6rem 8rem 4rem 8rem;
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
