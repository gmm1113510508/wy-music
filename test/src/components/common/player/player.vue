<template>
	<div class='player' v-if="songList.length">
		<div v-show='show' class="nomalScreen">
			<!--{{currentSong}}-->
			<!--图片名字处理数据 利用getters 处理值-->
			<div class="back" @click="back">
				<< </div>
					<div class='bg'>
						<img :src="currentSong.pic" alt="">
					</div>
					<div class='top'>
						{{currentSong.name}}
					</div>
					<p> {{currentSong.singer}}</p>
					<div class="center">
						<div class='cd-wrapper'>
							<div class="cd">
								<img :src="currentSong.pic" alt="">
							</div>
						</div>
						<div class="song">
							歌词无法获取...
						</div>
						<!--<p>歌词：{{nowLine}}</p>-->
						<!--歌词-->
					</div>
					<audio :src="currentSong.url" ref="audio" @timeupdate='update'></audio>
					<!--不显示-->
					<div class="footer">
						<div class="ftup">
							<div class="ftup-a"></div>
							<div class="ftup-b"></div>
						</div>
						<div class="ftcenter">
							<b>{{(nowdate/60).toFixed(2)}}</b>
							<span class="ftcenter-a"></span>
							<b>{{currentSong.time}}</b>
						</div>
						<div class="ftdown">
							<!--播放选择-->
							<button @click='changeIndex("prev")'>prev</button>
							<button @click='playMusic()'> play</button>
							<button @click='changeIndex("next")'> next</button>
						</div>
						<!-- controls canplay updataTime-->
					</div>
			</div>
			<div v-show='!show' class="hide">
				<div class="hide-lt">
					<div class="smallImg">
						<img :src="currentSong.pic" alt="">
					</div>
				</div>
				<div class="hide-ct">
					<h2> {{currentSong.name}}</h2>
					<p>{{currentSong.singer}}</p>
				</div>
				<div class="hide-rt">
					<img src="../../../../static/02.jpg" />
				</div>
			</div>
		</div>
</template>
<script>
	import { mapState, mapGetters, mapMutations } from 'vuex'
	import { Base64 } from 'js-base64'
	import Data from '../../../data/rank.js'
	export default {
		data() {
			return {
				nowdate: 0,
				nowLine: 0
			}
		},
		methods: {
			back() {
				this.changeShow()
			},
			update(e) {
				/*console.log(e)*/
				this.nowdate = e.srcElement.currentTime //起始时间
			},
			...mapMutations(['changeIndex', 'changeShow']), //改变下标
			playMusic() {
				let audio = this.$refs.audio
				if(audio.paused) {
					audio.play()
				} else {
					audio.pause()
				}
			}
		},
		computed: {
			...mapGetters(['currentSong']),
			...mapState({
				songList: state => state.play.songList,
				nowIndex: state => state.play.nowIndex,
				show: state => state.play.show

			})
		},
		created() {
			/*	console.log(this.currentSong)
				console.log(this.$store)*/
		}
	}
</script>
<style lang="less" scoped>
	@import '~style/index.less';
	.hide{
		.w(375);
		.h(60);
		background:#333;
		position:fixed;
		.bottom(0);
		.hide-lt{
			.w(70);
			.h(40);
			float:left;
			.padding(10,10,0,20);
			.smallImg{
				.w(45);
				.h(45);
				img{
					display: inline-block;
					width:100%;
					height:100%;
					border-radius: 50%;
				}
			}
		}
		.hide-ct{
			.w(160);
			.h(42);
			float:left;
			.padding(10,10,0,0);
			h2{
				font-size: 14px;
				color:#fff;
			}
			p{
				font-size: 12px;
				color:@font-color-tab;
			}
		}
		.hide-rt{
			float:right;
			img{
				display: inline-block;
				.w(105);
				.h(60);
			}
		}
		
	}
	.nomalScreen {
		.w(375);
		position: fixed;
		top: 0;
		bottom: 0;
		background: @bg-color;
		color: #fff;
		text-align: center;
		.back {
			float: left;
			font-size: 30px;
			color: darkred;
		}
		.bg {
			position: absolute;
			.w(375);
			top: 0;
			bottom: 0;
			z-index: -3;
			img {
				width: 100%;
				height: 100%;
				opacity: .6;
				filter: blur(30px);
				/*高斯模糊*/
			}
		}
		.top {
			.w(375);
			.h(40);
			.l_h(40);
			font-size: 18px;
			.margin(0, 0, 0, -40);
		}
		p {
			.w(375);
			.h(20);
			.l_h(20);
			font-size: 14px;
		}
		.center {
			.w(375);
			.h(417);
			.cd-wrapper {
				.w(375);
				.h(375);
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				.cd {
					position: absolute;
					.top(20);
					width: 70%;
					height: 70%;
					border-radius: 50%;
					border: 10px solid rgba(0, 0, 0, .2);
					img {
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}
			}
			.song {
				.w(375);
				.h(40);
				.margin(-50, 0, 0, 0);
				font-size: 14px;
				color: @font-color-tab;
			}
		}
		.footer {
			.w(375);
			.h(100);
			position: relative;
			.ftup {
				.h(20);
				.l_h(20);
				text-align: center;
				.ftup-a {
					float: left;
					.w(30);
					.h(10);
					position: absolute;
					left: 160px;
					border-radius: 5px;
					background: #ccc;
					opacity: .5;
				}
				.ftup-b {
					float: left;
					.w(10);
					.h(10);
					position: absolute;
					left: 200px;
					border-radius: 50%;
					background: #ccc;
					opacity: .5;
				}
			}
			.ftcenter {
				.padding(20, 0, 0, 0);
				display: flex;
				justify-content: center;
				align-items: center;
				.ftcenter-a {
					display: block;
					.w(300);
					.h(10);
					border-radius: 5px;
					background: #ffcd32;
					opacity: .5;
				}
				b {
					font-size: 12px;
					font-weight: normal;
				}
			}
			.ftdown {}
		}
	}
</style>
</style>