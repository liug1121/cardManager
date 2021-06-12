(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ee6b6b7"],{"365c":function(t,e,o){"use strict";o.d(e,"b",(function(){return l})),o.d(e,"a",(function(){return s}));o("d3b7");var a=o("bc3a"),r=o.n(a);r.a.defaults.timeout=5e5,r.a.defaults.headers.post["Content-Type"]="application/json",r.a.interceptors.request.use((function(t){return t.headers.token=window.sessionStorage.getItem("token"),t}),(function(t){return Promise.reject(t)})),r.a.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)}));var l=function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.a.post(t,e,o).then((function(t){return t.data}))},s=function(t,e){return r.a.get(t,{params:e}).then((function(t){return t.data}))}},4177:function(t,e,o){},"59e6":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"box_subject"},[o("el-card",{staticClass:"all_list"},[o("el-form",{ref:"queryCardStockFormRef",attrs:{inline:!0,model:t.queryCardStockFormModel}},[o("el-form-item",{staticClass:"queryFormItem",attrs:{label:"卡号码"}},[o("el-input",{staticClass:"queryFormInput",staticStyle:{width:"150px"},attrs:{clearable:"",placeholder:"请输入卡号码"},model:{value:t.queryCardStockFormModel.cardNo,callback:function(e){t.$set(t.queryCardStockFormModel,"cardNo",e)},expression:"queryCardStockFormModel.cardNo"}})],1),o("el-form-item",{staticClass:"queryFormItem",attrs:{label:"ICCID"}},[o("el-input",{staticClass:"queryFormInput",staticStyle:{width:"210px"},attrs:{clearable:"",placeholder:"请输入ICCID"},model:{value:t.queryCardStockFormModel.iccid,callback:function(e){t.$set(t.queryCardStockFormModel,"iccid",e)},expression:"queryCardStockFormModel.iccid"}})],1),o("el-form-item",{staticClass:"queryFormItem",attrs:{label:"档位"}},[o("el-select",{staticClass:"queryFormInput",attrs:{clearable:"",placeholder:"请选择档位"},model:{value:t.queryCardStockFormModel.level,callback:function(e){t.$set(t.queryCardStockFormModel,"level",e)},expression:"queryCardStockFormModel.level"}},t._l(t.gearPositionOptions,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),o("el-form-item",{staticClass:"queryFormItem",attrs:{label:"卡状态"}},[o("el-select",{staticClass:"queryFormInput",attrs:{clearable:"",placeholder:"请选择卡状态"},model:{value:t.queryCardStockFormModel.status,callback:function(e){t.$set(t.queryCardStockFormModel,"status",e)},expression:"queryCardStockFormModel.status"}},t._l(t.statusOptions,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),o("el-form-item",{staticClass:"queryFormItem",attrs:{label:"卡类型"}},[o("el-select",{staticClass:"queryFormInput",attrs:{clearable:"",placeholder:"请选择卡类型"},model:{value:t.queryCardStockFormModel.cardType,callback:function(e){t.$set(t.queryCardStockFormModel,"cardType",e)},expression:"queryCardStockFormModel.cardType"}},t._l(t.cardTypeOptions,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),o("el-form-item",{staticClass:"queryFormItem",attrs:{label:"入库时间"}},[o("el-date-picker",{staticStyle:{width:"140px"},attrs:{type:"date",placeholder:"开始日期","value-format":"yyyy-MM-dd"},on:{change:t.startTimeChange},model:{value:t.queryCardStockFormModel.stockInDate,callback:function(e){t.$set(t.queryCardStockFormModel,"stockInDate",e)},expression:"queryCardStockFormModel.stockInDate"}}),o("span",{staticClass:"time-line"},[t._v("-")]),o("el-date-picker",{staticStyle:{width:"140px"},attrs:{type:"date",placeholder:"结束日期","value-format":"yyyy-MM-dd"},on:{change:t.endTimeChange},model:{value:t.queryCardStockFormModel.stockOutDate,callback:function(e){t.$set(t.queryCardStockFormModel,"stockOutDate",e)},expression:"queryCardStockFormModel.stockOutDate"}})],1),o("el-form-item",{staticClass:"queryFormItem"},[o("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-search"},on:{click:t.queryCardStock}},[t._v("查询")])],1)],1),o("div",{staticClass:"button_content"},[o("el-button",{attrs:{size:"medium",type:"primary",icon:"el-icon-download"},on:{click:t.exportCardStock}},[t._v("导出")]),o("el-button",{staticClass:"upload-btn",attrs:{slot:"trigger",size:"medium",icon:"el-icon-upload2",type:"primary"},on:{click:t.openImportModal},slot:"trigger"},[t._v("导入")])],1),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.cardStockList,border:"","max-height":"550px",align:"center","cell-style":{height:"38px",padding:0}}},t._l(t.table_column,(function(e,a){return o("el-table-column",{key:a,attrs:{prop:e.prop,label:e.label,width:e.width,align:"center",fixed:!!e.fixed&&e.fixed},scopedSlots:t._u([{key:"default",fn:function(a){return["cardTypeCL"==e.prop?o("div",[0==a.row.cardType?o("span",[t._v("学霸卡")]):o("span",[t._v("大流量卡")])]):t._e(),"storeNameCL"==e.prop?o("div",["null"===a.row.storeName?o("span",[t._v("-")]):o("span",[t._v(t._s(a.row.storeName))])]):t._e(),"statusCL"==e.prop?o("div",[1===a.row.status?o("div",[t._v("在用")]):t._e(),0===a.row.status?o("div",[t._v("可用")]):t._e(),50===a.row.status?o("div",[t._v("停用")]):t._e()]):t._e(),"operation"==e.prop?o("div",[50===a.row.status?o("el-button",{attrs:{size:"mini",type:"warning",plain:""},on:{click:function(e){return t.deactivation(a.row,0)}}},[t._v("启用")]):o("el-button",{attrs:{size:"mini",type:"danger",plain:""},on:{click:function(e){return t.deactivation(a.row,50)}}},[t._v("停用")])],1):o("div",[o("div",{domProps:{innerHTML:t._s(a.row[e.prop])}})])]}}],null,!0)})})),1),o("el-pagination",{attrs:{"current-page":t.page,"page-sizes":[10,20,30],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),o("ImportModal",{ref:"ImportModal",attrs:{cardTypeOptions:t.cardTypeOptions,honeycombOptions:t.honeycombOptions},on:{ImportModalSuccess:t.ImportModalSuccess}})],1)],1)},r=[],l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-dialog",{attrs:{title:"文件导入",visible:t.dialogVisible,width:"412px","close-on-click-modal":!1,"destroy-on-close":!0},on:{"update:visible":function(e){t.dialogVisible=e}}},[o("el-form",{ref:"ImportForm",attrs:{model:t.ImportForm,rules:t.ImportRules,"label-width":"120px"}},[o("el-form-item",{attrs:{label:"蜂窝平台账户",prop:"fwAccount"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",filterable:"",placeholder:"请输入蜂窝平台账户关键词"},on:{change:t.fwAccountChange},model:{value:t.ImportForm.fwAccount,callback:function(e){t.$set(t.ImportForm,"fwAccount",e)},expression:"ImportForm.fwAccount"}},t._l(t.honeycombOptions,(function(t){return o("el-option",{key:t.id,attrs:{label:t.fwAccount,value:t.id}})})),1)],1),o("el-form-item",{attrs:{label:"卡类型",prop:"cardType"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:"请选择卡类型"},model:{value:t.ImportForm.cardType,callback:function(e){t.$set(t.ImportForm,"cardType",e)},expression:"ImportForm.cardType"}},t._l(t.cardTypeOptions,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),o("el-form-item",{attrs:{label:"仓位"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:"请选择仓位"},on:{change:t.stockTypeChange},model:{value:t.ImportForm.stockType,callback:function(e){t.$set(t.ImportForm,"stockType",e)},expression:"ImportForm.stockType"}},t._l(t.storingLocationOptions,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),o("el-form",{ref:"ImportForm",attrs:{model:t.ImportForm,"label-width":"120px"}},[o("el-upload",{staticClass:"unload-demo",attrs:{accept:".xls, .xlsx",action:"#","file-list":t.fileList,"http-request":t.uploadFile}},[o("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1)],1)],1),o("div",{staticClass:"notice"},[o("p",[t._v("1、下载模板后，填写数据。ICCID、卡号为必须字段，卡号可以带86。")]),o("p",[t._v("2、如果数据存在则会报错，请注意。")]),o("p",[o("a",[t._v("下载模板文件")]),t._v(" 仅支持xlsx,xls格式的文件. ")])]),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.uploadIt()}}},[t._v("确 定")])],1)],1)},s=[],n=(o("7db0"),{data:function(){return{storingLocationOptions:[{label:"天地杰",value:"1"},{label:"友众力",value:"2"}],dialogVisible:!1,ImportForm:{fwAccount:null,cardType:null,stockType:null,file:""},fileList:[],ImportRules:{fwAccount:[{required:!0,message:"请选择蜂窝平台账户",trigger:"change"}],cardType:[{required:!0,message:"请选择卡类型",trigger:"change"}]}}},props:["cardTypeOptions","honeycombOptions"],methods:{fwAccountChange:function(t){var e={};e=this.honeycombOptions.find((function(e){return e.id===t})),this.ImportForm.fwAccount=e.fwAccount,this.ImportForm.stockType=e.openCompanyDesc},stockTypeChange:function(t){var e={};e=this.storingLocationOptions.find((function(e){return e.value===t})),this.ImportForm.stockType=e.label},uploadFile:function(t){var e=this;e.file=t.file},uploadIt:function(){var t=this;this.$refs["ImportForm"].validate((function(e){if(e){var o=t;if(o.file){var a=new FormData;a.append("file",o.file);var r=t.ImportForm.cardType,l=t.ImportForm.fwAccount,s=t.ImportForm.stockType;t.$emit("ImportModalSuccess",r,l,s,a),t.dialogVisible=!1}else o.$message.error({message:"请选择文件"})}}))}}}),i=n,c=o("2877"),u=Object(c["a"])(i,l,s,!1,null,null,null),d=u.exports,p=(o("99af"),o("365c")),m={apiCardsStocks:function(t){return p["b"]("boss/v1.0/cards/stocks",t)},apiCardInfoDetail:function(t){return p["b"]("boss/v1.0/cards/stocks/import",t)},apiFwAccountList:function(t){return p["b"]("boss/v1.0/fw/accounts",t)},apiCardStatusModify:function(t){return p["b"]("boss/v1.0/cards/status/modify",t)},apiCardsUploadAdd:function(t,e,o,a){return p["b"]("boss/v1.0/cards/upload/add?cardType=".concat(t,"&fwAccount=").concat(e,"&stockType=").concat(o),a,{headers:{"content-type":"multipart/form-data"}})}},f={components:{ImportModal:d},data:function(){return{cardStockList:[],page:1,pageSize:10,total:0,table_column:[{prop:"cardNo",label:"卡号码",width:120,fixed:"left"},{prop:"iccid",label:"ICCID",width:180},{prop:"level",label:"档位",width:70},{prop:"fwAccount",label:"蜂窝平台账号"},{prop:"storeNameCL",label:"仓位名称",width:120},{prop:"cardTypeCL",label:"卡类型",width:80},{prop:"statusCL",label:"卡状态",width:80},{prop:"area",label:"归属地",width:150},{prop:"stockInDate",label:"入库时间",width:220},{prop:"operation",label:"操作",width:130,fixed:"right"}],statusOptions:[{label:"可用",value:0},{label:"在用",value:1},{label:"已停用",value:50}],honeycombOptions:[],gearPositionOptions:[{label:"1",value:1},{label:"2",value:2},{label:"3",value:3},{label:"4",value:4}],cardTypeOptions:[{label:"学霸卡",value:0},{label:"大流量",value:1}],queryCardStockFormModel:{cardNo:null,cardType:null,iccid:null,level:null,status:null,stockInDate:null,stockOutDate:null,page:0,pageSize:10},loading:!1}},mounted:function(){this.getCardStockList(),this.gethoneycombOptions()},methods:{getCardStockList:function(){var t=this,e=this.queryCardStockFormModel;this.loading=!0,m.apiCardsStocks(e).then((function(e){0===e.resultCode?(t.cardStockList=e.data,t.total=e.rowNum,t.loading=!1):t.$message.error(e.resultInfo)}))},handleSizeChange:function(t){this.queryCardStockFormModel.pageSize=t,this.getCardStockList()},handleCurrentChange:function(t){this.queryCardStockFormModel.page=t-1,this.getCardStockList()},startTimeChange:function(){this.queryCardStockFormModel.stockInDate="".concat(this.queryCardStockFormModel.stockInDate," 00:00:00")},endTimeChange:function(){this.queryCardStockFormModel.stockOutDate="".concat(this.queryCardStockFormModel.stockOutDate," 23:59:59")},queryCardStock:function(){""===this.queryCardStockFormModel.cardNo&&(this.queryCardStockFormModel.cardNo=null),""===this.queryCardStockFormModel.cardType&&(this.queryCardStockFormModel.cardType=null),""===this.queryCardStockFormModel.iccid&&(this.queryCardStockFormModel.iccid=null),""===this.queryCardStockFormModel.level&&(this.queryCardStockFormModel.level=null),""===this.queryCardStockFormModel.status&&(this.queryCardStockFormModel.status=null),""===this.queryCardStockFormModel.stockInDate&&(this.queryCardStockFormModel.stockInDate=null),""===this.queryCardStockFormModel.stockOutDate&&(this.queryCardStockFormModel.stockOutDate=null),this.getCardStockList()},gethoneycombOptions:function(){var t=this,e={page:0,pageSize:1e3};m.apiFwAccountList(e).then((function(e){0===e.resultCode?t.honeycombOptions=e.data:t.$message.error(e.resultInfo)}))},exportCardStock:function(){},deactivation:function(t,e){var o=this,a={iccid:t.iccid,status:e};m.apiCardStatusModify(a).then((function(t){0===t.resultCode?(o.$message.success("操作成功！"),o.getCardStockList()):o.$message.error(t.resultInfo)}))},openImportModal:function(){this.$refs.ImportModal.dialogVisible=!0},ImportModalSuccess:function(t,e,o,a){var r=this;m.apiCardsUploadAdd(t,e,o,a).then((function(t){0===t.resultCode?(r.$message.success("已导入，如果无数据，可在“我的任务”中查看，id值为".concat(t.data,"，导入结果信息！")),r.getCardStockList()):r.$message.error(t.resultInfo)}))}}},y=f,h=(o("e896"),Object(c["a"])(y,a,r,!1,null,"4e43b362",null));e["default"]=h.exports},"7db0":function(t,e,o){"use strict";var a=o("23e7"),r=o("b727").find,l=o("44d2"),s=o("ae40"),n="find",i=!0,c=s(n);n in[]&&Array(1)[n]((function(){i=!1})),a({target:"Array",proto:!0,forced:i||!c},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),l(n)},e896:function(t,e,o){"use strict";var a=o("4177"),r=o.n(a);r.a}}]);
//# sourceMappingURL=chunk-1ee6b6b7.050d9597.js.map