<style scoped>
	.success{background: #e0e0e038;position: fixed;width: 100%;height: 100%;top: 0;}
	.brand-tip {
		padding: 30px 0;
		padding-left: 20px;
		font-size: 30px;
		background: url("../../assets/image/common/successful.png") no-repeat;
		background-position: 35px center;
		background-size: 35px;
		text-align:center
	}
	.highlight {
		color: #dd0000;
	}
	.divider {border-bottom: 10px solid #e0e0e0;padding-bottom: 10px;}
	.success-main{width:80%;margin: 20px auto;}
	.success-main p{height: 16px;line-height: 16px;padding: 5px 10px;}
	.zunxiang{border-top: 1px solid cyan;padding-top: 10px;}
	.code{width: 200px;margin: 20px auto;}
	.code img{width: 100%;}
	.toindex{width: 100%;height: 40px;line-height: 40px;background: #dd0000;
		color: white;text-align: center;letter-spacing: 1px;position: fixed;bottom: 0;left: 0}
</style>
<template>
	<div class="success">
		<div class="brand-tip highlight" style="font-size: 24px;">恭喜你！交易成功</div>
		<div class="highlight fs14 divider p15" style="text-align:center;" >点击右上角将链接分享给您的朋友和邻居吧！</div>
		<div class="success-main">
			<p>
				<span class="fl">订单编号：</span>
				<span class="fr">123</span>
			</p>
			<p>
				<span class="fl">商品信息：</span>
				<span class="fr">6(件)</span>
			</p>
			<p>
				<span class="fl">支付金额：</span>
				<span class="fr">￥</span>
			</p>
		</div>
		<p class="highlight tc zunxiang">长按关注悦生活，尊享更多特卖产品</p>
		<div class="code">
			<img src="../../assets/image/group/code.png" alt="">
		</div>
		<div class="toindex fs14">
			返回选择更多商品
		</div>
	</div>
</template>
<script>
	let vm;
	import { Cell } from 'mint-ui';
	export default {
		data(){
			return {
				params:{
					orderId:this.$route.query.orderId,
				},
			}
		},
		beforeCreate(){//刷新页面
			
		},
		created(){
			vm = this;
			//this.getSuccessInfo();
		},
		watch:{
			
		},
		mounted(){

	  		
		},
		methods:{
			getSuccessInfo(){
				let url = "getOrder/"+vm.params.orderId;
				vm.receiveData.getData(vm,url,'res',function () {
					vm.order = vm.res.result;
					// if(vm.order == null || vm.order.id == null){
					// 	if(confirm("获取订单信息失败")){
					// 		if
					// 	}
					// }
				})
			}

		}
	}
</script>