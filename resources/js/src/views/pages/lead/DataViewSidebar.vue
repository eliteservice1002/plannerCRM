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
        <div class="vx-col w-5/12">
            <VuePerfectScrollbar class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl">
                <div class="p-6">
                    <h4 class="py-6">Dados do Lead</h4>
                    <div class="mb-6">
                        <span class="custom-placeholder">Nome de contato</span><br>
                        <span class="custom-text">{{contact}}</span>
                    </div>

                    <div class="mb-6">
                        <span class="custom-placeholder">Email</span><br>
                        <span class="custom-text">{{email}}</span>
                    </div>

                    <div class="mb-6">
                        <span class="custom-placeholder">Telefone</span><br>
                        <span class="custom-text">{{telephone}}</span>
                    </div>

                    <div class="mb-6">
                        <span class="custom-placeholder">Nome de Empresa</span><br>
                        <span class="custom-text">{{company}}</span>
                    </div>

                    <div class="mb-6">
                        <span class="custom-placeholder">Endereço</span><br>
                        <span class="custom-text">{{address}}</span>
                    </div>

                    <div class="mb-6">
                        <span class="custom-placeholder">Origem</span><br>
                        <vs-chip :color="getOriginStatusColor(origin.value)">{{origin.label}}</vs-chip>
                    </div>

                    <div class="my-12" style="position: absolute;bottom: 0px;">
                        <vs-button color="white" class="custom-filled-button btn-block" type="filed" @click="() => {isSidebarActiveLocal = false; this.addDealData()}">Adicionar a negócios</vs-button>
                    </div>

                </div>
            </VuePerfectScrollbar>
        </div>
        <div class="vx-col w-7/12 activity-container p-0">
            <div class="p-8 px-10">
                <div class="mt-6 mb-10 flex items-center justify-between float-right">
                    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
                        <feather-icon icon="MoreHorizontalIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer ml-auto mr-2"></feather-icon>
                        <vs-dropdown-menu class="vx-navbar-dropdown" style="z-index:99990;">
                            <ul style="min-width: 9rem" v-if="isSidebarActiveLocal">
                                <li
                                    class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
                                    @click="() => {isSidebarActiveLocal = false; this.editLead()}">
                                    <feather-icon icon="EditIcon" svgClasses="w-4 h-4" />
                                    <span class="ml-2">Editar</span>
                                </li>

                                <li
                                    class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
                                    @click="() => {isSidebarActiveLocal = false; this.deleteLead()}">
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
        let { id, contact, email, telephone, company, address, origin } = JSON.parse(JSON.stringify(this.data))
        this.dataId = id
        this.contact = contact
        this.email = email
        this.telephone = telephone
        this.company = company
        this.address = address
        this.origin = this.$store.state.initialSelectData.originStatus.find(x => x.value === origin)
        this.$http.post('/api/users_list')
            .then(response => {
                if(response.data.status) {
                    this.$store.commit('SET_USERS',response.data.user_list)
                }
            })
            .catch(error => {
                console.log(error)
            })
        this.$http.post('/api/activities',{lead_id:this.dataId})
            .then(response => {
                if(response.data.status) {
                    this.$store.commit('activity/SET_ACTIVITIES',response.data.activity_list)
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
      email: "",
      telephone: "",
      company: "",
      address: "",
      origin: "",
      error: "",
      activity: "",

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
        return this.$store.state.activity.activities;
    },
    originStatus() {
        return this.$store.state.initialSelectData.originStatus;
    },
    users() {
        return this.$store.state.UserList;
    }
  },
  methods: {
    getOriginStatusColor(status) {
      if(status == '1') return "success"
      if(status == '2') return "warning"
      if(status == '3') return "danger"
      return "primary"
    },
    addNewActivity() {
      this.$validator.validateAll().then(result => {
          if (result) {
            this.$http.post('/api/activity/add', {
                description: this.activity,
                user_id: this.$store.state.AppActiveUser.uid,
                lead_id: this.dataId
            })
                .then(response => {
                    if(response.data.status) {
                        this.activity = ""
                        this.$store.commit('activity/SET_ACTIVITIES',response.data.activity_list)
                        this.$validator.reset()
                        this.$vs.notify({
                            title: 'Lead Activity',
                            text: 'An activity added successfully!',
                            color: 'success',
                            iconPack: 'feather',
                            icon:'icon-check'
                        })
                    } else {
                        this.$vs.notify({
                            title: 'Lead Activity',
                            text: 'Adding activity failed!',
                            color: 'danger',
                            iconPack: 'feather',
                            icon:'icon-alert-circle'
                        })
                    }
                })
                .catch(error => {
                    this.$vs.notify({
                        title: 'Lead Activity',
                        text: error,
                        color: 'danger',
                        iconPack: 'feather',
                        icon:'icon-alert-circle'
                    })
                })
          }
      })
    },
    deleteLead() {
        let selectedIds = []
        selectedIds.push(this.dataId)
        this.$http.post('/api/lead/delete',{ ids:selectedIds })
        .then(response => {
            if(response.data.status) {
                this.$store.commit('lead/SET_LEADS',response.data.lead_list)
                this.$vs.notify({
                    title: 'Lead Operation',
                    text: 'Lead deleted successfully!',
                    color: 'success',
                    iconPack: 'feather',
                    icon:'icon-check'
                })
            }
            else {
                this.$vs.notify({
                    title: 'Lead Operation',
                    text: 'Deleting lead failed',
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
    },
    editLead() {
        this.$emit('editSidebar',this.data)
    },
    addDealData() {
        const temp = {
            is_lead: true,
            lead_id: this.data.id
        }
        this.$emit('addDealData',temp)
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
    width: 680px;
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
