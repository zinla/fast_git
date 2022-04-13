<template>
    <div class="main">
        <div class="left">
            <div class="logo">Dnrops</div>
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-submenu index="1">
                    <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>帐号管理</span>
                    </template>
                    <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">权限管理</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">角色管理</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">订单管理</span>
                </el-menu-item>
                </el-menu>
        </div>
        <div class="right">
                <div class="nav">
                    <div class="icon">
                        <img src="../assets/back.png" alt="logo">
                    </div>
                    <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">改变主题</template>
                    <el-menu-item @click="changeColor(item)" v-for="(item,index) in color" index="index" :key="index">{{item}}</el-menu-item>
                    
                </el-submenu>
                <el-submenu index="3" >
                    <template slot="title">个人中心</template>
                    <el-menu-item index="3-1">密码服务</el-menu-item>
                    <el-menu-item index="3-2">邮箱服务</el-menu-item>
                    <el-menu-item index="3-3">退出登录</el-menu-item> 
                </el-submenu>
                    </el-menu>
                </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        color:[
            "#100",
            "#200",
            "#300",
            "#400",
            "#500",
            "#600",
        ]
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }, 
      keyPathhandleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }, 
      changeColor(key){
          console.log(key);
      }
    }
    

}

</script>

<style scoped lang="scss">

.main {
    width: 100vw;
    height: 100vh;
    display:flex;
    .left {
        width: 200px;
        background-color: #545c64;
        
        .logo{
            width:70%;
            color:white;
            font-size:16px;
            text-align:center;
            padding: 10px;
            border: 1px solid #ccc;
            margin:10px auto;
        }
    }
    .right {
        flex:1;
        .nav{
            height:60px;
            display:flex;
            justify-content:space-between;
            background-color: #545c64;
            .icon .el-icon-s-unfold
{
                width:35px;
                height:35px;
            }
            
        }
    }
}


</style>