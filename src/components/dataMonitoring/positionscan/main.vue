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
        <div class="map">right</div>
    </div>
</template>
<script>
import cardinfos from "./list.vue"
export default {
  components: {
      cardinfos
  },
  data () {
    return {
      buttonIndex:0
    };
  },
  mounted () {
    
  },
  methods: {
    
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
</style>
