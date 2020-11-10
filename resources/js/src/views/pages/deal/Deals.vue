<!-- =========================================================================================
  File Name: DataListListView.vue
  Description: Data List - List View
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
	<vx-card class="deals-container">
        <deal-edit-sidebar :isSidebarActive="addNewDataSidebar" @closeSidebar="toggleDataSidebar" @viewSidebar="viewData" :data="sidebarData" />
        <deal-view-sidebar :isSidebarActive="addViewDataSidebar" @closeSidebar="toggleEditDataSidebar" @editSidebar="editData" :data="sidebarData" />
		<div id="data-list-deal-view" class="data-list-container">

			<vs-table ref="table" :pagination="isList ? 'pagination' : false" :max-items="itemsPerPage" :data="deals" @selected="(tr) => viewData(tr)">

			<div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

				<div class="flex flex-wrap items-center data-list-btn-container action-container">
                    <div class="vx-row m-0">
                        <div class="vx-col w-1/2 table-title p-0">
                            Etapas de Negociação
                        </div>
                        <div class="vx-col w-1/2 p-0">
                            <div class="btn-add-new p-2 mb-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary add-button">
                                <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
                                <span class="ml-2 text-primary">Adicionar Negócio</span>
                            </div>
                        </div>
                    </div>
                    <div class="rx-row filter-container mb-6 mt-3 d-flex">
                        <div class="vx-col w-1/4">
                            <div class="btn-group d-flex">
                                <div :class="isList ? 'switch-button-left-active' : 'switch-button-left'" @click="isList = true">
                                    <feather-icon icon="ListIcon" svgClasses="h-4 w-4" />
                                    <span class="ml-2">Lista</span>
                                </div>
                                <div :class="isList ? 'switch-button-right' : 'switch-button-right-active'" @click="isList = false">
                                    <feather-icon icon="BarChartIcon" svgClasses="h-4 w-4" />
                                    <span class="ml-2">Funil</span>
                                </div>
                            </div>
                        </div>
                        <div class="vx-col w-3/4 d-flex filter-sub-container">
                            <date-picker
                                v-model="filterDate"
                                :editable="false"
                                lang="pt-br"
                                range
                                placeholder="Todos as datas"
                                class="mr-3">
                            </date-picker>

                            <v-select
                                class="origin-filter"
                                multiple
                                :options="stageStatus"
                                v-model="filterStage"
                                placeholder="Todos as etapas"/>

                        </div>
                    </div>

                    <div class="rx-row filter-container d-flex mb-8">
                        <div class="vx-col w-1/2 d-flex" v-if="isList">
                            <div class="action-button font-light" @click="selectAll">
                                <feather-icon icon="CornerLeftDownIcon" svgClasses="h-3 w-3" />
                                <span class="ml-1">Selecionar todos</span>
                            </div>

                            <div class="action-button font-light ml-6" @click="deleteData">
                                <feather-icon icon="Trash2Icon" svgClasses="h-3 w-3" />
                                <span class="ml-1">Excluir</span>
                            </div>
                        </div>

                        <div class="vx-col w-1/2 d-flex" v-if="!isList">
                            <div class="action-button font-light">
                                <span class="ml-1">Total de <b>{{deals.length}} Negócios</b></span>
                            </div>
                        </div>

                        <div class="vx-col w-1/2 d-flex flex-row-reverse">
                            <div class="action-button font-light ml-6">
                                <feather-icon icon="PrinterIcon" svgClasses="h-3 w-3" />
                                <span class="ml-1">Imprimir</span>
                            </div>

                            <div class="action-button font-light">
                                <feather-icon icon="DownloadIcon" svgClasses="h-3 w-3" />
                                <span class="ml-1">Importar</span>
                            </div>
                        </div>

                    </div>
				</div>

			</div>

			<template slot="thead" v-if="isList">
                <vs-th sort-key="checkbox"></vs-th>
				<vs-th sort-key="title">Nome de Negócio</vs-th>
				<vs-th sort-key="contact">Contato</vs-th>
				<vs-th sort-key="stage">Etapa da negociação</vs-th>
				<vs-th sort-key="probability">Probabildade</vs-th>
				<vs-th sort-key="deadline">Data do fechamento</vs-th>
                <vs-th sort-key='reponsible'>Responsável</vs-th>
				<vs-th></vs-th>
			</template>

			<template slot-scope="{data}">
				<tbody  v-if="isList">
					<vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                        <td class="td-check" >
                            <vs-checkbox
                                :value="selected.find(item => item.id === tr.id) ? true : false"
                                @click.stop="(e) => selectRow(e,tr)">
                            </vs-checkbox>
                        </td>

                        <vs-td>
                            <p class="deal-name font-medium truncate">{{ tr.title }}</p>
                        </vs-td>

                        <vs-td>
                            <p class="deal-name font-medium truncate">{{ tr.contact }}</p>
                        </vs-td>

                        <vs-td>
                            <img :src="getStageImage(tr.stage)" style="height:1.8rem;"/>
                        </vs-td>

                        <vs-td>
                            <vs-chip :color="getProbabilityStatusColor(tr.probability)">{{ probabilityStatus.find(x => x.value === tr.probability).label }}</vs-chip>
                        </vs-td>

                        <vs-td>
                            <p class="deal-name font-medium truncate">{{ formatDate(tr.deadline) }}</p>
                        </vs-td>

                        <vs-td class="img-container">
                            <img :src="activeUserInfo.photoURL" class="rounded-full product-img" />
                        </vs-td>

                        <vs-td class="whitespace-no-wrap">
                            <feather-icon icon="ChevronRightIcon" svgClasses="w-5 h-5 text-primary stroke-current" @click.stop="viewData(tr)" />
                        </vs-td>

					</vs-tr>
				</tbody>
                <div class="vx-row funil-container" v-if="!isList">
                    <div class="vx-col w-full md:w-1/4">
                        <vs-list>
                            <div class="funil-title mb-4 ml-2">Em Aberto</div>
                            <div class="funil-add-button" @click="addNewDataFunil(1)">
                                <feather-icon icon="PlusIcon" svgClasses="h-6 w-6" />
                            </div>
                            <draggable v-model="list1" group="people" class="pt-4 cursor-move">
                                <vs-list-item v-for="(listItem, index) in list1" :key="index" :title="listItem.title" :subtitle="listItem.contact">
                                    <feather-icon slot="avatar" icon="BriefcaseIcon" svgClasses="h-4 w-4" class="drag-icon"/>
                                </vs-list-item>
                            </draggable>
                        </vs-list>
                    </div>
                    <div class="vx-col w-full md:w-1/4">
                        <vs-list>
                            <div class="funil-title mb-4 ml-2">Proposta</div>
                            <div class="funil-add-button" @click="addNewDataFunil(2)">
                                <feather-icon icon="PlusIcon" svgClasses="h-6 w-6" />
                            </div>
                            <draggable v-model="list2" group="people" class="pt-4 cursor-move">
                                <vs-list-item v-for="(listItem, index) in list2" :key="index" :title="listItem.title" :subtitle="listItem.contact">
                                    <feather-icon slot="avatar" icon="BriefcaseIcon" svgClasses="h-4 w-4" class="drag-icon"/>
                                </vs-list-item>
                            </draggable>
                        </vs-list>
                    </div>
                    <div class="vx-col w-full md:w-1/4">
                        <vs-list>
                            <div class="funil-title mb-4 ml-2">Follow-up</div>
                            <div class="funil-add-button" @click="addNewDataFunil(3)">
                                <feather-icon icon="PlusIcon" svgClasses="h-6 w-6" />
                            </div>
                            <draggable v-model="list3" group="people" class="pt-4 cursor-move">
                                <vs-list-item v-for="(listItem, index) in list3" :key="index" :title="listItem.title" :subtitle="listItem.contact">
                                    <feather-icon slot="avatar" icon="BriefcaseIcon" svgClasses="h-4 w-4" class="drag-icon"/>
                                </vs-list-item>
                            </draggable>
                        </vs-list>
                    </div>
                    <div class="vx-col w-full md:w-1/4">
                        <vs-list>
                            <div class="funil-title mb-4 ml-2">Fechamento</div>
                            <div class="funil-add-button" @click="addNewDataFunil(4)">
                                <feather-icon icon="PlusIcon" svgClasses="h-6 w-6" />
                            </div>
                            <draggable v-model="list4" group="people" class="pt-4 cursor-move">
                                <vs-list-item v-for="(listItem, index) in list4" :key="index" :title="listItem.title" :subtitle="listItem.contact">
                                    <feather-icon slot="avatar" icon="BriefcaseIcon" svgClasses="h-4 w-4" class="drag-icon"/>
                                </vs-list-item>
                            </draggable>
                        </vs-list>
                    </div>
                </div>
			</template>
			</vs-table>
		</div>
	</vx-card>
</template>

<script>
import DealViewSidebar from "./DealViewSidebar.vue"
import DealEditSidebar from "./DealEditSidebar.vue"
import moduleDeal from "@/store/deal/moduleDeal.js"
import draggable from 'vuedraggable'
import DatePicker from "vue2-datepicker";
import vSelect from "vue-select"
import "vue2-datepicker/index.css";

export default {
  components: {
      DealViewSidebar,
      DealEditSidebar,
      draggable,
      DatePicker,
      'v-select': vSelect,
  },
  data() {
    return {
        selected: [],
        itemsPerPage: 20,
        isMounted: false,
        addNewDataSidebar: false,
        addViewDataSidebar: false,
        sidebarData: {},
        viewbarData: {},
        filterDate: [],
        filterStage: [],
        isList: true,
    }
  },
  computed: {
    list1: {
        get() {
            return this.$store.getters['deal/firstDeals']
        },
        set(value) {
            if(this.$store.getters['deal/firstDeals'].length < value.length)
            {
                let temp = value.find((item) => {return item.stage != 1})
                var old = temp.stage
                const obj = {
                    id: temp.id,
                    contact: temp.contact,
                    title: temp.title,
                    stage: 1,
                    deadline: temp.deadline,
                }
                this.$http.post('/api/deals/edit', obj)
                    .then(response => {
                        if(response.data.status) {
                            this.$http.post('/api/activity_deal/add', {
                                description: 'Status alterado de '+ this.$store.state.initialSelectData.stageStatus.find(item => item.value === old).label +' para ' + this.$store.state.initialSelectData.stageStatus.find(item => item.value === 1).label,
                                user_id: this.$store.state.AppActiveUser.uid,
                                deal_id: temp.id
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
            }
        }
    },
    list2: {
        get() {
            return this.$store.getters['deal/secondDeals']
        },
        set(value) {
            if(this.$store.getters['deal/secondDeals'].length < value.length)
            {
                let temp = value.find((item) => {return item.stage != 2})
                var old = temp.stage
                const obj = {
                    id: temp.id,
                    contact: temp.contact,
                    title: temp.title,
                    stage: 2,
                    deadline: temp.deadline,
                }
                this.$http.post('/api/deals/edit', obj)
                    .then(response => {
                        if(response.data.status) {
                            this.$http.post('/api/activity_deal/add', {
                                description: 'Status alterado de '+ this.$store.state.initialSelectData.stageStatus.find(item => item.value === old).label +' para ' + this.$store.state.initialSelectData.stageStatus.find(item => item.value === 2).label,
                                user_id: this.$store.state.AppActiveUser.uid,
                                deal_id: temp.id
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
            }
        }
    },
    list3: {
        get() {
            return this.$store.getters['deal/thirdDeals']
        },
        set(value) {
            if(this.$store.getters['deal/thirdDeals'].length < value.length)
            {
                let temp = value.find((item) => {return item.stage != 3})
                var old = temp.stage
                const obj = {
                    id: temp.id,
                    contact: temp.contact,
                    title: temp.title,
                    stage: 3,
                    deadline: temp.deadline,
                }
                this.$http.post('/api/deals/edit', obj)
                    .then(response => {
                        if(response.data.status) {
                            this.$http.post('/api/activity_deal/add', {
                                description: 'Status alterado de '+ this.$store.state.initialSelectData.stageStatus.find(item => item.value === old).label +' para ' + this.$store.state.initialSelectData.stageStatus.find(item => item.value === 3).label,
                                user_id: this.$store.state.AppActiveUser.uid,
                                deal_id: temp.id
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
            }
        }
    },
    list4: {
        get() {
            return this.$store.getters['deal/fourthDeals']
        },
        set(value) {
            if(this.$store.getters['deal/fourthDeals'].length < value.length)
            {
                let temp = value.find((item) => {return item.stage != 4})
                var old = temp.stage
                const obj = {
                    id: temp.id,
                    contact: temp.contact,
                    title: temp.title,
                    stage: 4,
                    deadline: temp.deadline,
                }
                this.$http.post('/api/deals/edit', obj)
                    .then(response => {
                        if(response.data.status) {
                            this.$http.post('/api/activity_deal/add', {
                                description: 'Status alterado de '+ this.$store.state.initialSelectData.stageStatus.find(item => item.value === old).label +' para ' + this.$store.state.initialSelectData.stageStatus.find(item => item.value === 4).label,
                                user_id: this.$store.state.AppActiveUser.uid,
                                deal_id: temp.id
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
            }
        }
    },
    currentPage() {
      if(this.isMounted) {
        return this.$refs.table.currentx
      }
      return 0
    },
    deals() {
        let filter_stage = []
        this.filterStage.forEach((item) => {
            filter_stage.push(item.value)
        })
        this.$store.commit('deal/SET_FILTER_STAGE',filter_stage)
        this.$store.commit('deal/SET_FILTER_DATE',this.filterDate)
        return this.$store.getters['deal/filteredDeals']
    },
    probabilityStatus() {
        return this.$store.state.initialSelectData.probabilityStatus;
    },
    stageStatus() {
        return this.$store.state.initialSelectData.stageStatus;
    },
    queriedItems() {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.deals.length
    },
    activeUserInfo() {
      return this.$store.state.AppActiveUser
    }
  },
  methods: {
    getStageImage(val) {
        switch(val) {
            case 1:
                return require('@assets/images/pages/stage/step-1.png')
            case 2:
                return require('@assets/images/pages/stage/step-2.png')
            case 3:
                return require('@assets/images/pages/stage/step-3.png')
            case 4:
                return require('@assets/images/pages/stage/step-4.png')
            default:
                return require('@assets/images/pages/stage/step-1.png')
        }
    },
    addNewData() {
        this.sidebarData = {}
        this.toggleDataSidebar(true)
    },
    addNewDataFunil(stage) {
        this.sidebarData = {}
        this.sidebarData.stage = stage
        this.toggleDataSidebar(true)
    },
    deleteData() {
        let selectedIds = []
        this.selected.forEach((item) => {
            selectedIds.push(item.id)
        })
        this.$http.post('/api/deals/delete',{ ids:selectedIds })
        .then(response => {
            if(response.data.status) {
                this.$store.commit('deal/SET_DEALS',response.data.deal_list)
                this.selected = []
                this.$vs.notify({
                    title: 'Deal Operation',
                    text: 'Deals deleted successfully!',
                    color: 'success',
                    iconPack: 'feather',
                    icon:'icon-check'
                })
            }
            else {
                this.$vs.notify({
                    title: 'Deal Operation',
                    text: 'Deleting deals failed!',
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
    editData(data) {
      this.sidebarData = data
      this.toggleDataSidebar(true)
    },
    viewData(data) {
      this.sidebarData = data
      this.toggleEditDataSidebar(true)
    },
    getProbabilityStatusColor(status) {
      if(status == '1') return "danger"
      if(status == '2') return "primary"
      if(status == '3') return "success"
      return "danger"
    },
    toggleDataSidebar(val=false) {
      this.addNewDataSidebar = val
    },
    toggleEditDataSidebar(val=false) {
      this.addViewDataSidebar = val
    },
    selectAll() {
        if(this.selected.length == this.deals.length)
            this.selected = []
        else
            this.selected = this.deals
    },
    selectRow(event, tr) {
        this.toggleEditDataSidebar(false)
        if(event.target.checked){
            if(!this.selected.find(x => x.id === tr.id))
                this.selected.push(tr)
        }
        else {
            if(this.selected.find(x => x.id === tr.id))
                this.selected.splice(this.selected.indexOf(tr),1)
        }
    }
  },
  created() {
    if(!moduleDeal.isRegistered) {
      this.$store.registerModule('deal', moduleDeal)
      moduleDeal.isRegistered = true
    }

    this.$http.post('/api/deals')
        .then(response => {
            if(response.data.status) {
                this.$store.commit('deal/SET_DEALS',response.data.deal_list)
            }
        })
        .catch(error => {
            console.log(error)
        })
  },
  mounted() {
    this.isMounted = true;
  }
}
</script>

<style lang="scss">
.deals-container {
    border-radius: 0px;
}
.add-button {
    max-width: 10rem;
    font-size: .9rem !important;
    border-radius: 2rem !important;
}
#data-list-deal-view {
    .funil-container {
        .funil-title {
            color: #424242;
            font-size: 1.4rem;
            font-weight: 300;
        }
        .funil-add-button {
            text-align: center;
            border: 2px solid lightgrey;
            background: #fafafa;
            border-radius: 2rem;
            padding-top: 3px;
            cursor: pointer;
        }
        .vs-list--item {
            background: #f7f7f9;
            border-top-left-radius: 0.2rem;
            border-bottom-left-radius: 0.2rem;
            border-left: 2px solid rgba(var(--vs-primary),1);
            border-top: 1px solid rgba(0,0,0,.08);
            border-bottom: 1px solid rgba(0,0,0,.08);
            .drag-icon {
                padding: 13px;
                padding-bottom: 19px;
                padding-top: 0px;
            }
            .vs-list--subtitle {
                color: #727272;
                font-weight: lighter;
            }
            .vs-list--title {
                font-weight: normal;
            }
        }
    }
    .filter-container {
        width: 100%;
        .mx-input {
            height: 37px;
            &:hover , &:focus{
                border: 1px solid rgb(var(--vs-primary));
            }
        }
        .origin-filter {
            min-width: 220px;
            float: right;
        }
        .switch-button-left-active {
            background: rgba(var(--vs-primary), 1) !important;
            max-width: 77px;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
            color: white;
            display: flex;
            cursor: pointer;
            margin-bottom: 1rem;
            padding: 0.3rem 0.5rem;
        }
        .switch-button-left {
            max-width: 77px;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
            background: white !important;
            color: #626262;
            border: 1px solid #bdbdbd !important;
            border-right: none;
            display: flex;
            cursor: pointer;
            margin-bottom: 1rem;
            padding: 0.3rem 0.5rem;
        }
        .switch-button-right-active {
            background: rgba(var(--vs-primary), 1) !important;
            max-width: 77px;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            color: white;
            display: flex;
            cursor: pointer;
            margin-bottom: 1rem;
            padding: 0.3rem 0.5rem;
        }
        .switch-button-right {
            max-width: 77px;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            background: white !important;
            color: #626262;
            border: 1px solid #bdbdbd !important;
            border-left: none;
            display: flex;
            cursor: pointer;
            margin-bottom: 1rem;
            padding: 0.3rem 0.5rem;
        }
    }
    .filter-sub-container {
        place-content: flex-end;
    }
    .action-container {
        width: 100%;
        .vx-row {
            width: 100%;;
        }
        .add-button {
            max-width: 12rem;
            font-size: .9rem !important;
            border-radius: 1rem !important;
            float: right;
        }
        .table-title {
            font-size: 1.5rem;
        }
        .mx-datepicker-range {
            width: 220px;
        }
        .action-button {
            font-size: .8rem;
            cursor: pointer;
            &:hover {
                color: rgb(var(--vs-primary));
            }
        }
    }
  .vs-con-table {

    @media (max-width: 461px) {
      .items-per-page-handler {
        display: none;
      }
    }

    @media (max-width: 341px) {
      .data-list-btn-container {
        width: 100%;

        .dd-actions,
        .btn-add-new {
          width: 100%;
          margin-right: 0 !important;
        }
      }
    }

    .deal-name {
      max-width: 23rem;
    }

    .vs-table--header {
      display: flex;
      flex-wrap: wrap;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      > span {
        display: flex;
        flex-grow: 1;
      }
    }

    .vs-table {
      border-collapse: separate;
      border-spacing: 0 .2rem;
      padding: 0 1rem;

      tr{
          background-color: #f7f7f9;
          color: #6c6c6c;
          td{
            padding: 8px;
            &:first-child{
              border-top-left-radius: .1rem;
              border-left: 2px solid rgba(var(--vs-primary),1);
            }
            &.img-container {
              span {
                display: flex;
                justify-content: flex-start;
              }

              .product-img {
                height: 30px;
              }
            }
          }
          td.td-check{
            padding: 8px !important;
            .vs-checkbox {
                width: 15px;
                height: 15px;
            }
          }
      }
      tr:hover {
        transform: translateY(0px);
      }
    }

    .vs-table--thead{
      th {
        padding-top: 0;
        padding-bottom: 15px;

        .vs-table-text{
            font-weight: 600;
            color: rgb(0,0,0,0.4);
        }
      }
      th.td-check{
        padding: 0 15px !important;
        display: table-column;
      }
      tr{
        background: none;
        box-shadow: none;
      }
    }

    .vs-table--pagination {
      justify-content: center;
    }
  }
}
</style>
