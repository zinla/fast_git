<template>
<!--  按钮区域-->
  <div style="padding: 10px">
    <div style="margin: 10px 0">
      <el-button style="background-color: dodgerblue; color: aliceblue; font-weight: bold" @click="add">新增</el-button>
      <el-button style="background-color: dodgerblue; color: aliceblue; font-weight: bold">导入</el-button>
      <el-button style="background-color: dodgerblue; color: aliceblue; font-weight: bold">导出</el-button>
    </div>
<!--    搜索区域-->
    <div style="margin: 10px 0">
        <el-input v-model="search" placeholder="请输入关键字" style="width: 20%"></el-input>
        <el-button type="primary" style="margin-left:5px ">查询</el-button>
    </div>

<!--    数据区域-->
    <el-table
        :data="tableData"
        border
        style="width: 100%">
      <el-table-column
              prop="id"
              label="ID">
      </el-table-column>
      <el-table-column
          prop="username"
          label="用户名">
      </el-table-column>
      <el-table-column
          prop="nickname"
          label="昵称">
      </el-table-column>
      <el-table-column
          prop="age"
          label="年龄">
      </el-table-column>
      <el-table-column
          prop="sex"
          label="性别">
      </el-table-column>
      <el-table-column
          prop="address"
          label="地址">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="100">
        <template #default="scope">
          <el-button @click="handleEdit(scope.row)" type="text">编辑</el-button>
          <el-popconfirm title="确认删除吗？">
            <template #reference>
              <el-button type="text">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin: 10px 0">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[5, 10, 20]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
      </el-pagination>

      <el-dialog title="提示" v-model="dialogVisible" width="30%">
        <el-form :model="form" label-width="120px">
          <el-form-item label="用户名">
            <el-input v-model="form.username" style="width: 80%"></el-input>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="form.nickname" style="width: 80%"></el-input>
          </el-form-item>
          <el-form-item label="性别">
<!--            <el-radio v-model="form.sex" label="男">男</el-radio>-->
<!--            <el-radio v-model="from.sex" label="女">女</el-radio>-->
            <el-input v-model="form.sex" style="width: 80%"></el-input>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="form.age" style="width: 80%"></el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input type="textarea" v-model="form.address" style="width: 80%"></el-input>
          </el-form-item>
        </el-form>
        <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="save">确 定</el-button>
    </span>
        </template>
      </el-dialog>

    </div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
  },
  data(){
    return {
      form: {
        username:'',
        nickname:'',
        sex:'',
        age:'',
        address:'',
      },
      dialogVisible: false,
      search: '',
      total: 10,
      currentPage4: 1,
      tableData:[]
    }
  },
  methods: {
    add(){
      this.dialogVisible = true;
      this.form = {}
    },
    save(){
      console.log(this.form);
    },
  handleEdit(){

  },
    handleSizeChange(){

    },
    handleCurrentChange(){

    }
  }
}


</script>
