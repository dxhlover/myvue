<template>
  <div class="about-company-view">
  	<!-- 返回按钮为返回上一页，无分享按钮，标题为： 公司简介  -->
			<v-header
      title="公司简介"
			backType="back"
			></v-header>

    <!--  公司简介  -->
  	<div class="about-company-detial">
  		&nbsp;&nbsp;&nbsp;&nbsp;Gu迷专注为会员提供专属增值服务、客服服务和资讯服务等，会员可获得财富福利、享受健康生活、兑换品质好物、玩转休闲娱乐等生活服务，精挑细选，打开Gu迷，生活升级。
  	</div>
  </div>
</template>

<script>
import VHeader from '@/components/header'

export default {
  name: 'aboutCompany',
  components: {
		VHeader
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped type="text/scss">
.about-company-view{
  width: 100%;
  height: 100%;
  .about-company-detial{
  	@include detial;
  }
}
</style>
