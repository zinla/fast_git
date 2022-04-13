<template>
    <div>
        {{id}}
        {{name}}
        {{show}}
      
    </div>
</template>
<script>

export default {
    //props实现
    // props:["id", "name"],
    data() {
        return {

            // params路由参数实现
            // id:0,
            // name:0,

             // query路由参数实现
            id:0,
            name:0,

            show:{},
            goodsList:[
                {id:1, goodsname:"分类查询"},
                {id:2, goodsname:"物流查询"},
                {id:3, goodsname:"我的京东"},
                {id:4, goodsname:"充值"},
                {id:5, goodsname:"京东超市"},
                {id:6, goodsname:"领赚中心"},
                {id:7, goodsname:"白条"},
                {id:8, goodsname:"我的关注"},
            ],
        }
    },
    created() {
        // 1.params方式
         // 路由参数实现
        //  当前路由信息
        // console.log(this.$route)
        // let {id,name} = this.$route.params;
        // this.id = id;
        // this.name = name;
        // this.show = this.goodsList.find(r=>r.id == this.id)

        //props实现
        // this.show = this.goodsList.find(r=>r.id == this.id)

        //2.query方式实现
        let {id,name} = this.$route.query;
        this.id = id;
        this.name = name;
        this.show = this.goodsList.find(r=>r.id == this.id)



    },
    mounted() {
      document.title = "商品页"  
    },
}
</script>
<style>

    
</style>