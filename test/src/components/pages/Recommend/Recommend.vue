<template>
	<div class="wrapper wrapper-Recom">
		<div class="content">
			<div class="RecTop">
				<div>推荐歌单</div>
				<ul>
					<li v-for="(item,index) in list"
						@click="goHotsong(item)"
						>
						<img :src="item.pic_big"/>
						<p>{{item.album_title}}</p>
					</li>
				</ul>
			</div>
			<div class="RecBottom">
				<div>最新音乐</div>
				<ul>
					<li v-for="(item,index) in hotlist">
						<div class="hotl">
							<h4>{{item.title}}<span>({{item.album_title}})</span></h4>
							<p>{{item.author}}-{{item.title}}</p>
						</div>
						<div class="hotr"></div>
					</li>
				</ul>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
	import BScroll from 'better-scroll'
	export default{
		data(){
			return{
				list:[],
				hotlist:[],
			}
		},
		methods:{
			goHotsong(item){
				this.$router.push({name:'Hotsong',params:item})
			},
		},
		created(){
			
			let url='/bd/v1/restserver/ting?method=baidu.ting.song.getRecommandSongList&song_id=877578&num=6'
			this.$axios.get(url)	
			.then((res)=>{
				this.list=res.result.list;
				this.list[0].idnum=1;
				this.list[1].idnum=2;
				this.list[2].idnum=11;
				this.list[3].idnum=12;
				this.list[4].idnum=16;
				this.list[5].idnum=21;
//				console.log(this.list)
			})

			let url1='/bd/v1/restserver/ting?method=baidu.ting.billboard.billList&type=16&size=23&offset=0'
			this.$axios.get(url1)
			.then((res)=>{
				this.hotlist=res.song_list;
			})

//			let bannerurl="/hehe/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1551518140669&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1"
//			this.$axios.get(bannerurl)
//			.then((res)=>{
//				this.slider=res.data.data.slider
//				this.$nextTick(()=>{
//					this.initswiper()
//				})
//			})
		},
//		activated(){
////			this.initswiper()
//		console.log("欢迎来到沙雕青年的音乐");
//		},
//		deactivated(){
////			this.initswiper()
//		
//		},
		mounted(){
			new BScroll('.wrapper-Recom',{click:true})
		}
//
//	}
	}
</script>
<style lang="less" scoped>
	@import '~style/index.less';
	.wrapper-Recom{
		/*.bug(red);*/
		background: #fff;
		position:fixed;
		overflow:hidden;
		.top(100);
		.bottom(0);
		.w(375);
		color:#222;
	}
	.RecTop{
		display: flex;
		flex-direction:column;
		.margin(0,0,20,0);
		>div{
			.margin(20,0,10,0);
			font-size:@font-size-m;
			.padding(0,0,0,10);
			border-left:1px solid red;
		}
		ul{
			display: flex;
			flex-wrap:wrap;
			li{
				.margin(5,0,5,0);
				list-style:none;
				color: #222;
				font-size:@font-size-s;
				width:33.333%;
				img{
					.w(125)
				}
				p{
					.padding(0,5,0,5);
					.l_h(16)
				}
			}
		}
		
	}
	.RecBottom{
			display: flex;
			flex-direction:column;
			.w(375);
			>div{
				font-size:@font-size-m;
				.padding(0,0,10,10);
				border-left:1px solid red;
			}
			ul{
				.padding(5,5,20,5);
				li{
					display: flex;
					flex-direction:row;
					.bug_bottom(1,#dcdcdc);
					.padding(5,5,5,5);
					font-size:@font-size-m;
					.hotl{
						flex: 1;
						h4{
							font-weight: normal;
							.w(320);
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							.padding(5,0,5,0);
							span{
								color:#888;
							}
						}
						p{
							font-size:@font-size-s;
							color:#888;
							.w(320);
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}
					.hotr{
						 	display:flex;
						    justify-content:center;
						    align-items:center;
						img{
							.w(15);
							.h(15);
						}
					} 
				}
			}
		}
</style>