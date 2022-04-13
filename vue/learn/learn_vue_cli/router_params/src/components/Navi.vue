<template>
        <div class="navi_list grid grid-cols-4 gap-4">
            <!-- prams方式： 1.rotre路由参数实现
                2.传参用props实现 -->
            <!-- <router-link :to="'/goods/'+(index+1)+'/'+item" custom v-slot="{ navigate }" v-for="(item,index) in naviList" :key="index">
            <div @click="navigate" role="link">
                <div>
                <img style="width:45px" src="http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/140012/8/1804/3641/5efbf318E38bd5dad/0db99d859ab16ce9.png" alt=""/>
                </div>
                <div>{{item}}</div>
            </div>
            </router-link> -->

            <!-- query方式传参数  -->
            <router-link :to="'/goods/?id='+(index+1)+'&name='+item" custom v-slot="{ navigate }" v-for="(item,index) in naviList" :key="index">
            <div @click="navigate" role="link">
                <div>
                <img style="width:45px" src="http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/140012/8/1804/3641/5efbf318E38bd5dad/0db99d859ab16ce9.png" alt=""/>
                </div>
                <div>{{item}}</div>
            </div>
            </router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            naviList:["分类查询","物流查询","我的京东","充值","京东超市","领赚中心","白条","我的关注"],
        }
    },

}
</script>
<style>
.navi_list{
    justify-items: center;
}
</style>