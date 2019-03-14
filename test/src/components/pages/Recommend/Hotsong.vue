<template>
<div class="Hotsong">

<img :src="imgurl" alt="" />
<div class="wrapper wrapper-Hotsong">
	<div class="content">
		<div class="HotTop">
			
			<div class="l">
				<div class="back" @click="back">返回</div>
				<img :src="imgurl" alt="" />
			</div>
			<div class="r">
				<h4>{{name}}</h4>
				<p><img :src="imgurl"/>{{language}}</p>
			</div>
		</div>
		<div class="Hotcenter">
			<div>
				<p>标签：<span>{{language}}</span></p>
			</div>
			<div>
				<p>简介：</p>
			</div>
		</div>
		<div class="HotBottom">
			<h3>歌曲列表</h3>
			<ul>
				<li v-for="(item,index) in list">
					<div class="index">
						{{index+1}}
					</div>
					<div class="item">
						<div class="hotl">
							<h4>{{item.title}}<span>({{item.album_title}})</span></h4>
							<p>{{item.author}}-{{item.title}}</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
	<div class="foot">
		<span>收藏歌单</span>
	</div>
</div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
	data() {
		return {
			name: this.$route.params.album_title,
			language: this.$route.params.language,
			imgurl: this.$route.params.pic_big,
			list: [],
		}
	},
	methods: {
			back() {
				this.$router.replace('/recommend')
			}
	},
	computed: {
		params() {
			return this.$route.params
		}
	},
	//		methods:{
	//			playMusic(index){
	//				this.$store.commit('addSonglist',this.sinlist)
	//				this.$store.commit('changeIndex',index)
	//			},
	////			...mapMutations({addSonglist:play.ddSonglist}),
	//			goback(){
	//				this.$router.back();
	//			}
	//		},
	created() {
		if(!this.$route.params.idnum) {
			return this.$router.replace('/Recommend')
		}
		let idnum = this.$route.params.idnum
		let url = '/bd/v1/restserver/ting?method=baidu.ting.billboard.billList&type=' + idnum + '&size=15&offset=0'
		this.$axios.get(url)
			.then((res) => {
				this.list = res.song_list;
				//				console.log(this.list);
			})
	},
	mounted() {
		new BScroll('.wrapper-Hotsong', {
			click: true
		})
	}
}</script>

<style lang="less" scoped>@import '~style/index.less';
.wrapper-Hotsong {
	/*.bug(red);*/
	overflow: hidden;
	position: fixed;
	.top(0);
	.bottom(54);
	.left(0);
	.right(0);
	z-index: 2;
}

.hotl {
	flex: 1;
	h4 {
		font-weight: normal;
		.w(320);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		.padding(5, 0, 5, 5);
		span {
			color: #888;
		}
	}
	p {
		.padding(0, 0, 0, 5);
		font-size: @font-size-s;
		color: #888;
		.w(320);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
}

.HotTop {
	.w(350);
	.padding(20, 12, 20, 12);
	display: flex;
	/*.bug(red);*/
	.l  {
		.back{
			.w(126);
			.h(20);
			font-size: 16px;
			color: darkred;
		}
		img{
			.w(126);
		.h(126);
		.padding(0, 10, 0, 0);
		}
		
	}
	.r {
		h4 {
			color: #fff;
			font-size: @font-size-l;
			font-weight: normal;
			.margin(20, 0, 20, 0);
		}
		p {
			color: #fff;
			font-size: @font-size-m;
			>img {
				.w(32);
				.h(32);
				border-radius: 50%;
			}
		}
	}
}

.Hotsong {
	position: fixed;
	background: #fff;
	.top(0);
	.bottom(0);
	.left(0);
	.right(0);
	>img {
		position: fixed;
		.top(-80);
		.w(375);
		filter: blur(20px);
	}
}

.HotBottom {
	h3 {
		.padding(5, 0, 5, 10);
		color: #696969;
		font-size: @font-size-s;
		background: #ebebeb;
	}
	ul {
		background: #f5f5f5;
		li {
			display: flex;
			font-size: @font-size-m;
			.h(55);
			.index {
				.w(40);
				text-align: center;
				.l_h(55);
			}
			.item {
				.bug_bottom(1, #dcdcdc);
				flex: 1;
			}
		}
	}
}

.Hotcenter {
	background: #f5f5f5;
	color: #696969;
	font-size: @font-size-m;
	.padding(10, 10, 10, 10);
	p {
		.l_h(32);
	}
}

.foot {
	.h(54);
	position: fixed;
	.bottom(0);
	.left(0);
	.right(0);
	display: flex;
	justify-content: center;
	align-items: center;
	span {
		.w(315);
		.h(38);
		.bug(red);
		display: block;
		background: #d33a31;
		text-align: center;
		.l_h(38);
		font-size: @font-size-l;
		color: #fff;
		border-radius: 30px;
	}
}</style>