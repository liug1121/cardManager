<template>
    <div class="page">
        <div class="opt">
            <div class="opt-control">
                <div class="opt-control-menu">
                    <div class="unselect" :class="{selected: buttonIndex == 0}" @click="buttonIndex = 0">代理商</div>
                    <div  class="unselect" :class="{selected: buttonIndex == 1}" @click="buttonIndex = 1">导入</div>
                    <div  class="unselect" :class="{selected: buttonIndex == 2}" @click="buttonIndex = 2">单卡</div>
                    <div  class="unselect" :class="{selected: buttonIndex == 3}" @click="buttonIndex = 3">位置</div>
                </div>
                <div class="opt-control-input" v-if="buttonIndex==0">
                    <channelSelect :multiple="false" style="width:120px !important" @channelSelectId="channelSelectId"></channelSelect>
                    <div class="date">
                        <el-date-picker v-model="lbsStartDate" class="date-sel" type="date" placeholder="开始日期" value-format="yyyy-MM-dd" @change="startTimeChange">
                        </el-date-picker>
                    </div>
                    <div class="date">
                        <el-date-picker v-model="lbsEndDate" class="date-sel"  type="date" placeholder="结束日期" value-format="yyyy-MM-dd" @change="endTimeChange">
                        </el-date-picker>
                    </div>
                    <div @click="okForChannel">确  定</div>
                </div>
                <div class="opt-control-input" v-if="buttonIndex==1">导入input</div>
                <div class="opt-control-input" v-if="buttonIndex==2">
                    <input v-model="iccid">
                    <div class="date">
                        <el-date-picker v-model="lbsIccidStartDate" class="date-sel" type="date" placeholder="开始日期" value-format="yyyy-MM-dd" @change="startIccidTimeChange">
                        </el-date-picker>
                    </div>
                    <div class="date">
                        <el-date-picker v-model="lbsIccidEndDate" class="date-sel"  type="date" placeholder="结束日期" value-format="yyyy-MM-dd" @change="endIccidTimeChange">
                        </el-date-picker>
                    </div>
                    <div @click="okForIccid">确  定</div>
                </div>
                <div class="opt-control-input" v-if="buttonIndex==3">
                    <el-form :inline="true" >
                        <el-form-item label="省份" class="queryFormItem">
                            <el-select class="queryFormInput" v-model="provinceId"  clearable filterable placeholder="请选择省份" @change="provinceChange">
                                <el-option v-for="item in provinceOptions" :key="item.provinceId" :label="item.provinceName" :value="item.provinceId"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="城市" class="queryFormItem">
                            <el-select class="queryFormInput" v-model="cityId"  clearable filterable placeholder="请选择城市名">
                                <el-option v-for="item in PoisCitiesList" :key="item.id" :label="item.name" :value="item.id"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                    <div class="date">
                        <el-date-picker v-model="lbsAreaStartDate" class="date-sel" type="date" placeholder="开始日期" value-format="yyyy-MM-dd" @change="startAreaTimeChange">
                        </el-date-picker>
                    </div>
                    <div class="date">
                        <el-date-picker v-model="lbsAreaEndDate" class="date-sel"  type="date" placeholder="结束日期" value-format="yyyy-MM-dd" @change="endAreaTimeChange">
                        </el-date-picker>
                    </div>
                    <div @click="okForPosition">确  定</div>
                </div>
            </div>
            <!-- <div class="opt-list">
                    <cardinfos message ="template组件之Template标签"></cardinfos>
            </div> -->
        </div>
        <div class="map">
            <div class="map-menu">
                <div class="unselectmap" :class="{selectedmap: mapButtionIndex == 0}" @click="mapButtionIndex = 0">学霸卡</div>
                <div class="unselectmap" :class="{selectedmap: mapButtionIndex == 1}" @click="mapButtionIndex = 1">大流量卡</div>
                <div class="unselectmap" :class="{selectedmap: mapButtionIndex == 2}" @click="mapButtionIndex = 2">NB</div>
                <div class="unselectmap" :class="{selectedmap: mapButtionIndex == 3}" @click="mapButtionIndex = 3">5G</div>
                <div class="unselectmap" :class="{selectedmap: mapButtionIndex == 4}" @click="mapButtionIndex = 4">CAT</div>
            </div>
            <div >
                <!-- cityLatitude":"31.32751","cityLongitude":"118.8921"} -->
                <!-- v-for="(staticsData,index) in staticsDatas" :key="index" -->
                <!-- :scroll-wheel-zoom="true" -->
                <!-- animation="BMAP_ANIMATION_BOUNCE" -->
               <baidu-map v-if="mapLevel == 0" center="陕西" :zoom="mapZoom"  class="bm-view" ak="rCAAQCyHBVNql3q409XlwT6FPP2kx2OF" >
                    <bm-marker v-for="(staticsData,index) in staticsDatas" :key="index" :position="{lng: staticsData.cityLongitude, lat: staticsData.cityLatitude}" :dragging="true"
                    @click="markerClick(staticsData)" >
                        <bm-label :content="staticsData.num" :labelStyle="{color: 'red', fontSize : '12px'}" :offset="{width: -35, height: 30}"/>
                    </bm-marker>
               </baidu-map>
               <!-- {"iccid":"89860619050066513689","lbsTime":"2021-06-13 05:31:05","address":"黑龙江省哈尔滨市呼兰区","cityId":4535,"cityName":null,"phone":"1064656676368","latitude":"45.88899","longitude":"126.58796"} -->
               <baidu-map v-if="mapLevel == 1" :center="centerCity" :zoom="mapZoom"  class="bm-view" ak="rCAAQCyHBVNql3q409XlwT6FPP2kx2OF" >
                    <bm-marker v-for="(staticsDetail,index) in staticsDetails" :key="index" :position="{lng: staticsDetail.longitude, lat: staticsDetail.latitude}" :dragging="true" @click="showIccid(staticsDetail.iccid)">
                        <bm-label :content="staticsDetail.address" :labelStyle="{color: 'red', fontSize : '12px'}" :offset="{width: -35, height: 30}"/>
                    </bm-marker>
                    <bm-polyline :path="polylinePath" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" :editing="false" @lineupdate="updatePolylinePath"></bm-polyline>
               </baidu-map>
            </div>
        </div>
    </div>
</template>

<script>
import { BaiduMap,BmMarker,BmLabel,BmPolyline} from 'vue-baidu-map';
import cardinfos from "./list.vue"
import channelSelect from './../../sale/channelSelect'
import API from 'api/dataMoniting'
export default {
  components: {
      cardinfos,
      BaiduMap,
      BmMarker,
      BmLabel,
      BmPolyline,
      channelSelect
      
  },
  data () {
    return {
      buttonIndex:0,
      mapButtionIndex:0,
      center: {lng: 0, lat: 0},
      zoom: 3,
      show: false,
      staticsDatas:[],
      staticsDetails:[],
      channels:[],
      channelId:-1,
      lbsStartDate:'',
      lbsEndDate:'',
      lbsAreaStartDate:'',
      lbsAreaEndDate:'',
      iccid:'',
      lbsIccidStartDate:'',
      lbsIccidEndDate:'',
      mapZoom:5,
      mapLevel:0,
      centerCity:'',
      PoisCitiesList:[],
      provinceOptions:[],
      provinceId:'',
      cityId:'',
      polylinePath:[]
    };
  },
  created(){
      this.getprovinceOptions()
    //   let resq = {}
    //   resq.channelId = 26
    //   resq.startDate = '2021-06-13 00:00:00'
    //   resq.endDate = '2021-06-13 23:59:59'
    //   API.apiChannelLbsInfo(resq).then(res => {
    //     //   console.log(JSON.stringify(res))
    //     if(res.resultCode == 0){
    //         this.staticsDatas = res.data
    //         console.log(JSON.stringify(this.staticsDatas))
    //     }else{
    //         this.$message.error(res.resultInfo)
    //     }
    //   })
  },
  mounted () {

  },
  methods: {
    updatePolylinePath (e) {
        console.log('sdsdsds  updatePolylinePath')
      this.polylinePath = e.target.getPath()
    },
    provinceChange (vId) {
      let obj = {};
      obj = this.provinceOptions.find((item) => { // 这里的userList就是上面遍历的数据源
        return item.provinceId === vId; // 筛选出匹配数据
      });
      // console.log(obj.provinceId);
      // console.log(obj.provinceName); // 这边的name就是对应label
      this.getPoisCitiesList(obj.provinceId)
    },
    getPoisCitiesList (provinceId) {
      const data = {
        provinceId: provinceId
      }
      API.apiPoisCitiesList(data).then(res => {
        if (res.resultCode === 0) {
          this.PoisCitiesList = res.data
          console.log(this.PoisCitiesList);
        } else {
          this.$message.error(res.resultInfo)
        }
      })
    },
    getprovinceOptions () {
      API.apiProvincesList().then(res => {
        if (res.resultCode === 0) {
          this.provinceOptions = res.data
          const provinceId = this.provinceOptions[0].provinceId
          this.getPoisCitiesList(provinceId)
        } else {
          this.$message.error(res.resultInfo)
        }
      })
    },
    okForPosition:function(){
        let resq = {}
        resq.provinceId = this.provinceId
        resq.cityId = this.cityId
        resq.startDate = this.lbsAreaStartDate
        resq.endDate = this.lbsAreaEndDate
         API.apiAreaLbsInfo(resq).then(res => {
             if(res.resultCode == 0){
                this.staticsDatas = res.data
                console.log(JSON.stringify(this.staticsDatas))
            }else{
                this.$message.error(res.resultInfo)
            }
         });
    //     private Integer provinceId;
	// private Integer cityId;
	// private String startDate;
	// private String endDate;
        // apiAreaLbsInfo
    },
    okForIccid : function(){
       this.mapLevel = 1
        this.mapZoom = 6
        let resq = {}
        resq.iccid = this.iccid
        resq.startDate = this.lbsIccidStartDate
        resq.endDate = this.lbsIccidEndDate
        API.apiIccidLbsInfo(resq).then(res => {
            if(res.resultCode == 0){
                this.staticsDetails = res.data
                this.centerCity = res.resultInfo
                for(let i = 0; i < this.staticsDetails.length;i++){
                    let onePoint = {}
                    onePoint.lng = this.staticsDetails[i].longitude
                    onePoint.lat = this.staticsDetails[i].latitude
                    this.polylinePath.push(onePoint)
    //                 private String iccid;
	// private String lbsTime;
	// private String address;
	// private Integer cityId;
	// private String cityName;
	// private String phone;
	// private String latitude;
	// private String longitude;
                }

                //   polylinePath: [
    //     {lng: 116.404, lat: 39.915},
    //     {lng: 116.405, lat: 39.920},
    //     {lng: 116.423493, lat: 39.907445}
    //   ]
            }else{
                this.$message.error(res.resultInfo)
            }
        })
    }, 
    okForChannel:function(){
        let resq = {}
        resq.channelId = this.channelId
        resq.startDate = this.lbsStartDate
        resq.endDate = this.lbsEndDate
        API.apiChannelLbsInfo(resq).then(res => {
            if(res.resultCode == 0){
                this.staticsDatas = res.data
                console.log(JSON.stringify(this.staticsDatas))
            }else{
                this.$message.error(res.resultInfo)
            }
        })
    },
    startTimeChange () {
      this.lbsStartDate = `${this.lbsStartDate} 00:00:00`
    },
    endTimeChange () {
      this.lbsEndDate = `${this.lbsEndDate} 23:59:59`
    },
    startAreaTimeChange () {
      this.lbsAreaStartDate = `${this.lbsAreaStartDate} 00:00:00`
    },
    endAreaTimeChange () {
      this.lbsAreaEndDate = `${this.lbsAreaEndDate} 23:59:59`
    },
    startIccidTimeChange () {
      this.lbsIccidStartDate = `${this.lbsIccidStartDate} 00:00:00`
    },
    endIccidTimeChange () {
      this.lbsIccidEndDate = `${this.lbsIccidEndDate} 23:59:59`
    },
    showIccid:function(iccid){
        alert('iccid:' + iccid)
    },
    markerClick:function(staticsData){
        console.log('markerClick clicked')
        this.mapLevel = 1
        this.mapZoom = 6
        let resq = {}
        resq.cityId = staticsData.cityId
        if(this.channelId != -1){
            resq.channelId = this.channelId
        }  
        if(this.buttonIndex==0){
            resq.startDate = this.lbsStartDate
            resq.endDate = this.lbsEndDate
        }else if(this.buttonIndex == 3){
            resq.startDate = this.lbsAreaStartDate
            resq.endDate = this.lbsAreaEndDate
        }
        
        API.apiChannelLbsDetails(resq).then(res => {
            if(res.resultCode == 0){
                console.log(JSON.stringify(res))
                this.staticsDetails = res.data
                this.centerCity = res.resultInfo
            }
        })
    },
    channelSelectId (channelSelectId) {
      this.channelId = channelSelectId
      this.mapLevel = 0
      this.mapZoom = 5
    },
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    },
    infoWindowClose () {
      this.show = false
    },
    infoWindowOpen () {
      this.show = true
    }
  }
};
</script>
<style scoped>
.page{
    margin: 10px;
    height: 1000px;
    display: flex;
}
.opt{
    flex:1;
    background: gray;
}
.map{
    flex:4;
    background: green;
}
.opt-control{
    height: 30%;
    background: sienna;
    display: flex;
}
.opt-list{
    height: 70%;
    background: red;
}
.opt-control-menu{
    flex: 1;
    background: steelblue;
}
.opt-control-input{
    flex: 3;
    background:tan
}
.unselect{
    height: 40px;
    border: 1px solid #ddd;
    text-align: left;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    line-height:40px;
}

.selected{
    height: 40px;
    border: 1px solid #ddd;
    text-align: left;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    line-height:40px;
    background: black;
    color: white;
}

.unselectmap{
    height: 40px;
    border: 1px solid #ddd;
    text-align: center;
    line-height:40px;
    width: 70px;
    background: coral;
}

.selectedmap{
    height: 40px;
    border: 1px solid #ddd;
    text-align: center;
    line-height:40px;
    background: black;
    color: white;
    width: 70px;
}
.map-menu{
    display: flex;
}
.bm-view {
  width: 95%;
  height: 900px;
  margin: 20px;
  margin-left: 10%;
}
.date{
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
}
.date-sel{
    width:150px;
    height: 10px;
    font-size: 10px;
    
}
</style>
