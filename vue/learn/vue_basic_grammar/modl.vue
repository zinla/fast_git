<template>
  <transition name="fade">
  <div class="modal-wrap" v-if="visible">
    <div class="modal">
      <div class="hd">
        {{title}}
        <i class="btn-close iconfont icon-close" @click="close"></i>
      </div>
      <div class="bd">
        <slot name="content"></slot>
      </div>
      <slot name="ft">
        <!--<div class="ft" slot="ft">
          <a href="javscript:void(0)" class="btn make-sure" @click="sure">确定</a>
          <a href="javscript:void(0)" class="btn cancel" @click="close">取消</a>
        </div>-->
      </slot>
    </div>
    <div class="backdrop" @click="close"></div>
  </div>
  </transition>
</template>

<script>
  export default {
    name: "MyModal",
    props: {
      visible: {
        type: Boolean,
        default: false,
        required: true,
      },
      title: {
        type: String,
        default: '',
      }
    },
    watch:{
      visible:function(curVal) {
        if(curVal&&document.body.scrollHeight > window.innerHeight){
          $('body').addClass('backdrop-open')
        }else{
          $('body').removeClass('backdrop-open');
        }
      }
    },
    methods: {
      close() {
        this.$emit('update:visible', false)
      },
    }
  }
</script>