<template>
	<view class="">
		<view class="background">
			<image class="img" src="../../static/lsy/background.jpg" style="width: 100%;height: 100%;z-index: -1;" ></image>
		</view>
		<view class="title">
			
			<text>订阅</text>
		</view>
		<view class="content">
		<!-- 标签开始 -->
				  <view class="label_box"> 
					<view class="box_inside" v-for="(item,index) in tags" :key="index" > 
					<image src="../../static/lsy/close.png" v-show="isShow"  mode=""></image>
						<image src="../../static/lsy/flower.png" mode=""></image>
						<view class="text_item">
							
						<text class="text_label">{{item}}</text>
						</view>
					</view> 
				  </view>
		<!-- 标签结束 --> 
		</view>
		<view class="add">
			<view class="add_box">
				<view class="img_item">
					<image src="../../static/lsy/pointer.png" mode=""></image>
				</view>
				<navigator url="../../pages/index/compile">
				<!-- 增加添加订阅页面跳转 addSubcription ljs-->
				<view class="text_item" @click="addSubscription">
					<text class="add_label" >添加订阅</text>
				</view>
				</navigator>
			</view>
		
			<view class="add_box">
				<view class="img_item">
					<image src="../../static/lsy/compile.png" mode=""></image>
				</view>
				<view class="text_item">
					<text class="add_label bubble"@click="showToggle">编辑订阅</text>
				</view>
				
			</view>
	   </view>
   </view>   
   
</template>

<script>

	export default {
		data() {
			return {
				tags:[
					'工学院','思源书院','奖学金','淑德','竞赛','四六级',
				],
				isShow:false,
			}
		},
	
		
		onLoad() {

		},
		methods: {
			showToggle(){
			       this.isShow = !this.isShow
			    },
			//跳转到添加订阅页面 ljs
			addSubscription(){
				uni.navigateTo({
					url:"compile?id=1"
				})
			}
		
		}
	}
</script>

<style scoped>
	.title{
		padding-top: 30px;
		padding-left: 40px;
		font-size: 24px;
		color: white;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.background{
		width: 100%;
		height: 1100px;
		position: absolute;
}
	/* 订阅小标签 */
	.label_box{
	padding: 25px;
	position: relative;
	/* text-align: center; */
	display: flex;
	flex-direction:column;
	align-items: center;
	vertical-align: middle;
	
	}
	.box_inside:active{
		transform: scale(1.5) ;
		transition: all 1s ease-in-out;
	}
	.label_box image{
		margin-top: 2px;
		margin-left: 5px;
		width: 25px;
		height: 25px;
	}
	.box_inside{
		margin: 9px;
		height: 39px;
		padding-left: 10px;
		padding-right:20px ;
		width: auto;
		background:rgba(209, 213, 229, 0.7);
		border-radius: 40px;
		color: #696969;	
		font-size: 16px;
		display: flex;
		flex-direction:initial;
		align-items: center;
		vertical-align: middle;
		box-shadow: 0 0 10px #8a8a8a;
		animation: dong 8s infinite;
	}
	

	@keyframes dong { 
	       0% {             
	           transform: translate(-80px, 0px);            
	        }            
	       50% {                
	           transform: translate(130px, 0px);            
	        }           
	        100% {                
	           transform: translate(-80px, 0px);
	        }
	}

	.text_label{
		color: #515662;
	}
	/* 编辑订阅 */
	.add{
	margin-top: 50px;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	}
	.add_box{
		width: 130px;
		height: 70px;
		background:rgba(209, 213, 229, 0.7);
		border-radius: 40px;
		color: #696969;	
		font-size: 18px;
		margin-top: 15px;
		margin-right: 20px;
		text-align:center; 
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
		box-shadow: 0 0 10px #946394;
	}
	.img_item{
		margin: 0 auto;

	}
	.add_box image{
		width: 25px;
		height: 25px;
	}
	/* 气泡 */
	.bubble {
			position: relative;
			overflow: hidden;
		}
	.bubble:after {
			content: "哈哈(>~<)";
			
			background: #af9bcc;
			position: absolute;
			width: 60px;
			height: 60px;
			left: calc(50% - 75rpx);
			top: calc(50% - 75rpx);
			opacity: 0;
			margin: auto; 
			
			border-radius: 50%;
			transform: scale(0.3);
			transition: all 1s ease-in-out;
		}
	
		.bubble:active:after {
			transform: scale(1.2);
			opacity: 1;
			transition: 0.5s;
		}
</style>
