<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  
}
</script>

<style>
@import url("./style/tailwind.min.css"); 
*{
  margin:0;
  padding:0;
  list-style:none;
  text-decoration:none;
  outline:none;
}
.flex{
  display:flex;
}
.j-s{
  justify-content:space-between;
}
.j-c{
  justify-content:center;
}
.a-c{
  align-items:center;
}
.grid{
  display:grid;
}

</style>
