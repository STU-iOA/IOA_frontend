<template>
	<view>
		<!-- 上半区域位置固定 -->
		<view class="fix">
		<!-- 选项卡 -->
		<view class="inv-h-w">
		    <view :class="['inv-h',Inv==0?'inv-h-se':'']" @click="Inv=0" tabindex="0">已收藏OA</view>
		    <view :class="['inv-h',Inv==1?'inv-h-se':'']" @click="Inv=1" tabindex="0">按照订阅分类</view>
		</view>
		<!-- 搜索框 -->
		<view class="search">
			<input class="searchType" type="text" value="" placeholder="搜索"/>
		</view>
		<view class="line"></view>
		</view>
		<!-- 选项卡1 -->
		<view v-show="Inv == 0">
			<view class="oaPosition">
			<!-- 第一条OA展示 -->
			<view class="oaPreview">
			<view class="oaText">
				<view class="oaTitle">OA0</view>
				<text>啊啊啊啊啊啊啊啊啊 啊啊啊啊啊啊啊啊啊</text>
				<view class="keywords">
					<view class="keywordsBox">
						<view class="keywordsLabel">
							<text class="keywordsLabelContent">关键词1</text>
						</view>
						<view class="keywordsLabel">
							<text class="keywordsLabelContent">关键词2</text>
						</view>
						<view class="keywordsLabel">
							<text class="keywordsLabelContent">关键词3</text>
						</view>
					</view>
					<view class="keywordWrite"><text>关键词</text></view>
				</view>
			</view>
			<view class="iconPosition">
				<image class="goodIcon" src="../../../../static/Me/myPage/good.png" mode=""></image>
				<view class="shareBack">
					<image class="shareIcon" src="../../../../static/Me/myPage/shareSmaller.png" mode=""></image>
				</view>
				<view class="log">
					<view><text>1234 人已阅 | 700人已收藏</text></view>
					<view class="time"><text>2021.10.27 | 19:00</text></view>
				</view>
			</view>
		</view>
		<!-- 第二条OA展示 -->
		<view class="oaPreview">
			<view class="oaText">
				<view class="oaTitle">OA1</view>
				<text>啊啊啊啊啊啊啊啊啊 啊啊啊啊啊啊啊啊啊</text>
				<view class="keywords">
					<view class="keywordsBox">
						<view class="keywordsLabel">
							<text class="keywordsLabelContent">关键词1</text>
						</view>
						<view class="keywordsLabel">
							<text class="keywordsLabelContent">关键词2</text>
						</view>
						<view class="keywordsLabel">
							<text class="keywordsLabelContent">关键词3</text>
						</view>
					</view>
					<view class="keywordWrite"><text>关键词</text></view>
				</view>
			</view>
			<view class="iconPosition">
				<image class="goodIcon" src="../../../../static/Me/myPage/good.png" mode=""></image>
				<view class="shareBack">
					<image class="shareIcon" src="../../../../static/Me/myPage/shareSmaller.png" mode=""></image>
				</view>
				<view class="log">
					<view><text>1234 人已阅 | 700人已收藏</text></view>
					<view class="time"><text>2021.10.27 | 19:00</text></view>
				</view>
			</view>
		</view>
		<!-- 第三条OA -->
		<view class="oaPreview">			
			<view class="oaText">
				<view class="oaTitle">OA3</view>
				<text>啊啊啊啊啊啊啊啊啊 啊啊啊啊啊啊啊啊啊</text>
				<view class="keywords">
					<view class="keywordsBox">
						<view class="keywordsLabel">
							<text class="keywordsLabelContent">关键词1</text>
						</view>
						<view class="keywordsLabel">
							<text class="keywordsLabelContent">关键词2</text>
						</view>
						<view class="keywordsLabel">
							<text class="keywordsLabelContent">关键词3</text>
						</view>
					</view>
					<view class="keywordWrite"><text>关键词</text></view>
				</view>
			</view>
			<view class="iconPosition">
				<image class="goodIcon" src="../../../../static/Me/myPage/good.png" mode=""></image>
				<view class="shareBack">
					<image class="shareIcon" src="../../../../static/Me/myPage/shareSmaller.png" mode=""></image>
				</view>
				<view class="log">
					<view><text>1234 人已阅 | 700人已收藏</text></view>
					<view class="time"><text>2021.10.27 | 19:00</text></view>
				</view>
			</view>
		</view>
		</view>
		<!-- 返回上一页按钮 -->
		<button type="default" class="button" @click="goBack">返回上一页</button>
		</view>
		<!-- 选项卡2 -->
		<view class="" v-show="Inv == 1">
			<!-- 订阅部分展示 -->
			<view class="oaPosition">
			<view class="surbscribeBox">
				<view class="surbscribe">
					<view class="surbscribeLabel change" tabindex="0">
						<text class="surLabelContent">订阅1</text>
					</view>
					<view class="surbscribeLabel change" tabindex="0">
						<text class="surLabelContent">订阅2</text>
					</view>
					<view class="surbscribeLabel change" tabindex="0">
						<text class="surLabelContent">订阅3</text>
					</view>
					<view class="surbscribeLabel change" tabindex="0">
						<text class="surLabelContent">订阅4</text>
					</view>
					<view class="surbscribeLabel change" tabindex="0">
						<text class="surLabelContent">订阅5</text>
					</view>
					<view class="surbscribeLabel change" tabindex="0">
						<text class="surLabelContent">订阅6</text>
					</view>
				</view>
			</view>
			<!-- 第一条OA -->
			<view class="oaPreview">
				<view class="oaText">
					<view class="oaTitle">OA0</view>
					<text>啊啊啊啊啊啊啊啊啊 啊啊啊啊啊啊啊啊啊</text>
					<view class="keywords">
						<view class="keywordsBox">
							<view class="keywordsLabel">
								<text class="keywordsLabelContent">关键词1</text>
							</view>
							<view class="keywordsLabel">
								<text class="keywordsLabelContent">关键词2</text>
							</view>
							<view class="keywordsLabel">
								<text class="keywordsLabelContent">关键词3</text>
							</view>
						</view>
						<view class="keywordWrite"><text>关键词</text></view>
					</view>
				</view>
				<view class="iconPosition">
					<image class="goodIcon" src="../../../../static/Me/myPage/good.png" mode=""></image>
					<view class="shareBack">
						<image class="shareIcon" src="../../../../static/Me/myPage/shareSmaller.png" mode=""></image>
					</view>
					<view class="log">
						<view><text>1234 人已阅 | 700人已收藏</text></view>
						<view class="time"><text>2021.10.27 | 19:00</text></view>
					</view>
				</view>
			</view>
			<!-- 第二条OA -->
			<view class="oaPreview">
				<view class="oaText">
					<view class="oaTitle">OA1</view>
					<text>啊啊啊啊啊啊啊啊啊 啊啊啊啊啊啊啊啊啊</text>
					<view class="keywords">
						<view class="keywordsBox">
							<view class="keywordsLabel">
								<text class="keywordsLabelContent">关键词1</text>
							</view>
							<view class="keywordsLabel">
								<text class="keywordsLabelContent">关键词2</text>
							</view>
							<view class="keywordsLabel">
								<text class="keywordsLabelContent">关键词3</text>
							</view>
						</view>
						<view class="keywordWrite"><text>关键词</text></view>
					</view>
				</view>
				<view class="iconPosition">
					<image class="goodIcon" src="../../../../static/Me/myPage/good.png" mode=""></image>
					<view class="shareBack">
						<image class="shareIcon" src="../../../../static/Me/myPage/shareSmaller.png" mode=""></image>
					</view>
					<view class="log">
						<view><text>1234 人已阅 | 700人已收藏</text></view>
						<view class="time"><text>2021.10.27 | 19:00</text></view>
					</view>
				</view>
			</view>
			<!-- 第三条OA -->
			<view class="oaPreview">
				<view class="oaText">
					<view class="oaTitle">OA3</view>
					<text>啊啊啊啊啊啊啊啊啊 啊啊啊啊啊啊啊啊啊</text>
					<view class="keywords">
						<view class="keywordsBox">
							<view class="keywordsLabel">
								<text class="keywordsLabelContent">关键词1</text>
							</view>
							<view class="keywordsLabel">
								<text class="keywordsLabelContent">关键词2</text>
							</view>
							<view class="keywordsLabel">
								<text class="keywordsLabelContent">关键词3</text>
							</view>
						</view>
						<view class="keywordWrite"><text>关键词</text></view>
					</view>
				</view>
				<view class="iconPosition">
					<image class="goodIcon" src="../../../../static/Me/myPage/good.png" mode=""></image>
					<view class="shareBack">
						<image class="shareIcon" src="../../../../static/Me/myPage/shareSmaller.png" mode=""></image>
					</view>
					<view class="log">
						<view><text>1234 人已阅 | 700人已收藏</text></view>
						<view class="time"><text>2021.10.27 | 19:00</text></view>
					</view>
				</view>
			</view> 
			</view>
			<!-- 返回上一页按钮 -->
			<button type="default" class="button" @click="goBack">返回上一页</button>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				Inv:0
			}
		},
		methods:{
			
			goBack(){
				uni.navigateBack({
					//改用navigateBack返回上一页 ljs
					delta:1
					// url:'../../level1/myPages/myPages'
				})
			}
			
		}
	}
</script>

<style scoped>
	/* 固定选项卡位置 */
	.fix{
		top: 0; 
		/* 添加top0固定顶部 ljs*/
		position: fixed;
		z-index: 2;
		width: 100%;
		background-color: white;
	}
	/* 选项卡样式 */
	.inv-h-w{
		margin-top: 100rpx;
		background-color: #FFFFFF;
		height: 80rpx;
		display: flex;
		width: 530rpx;
		}
	.inv-h{ 
		font-size: 38rpx;
		/* font-weight: 550; */
		flex: 1;
		text-align: center;
		color: #666666;
		height: 72rpx;
		line-height: 60rpx;
		margin-left: 30rpx;
		}
	.inv-h:focus{
		font-weight: 550;
		color: #030303;
	}
	.inv-h-se{			
		border-bottom: 8rpx solid #9E45BD;
		/* margin-left: 30rpx; */
		}
	/* 搜索栏 */
	.search{			
		position: relative;
		top: 30rpx;
		left: 40rpx;
	}
	.searchType{
		padding-left: 40rpx;
		width: 640rpx;
		height: 88rpx;
		background-color: #EDEAF4;
		border-radius: 40rpx;
		text-align: center;
	}
	/* 分割线 */
	.line{
		margin-top: 60rpx;
		border-bottom: 3rpx solid #EDEAF4;
		box-shadow: 0 0 30rpx #CCC;
	}
	/* OA展示部分 */
	.oaPosition{
		/* margin-top: 300rpx; */
		position: relative;
		top: 300rpx;
		margin-bottom: 150rpx;
	}
	.oaPreview{
		/* padding-top:400rpx ; */
		margin-top: 60rpx;
		margin-left: 40rpx;
		/* margin-bottom: 90rpx; */
		width: 670rpx;
		height: 528rpx;
		border-radius: 60rpx;
		box-shadow: inset 0 0 10rpx #CCC;
	}
	.oaText{
		margin-left: 40rpx;
		padding-top: 30rpx;
		color: #666666;
	}
	.oaTitle{
		color: black;
		font-size: 40rpx;
		font-weight: 550;
		margin-bottom: 15rpx;
	}
	/* 关键词部分 */
	.keywords{
		position: relative;
		top: 80rpx;
		left: -40rpx;
		width: 670rpx;
		height: 152rpx;
		box-shadow: inset 0 0 10rpx #CCC;
	}
	.keywordsBox{
		width: 595rpx;
		display: flex;
		padding-left: 40rpx;
		padding-top: 20rpx;	
		justify-content: space-between;
	}
	.keywordsLabel{
		width: 166rpx;
		height: 58rpx;		
		border-radius: 25rpx;
		background-color: #9E45BD;
	}
	.keywordWrite{
		color: #9E45BD;
		margin-top: 15rpx;
		margin-left: 510rpx;
		font-size: 30rpx;
	}
	.keywordsLabelContent{
		color: white;	
		padding: 29rpx;
		font-size: 30rpx;
		position: relative;
		top: 7rpx;
	}
	/* 点赞和转发图标部分 */
	.iconPosition{
		position: relative;
		top: 100rpx;
		display: flex;
	}
	.goodIcon{		
		left: 30rpx;
		width: 72rpx;
		height: 72rpx;
	}
	.shareBack{
		width: 80rpx;
		height: 60rpx;
		background-color: 	#DDA0DD;
		border-radius: 20rpx;
		margin-left: 60rpx;
	}
	.shareIcon{
		width: 45rpx;
		height: 45rpx;
		padding-left: 16rpx;
		margin-top: 10rpx;
	}
	/* OA右下角信息部分 */
	.log{
		color: #5D6371;
		font-size: 25rpx;
		position: relative;
		left: 150rpx;
	}
	/* 时间 */
	.time{
		margin-top: 15rpx;
		text-align: center;
	}
	/* 订阅分类部分的订阅标签 */
	.surbscribeBox{
		margin-top: 40rpx;
		margin-left: 40rpx;
		width: 670rpx;
		height: 200rpx;
		border:solid 2rpx #C4C4C4;
	}
	.surbscribe{
		display: flex;
		padding: 20rpx;
		flex-direction: raw;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.surbscribeLabel{
		width: 166rpx;
		height: 58rpx;		
		border-radius: 15rpx;
		background-color: #9E45BD;
		margin-top: 20rpx;
	}
	.surLabelContent{
		color: white;
		padding: 44rpx;
		font-size: 30rpx;		
		position: relative;
		top: 7rpx;
	}
	/* 点击改变订阅标签颜色 */
	.change:focus{
		background-color: #DDA0DD;
	}
	/* 返回上一页按钮 */
	.button{
		position: fixed;
		z-index: 2;
		bottom: 0;
		width: 100%;
		height: 120rpx;
		color: white;
		padding: 10rpx;
		font-size: 40rpx;
		background-color: rgba(158,69,189,0.6);
	}
</style>
