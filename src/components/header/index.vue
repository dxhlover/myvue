<template>
  <div class="header-view">
     <div class="header clearfix">
         <!-- 返回按钮 -->
         <i class="fl" @click="goBack"></i>
         <!-- 标题 -->
         <h3 class="fl">{{title}}</h3>
         <!-- 分享按钮 -->
         <em class="fr" v-if="shareIcon" @click="$parent.handleAPPShare"></em>
     </div>
     <!-- 占位符 -->
     <div class="stance"></div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'vheader',
  props: {
      title: {
          type: String,
          default: ''
      },
      backType: {
          type: String,
          default: 'back'
      },
      shareIcon: {
          type: Boolean,
          defalut: false
      }
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapActions([
        // 调出原生分享浮层的方法 分享按钮浮层存储在vuex中 shareMask
		'SHARE_MASK'
    ]),
    ...mapMutations([
        // 调安卓和IOS的关闭容器的方法
        'APP_CLOSE_PAGE'
    ]),
    goBack() {
        switch(this.backType) {
            case 'close':
                // 在这里调安卓和IOS的关闭容器的方法
                this.APP_CLOSE_PAGE();
                break;
            case 'dialog':
                // 点击返回按钮弹出 确认弹层页面
                this.$store.dispatch('DIALOG', true);
                break;
            default:
                // 返回上一级页面
                this.$router.go(-1);
                break;
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header-view{
  width: 100%;
  position: relative;
  z-index: 99;
  .stance{
    height: 0.88rem;
  }
  .header{
    position: fixed;
    top:0;
    left: 0;
    line-height: 0.88rem;
    background: #fff;
    width: 100%;
      i{
        width: 0.14rem;
        height: 0.3rem;
        background: url('~_images/components/header/back.png') center no-repeat;
        background-size: 100% 100%;
        margin: 0.29rem 0.3rem 0 5.3%;
      }
      h3{
          width: 77%;
          text-align: center;
          font-size: 0.36rem;
          color: #3a3a3a;
      }
      em{
          width: 0.4rem;
          height: 0.4rem;
          background: url('~_images/icon/share-title.png') center no-repeat;
          background-size: 100% 100%;
          margin: 0.2rem 0.4rem 0 0;
      }
  }
}
</style>
