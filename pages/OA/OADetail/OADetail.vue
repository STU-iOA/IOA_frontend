<template>
	<view>
		<view class="OAHead">
			<view class="titlePart"><text>OATitle</text></view>
			<view class="dataPart"><view class="read_collect"><text>500\n收藏人数</text><text>1000\n阅读人数</text></view><view class="collBtn"  :class="{'colltTapped':colltTapped}"><button @click="collBtn()">收藏</button></view></view>
			<view class="kWPart"><text>关键词1</text><text>关键词2</text><text>关键词3</text></view>
		</view>
		<view class="OAContent">
			<image src="../../../static/subscribe/planet.png"></image>
			<view class="contentBox">
				<view class="depart_time"><text>2021.10.10</text></view>
				<view class="main">
					<view class="left"><text>OA详情</text></view>
					<scroll-view scroll-y='true'>全体毕业生：

  兹定于2021年10月30日（星期六）上午9：30在汕头大学步行街举办汕潮揭上市公司及大型企业汕头大学2021年专场招聘会，届时来自汕头、潮州、揭阳等粤东地区约80家上市公司及大型企业参与招聘，包括广东光华科技股份有限公司、中海地产汕头公司、广东奥飞实业有限公司、广东潮宏基实业股份有限公司、汕头比亚迪电子有限公司、潮州三环（集团）股份有限公司、拉芳家化股份有限公司、汕头市超声仪器研究所股份有限公司、广东凯普生物科技股份有限公司、汕头大学医学院第一附属医院、揭阳市人民医院、汕头爱尔眼科医院有限公司知名用人单位，职位涉及管理培训生、总经理助理教师、电气工程师、自动化工程师、技术员、策划、营销、文秘、财务、人力资源、护理、医生等，涵盖了机械类、师范类、计算机类、土木类、管理类、经济类、设计类、语言类、医疗类等各个专业。

  现将招聘会参会企业招聘职位一览表公布如下（见附件1），请毕业班同学做好准备，按时参加；欢迎高年级的同学前往招聘会现场寻找实习机会。所有入场人员请佩戴口罩和配合体温检测入场，所有人员体温低于37.3℃方可进入。（参会防疫保护须知详见附件2）

  特此通知

汕头大学招生就业处

2021年10月28日</scroll-view>
				</view>
			</view>
		</view>
		<!-- 返回上一页按钮 ljs-->
		<button type="default" class="button" @click="goBack">返回上一页</button>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				colltTapped:false
			}
		},
		methods: {
			collBtn(){
				this.colltTapped=true;
				
				console.log("11111111111111")
			},
			//返回上一页 函数 ljs
			goBack(){	
				uni.navigateBack({			
					delta:1
				})
			}
		}
	}
</script>

<style>
	.OAHead{
		width: 100%;
	}
	.titlePart{
		width: 746rpx;
		height: 132rpx;
		border: 2rpx solid #BFBFBF;
		font-size: 50rpx;
		text-align: center;
		
	}
	.titlePart text{
		line-height: 250%;
	}
	.dataPart{
		display: flex;
		justify-content: space-between;
		height:198rpx;
		font-size: 30rpx;
	}
	.read_collect{
		width: 400rpx;
		display: flex;
		padding-top: 20rpx;
		justify-content: space-around;
		text-align: center;
	}
	
	.read_collect text{
		white-space: pre-wrap;
		line-height: 200%;
	}
	
	.collBtn{
		width: 220rpx;
		padding-right: 30rpx;
	}
	.collBtn button{
		position: relative;
		top: 50%;
		transform: translateY(-60%);
		font-size: 32rpx;
		color: white;
		border-radius: 60rpx;
		background-color: #B068C9;
		
	}
	.colltTapped{
		color: #2C405A;
	}
	
	.kWPart{
		width: 100%;
		display: flex;
		justify-content: space-around;
		padding: 40rpx 0rpx;
		box-shadow: 0rpx 4rpx 10rpx #BFBFBF;
	}
	.kWPart text{
		border-radius: 20rpx;
		background-color: #B068C9;
		color: white;
		padding: 20rpx 40rpx;
		
	}
	.OAContent{
		position: relative;
		width: 100%;
	} 
	.OAContent image{
		position: absolute;
		left: 3%;
		width: 200rpx;
		height: 200rpx;
		transform: rotateZ(-45deg);
		z-index: 5;
	}
	.OAContent .contentBox{
		position: relative;
		width: 640rpx;
		height: 860rpx;
		left: 50%;
		transform: translate(-45%, 10%);
		
		box-shadow: 0rpx 4rpx 10rpx 4rpx #BFBFBF;
	}
	.depart_time{
		/* width: 100%; */
		height: 80rpx;
		color: #C1C1C1;
		padding-left: 25%;
	}
	.depart_time text{
		line-height: 120rpx;
	}
	.main{
		position: relative;
		display: flex;
	}
	.main .left{
		font-size: 40rpx;
		color: #CB9ADD;
		width: 60rpx;
		padding: 40rpx 40rpx;
		white-space: pre-wrap;
		word-break: break-word;
	}
	.main .left text{
		line-height: 80rpx;
	}
	
	.main scroll-view{
		width: 460rpx;
		height: 620rpx;
		padding-top: 40rpx;
		padding-bottom: 30rpx;
		border-bottom: 2rpx solid #BFBFBF;
	}
	/* 返回上一页按钮 ljs*/
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
