<template>
    <div>
       <div class="title">分类页面</div>
       <router-link to="/">
            <div class="btn">返回首页</div>
       </router-link>
            
        <!-- <div class="btn" @click="gotoHome">返回首页</div> -->   
    </div>
</template>
<script>

export default {
    components:{    
    },
    method: {
        gotohome(){
            this.$router.push("/");
        }
    }
}
</script>
<style>
.title {
    background:#e1251b;
    height:100px;
    color:#fff;
    text-align:center;
    line-height: 50px;
}
.btn{
    background:#e1251b;
    width:100px;
    margin:10px;
    text-align:center;
}
    
</style>