<!-- =========================================================================================
  File Name: DataListListView.vue
  Description: Data List - List View
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
	<vx-card class="leads-container">
        <deal-edit-sidebar :isSidebarActive="addNewDealDataSidebar" @closeSidebar="toggleDealDataSidebar" :data="sidebarData" />
        <data-edit-sidebar :isSidebarActive="addNewDataSidebar" @closeSidebar="toggleDataSidebar" @viewSidebar="viewData" :data="sidebarData" />
        <data-view-sidebar :isSidebarActive="addViewDataSidebar" @closeSidebar="toggleEditDataSidebar" @editSidebar="editData" @addDealData="addDealData" :data="sidebarData" />
		<div id="data-list-list-view" class="data-list-container">

			<vs-table ref="table" pagination :max-items="itemsPerPage" :data="leads" @selected="(tr) => viewData(tr)">

                <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

                    <div class="flex flex-wrap items-center data-list-btn-container action-container">
                        <div class="vx-row m-0">
                            <div class="vx-col w-1/2 table-title p-0">
                                Lista de Leads
                            </div>
                            <div class="vx-col w-1/2 p-0">
                                <div class="btn-add-new p-2 mb-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary add-button" @click="addNewData">
                                    <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
                                    <span class="ml-2 text-primary">Adicionar Lead</span>
                                </div>
                            </div>
                        </div>
                        <div class="rx-row justify-content-end filter-container mb-6 mt-3">
                            <div class="vx-col w-full flex-wrap">
                                <date-picker
                                    v-model="filterDate"
                                    :editable="false"
                                    lang="pt-br"
                                    range
                                    placeholder="Todos as datas">
                                </date-picker>

                                <v-select
                                    class="origin-filter ml-3"
                                    multiple
                                    :options="[]"
                                    placeholder="Todos as responsável"/>

                                <v-select
                                    class="origin-filter"
                                    multiple
                                    :options="originStatus"
                                    v-model="filterOrigin"
                                    placeholder="Todos as origens"/>

                            </div>
                        </div>

                        <div class="rx-row filter-container d-flex mb-8">
                            <div class="vx-col w-1/2 d-flex">
                                <div class="action-button font-light" @click="selectAll">
                                    <feather-icon icon="CornerLeftDownIcon" svgClasses="h-3 w-3" />
                                    <span class="ml-1">Selecionar todos</span>
                                </div>

                                <div class="action-button font-light ml-6" @click="deleteData">
                                    <feather-icon icon="Trash2Icon" svgClasses="h-3 w-3" />
                                    <span class="ml-1">Excluir</span>
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

                <template slot="thead">
                    <vs-th sort-key="checkbox"></vs-th>
                    <vs-th sort-key="contact">Contato</vs-th>
                    <vs-th sort-key="email">Email</vs-th>
                    <vs-th sort-key="telephone">Telefone</vs-th>
                    <vs-th sort-key="origin">Origem</vs-th>
                    <vs-th sort-key="create">Criação</vs-th>
                    <vs-th sort-key='reponsible'>Responsável</vs-th>
                    <vs-th></vs-th>
                </template>

				<template slot-scope="{data}">
                    <tbody>
                        <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                            <td class="td-check" >
                                <vs-checkbox
                                    :value="selected.find(item => item.id === tr.id) ? true : false"
                                    @click.stop="(e) => selectRow(e,tr)">
                                </vs-checkbox>
                            </td>
                            <vs-td>
                                <p class="lead-name font-medium truncate">{{ tr.contact }}</p>
                            </vs-td>

                            <vs-td>
                                <p class="lead-name font-medium truncate">{{ tr.email }}</p>
                            </vs-td>

                            <vs-td>
                                <p class="lead-name font-medium truncate">{{ tr.telephone }}</p>
                            </vs-td>

                            <vs-td>
                                <vs-chip :color="getOriginStatusColor(tr.origin)">{{ originStatus.find(x => x.value === tr.origin).label }}</vs-chip>
                            </vs-td>

                            <vs-td>
                                <p class="lead-name font-medium truncate">{{ formatDateTime(tr.created_at) }}</p>
                            </vs-td>

                            <vs-td class="img-container">
                                <img :src="activeUserInfo.photoURL" class="rounded-full product-img" />
                            </vs-td>

                            <vs-td class="whitespace-no-wrap">
                                <feather-icon icon="ChevronRightIcon" svgClasses="w-5 h-5 text-primary stroke-current" @click.stop="viewData(tr)" />
                            </vs-td>

                        </vs-tr>
                    </tbody>
				</template>
			</vs-table>
		</div>
	</vx-card>
</template>

<script>
import DataViewSidebar from './DataViewSidebar.vue'
import DataEditSidebar from './DataEditSidebar.vue'
import DealEditSidebar from '../deal/DealEditSidebar'
import moduleLead from "@/store/lead/moduleLead.js"
import DatePicker from 'vue2-datepicker';
import vSelect from 'vue-select'
import 'vue2-datepicker/index.css';

export default {
  components: {
      DataViewSidebar,
      DataEditSidebar,
      DealEditSidebar,
      DatePicker,
      'v-select': vSelect,
  },
  data() {
    return {
        selected: [],
        itemsPerPage: 20,
        isMounted: false,
        addNewDealDataSidebar: false,
        addNewDataSidebar: false,
        addViewDataSidebar: false,
        sidebarData: {},
        viewbarData: {},
        filterDate: [],
        filterOrigin: [],
    }
  },
  computed: {
    currentPage() {
      if(this.isMounted) {
        return this.$refs.table.currentx
      }
      return 0
    },
    leads() {
        let filter_origin = []
        this.filterOrigin.forEach((item) => {
            filter_origin.push(item.value)
        })
        this.$store.commit('lead/SET_FILTER_ORIGIN',filter_origin)
        this.$store.commit('lead/SET_FILTER_DATE',this.filterDate)
        return this.$store.getters['lead/filteredLeads']
    },
    originStatus() {
        return this.$store.state.initialSelectData.originStatus;
    },
    queriedItems() {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.leads.length
    },
    activeUserInfo() {
      return this.$store.state.AppActiveUser
    }
  },
  methods: {
    addNewData() {
      this.sidebarData = {}
      this.toggleDataSidebar(true)
    },
    deleteData() {
        let selectedIds = []
        this.selected.forEach((item) => {
            selectedIds.push(item.id)
        })
        this.$http.post('/api/lead/delete',{ ids:selectedIds })
        .then(response => {
            if(response.data.status) {
                this.$store.commit('lead/SET_LEADS',response.data.lead_list)
                this.selected = []
                this.$vs.notify({
                    title: 'Lead Operation',
                    text: 'Leads deleted successfully!',
                    color: 'success',
                    iconPack: 'feather',
                    icon:'icon-check'
                })
            }
            else {
                this.$vs.notify({
                    title: 'Lead Operation',
                    text: 'Deleting leads failed',
                    color: 'danger',
                    iconPack: 'feather',
                    icon:'icon-alert-circle'
                })
            }
        })
        .catch(error => {
            this.$vs.notify({
                title: 'Lead Operation',
                text: error,
                color: 'danger',
                iconPack: 'feather',
                icon:'icon-alert-circle'
            })
        })
    },
    addDealData(data) {
        this.sidebarData = data
        this.toggleDealDataSidebar(true)
    },
    editData(data) {
      this.sidebarData = data
      this.toggleDataSidebar(true)
    },
    viewData(data) {
      this.sidebarData = data
      this.toggleEditDataSidebar(true)
    },
    getOriginStatusColor(status) {
      if(status == '1') return "success"
      if(status == '2') return "warning"
      if(status == '3') return "danger"
      return "primary"
    },
    toggleDataSidebar(val=false) {
        this.addNewDataSidebar = val
    },
    toggleEditDataSidebar(val=false) {
      this.addViewDataSidebar = val
    },
    toggleDealDataSidebar(val=false) {
        this.addNewDealDataSidebar = val
    },
    selectAll() {
        if(this.selected.length == this.leads.length)
            this.selected = []
        else
            this.selected = this.leads
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
    if(!moduleLead.isRegistered) {
      this.$store.registerModule('lead', moduleLead)
      moduleLead.isRegistered = true
    }

    this.$http.post('/api/leads')
        .then(response => {
            if(response.data.status) {
                this.$store.commit('lead/SET_LEADS',response.data.lead_list)
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
.leads-container {
    border-radius: 0px;
}
.add-button {
    max-width: 10rem;
    font-size: .9rem !important;
    border-radius: 2rem !important;
}
#data-list-list-view {
    .filter-container {
        width: 100%;
        .mx-input {
            &:hover , &:focus{
                border: 1px solid rgb(var(--vs-primary));
            }
        }
        .origin-filter {
            min-width: 220px;
            float: right;
        }
    }
    .action-container {
        width: 100%;
        .vx-row {
            width: 100%;;
        }
        .add-button {
            max-width: 10rem;
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

    .lead-name {
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
