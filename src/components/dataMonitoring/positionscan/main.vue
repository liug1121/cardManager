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
                </div>
                <div class="opt-control-input" v-if="buttonIndex==1">导入input</div>
                <div class="opt-control-input" v-if="buttonIndex==2">单卡input</div>
                <div class="opt-control-input" v-if="buttonIndex==3">位置input</div>
            </div>
            <div class="opt-list">
                    <cardinfos message ="template组件之Template标签"></cardinfos>
            </div>
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
               <baidu-map center="陕西" :zoom="mapZoom"  class="bm-view" ak="rCAAQCyHBVNql3q409XlwT6FPP2kx2OF" >
                    <bm-marker v-for="(staticsData,index) in staticsDatas" :key="index" :position="{lng: staticsData.cityLongitude, lat: staticsData.cityLatitude}" :dragging="true"
                    @click="markerClick(staticsData)" >
                        <bm-label :content="staticsData.num" :labelStyle="{color: 'red', fontSize : '12px'}" :offset="{width: -35, height: 30}"/>
                    </bm-marker>
               </baidu-map>
            </div>
        </div>
    </div>
</template>

<script>
import { BaiduMap,BmMarker,BmLabel} from 'vue-baidu-map';
import cardinfos from "./list.vue"
import channelSelect from './../../sale/channelSelect'
import API from 'api/dataMoniting'
export default {
  components: {
      cardinfos,
      BaiduMap,
      BmMarker,
      BmLabel,
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

      mapZoom:5
    };
  },
  created(){
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
    markerClick:function(staticsData){
        console.log('markerClick clicked')
    },
    channelSelectId (channelSelectId) {
      this.channelId = channelSelectId

      let resq = {}
      resq.channelId = this.channelId
      resq.startDate = '2021-06-13 00:00:00'
      resq.endDate = '2021-06-13 23:59:59'

// private Integer channelId;
// 	private String startDate;
// 	private String endDate;

      API.apiChannelLbsInfo(resq).then(res => {
        //   console.log(JSON.stringify(res))
        if(res.resultCode == 0){
            this.staticsDatas = res.data
            console.log(JSON.stringify(this.staticsDatas))
        }else{
            this.$message.error(res.resultInfo)
        }
      })
    //   let staticsData={}
    //   staticsData.provinceName = '江苏省'
    //   staticsData.provinceId = -1
    //   staticsData.cityName = '南京市'
    //   staticsData.cityId = -1
    //   staticsData.num = 10
    //   staticsData.channelId = -1
    //   staticsData.channelName = ''
    //   staticsData.startDate = ''
    //   staticsData.endDate = ''
    //   this.staticsDatas.push(staticsData)
    //   staticsData={}
    //   staticsData.provinceName = '海南省'
    //   staticsData.provinceId = -1
    //   staticsData.cityName = '海口市'
    //   staticsData.cityId = -1
    //   staticsData.num = 4
    //   staticsData.channelId = -1
    //   staticsData.channelName = ''
    //   staticsData.startDate = ''
    //   staticsData.endDate = ''
    //   this.staticsDatas.push(staticsData)
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
</style>
