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
        <h4>{{ Object.entries(this.data).length === 0 || is_lead || (this.data.stage && !this.data.dataId) ? "Adicionar" : "Editar" }} Negócio</h4>
        <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <VuePerfectScrollbar class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl">

      <div class="p-6" id="deal-edit-form">

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
            <span class="custom-placeholder">Título de Negócio</span>
            <vs-input
                type="text"
                v-validate="'required'"
                name="title"
                :danger="errors.has('title')"
                placeholder="Título de Negócio"
                val-icon-success="done"
                val-icon-danger="clear"
                v-model="title"
                class="w-full" />
            <span class="text-danger text-sm" v-if="errors.has('title')">{{ errors.first('title') }}</span>
        </div>

        <div class="mb-6">
            <span class="custom-placeholder">Etapa atual</span>
            <v-select
                :options="stageStatus"
                name="stage"
                v-model="stage"
                v-validate="'required'"/>
            <span class="text-danger text-sm" v-if="errors.has('stage')">{{ errors.first('stage') }}</span>
        </div>

        <div class="mb-6">
            <span class="custom-placeholder">Data de Fechamento</span><br>
            <date-picker
                v-model="deadline"
                name="deadline"
                value-type="format"
                format="DD/MM/YYYY"
                :editable="false"
                lang="pt-br"
                placeholder="Data de Fechamento"
                v-validate="'required'">
            </date-picker>
            <span class="text-danger text-sm" v-if="errors.has('deadline')">{{ errors.first('deadline') }}</span>
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
import moduleDeal from "@/store/deal/moduleDeal.js"
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import vSelect from 'vue-select'
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import { Validator } from 'vee-validate';
const dict = {
  custom: {
    contato: {
      required: 'O campo "Nome de contato" é obrigatório'
    },
    title: {
      required: 'O campo "Título de Negócio" é obrigatório',
    },
    deadline: {
      required: 'O campo "Data de Fechamento" é obrigatório'
    },
    stage: {
      required: 'O campo "Etapa atual" é obrigatório',
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
      if(Object.entries(this.data).length === 0 || (this.data.stage && !this.data.dataId)) {
        this.initValues()
        this.stage = this.data.stage ? this.$store.state.initialSelectData.stageStatus.find(x => x.value === this.data.stage) : ''
        this.$validator.reset()
      } else {
        if(this.data.is_lead) {
            this.initValues()
            this.$validator.reset()
            this.is_lead = true
            this.lead_id = this.data.lead_id
        }
        else {
            let { id, contact, title, deadline, stage } = JSON.parse(JSON.stringify(this.data))
            this.dataId = id
            this.contact = contact
            this.title = title
            this.deadline = this.formatDateOrigin(deadline)
            this.stage = this.$store.state.initialSelectData.stageStatus.find(x => x.value === stage)
        }
      }
    }
  },
  data() {
    return {
      dataId: null,
      lead_id: null,
      is_lead: false,
      contact: "",
      title: "",
      deadline: "",
      stage: "",
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
    stageStatus() {
        return this.$store.state.initialSelectData.stageStatus;
    },
  },
  created() {
    if(!moduleDeal.isRegistered) {
      this.$store.registerModule('deal', moduleDeal)
      moduleDeal.isRegistered = true
    }
  },
  methods: {
    initValues() {
      if(this.data.id) return
        this.dataId = null
        this.contact = ""
        this.title = ""
        this.stage = ""
        this.deadline = ""
    },
    submitData() {
      this.$validator.validateAll().then(result => {
          if (result) {
            const obj = {
              id: this.dataId,
              lead_id: this.lead_id,
              contact: this.contact,
              title: this.title,
              stage: this.stage.value,
              deadline: this.formatDateSave(this.deadline),
            }

            if(this.dataId !== null && this.dataId >= 0) {
                this.$http.post('/api/deals/edit', obj)
                    .then(response => {
                        if(response.data.status) {
                            this.$http.post('/api/activity_deal/add', {
                                description: 'Deal editado pelo usuário',
                                user_id: this.$store.state.AppActiveUser.uid,
                                deal_id: this.dataId
                            })
                            .then(response => {
                                if(response.data.status) {
                                    this.$vs.notify({
                                        title: 'Deal Activity',
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
                            this.$store.commit('deal/SET_DEALS',response.data.deal_list)
                            this.$emit('viewSidebar', {
                                id: this.dataId,
                                lead_id: this.data.lead_id,
                                responsible: this.data.responsible,
                                probability: this.data.probability,
                                contact: this.contact,
                                title: this.title,
                                stage: this.stage.value,
                                deadline: this.formatDateSave(this.deadline)
                            })
                            this.$emit('closeSidebar')
                            this.$vs.notify({
                                title: 'Deal Operation',
                                text: 'A deal edited successfully!',
                                color: 'success',
                                iconPack: 'feather',
                                icon:'icon-check'
                            })
                        } else {
                            this.$vs.notify({
                                title: 'Deal Operation',
                                text: 'Editing deal failed!',
                                color: 'danger',
                                iconPack: 'feather',
                                icon:'icon-alert-circle'
                            })
                        }
                    })
                    .catch(error => {
                        this.$vs.notify({
                            title: 'Deal Operation',
                            text: error,
                            color: 'danger',
                            iconPack: 'feather',
                            icon:'icon-alert-circle'
                        })
                    })
            } else{
                this.$http.post('/api/deals/add', obj)
                    .then(async (response) => {
                        if(response.data.status) {
                            this.$store.commit('deal/SET_DEALS',response.data.deal_list)
                            this.$vs.notify({
                                title: 'Deal Operation',
                                text: 'A deal added successfully!',
                                color: 'success',
                                iconPack: 'feather',
                                icon:'icon-check'
                            })
                            await this.$emit('closeSidebar')
                            this.$router.push('/deals')
                        } else {
                            this.$vs.notify({
                                title: 'Deal Operation',
                                text: 'Adding deal failed!',
                                color: 'danger',
                                iconPack: 'feather',
                                icon:'icon-alert-circle'
                            })
                        }
                    })
                    .catch(error => {
                        this.$vs.notify({
                            title: 'Deal Operation',
                            text: error,
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
    VuePerfectScrollbar,
    DatePicker,
    'v-select': vSelect,
  }
}
</script>

<style lang="scss" scoped>
#deal-edit-form {
    .mx-datepicker{
        width: 100%;
        ::v-deep .mx-input {
            &:hover , &:focus{
                border: 1px solid rgb(var(--vs-primary));
            }
        }
    }

    .custom-placeholder {
        font-size: .8rem;
        position: relative;
        top: -5px;
    }
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
