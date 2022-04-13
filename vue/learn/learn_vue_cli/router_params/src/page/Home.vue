<template>
    <div>
        <Header></Header>
        <Swiper></Swiper>
        <Navi></Navi>
        <Seckill></Seckill>
        <Hot></Hot>
        <Products></Products>
        <Foot></Foot>
    </div>
</template>
<script>
import Header from '../components/Header'
import Swiper from '../components/Swiper'
import Navi from '../components/Navi'
import Seckill from '../components/Seckill'
import Hot from '../components/Hot'
import Products from '../components/Products'
import Foot from '../components/Foot'
export default {
    components:{
        Header,
        Swiper,
        Navi,
        Seckill,
        Hot,
        Products,
        Foot,

    },
    mounted() {
      document.title = "主页"  
    },
}
</script>
<style lang="">
    
</style>