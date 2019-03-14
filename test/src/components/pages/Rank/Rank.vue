<template>
	<div class="rank" ref='wrapper'>
		<div class="content">
			<div class="rankImg">
               <img src="../../../../static/01.png">
			</div>
			<div class="rankList">
				<a v-for="(item, index) in rankList" :key="index" @click="playMusic(index)">
					<div class="rleft">{{index+1}}</div>
					<div class="rright">
						<div class="r-l">
							<h1>{{item.name}}</h1>
							<p>{{item.singer}}</p>
						</div>
						<div class="r-r">
							<span><img src="../../../../static/02.png"></span>
						</div>
					</div>
				</a>

			</div>
		</div>
	</div>
</template>
<script>
	import Data from '../../../data/rank.js'
	import BScroll from 'better-scroll'
	import { mapMutations } from 'vuex'
	export default {
		data() {
			return {
				rankList: [],
			}
		},
		methods:{
			playMusic(index) {
				this.$store.commit('changeIndexdetail', index); //当前下标
				this.$store.commit('addSonglist', this.rankList); //整条数据
				this.$store.commit('changeShow') 
			}
		},
		created() {
				this.rankList=Data.data.songs;
				console.log(this.rankList);
		},
		mounted() {
			console.log(this.$refs.wrapper)
			let elobj = this.$refs.wrapper
			new BScroll(elobj,{click:true})
		}
	}
</script>
<style lang="less" scope>
	@import '~style/index.less';
	.rank {
		.w(375);
		.top(100);
		.left(0);
		.bottom(0);
		.right(0);
		position:fixed;
		background: #fcfcfd;
		overflow: hidden;
		.content {
			.rankImg {
				.w(375);
				.h(146);
				background: red;
				img{
					display: block;
					.w(375);
				    .h(146);
				}
			}
			.rankList {
				a{
					display:block;
					.w(375);
					.h(55);
					color:#333;
					.rleft{
						float: left;
						color:#df3436;
						font-size:17px;
						.w(28);
						.h(65);
						.l_h(65);
						text-align:center;
					}
					.rright{
						float:right;
						.padding(10,0,0,0);
						.w(337);
						.h(55);
						border-bottom:1px solid #ccc;
						.r-l{
							float:left;
							.w(295);
						    .h(55);
							h1{
								font-size: 17px;
								font-weight: normal;
								.w(295);
								overflow:hidden;
								text-overflow:ellipsis;
								white-space:nowrap;
							}
							p{
								font-size: 12px;
                                color: #888;
                                .w(295);
								overflow:hidden;
								text-overflow:ellipsis;
								white-space:nowrap;
							}
						}
						.r-r{
							float: right;
							span{
								display: block;
							}
						}
					}
				}
			}
		}
	}
</style>