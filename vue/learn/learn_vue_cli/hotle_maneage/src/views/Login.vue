<template>
    <div class="main">
            <div class="login">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="帐号" prop="id">
                        <el-input type="text" v-model="ruleForm.id" autocomplete="on"></el-input>
                    </el-form-item>

                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>
        
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
           
    </div>
</template>
<script>
import Admin from "../api/user.json";
  export default {
    data() {
     
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }else{
            callback();
        }
      };
       var validateId = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入帐号'));
        }else{
            callback();
        }
      };
      
      return {
        ruleForm: {
          id:"",
          pass: '',
        },
        rules: {
          id: [
            { validator: validateId, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          
         
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let get_data = Admin;
            let get_id = get_data.Admin.id;
            let get_password = get_data.Admin.password;
            // console.log(get_id);
            // console.log(get_password);
            // console.log(this.ruleForm.id);
            // console.log(this.ruleForm.pass);
            if(this.ruleForm.id == get_id && this.ruleForm.pass == get_password) {
              this.$router.push("/layout");
            }else{
               this.$message.error('id or password is wrong!');
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
html,body {
  margin: 0;
  padding: 0;
}
.app{
  width: 100vw;
  height: 100vh;
}
.main{
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    width:100vw;
    background: rgb(255, 0, 0);
    
}
.login{
    width:85vw;
    height:250px;
    border:1px solid #ccc;
}
.login .el-form{
  margin-top: 30px;
  margin-right: 30px;
}
html,body {
  margin: 0;
  padding: 0;
}
</style>