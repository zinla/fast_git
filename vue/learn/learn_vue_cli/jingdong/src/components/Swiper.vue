<template>
    <div>
         <swiper ref="SwiperTop" :options="swiperOptionTop">
            <swiper-slide>
                <img class="swiper_img" src="https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/173149/23/10716/233806/60a72ae3E39c84199/8d1ce6d9182db261.jpg!cr_1125x449_0_166!q70.jpg.dpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper_img" src="https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/167245/17/13432/149823/60540ceeE0a928512/677088217d8a00aa.jpg!cr_1053x420_4_0!q70.jpg.dpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper_img" src="https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/115456/40/7331/100669/5ec3a9c6E3dcbadb7/46071c04455c0d5b.jpg!cr_1053x420_4_0!q70.jpg.dpg" alt="">
            </swiper-slide>
  </swiper>
        
    </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
    data(){
        return{
            swiperOptionTop:{
                loop:true,
                loopedSlices:5,
                spaceBetween:10,
            }
        }
    },
    components: {
        Swiper,
        SwiperSlide
    },
    directives: {
    swiper: directive
    }
}
</script>
<style>
.swiper_img{
    margin:auto;
}
    
</style>