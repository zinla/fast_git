<template>
  <div style="height:50px; line-height: 50px; border-bottom: 1px solid #ccc; display: flex ">
  <div style="width: 200px; padding-left: 30px; font-weight: bold; color: dodgerblue">派出所管辖范围人流进出后台管理</div>
    <div style="flex: 1"></div>
    <!-- 下拉框 -->
    <div style="width: 100px">
      <el-dropdown>
      <span class="el-dropdown-link">
      张警官<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>退出系统</el-dropdown-item>
<!--                <el-dropdown-item>螺蛳粉</el-dropdown-item>-->
<!--                <el-dropdown-item disabled>双皮奶</el-dropdown-item>-->
<!--                <el-dropdown-item divided>蚵仔煎</el-dropdown-item> -->
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>