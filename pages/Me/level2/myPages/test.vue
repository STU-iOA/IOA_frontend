<template>
<view>
<image src="../../../../static/Me/myPage/cancelGood.png" v-show="showUpImg" @click="changeImg"></image>
<image src="../../../../static/Me/myPage/crown.png" v-show="!showUpImg" @click="changeImg"></image>
</view>
</template>

 <script>

export default {
	data() {
	return {
	showUpImg:true
	};
	},
	methods:{
		changeImg:function(){
			this.showUpImg = !this.showUpImg
	}
},

}

 </script>
