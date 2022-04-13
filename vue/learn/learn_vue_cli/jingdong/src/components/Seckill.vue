<template>
    <div>
        <div>
            <div style="margin:10px;">京东秒杀</div>
        </div>
         <swiper ref="SwiperTop" :options="swiperOptionTop">
            <swiper-slide>
                <div class="grid grid-cols-4 gap-1">
                    
                        <div><img src="https://img11.360buyimg.com/n7/s150x150_jfs/t1/188416/26/4208/98359/60a5dc84E1b88c8b0/f4a934b4730a65eb.jpg.dpg" alt=""><div class="price">￥299</div></div>
                        <div><img src="https://img11.360buyimg.com/n7/s150x150_jfs/t1/188416/26/4208/98359/60a5dc84E1b88c8b0/f4a934b4730a65eb.jpg.dpg" alt=""><div class="price">￥299</div></div>
                        <div><img src="https://img11.360buyimg.com/n7/s150x150_jfs/t1/188416/26/4208/98359/60a5dc84E1b88c8b0/f4a934b4730a65eb.jpg.dpg" alt=""><div class="price">￥299</div></div>
                        <div><img src="https://img11.360buyimg.com/n7/s150x150_jfs/t1/188416/26/4208/98359/60a5dc84E1b88c8b0/f4a934b4730a65eb.jpg.dpg" alt=""><div class="price" style="">￥299</div></div>
                    
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="grid grid-cols-4 gap-1">
                    
                        <div><img src="https://img11.360buyimg.com/n7/s150x150_jfs/t1/188416/26/4208/98359/60a5dc84E1b88c8b0/f4a934b4730a65eb.jpg.dpg" alt=""><div class="price">￥299</div></div>
                        <div><img src="https://img11.360buyimg.com/n7/s150x150_jfs/t1/188416/26/4208/98359/60a5dc84E1b88c8b0/f4a934b4730a65eb.jpg.dpg" alt=""><div class="price">￥299</div></div>
                        <div><img src="https://img11.360buyimg.com/n7/s150x150_jfs/t1/188416/26/4208/98359/60a5dc84E1b88c8b0/f4a934b4730a65eb.jpg.dpg" alt=""><div class="price">￥299</div></div>
                        <div><img src="https://img11.360buyimg.com/n7/s150x150_jfs/t1/188416/26/4208/98359/60a5dc84E1b88c8b0/f4a934b4730a65eb.jpg.dpg" alt=""><div class="price">￥299</div></div>
                    
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="grid grid-cols-4 gap-1">
                    
                        <div><img src="https://img11.360buyimg.com/n7/s150x150_jfs/t1/188416/26/4208/98359/60a5dc84E1b88c8b0/f4a934b4730a65eb.jpg.dpg" alt=""><div class="price">￥299</div></div>
                        <div><img src="https://img11.360buyimg.com/n7/s150x150_jfs/t1/188416/26/4208/98359/60a5dc84E1b88c8b0/f4a934b4730a65eb.jpg.dpg" alt=""><div class="price">￥299</div></div>
                        <div><img src="https://img11.360buyimg.com/n7/s150x150_jfs/t1/188416/26/4208/98359/60a5dc84E1b88c8b0/f4a934b4730a65eb.jpg.dpg" alt=""><div class="price">￥299</div></div>
                        <div><img src="https://img11.360buyimg.com/n7/s150x150_jfs/t1/188416/26/4208/98359/60a5dc84E1b88c8b0/f4a934b4730a65eb.jpg.dpg" alt=""><div class="price">￥299</div></div>
                    
                </div>
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
.price{
    margin-left: 20px;
}
    
</style>