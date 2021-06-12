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
                <div class="opt-control-input" v-if="buttonIndex==0">代理商input</div>
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
               <baidu-map :center="{lng: 116.404, lat: 39.915}" :zoom="15"  class="bm-view" ak="rCAAQCyHBVNql3q409XlwT6FPP2kx2OF">
                    <bm-marker :position="{lng: 116.404, lat: 39.915}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
                        <bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
                    </bm-marker>
               </baidu-map>
            </div>
        </div>
    </div>
</template>

<script>
import { BaiduMap,BmMarker,BmLabel} from 'vue-baidu-map';
import cardinfos from "./list.vue"
export default {
  components: {
      cardinfos,
      BaiduMap,
      BmMarker,
      BmLabel,
      
  },
  data () {
    return {
      buttonIndex:0,
      mapButtionIndex:0,
      center: {lng: 0, lat: 0},
      zoom: 3,
      show: false
    };
  },
  mounted () {
    
  },
  methods: {
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
  width: 80%;
  height: 600px;
  margin: 20px;
  margin-left: 10%;
}
</style>
