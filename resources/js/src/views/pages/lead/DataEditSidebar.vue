<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <vs-sidebar click-not-close position-right parent="body" default-index="1" color="primary" class="add-new-data-sidebar items-no-padding" spacer v-model="isSidebarActiveLocal">
    <div class="mt-6 flex items-center justify-between px-6">
        <h4>{{ Object.entries(this.data).length === 0 ? "Cadastrar" : "Editar" }} Lead</h4>
        <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <VuePerfectScrollbar class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl">

      <div class="p-6">

        <div class="mb-6">
            <span class="custom-placeholder">Nome</span>
            <vs-input
                type="text"
                v-validate="'required'"
                name="contact"
                :danger="errors.has('contact')"
                placeholder="Preencha o nome do contato"
                val-icon-danger="clear"
                v-model="contact"
                class="w-full" />
            <span class="text-danger text-sm" v-if="errors.has('contact')">{{ errors.first('contact') }}</span>
        </div>

        <div class="mb-6">
            <span class="custom-placeholder">E-Mail</span>
            <vs-input
                type="email"
                v-validate="'required|email'"
                name="email"
                :danger="errors.has('email')"
                placeholder="E-Mail de contato"
                val-icon-success="done"
                val-icon-danger="clear"
                v-model="email"
                class="w-full" />
            <span class="text-danger text-sm" v-if="errors.has('email')">{{ errors.first('email') }}</span>
        </div>

        <div class="mb-6">
            <span class="custom-placeholder">Telefone</span>
            <vs-input
                type="text"
                v-validate="{ required: true, regex: /^\(?([0-9]{2})\)?[-. ]?([0-9]{4,5})[-. ]?([0-9]{4})$/ }"
                name="telephone"
                :danger="errors.has('telephone')"
                placeholder="ex. (21) 99999-9999"
                val-icon-danger="clear"
                v-model.lazy="telephone"
                @keyup="telephoneMask"
                class="w-full" />
            <span class="text-danger text-sm" v-if="errors.has('telephone')">{{ errors.first('telephone') }}</span>
        </div>

        <div class="mb-6">
            <span class="custom-placeholder">Empresa</span>
            <vs-input
                type="text"
                name="company"
                :danger="errors.has('company')"
                placeholder="Preencha com a empresa do contato"
                val-icon-success="done"
                val-icon-danger="clear"
                v-model="company"
                class="w-full" />
            <span class="text-danger text-sm" v-if="errors.has('company')">{{ errors.first('company') }}</span>
        </div>

        <div class="mb-6">
            <span class="custom-placeholder">Origem</span>
            <v-select
                :options="originStatus"
                name="origin"
                v-model="origin"
                v-validate="'required'"/>
            <span class="text-danger text-sm" v-if="errors.has('origin')">{{ errors.first('origin') }}</span>
        </div>

        <div class="mb-6">
            <span class="text-danger">{{error}}</span>
        </div>

        <div class="flex flex-wrap justify-between my-5">
            <vs-button color="white" class="custom-filled-button btn-block" type="filed" @click="submitData">Salvar</vs-button>
        </div>

      </div>
    </VuePerfectScrollbar>
  </vs-sidebar>
</template>

<script>
import VMasker from 'vanilla-masker'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import vSelect from 'vue-select'
import { Validator } from 'vee-validate'
const dict = {
  custom: {
    contato: {
      required: 'O campo "Nome de contato" é obrigatório'
    },
    email: {
      required: 'O campo "E-Mail" é obrigatório',
      email: 'O campo "E-Mail" precisa ser válido'
    },
    company: {
      required: 'O campo "Nome de Empresa" é obrigatório'
    },
    address: {
      required: 'O campo "Nome de Endereço" é obrigatório',
    },
    telephone: {
      required: 'O campo "Telefone" é obrigatório',
      regex: 'O campo "Telefone" precisa ser válido. Ex: (99) 9999-9999 ou (99) 99999-9999',
    },
    origin: {
      required: 'O campo "Origem" é obrigatório',
    },
  }
};

Validator.localize('en', dict);

export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      default: () => {},
    }
  },
  watch: {
    isSidebarActive(val) {
      if(!val) return
      if(Object.entries(this.data).length === 0) {
        this.initValues()
        this.$validator.reset()
      } else {
        let { id, contact, email, telephone, company, address, origin } = JSON.parse(JSON.stringify(this.data))
        this.dataId = id
        this.contact = contact
        this.email = email
        this.telephone = telephone
        this.company = company
        this.address = address
        this.origin = this.$store.state.initialSelectData.originStatus.find(x => x.value === origin)
        this.initValues()
      }
    }
  },
  data() {
    return {
      dataId: null,
      contact: "",
      email: "",
      telephone: "",
      company: "",
      address: "Test",
      origin: "",
      error: "",

      settings: { // perfectscrollbar settings
          maxScrollbarLength: 60,
          wheelSpeed: .60,
      },
    }
  },
  computed: {
    isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive
      },
      set(val) {
        if(!val) {
            if(this.dataId !== null && this.dataId >= 0)
            {
                this.$emit('viewSidebar',this.data)
            }
            this.$emit('closeSidebar')
        }
      }
    },
    originStatus() {
        return this.$store.state.initialSelectData.originStatus;
    },
  },
  methods: {
    initValues() {
      if(this.data.id) return
        this.dataId = null
        this.contact = ""
        this.email = ""
        this.telephone = ""
        this.company = ""
        this.address = "Test"
        this.origin = this.$store.state.initialSelectData.originStatus.find(x => x.value === 1)
    },
    telephoneMask(event) {
        var telMask = ['(99) 9999-99999', '(99) 99999-9999'];
        var c = event.target;
        var v = c.value.replace(/\D/g, '');
        var m = c.value.length > 14 ? 1 : 0;
        VMasker(c).unMask();
        VMasker(c).maskPattern(telMask[m]);
        c.value = VMasker.toPattern(v, telMask[m]);
        this.telephone = c.value
    },
    submitData() {
      this.$validator.validateAll().then(result => {
          if (result) {
            const obj = {
              id: this.dataId,
              contact: this.contact,
              email: this.email,
              telephone: this.telephone,
              address: this.address,
              company: this.company,
              origin: this.origin.value,
            }

            if(this.dataId !== null && this.dataId >= 0) {
                this.$http.put('/api/leads/edit', obj)
                    .then(response => {
                        if(response.data.status) {
                            this.$http.post('/api/activity/add', {
                                description: 'Lead editado pelo usuário',
                                user_id: this.$store.state.AppActiveUser.uid,
                                lead_id: this.dataId
                            })
                            .then(response => {
                                if(response.data.status) {
                                    this.$vs.notify({
                                        title: 'Lead Activity',
                                        text: 'An activity added successfully!',
                                        color: 'success',
                                        iconPack: 'feather',
                                        icon:'icon-check'
                                    })
                                }
                            })
                            .catch(error => {
                                console.log(error)
                            })
                            this.$store.commit('lead/SET_LEADS',response.data.lead_list)
                            this.$emit('viewSidebar', {
                                id: this.dataId,
                                contact: this.contact,
                                email: this.email,
                                telephone: this.telephone,
                                address: this.address,
                                company: this.company,
                                origin: this.origin.value
                            })
                            this.$emit('closeSidebar')
                            this.$vs.notify({
                                title: 'Lead Operation',
                                text: 'Lead edited successfully!',
                                color: 'success',
                                iconPack: 'feather',
                                icon:'icon-check'
                            })
                        } else {
                            this.$vs.notify({
                                title: 'Lead Operation',
                                text: 'Editing lead failed!',
                                color: 'danger',
                                iconPack: 'feather',
                                icon:'icon-alert-circle'
                            })
                        }
                    })
                    .catch(error => {
                        this.$vs.notify({
                            title: 'Lead Operation',
                            text: this.error,
                            color: 'danger',
                            iconPack: 'feather',
                            icon:'icon-alert-circle'
                        })
                    })
            } else{
                this.$http.put('/api/leads/add', obj)
                    .then(response => {
                        if(response.data.status) {
                            this.$store.commit('lead/SET_LEADS',response.data.lead_list)
                            this.$emit('closeSidebar')
                            this.$vs.notify({
                                title: 'Lead Operation',
                                text: 'Lead added successfully!',
                                color: 'success',
                                iconPack: 'feather',
                                icon:'icon-check'
                            })
                        } else {
                            this.$vs.notify({
                                title: 'Lead Operation',
                                text: 'Adding lead failed!',
                                color: 'danger',
                                iconPack: 'feather',
                                icon:'icon-alert-circle'
                            })
                        }
                    })
                    .catch(error => {
                        this.$vs.notify({
                            title: 'Lead Operation',
                            text: this.error,
                            color: 'danger',
                            iconPack: 'feather',
                            icon:'icon-alert-circle'
                        })
                    })
            }
          }
      })
    },
  },
  components: {
    VMasker,
    VuePerfectScrollbar,
    'v-select': vSelect,
  }
}
</script>

<style lang="scss" scoped>
.custom-placeholder {
    font-size: .8rem;
    position: relative;
    top: -5px;
}

.add-new-data-sidebar {
  ::v-deep .vs-sidebar--background {
    z-index: 52010;
  }

  ::v-deep .vs-sidebar {
    z-index: 52010;
    width: 400px;
    max-width: 90vw;
  }

  h4 {
      font-weight: bold;
      font-size: 1.5rem;
  }
}

.scroll-area--data-list-add-new {
    // height: calc(var(--vh, 1vh) * 100 - 4.3rem);
    height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);
}
</style>
