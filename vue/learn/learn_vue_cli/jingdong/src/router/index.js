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
    ]

});

