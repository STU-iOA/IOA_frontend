<template>
	<view>
		<scroll-view class="itemBox" scroll-y="true" show-scrollbar="true" scroll-top="0px" @scroll=getScrollPos($event)>
			<view class="item" 
				  :class="{'item_change': index==currentIndex, 'item_change_paused': item_change_paused}"
				  v-for="(item,index) in iteminfo" :key="index"
				  @longpress="longpress(index,$event)"
				  @click.stop="forDetail()">
				<view class="itemTitle"><text>{{item.itemTitle}}</text></view>
				<view class="depart_time"><text>{{item.depart}}</text><text>2{{item.announceDate}}</text></view>
			</view>
		</scroll-view>
		<view class="windowMask" @click.stop="tohide" :class="{'infoWindowShow':infoWindowShow}">
			<view class="infoWindow" @click.stop="keepshow($event)" ref="infoWindow">
				<view class="windowTitle" :class="{'ani_windowTitle': ani_windowTitle}"><text>OATitle</text></view>
				<view class="windowAbstract" :class="{'ani_windowAbstract': ani_windowAbstract}"><text>书中自有黄金屋，书中自有颜如玉\n书中自有黄金屋，书中自有颜如玉</text></view>
				<view class="windowKwords" :class="{'ani_windowKwords': ani_windowKwords}"><text>关键词1</text><text>关键词2</text><text>关键词3</text></view>
				<view class="windowRnum" :class="{'ani_windowRnum': ani_windowRnum}"><text>阅读人数|收藏人数</text><text>发布时间</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"OAItemList",
		props:{selectedCard:Number},
		data() {
			return {
				currentIndex:10,   				//被选中的OA item
				item_change_paused:false,       //动画暂停
				ani_paused:{},                  //动画暂停定时器
				infoWindowShow:false,           //是否显示OA弹窗
				ani_windowTitle:false,          //弹窗动画
				ani_windowAbstract:false,		//弹窗动画
				ani_windowKwords:false,			//弹窗动画
				ani_windowRnum:false,			//弹窗动画
				changePos:80,					//弹窗偏移动画
				scrollPos:0,					//滚动条偏移量
				islongpress:true,				//是否长按
				//OA Item
				iteminfo:[
					{
						itemTitle:"标题嗷嗷嗷",
						depart: "通知单位",
						OAContent: "书中自有黄金屋，书中自有颜如玉\n书中自有黄金屋，书中自有颜如玉",
						announceDate: "2021-10-10",
						keyWords: ['关键词1','关键词2','关键词2'],
						readNum:'阅读人数',
						collectNum:1234
					},
					{
						itemTitle:"标题2嗷嗷嗷",
						depart: "通知单位",
						OAContent: "书中自有黄金屋，书中自有颜如玉\n书中自有黄金屋，书中自有颜如玉",
						announceDate: "2021-11-10",
						keyWords: ['关键词1','关键词2','关键词2'],
						readNum:'阅读人数',
						collectNum:1234
					},
					{
						itemTitle:"标题3嗷嗷嗷",
						depart: "通知单位",
						OAContent: "书中自有黄金屋，书中自有颜如玉\n书中自有黄金屋，书中自有颜如玉",
						announceDate: "2021-12-10",
						keyWords: ['关键词1','关键词2','关键词2'],
						readNum:'阅读人数',
						collectNum:1234
					},
					{
						itemTitle:"标题嗷嗷嗷",
						depart: "通知单位",
						OAContent: "书中自有黄金屋，书中自有颜如玉\n书中自有黄金屋，书中自有颜如玉",
						announceDate: "2021-10-10",
						keyWords: ['关键词1','关键词2','关键词2'],
						readNum:'阅读人数',
						collectNum:1234
					},
					{
						itemTitle:"标题2嗷嗷嗷",
						depart: "通知单位",
						OAContent: "书中自有黄金屋，书中自有颜如玉\n书中自有黄金屋，书中自有颜如玉",
						announceDate: "2021-11-10",
						keyWords: ['关键词1','关键词2','关键词2'],
						readNum:'阅读人数',
						collectNum:1234
					},
					{
						itemTitle:"标题3嗷嗷嗷",
						depart: "通知单位",
						OAContent: "书中自有黄金屋，书中自有颜如玉\n书中自有黄金屋，书中自有颜如玉",
						announceDate: "2021-12-10",
						keyWords: ['关键词1','关键词2','关键词2'],
						readNum:'阅读人数',
						collectNum:1234
					},
					{
						itemTitle:"标题嗷嗷嗷",
						depart: "通知单位",
						OAContent: "书中自有黄金屋，书中自有颜如玉\n书中自有黄金屋，书中自有颜如玉",
						announceDate: "2021-10-10",
						keyWords: ['关键词1','关键词2','关键词2'],
						readNum:'阅读人数',
						collectNum:1234
					},
					{
						itemTitle:"标题2嗷嗷嗷",
						depart: "通知单位",
						OAContent: "书中自有黄金屋，书中自有颜如玉\n书中自有黄金屋，书中自有颜如玉",
						announceDate: "2021-11-10",
						keyWords: ['关键词1','关键词2','关键词2'],
						readNum:'阅读人数',
						collectNum:1234
					},
					{
						itemTitle:"标题3嗷嗷嗷",
						depart: "通知单位",
						OAContent: "书中自有黄金屋，书中自有颜如玉\n书中自有黄金屋，书中自有颜如玉",
						announceDate: "2021-12-10",
						keyWords: ['关键词1','关键词2','关键词2'],
						readNum:'阅读人数',
						collectNum:1234
					}
				]
			};
		},
		watch:{
			selectedCard(){    //监听父组件传递的参数变化
				console.log("selectedCard: "+this.selectedCard);
			}
		},
		methods:{
			longpress(index,e){    //长按处理函数
				if(this.islongpress)
				{
					this.item_change=true;
					this.currentIndex=index;
					let infoWindow = this.$refs.infoWindow;
					infoWindow.$el.style.top=index*100-this.scrollPos+80+'px';
					this.infoWindowShow=true;
					this.ani_windowTitle=true;
					this.ani_windowAbstract=true;
					this.ani_windowKwords=true;
					this.ani_windowRnum=true;
					this.ani_paused=setTimeout(()=>{
						this.item_change_paused=true;	
						// this.item_change_running=false;
					},500)
					// this.infoWindowShow=true;
				}
				else{
					console.log('非长按');
					this.islongpress=true;
				}
			
				
			},
			keepshow(e){         //点击弹窗内部无响应
				console.log("显示")
			},
			tohide(){         //点击弹窗以外区域将隐藏弹窗
				console.log("隐藏");
				this.infoWindowShow=false
				this.item_change_paused=false;
				this.item_change=false;
				this.ani_windowTitle=false;
				this.ani_windowAbstract=false;
				this.ani_windowKwords=false;
				this.ani_windowRnum=false;
				clearTimeout(this.ani_paused);
			},
			getScrollPos(e){    //获取滚动条位置
				this.scrollPos=e.detail.scrollTop;
			},
			forDetail(e){       //单击查看OA详情
				this.islongpress=false;
				this.currentIndex=10;
				console.log("2222222222")
				uni.navigateTo({
					//传递id=1 方便下一页使用navigatBack ljs
					url: '/pages/OA/OADetail/OADetail?id=1',
					 animationType: "slide-in-top",
					 animationDuration: 1000,
					
				});
				console.log("2222222223")
			}
		}
		
	}
</script>

<style>
	.itemBox{
		width: 100%;
		/* height修改为100%  ljs*/
		height:100%;
		margin-top: 12rpx;
		padding-top: 10rpx;
		background-color: white;
	}
	.itemBox .item{
		width: 630rpx;
		heigth: 148rpx;
		background-color: white;
		border-radius: 20rpx;
		padding: 20rpx 40rpx;
		margin-bottom: 40rpx;
		margin-left: 50%;
		transform: translateX(-50%);
		border: 3rpx #D7D7D7 solid;
		border-bottom: 4rpx #E2C8EB solid;
	}
	.item_change{
		animation: 0.5s change linear forwards 2 alternate;
	}
	
	.item_change_paused{
		animation-play-state: paused;
	}
	
	
	@keyframes change{
		0%{
			box-shadow: 0 0 0;
		}
		100%{
			box-shadow: 3px 3px 5px grey;
		}
	}
	
	.depart_time{
		display: flex;
		margin-top: 30rpx;
		color: #9E45BD;
		justify-content: space-between;
	}
	
	.windowMask{
		position: absolute;
		overflow: hidden;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		display: none;
		justify-content: center;
	}
	.infoWindow{
		position: absolute;
		width: fit-content;
		height: fit-content;
	}
	
	
	.infoWindowShow{
		display:flex;
	}
	
	.infoWindow view{
		position: relative;
		display: flex;
		margin-left: 50%;
		transform: translateX(-50%);
		background-color: white;
		box-shadow: 2rpx 2rpx 10rpx grey;
	}
	
	.windowTitle{
		top: 110rpx;
		font-size: 50rpx;
		font-weight: 500;
		width:0px;
		height: 60rpx;
		padding: 20rpx 40rpx;
		border-top-left-radius: 60rpx;
		border-top-right-radius: 60rpx;
		border: 2rpx solid #D7D7D7;
		border-bottom:0px;
		overflow: hidden;
	}
	.windowAbstract{
		padding: 20rpx 0px;
		width:600rpx;
		border:2rpx solid #e0e2dd;
		justify-content: center;
		font-size: 36rpx;
		height: 94rpx;
		white-space: pre-wrap;
		overflow: hidden;
		z-index: 3;
	}
	.windowKwords{
		padding: 20rpx 0rpx;
		justify-content: space-around;
		font-size: 36rpx;
		width: 0px;
		height: 0px;
		border: 2rpx solid #e0e2dd;
		overflow: hidden;
		border-top: 0px;
		top: -110rpx;
		z-index: 2;
	}
	.windowKwords text{
		background-color: #B068C9;
		border-radius: 60rpx;
		color: #F5ECF8;
		padding: 10rpx 20rpx;
	}
	.windowRnum{
		padding: 20rpx 0rpx;
		justify-content: space-around;
		font-size: 30rpx;
		width:0rpx;
		height: 0rpx;
		overflow: hidden;
		border-bottom-left-radius: 60rpx;
		border-bottom-right-radius: 60rpx;
		border: 2rpx solid #e0e2dd;
		border-top: 0rpx;
		top: -190rpx;
		z-index: 1;
	}
	
	
	
	.ani_windowAbstract{
		animation: 0.4s ani-windowAbstract linear forwards;
	}
	
	
	@keyframes ani-windowAbstract{
		0%{
			width: 0px;
		}
		100%{
			width: 6r00px;
		}
	}
	
	.ani_windowTitle{
		animation: 0.5s ani-windowTitle 0.5s linear forwards;
	}
	
	@keyframes ani-windowTitle{
		0%{
			top: 110rpx;
			width: 0rpx;
		}
		50%{
			top:110rpx;
			width: 520rpx;
		}
		100%{
			top:0rpx;
			width: 520rpx;
		}
	}
	
	.ani_windowKwords{
		animation: 0.5s ani-windowKwords 0.5s linear forwards;
	}
	
	@keyframes ani-windowKwords{
		0%{
			top: -110rpx;
			width: 0rpx;
			height: 0rpx;
		}
		50%{
			top: -110rpx;
			width: 600rpx;
		}
		100%{
			top: 0rpx;
			width: 600rpx;
			height: auto;
		}
	}
	
	.ani_windowRnum{
		animation: 0.5s ani-windowRnum 1s linear forwards;
	}
	@keyframes ani-windowRnum{
		0%{
			top: -190rpx;
			width: 0rpx;
			height: 0rpx;
		}
		50%{
			top: -190rpx;
			width: 600rpx;
		}
		100%{
			top: 0rpx;
			width: 600rpx;
			height: auto;
		}
	}
</style>
