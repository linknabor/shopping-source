<style scoped>
html{font-size: 16px;}
.fl{float: left;}
.fr{float: right;}
.por{position: relative;}
.poa{position: absolute;}
.item{font-family: PingFangSC-Regular;height: 930px;}	

.product-ul{width: 98%;margin: 0 auto;}
.product-li{width: 50%;height:220px;float: left;background-color: #fff; }
.product{width: 100%;height: 150px;background-color: #fff;}
.product img{width:98%;height: 146px;padding: 2px 1%;margin: auto; }
.product-name{font-size: 14px;padding-left: 5px;color: black}
.product-price{margin-top: 20px;float: left;}
.price-now{font-size: 18px;color:#ff8a00; }
.price-old{font-size: 10px;color:#999;text-decoration: line-through; }
.price-sale{margin-top: 20px;font-size: 14px;color: white;background:#ff8a00;
	border-radius: 5px;float: right;margin-right: 10px;}
</style>
<template>
	<div class="item">
		<ul class="product-ul">
			<li class="product-li" v-for="item in 8 " >
				<!-- <a href="https://www.e-shequ.com/guangming/weixin/group/onsaledetail.html?ruleId=1234&type=30"> -->
				<router-link to="onsaledetail">
				<div class="product">
					<img src="http://img.e-shequ.com/FmcObksU6GuGwSpFvXbl2jnzDfTR" alt="">
				</div>
				<p class="product-name">{{wangzhe}}</p>
				<p class="product-price">
					<strong class="price-now">￥&nbsp;{{newPrice}}</strong>
					<span class="price-old">￥{{oldPrice}}</span> 	
				</p>
				<span class="price-sale">{{dazhe}}折</span>
				</router-link>
				<!-- </a> -->
			</li>
		</ul>
		<navwx></navwx>	
	</div>
</template>
<script>
	let vm;
	import navwx from '../../components/navwx.vue';
	export default {
		name:'item',
		components:{
			navwx
		},
		data(){
			return {
				routerParams:{
					type:30,
				},
				product:[],

			}
		},
		beforeCreate(){//刷新页面
			
		},
		created(){
			vm = this;
		},
		watch:{
			
		},
		mounted(){
			var firstQuery = true;
			console.log(vm.routerParams.type)
	  		this.query();
		},
		methods:{
			query:function () {
				let page = 0;
				let n = "GET",
		        a = "getOnSaleItems/"+vm.routerParams.type+"/"+page,
		        i = null,
		        e = function(n) {
					console.log(JSON.stringify(n));
					console.log(n.result);
					vm.product = n.result;
					console.log(vm.product);
		            
		            // if(firstQuery) {
		       	    // 	commonui.initPage();
		       	    // 	firstQuery = false;
		            // } else {
		            // 	commonui.hideAjaxLoading();
		            // }
		            // page++;
		        },
		        r = function() {
					o.temais = [];
		       	    if(firstQuery) {
		       	    	commonui.initPage();
		       	    	firstQuery = false;
		            } else {
		            	commonui.hideAjaxLoading();
		            }
		        };
		        this.common.invokeApi(n, a, i, null, e, r)

				// let page = 0;
				// if(vm.routerParams.type == null){
				// 	vm.routerParams.type = 100;
				// }
				// let url1 = "onsales/"+vm.routerParams.type+"/"+page;
				// console.log(url1);
				// vm.receiveData.getData(vm,url1,'data1',function(){
				// 	console.log(vm.data1);
				// })
			}

		}
	}
</script>