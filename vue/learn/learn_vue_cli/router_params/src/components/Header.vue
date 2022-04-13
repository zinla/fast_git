<template>
    <div class="header grid">
       <div class="logo">
            <img src="../../public/imgs/logo.svg" alt="img">
       </div>

       <div class="input">
           <span><input type="text" placeholder="  显示器"></span>
       </div>

        <div> 
            <img style="margin: 10px;" src="../../public/imgs/search.svg" alt="search">
        </div>

       <div class="login">
           <p style="margin:5px;font-size:15px;font-weight:bold;">登录</p>
       </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>
.header{
    background:#e1251b;
    height:50px;
    grid-template-columns: 18vw 54vw 8vw 19vw;
}    
.logo img{
    margin-left:10px;
    width:50px;
    height:50px;

}
.login{
    margin-right: 0px;
    color:white;
    margin: 0 auto;
    margin: auto 0;
    padding:10px;
}
.input{
    margin-top: 1.5vh;
    display:flex;
}

.input input{
    z-index:1;
    width: 55vw;
    height:35px;
    border-radius: 1.5rem;
}
</style>