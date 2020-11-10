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
    <div class="vx-row">
        <div class="vx-col w-7/12">
            <VuePerfectScrollbar class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl">
                <div class="p-6">
                    <h4 class="py-6">{{title}}</h4>
                    <div class="mb-6 d-flex">
                        <div :class="stage === 1 ? 'step-active' : 'step'" style="z-index:4;" @click="changeStage(1)">
                            <div class="pt-4">Em Aberto</div>
                        </div>
                        <div :class="stage === 2 ? 'step-active' : 'step'" style="position:relative; left:-12px; z-index:3;" @click="changeStage(2)">
                            <div class="pt-4">Proposta</div>
                        </div>
                        <div :class="stage === 3 ? 'step-active' : 'step'" style="position:relative; left:-24px; z-index:2;" @click="changeStage(3)">
                            <div class="pt-4">Acompanhar</div>
                        </div>
                        <div :class="stage === 4 ? 'step-active' : 'step'" style="position:relative; left:-36px; z-index:1;" @click="changeStage(4)">
                            <div class="pt-4">Fechamento</div>
                        </div>
                    </div>
                    <div class="mb-6">
                        <span class="custom-placeholder">Nome de contato</span><br>
                        <span class="custom-text">{{contact}}</span>
                    </div>

                    <div class="mb-6">
                        <span class="custom-placeholder">Email</span><br>
                        <span class="custom-text">{{lead.email}}</span>
                    </div>

                    <div class="mb-6">
                        <span class="custom-placeholder">Telefone</span><br>
                        <span class="custom-text">{{lead.telephone}}</span>
                    </div>

                    <div class="mb-6">
                        <span class="custom-placeholder">Empresa</span><br>
                        <span class="custom-text">{{lead.company}}</span>
                    </div>

                    <div class="mb-6">
                        <span class="custom-placeholder">Endereço</span><br>
                        <span class="custom-text">{{lead.address}}</span>
                    </div>

                    <div class="mb-6">
                        <span class="custom-placeholder">Data do fechamento</span><br>
                        <span class="custom-text">{{ formatDate(deadline) }}</span>
                    </div>

                    <div class="mb-6">
                        <span class="custom-placeholder">Probabildade</span><br>
                        <vs-chip :color="getProbabilityStatusColor(probability.value)">{{probability.label}}</vs-chip>
                    </div>

                    <div class="my-12" style="position: absolute;bottom: 0px;">
                        <vs-button
                            color="white"
                            class="custom-filled-button mr-3"
                            type="filed"
                            style="min-width:160px;">Ganho</vs-button>
                        <vs-button
                            color="white"
                            class="custom-filled-button"
                            type="filed"
                            style="min-width:160px; background:#f7f7f9; color:#626262; border:1px solid #e6ecee;">Perdido</vs-button>
                    </div>

                </div>
            </VuePerfectScrollbar>
        </div>
        <div class="vx-col w-5/12 activity-container p-0">
            <div class="p-8 px-10">
                <div class="mt-6 mb-10 flex items-center justify-between float-right">
                    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
                        <feather-icon icon="MoreHorizontalIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer ml-auto mr-2"></feather-icon>
                        <vs-dropdown-menu class="vx-navbar-dropdown" style="z-index:99990;">
                            <ul style="min-width: 9rem" v-if="isSidebarActiveLocal">
                                <li
                                    class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
                                    @click="() => {isSidebarActiveLocal = false; this.editDeal()}">
                                    <feather-icon icon="EditIcon" svgClasses="w-4 h-4" />
                                    <span class="ml-2">Editar</span>
                                </li>

                                <li
                                    class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
                                    @click="() => {isSidebarActiveLocal = false; this.deleteDeal()}">
                                    <feather-icon icon="TrashIcon" svgClasses="w-4 h-4" />
                                    <span class="ml-2">Excluir</span>
                                </li>
                            </ul>
                        </vs-dropdown-menu>
                    </vs-dropdown>
                    <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
                </div>
                <div class="mt-10 pt-8">
                    <span class="custom-placeholder">Adicionar uma Atividade</span>
                    <vs-input
                        type="text"
                        v-validate="'required'"
                        name="activity"
                        :danger="errors.has('activity')"
                        val-icon-success="done"
                        val-icon-danger="clear"
                        v-model="activity"
                        class="w-full" />
                    <span class="text-danger text-sm" v-if="errors.has('activity')">{{ errors.first('activity') }}</span>
                </div>
                <div class="my-6">
                    <div
                        class="float-right btn-add-new p-2 mb-6 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary add-button"
                        @click="addNewActivity">
                        <span class="ml-2 text-primary">Registrar</span>
                    </div>
                </div>
            </div>
            <vs-divider class="mb-0"></vs-divider>
            <VuePerfectScrollbar class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl">
                <div class="p-8 px-10 mb-12">
                    <div class="d-flex activity-contents" v-for="(item,index) in activities" :key="item.id">
                        <div :class="(index != activities.length-1) ? 'left-border-activity' : 'left-border-activity-last'">
                            <feather-icon icon="CircleIcon" class="cursor-pointer activity-icon"></feather-icon>
                        </div>
                        <div class="activity-content py-2 px-4">
                            <span class="custom-placeholder">{{item.description}}</span><br>
                            <span>{{item.created_at}}</span><br>
                            <span>por {{users.find((x) => x.id === item.user_id).name}}</span>
                        </div>
                    </div>
                </div>
            </VuePerfectScrollbar>
        </div>
    </div>
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import vSelect from 'vue-select'
import { Validator } from 'vee-validate';
const dict = {
  custom: {
    activity: {
      required: 'O campo "Adicionar uma Atividade" é obrigatório'
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
        let { id, lead_id, contact, title, deadline, probability, stage } = JSON.parse(JSON.stringify(this.data))
        this.dataId = id
        this.lead_id = lead_id
        this.contact = contact
        this.title = title
        this.deadline = deadline
        this.stage = stage
        this.probability = this.$store.state.initialSelectData.probabilityStatus.find(x => x.value === probability)
        this.$http.post('/api/users_list')
            .then(response => {
                if(response.data.status) {
                    this.$store.commit('SET_USERS',response.data.user_list)
                }
            })
            .catch(error => {
                console.log(error)
            })
        this.$http.post('/api/activities_deal',{deal_id:this.dataId})
            .then(response => {
                if(response.data.status) {
                    this.$store.commit('activity_deal/SET_ACTIVITIES',response.data.activity_list)
                }
            })
            .catch(error => {
                console.log(error)
            })
        this.$http.post('/api/leads/'+this.lead_id)
            .then(response => {
                if(response.data.status) {
                    this.lead = response.data.lead
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
  },
  data() {
    return {
      dataId: null,
      contact: "",
      lead_id: null,
      title: "",
      deadline: "",
      probability: "",
      stage: "",
      error: "",
      activity: "",
      lead: {
          email: "",
          company: "",
          address: "",
          telephone: "",
      },

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
            this.$emit('closeSidebar')
        }
      }
    },
    activities() {
        return this.$store.state.activity_deal.activities;
    },
    users() {
        return this.$store.state.UserList;
    },
  },
  methods: {
    changeStage(val) {
        if(val == this.stage)
            return;
        var old = this.stage
        this.stage = val
        const obj = {
              id: this.dataId,
              contact: this.contact,
              title: this.title,
              stage: val,
              deadline: this.deadline,
            }
        this.$http.post('/api/deals/edit', obj)
            .then(response => {
                if(response.data.status) {
                    this.$http.post('/api/activity_deal/add', {
                        description: 'Status alterado de '+ this.$store.state.initialSelectData.stageStatus.find(item => item.value === old).label +' para ' + this.$store.state.initialSelectData.stageStatus.find(item => item.value === this.stage).label,
                        user_id: this.$store.state.AppActiveUser.uid,
                        deal_id: this.dataId
                    })
                    .then(response => {
                        if(response.data.status) {
                            this.$store.commit('activity_deal/SET_ACTIVITIES',response.data.activity_list)
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
                    this.stage = val
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
    },
    getProbabilityStatusColor(status) {
      if(status == '1') return "danger"
      if(status == '2') return "primary"
      if(status == '3') return "success"
      return "danger"
    },
    addNewActivity() {
      this.$validator.validateAll().then(result => {
          if (result) {
            this.$http.post('/api/activity_deal/add', {
                description: this.activity,
                user_id: this.$store.state.AppActiveUser.uid,
                deal_id: this.dataId
            })
                .then(response => {
                    if(response.data.status) {
                        this.activity = ""
                        this.$store.commit('activity_deal/SET_ACTIVITIES',response.data.activity_list)
                        this.$validator.reset()
                        this.$vs.notify({
                            title: 'Deal Activity',
                            text: 'An activity added successfully!',
                            color: 'success',
                            iconPack: 'feather',
                            icon:'icon-check'
                        })
                    } else {
                        this.$vs.notify({
                            title: 'Deal Activity',
                            text: 'Adding activity failed!',
                            color: 'danger',
                            iconPack: 'feather',
                            icon:'icon-alert-circle'
                        })
                    }
                })
                .catch(error => {
                    this.$vs.notify({
                        title: 'Deal Activity',
                        text: error,
                        color: 'danger',
                        iconPack: 'feather',
                        icon:'icon-alert-circle'
                    })
                })
          }
      })
    },
    deleteDeal() {
        let selectedIds = []
        selectedIds.push(this.dataId)
        this.$http.post('/api/deals/delete',{ ids:selectedIds })
        .then(response => {
            if(response.data.status) {
                this.$store.commit('deal/SET_DEALS',response.data.deal_list)
                this.$vs.notify({
                    title: 'Deal Operation',
                    text: 'Deal deleted successfully!',
                    color: 'success',
                    iconPack: 'feather',
                    icon:'icon-check'
                })
            }
            else {
                this.$vs.notify({
                    title: 'Deal Operation',
                    text: 'Deleting deal failed!',
                    color: 'danger',
                    iconPack: 'feather',
                    icon:'icon-alert-icon'
                })
            }
        })
        .catch(error => {
            this.$vs.notify({
                title: 'Deal Operation',
                text: error,
                color: 'danger',
                iconPack: 'feather',
                icon:'icon-alert-icon'
            })
        })
    },
    editDeal() {
        this.$emit('editSidebar', Object.assign({}, this.data, { stage: this.stage }))
    },
  },
  components: {
    VuePerfectScrollbar,
    'v-select': vSelect,
  },
}
</script>

<style lang="scss" scoped>

.left-border-activity {
    height: 100px;
    border-left: dashed;
    color: #cecece;
}

.left-border-activity-last {
    height: 100px;
    margin-left: 3px;
    color: #cecece;
}

.activity-content {
    position: relative;
    top: -18px;
    border: 1px solid rgb(var(--vs-primary));
    border-radius: 3px;
    height: fit-content;
    font-size: .9rem;
}

.activity-contents {
    margin-top: 10px;
}

.activity-icon {
    width: 12px;
    right: 7px;
    top: -16px;
}

.add-button {
    max-width: 10rem;
    font-size: .9rem !important;
    border-radius: 2rem !important;
    min-width: 120px;
}

.activity-container {
    background-color: #f7f7f9;
    min-height: 100vh;
}

.custom-placeholder {
    font-size: .8rem;
    position: relative;
    top: -5px;
}

.custom-text {
    font-size: 1rem;
    position: relative;
    font-weight: lighter;
}

.add-new-data-sidebar {
  ::v-deep .vs-sidebar--background {
    z-index: 52010;
  }

  ::v-deep .vs-sidebar {
    z-index: 52010;
    width: 980px;
    max-width: 90vw;
  }

  h4 {
      font-weight: bold;
      font-size: 1.5rem;
  }
}

.scroll-area--data-list-add-new {
    // height: calc(var(--vh, 1vh) * 100 - 4.3rem);
    height: calc(var(--vh, 1vh) * 100 - 16px);
}

</style>
