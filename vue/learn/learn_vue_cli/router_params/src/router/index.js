import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {path: '/',
        component:()=> import('../page/Home.vue')
        },
        {path: '/classify',
        component:()=> import('../page/Classify.vue')
        },

        // rotre路由参数实现
        // {path: '/goods/:id/:name',
        // component:()=> import('../page/Goods.vue')
        // },

        // 传参用props实现
        // {path: '/goods/:id/:name',
        // props:true,
        // component:()=> import('../page/Goods.vue')
        // },

        // 传参用query方式 不需要该路由 ? 后面 &拼接
        {path: '/goods',
        component:()=> import('../page/Goods.vue')
        },
    ]

});

