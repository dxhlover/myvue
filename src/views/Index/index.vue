<template>
  <div class="index-view">
    <v-header
    title="首页"
    backType="close"
    ></v-header>
    <div>我是首页</div>
    <router-link to="/newsList">跳转到资讯列表</router-link>
    <div @click="toAboutUs">跳转到关于我们</div>
    <index-list></index-list>
  </div>
</template>

<script>
import VHeader from '@/components/header';
import IndexList from './component/indexList';

export default {
  name: 'index',
  components: {
    VHeader,
    IndexList
  },
  methods: {
    toAboutUs() {
      this.$router.push({
        name: 'aboutUS',
        params: {
          version: 'v1.0.2'
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.index-view{
  width: 100%;
}
</style>
