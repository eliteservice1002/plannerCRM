(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"80l7":function(t,n,i){var a=i("zCjO");"string"==typeof a&&(a=[[t.i,a,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};i("aET+")(a,e);a.locals&&(t.exports=a.locals)},Xfsv:function(t,n,i){"use strict";i.r(n);var a={data:function(){return{url:""}},mounted:function(){1===this.$route.query.id?this.url="https://app.powerbi.com/view?r=eyJrIjoiNmU5N2IxZDItZDY5MS00YjRkLThiYmItNWVlZDQ2MTk3YTFiIiwidCI6Ijc0ZTU3ZDhjLWU4NGQtNGRjZS04ZWMyLTdlMjMwZmUzYTc0NiJ9":3===this.$route.query.id&&(this.url="https://app.powerbi.com/view?r=eyJrIjoiZWViMDM1MTUtNjg4MS00YWU5LWI1OTgtZWE3ZDM1ZGYxNmZkIiwidCI6Ijc0ZTU3ZDhjLWU4NGQtNGRjZS04ZWMyLTdlMjMwZmUzYTc0NiJ9")},computed:{windowWidth:function(){return this.$store.state.windowWidth-56}}},e=(i("cVqS"),i("KHd+")),r=Object(e.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("iframe",{attrs:{title:"PowerBI",src:this.url,width:this.windowWidth,height:"750"}})}),[],!1,null,null,null);n.default=r.exports},cVqS:function(t,n,i){"use strict";var a=i("80l7");i.n(a).a},zCjO:function(t,n,i){(t.exports=i("I1BE")(!1)).push([t.i,"[dir] .deals-container {\n  border-radius: 0px;\n}\n.add-button {\n  max-width: 10rem;\n  font-size: 0.9rem !important;\n}\n[dir] .add-button {\n  border-radius: 2rem !important;\n}\n#data-list-deal-view .funil-container .funil-title {\n  color: #424242;\n  font-size: 1.4rem;\n  font-weight: 300;\n}\n[dir] #data-list-deal-view .funil-container .funil-add-button {\n  text-align: center;\n  border: 2px solid lightgrey;\n  background: #fafafa;\n  border-radius: 2rem;\n  padding-top: 3px;\n  cursor: pointer;\n}\n[dir] #data-list-deal-view .funil-container .vs-list--item {\n  background: #f7f7f9;\n  border-top: 1px solid rgba(0, 0, 0, 0.08);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n[dir=ltr] #data-list-deal-view .funil-container .vs-list--item {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem;\n  border-left: 2px solid rgba(var(--vs-primary), 1);\n}\n[dir=rtl] #data-list-deal-view .funil-container .vs-list--item {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem;\n  border-right: 2px solid rgba(var(--vs-primary), 1);\n}\n[dir] #data-list-deal-view .funil-container .vs-list--item .drag-icon {\n  padding: 13px;\n  padding-bottom: 19px;\n  padding-top: 0px;\n}\n#data-list-deal-view .funil-container .vs-list--item .vs-list--subtitle {\n  color: #727272;\n  font-weight: lighter;\n}\n#data-list-deal-view .funil-container .vs-list--item .vs-list--title {\n  font-weight: normal;\n}\n#data-list-deal-view .filter-container {\n  width: 100%;\n}\n#data-list-deal-view .filter-container .mx-input {\n  height: 37px;\n}\n[dir] #data-list-deal-view .filter-container .mx-input:hover, [dir] #data-list-deal-view .filter-container .mx-input:focus {\n  border: 1px solid rgb(var(--vs-primary));\n}\n#data-list-deal-view .filter-container .origin-filter {\n  min-width: 220px;\n}\n[dir=ltr] #data-list-deal-view .filter-container .origin-filter {\n  float: right;\n}\n[dir=rtl] #data-list-deal-view .filter-container .origin-filter {\n  float: left;\n}\n#data-list-deal-view .filter-container .switch-button-left-active {\n  max-width: 77px;\n  color: white;\n  display: flex;\n}\n[dir] #data-list-deal-view .filter-container .switch-button-left-active {\n  background: rgba(var(--vs-primary), 1) !important;\n  cursor: pointer;\n  margin-bottom: 1rem;\n  padding: 0.3rem 0.5rem;\n}\n[dir=ltr] #data-list-deal-view .filter-container .switch-button-left-active {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n[dir=rtl] #data-list-deal-view .filter-container .switch-button-left-active {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n#data-list-deal-view .filter-container .switch-button-left {\n  max-width: 77px;\n  color: #626262;\n  display: flex;\n}\n[dir] #data-list-deal-view .filter-container .switch-button-left {\n  background: white !important;\n  border: 1px solid #bdbdbd !important;\n  cursor: pointer;\n  margin-bottom: 1rem;\n  padding: 0.3rem 0.5rem;\n}\n[dir=ltr] #data-list-deal-view .filter-container .switch-button-left {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  border-right: none;\n}\n[dir=rtl] #data-list-deal-view .filter-container .switch-button-left {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border-left: none;\n}\n#data-list-deal-view .filter-container .switch-button-right-active {\n  max-width: 77px;\n  color: white;\n  display: flex;\n}\n[dir] #data-list-deal-view .filter-container .switch-button-right-active {\n  background: rgba(var(--vs-primary), 1) !important;\n  cursor: pointer;\n  margin-bottom: 1rem;\n  padding: 0.3rem 0.5rem;\n}\n[dir=ltr] #data-list-deal-view .filter-container .switch-button-right-active {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n[dir=rtl] #data-list-deal-view .filter-container .switch-button-right-active {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n#data-list-deal-view .filter-container .switch-button-right {\n  max-width: 77px;\n  color: #626262;\n  display: flex;\n}\n[dir] #data-list-deal-view .filter-container .switch-button-right {\n  background: white !important;\n  border: 1px solid #bdbdbd !important;\n  cursor: pointer;\n  margin-bottom: 1rem;\n  padding: 0.3rem 0.5rem;\n}\n[dir=ltr] #data-list-deal-view .filter-container .switch-button-right {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border-left: none;\n}\n[dir=rtl] #data-list-deal-view .filter-container .switch-button-right {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  border-right: none;\n}\n#data-list-deal-view .filter-sub-container {\n  place-content: flex-end;\n}\n#data-list-deal-view .action-container {\n  width: 100%;\n}\n#data-list-deal-view .action-container .vx-row {\n  width: 100%;\n}\n#data-list-deal-view .action-container .add-button {\n  max-width: 12rem;\n  font-size: 0.9rem !important;\n}\n[dir] #data-list-deal-view .action-container .add-button {\n  border-radius: 1rem !important;\n}\n[dir=ltr] #data-list-deal-view .action-container .add-button {\n  float: right;\n}\n[dir=rtl] #data-list-deal-view .action-container .add-button {\n  float: left;\n}\n#data-list-deal-view .action-container .table-title {\n  font-size: 1.5rem;\n}\n#data-list-deal-view .action-container .mx-datepicker-range {\n  width: 220px;\n}\n#data-list-deal-view .action-container .action-button {\n  font-size: 0.8rem;\n}\n[dir] #data-list-deal-view .action-container .action-button {\n  cursor: pointer;\n}\n#data-list-deal-view .action-container .action-button:hover {\n  color: rgb(var(--vs-primary));\n}\n@media (max-width: 461px) {\n#data-list-deal-view .vs-con-table .items-per-page-handler {\n    display: none;\n}\n}\n@media (max-width: 341px) {\n#data-list-deal-view .vs-con-table .data-list-btn-container {\n    width: 100%;\n}\n#data-list-deal-view .vs-con-table .data-list-btn-container .dd-actions,\n#data-list-deal-view .vs-con-table .data-list-btn-container .btn-add-new {\n    width: 100%;\n}\n[dir=ltr] #data-list-deal-view .vs-con-table .data-list-btn-container .dd-actions, [dir=ltr] #data-list-deal-view .vs-con-table .data-list-btn-container .btn-add-new {\n    margin-right: 0 !important;\n}\n[dir=rtl] #data-list-deal-view .vs-con-table .data-list-btn-container .dd-actions, [dir=rtl] #data-list-deal-view .vs-con-table .data-list-btn-container .btn-add-new {\n    margin-left: 0 !important;\n}\n}\n#data-list-deal-view .vs-con-table .deal-name {\n  max-width: 23rem;\n}\n#data-list-deal-view .vs-con-table .vs-table--header {\n  display: flex;\n  flex-wrap: wrap;\n}\n[dir=ltr] #data-list-deal-view .vs-con-table .vs-table--header {\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n}\n[dir=rtl] #data-list-deal-view .vs-con-table .vs-table--header {\n  margin-right: 1.5rem;\n  margin-left: 1.5rem;\n}\n#data-list-deal-view .vs-con-table .vs-table--header > span {\n  display: flex;\n  flex-grow: 1;\n}\n#data-list-deal-view .vs-con-table .vs-table {\n  border-collapse: separate;\n  border-spacing: 0 0.2rem;\n}\n[dir] #data-list-deal-view .vs-con-table .vs-table {\n  padding: 0 1rem;\n}\n#data-list-deal-view .vs-con-table .vs-table tr {\n  color: #6c6c6c;\n}\n[dir] #data-list-deal-view .vs-con-table .vs-table tr {\n  background-color: #f7f7f9;\n}\n[dir] #data-list-deal-view .vs-con-table .vs-table tr td {\n  padding: 8px;\n}\n[dir=ltr] #data-list-deal-view .vs-con-table .vs-table tr td:first-child {\n  border-top-left-radius: 0.1rem;\n  border-left: 2px solid rgba(var(--vs-primary), 1);\n}\n[dir=rtl] #data-list-deal-view .vs-con-table .vs-table tr td:first-child {\n  border-top-right-radius: 0.1rem;\n  border-right: 2px solid rgba(var(--vs-primary), 1);\n}\n#data-list-deal-view .vs-con-table .vs-table tr td.img-container span {\n  display: flex;\n  justify-content: flex-start;\n}\n#data-list-deal-view .vs-con-table .vs-table tr td.img-container .product-img {\n  height: 30px;\n}\n[dir] #data-list-deal-view .vs-con-table .vs-table tr td.td-check {\n  padding: 8px !important;\n}\n#data-list-deal-view .vs-con-table .vs-table tr td.td-check .vs-checkbox {\n  width: 15px;\n  height: 15px;\n}\n[dir] #data-list-deal-view .vs-con-table .vs-table tr:hover {\n  transform: translateY(0px);\n}\n[dir] #data-list-deal-view .vs-con-table .vs-table--thead th {\n  padding-top: 0;\n  padding-bottom: 15px;\n}\n#data-list-deal-view .vs-con-table .vs-table--thead th .vs-table-text {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.4);\n}\n#data-list-deal-view .vs-con-table .vs-table--thead th.td-check {\n  display: table-column;\n}\n[dir] #data-list-deal-view .vs-con-table .vs-table--thead th.td-check {\n  padding: 0 15px !important;\n}\n[dir] #data-list-deal-view .vs-con-table .vs-table--thead tr {\n  background: none;\n  box-shadow: none;\n}\n#data-list-deal-view .vs-con-table .vs-table--pagination {\n  justify-content: center;\n}",""])}}]);