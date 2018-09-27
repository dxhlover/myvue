<template>
  <div>
    <v-header
    title="资讯列表"
    backType="back"
    ></v-header>
    <div v-for="(item, key) in newsListShow" :key="key">
      <news-cell
      :newsDate="item"
      :key="key"
      ></news-cell>
    </div>
  </div>
</template>

<script>
import VHeader from '@/components/header';
import { newsListApi } from '@/axios/modules/newsList';
import NewsCell from './component/newsCell';

export default {
  name: 'newsList',
  data () {
    return {
      newsListShow: [],
    }
  },
  components: {
    VHeader,
    NewsCell
  },
  created() {
    this.setNewsApi();
  },
  methods:{
    setNewsApi() {
      newsListApi()
      .then(res => {
        console.log(res);
        this.newsListShow = res.data.articles;
      });
    },
  }
}
</script>



<style scoped>
.topNav{
  width: 100%;
  background: #ED4040;
  position: fixed;
  top:0rem;
  left: 0;
  z-index: 10;
}
.simpleNav{
  width: 100%;
  line-height: 1rem;
  overflow: hidden;
  overflow-x: auto;
  text-align: center;
  font-size: 0;
  font-family: '微软雅黑';
  white-space: nowrap;
}
.simpleNav::-webkit-scrollbar{height:0px}
.simpleNavBar{
  display: inline-block;
  width: 1.2rem;
  color:#fff;
  font-size:0.3rem;
}
.navActive{
  color: #000;
  border-bottom: 0.05rem solid #000;
}
.placeholder{
  width:100%;
  height: 1rem;
}
</style>
