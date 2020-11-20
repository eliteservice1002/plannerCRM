<!-- =========================================================================================
  File Name: DataListListView.vue
  Description: Data List - List View
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <iframe title="PowerBI" src="https://app.powerbi.com/view?r=eyJrIjoiZWViMDM1MTUtNjg4MS00YWU5LWI1OTgtZWE3ZDM1ZGYxNmZkIiwidCI6Ijc0ZTU3ZDhjLWU4NGQtNGRjZS04ZWMyLTdlMjMwZmUzYTc0NiJ9" :width='windowWidth' height="750"></iframe>
</template>

<script>

export default {
    computed: {
        windowWidth(){ return this.$store.state.windowWidth-56 }
    },
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
