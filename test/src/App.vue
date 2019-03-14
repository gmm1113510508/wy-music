<template>
	<div id="app" v-on:touchmove.prevent>
		<m-header></m-header>
		<tab></tab>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<!-- 缓存页面 -->
		<player></player>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import MHeader from 'common/m-header/m-header'
	//common 是在build  base-config alias 起的别名
	import Tab from 'common/tab/tab'
	import Player from 'common/player/player';
	export default {
		name: 'App',
		components: {
			MHeader,
			Tab,
			Player
		}
	}
</script>

<style lang='less'>
	@import '~style/index.less';
	//样式的别名前要加一个~符号
</style>