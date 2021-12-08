<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}

</script>

<style>
	/*每个页面公共css */
	uni-checkbox .uni-checkbox-input {
	     border-radius: 50% !important;
	     color: #ffffff !important;
	 }
	 
	 uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked {
	     color: #fff;
	     background: #9E45BD;
	 }
	 uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked:after{
	     font-size: 23px;
			
	 }
	 
	/* uni-page-head隐藏  ljs*/
	uni-page-head {
		display: none;
	}
	/* uni-page-refresh隐藏 ljs*/
	uni-page-refresh{
		height: 0;
	}
	*{
		padding: 0;
		margin: 0;
	}
</style>
