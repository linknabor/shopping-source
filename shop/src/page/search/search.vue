<style scoped>
html{font-size: 16px;}
.fl{float: left;}
.fr{float: right;}
.por{position: relative;}
.poa{position: absolute;}
.item{font-family: PingFangSC-Regular;}	
.clear{clear:both;}  
.daodi{width: 100%;height: 80px;background: #ccc;text-align: center;line-height: 30px;}
.product-ul{width: 98%;margin: 0 auto;}
.product-li{width: 50%;height:220px;float: left;background-color: #fff; }
.product{width: 100%;height: 150px;background-color: #fff;}
.product img{width:98%;height: 146px;padding: 2px 1%;margin: auto; }
.product-name{font-size: 14px;padding-left: 5px;color: black;height: 20px;overflow: hidden;}
.product-price{margin-top: 20px;float: left;}
.price-now{font-size: 18px;color:#ff8a00; }
.price-old{font-size: 10px;color:#999;text-decoration: line-through; }
.price-sale{margin-top: 18px;font-size: 14px;color: white;background:#ff8a00;
	border-radius: 5px;float: right;margin-right: 20px;
	padding: 3px 5px;}	

.ui-empty {width: 100%;background: #ccc;text-align: center;padding-top: 50px}
.ui-empty-icon {width: 120px;height: 120px;line-height: 120px;
  color: #fff;background:cyan;border-radius: 50%;margin: 0 auto;}
.ui-empty-text {margin: 15px 0 10px}
.qusou{width: 100%;height: 30px; position: relative;padding-bottom: 10px;}
.qusou span{width: 100px;text-align: center; height: 30px;line-height: 30px; background: cyan;color: black; left:50%;margin-left: -50px; position: absolute;}

.inner2{width: 100%;height:30px;}
.hot{margin-top: 10px;}
.inner2-con{width: 202px;height: 100%;margin: 0 auto;}
.inner21{width: 45px;height: 2px;background-color: #9c9c9c;left: 0px;top: 14px;}
.inner22{width: 6px;height: 6px;background-color:#9c9c9c;left: 45px;top:12px; border-radius: 50%; }
.inner23{width: 100px;height: 30px;line-height: 30px;color: #0e0e0e;font-size: 15px;left: 51px;letter-spacing: 1px;font-weight: bold;text-align: center;}
.inner24{width: 6px;height: 6px;background-color:#9c9c9c;right: 45px;top:12px;border-radius: 50%;}
.inner25{width: 45px;height: 2px;background-color: #9c9c9c;right: 0px;top: 14px;}
.inner5{width: 96%;height: 440px;background-color: #fff;margin: 0 auto 10px;overflow: hidden;}
.hot-ul{width: 100%;overflow: hidden;}
.hot-li{width: 30%;height: 200px;background-color: #fff;float: left;margin: 15px 1.67% 0px;text-align: left;}
.hot-img{height: 120px;width: 100%;}
.hot-img img{width: 100%;height: 120px;margin: auto;}
.hotli-name{font-size: 12px;color: #0e0e0e;padding: 5px;height: 30px;line-height: 15px;}
.hotli-price{font-size: 11px;color: #666;padding-left: 5px;}
.price-color{font-size: 14px;color: #bd2630;}
.hotli-num{padding-left: 5px;font-size: 9px;color: #666;}
.height{height:80px;width:100%;background:white;}
</style>
<template>
	<div class="item">
		<ul class="product-ul">
			<li class="product-li" v-for="item in search" >
				<!-- <router-link to="onsaledetail"> -->
				<router-link :to="{path:'/onsaledetail',query:{ruleId:item.id}}">	
				<div class="product">
					<img :src="item.pictures" alt="">
				</div>
				<p class="product-name">{{item.name}}</p>
				<p class="product-price">
					<strong class="price-now">￥&nbsp;{{item.miniPrice}}</strong>
					<span class="price-old">￥{{item.oriPrice}}</span> 	
				</p>
				<span class="price-sale">{{item.freezeNum}}&nbsp;折</span>
				</router-link>
			</li>
			<li class="clear"></li>
		</ul>
		<!-- <div class="daodi" v-show="daodi">到底了</div> -->
		<div v-show="ifshow">
			<div class="ui-empty">
				<div class="ui-empty-icon">
					<div class="icon icon-uniE810"></div>
				</div>
	            <p class="ui-empty-text">抱歉，暂无相关商品～</p>
	            <router-link to="/">
					<h2 class="qusou">
						<span>去逛逛</span>
					</h2>
				</router-link> 
			</div>
			
			<div class="inner2 hot" >
		      <div class="inner2-con por">
		        <div class="inner21 fl poa"></div>
		        <div class="inner22 fl poa"></div>
		        <div class="inner23 fl poa">
		          推荐产品
		        </div>
		        <div class="inner24 fl poa"></div>
		        <div class="inner25 fl poa"></div>
		      </div>
		    </div>
		    <div class="inner5">
				<ul class="hot-ul">
					<li class="hot-li" v-for="hotli in hotSale">
						<router-link :to="{path:'/onsaledetail',query:{ruleId:hotli.id}}">
							<div class="hot-img">
								<img :src="hotli.mainPicture" alt="" class="">
							</div>
							<p class="hotli-name">{{hotli.name}}</p>
							<p class="hotli-price"><span class="price-color">￥&nbsp;<strong>{{hotli.oriPrice}}</strong>&nbsp;</span>/个</p>
							<span class="hotli-num">已售&nbsp;{{hotli.saledNum}}</span>
						</router-link>
					</li>
				</ul>
			</div>			
		</div>
		<div class="height"></div>
		<navwx></navwx>	
	</div>

</template>
<script>
	let vm;
	import navwx from '../../components/navwx.vue';
	export default {
		name:'search',
		components:{
			navwx
		},
		data(){
			return {
				params:{
					sousuo:this.$route.params.sousuo,
				},
				daodi:false,
				ifshow:false,
				scrollH:false,
				search:[],
				hotSale:"",
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
			this.searchList();
			this.shopshow();
		},
		methods:{
			//获取搜索商品信息
			searchList(){
				let url = "productCotroller/search?name="+this.params.sousuo;
				vm.receiveData.getData(vm,url,'Data',function(){
					vm.search = vm.Data;
					if(vm.Data.length==0){
						vm.ifshow=true;
					}else{
						vm.daodi=true;
					}
					
				});
			},
			//获取底部商品信息
			shopshow(){
				let url = '/shopping/homepage/shopshow';
		        vm.receiveData.getData(vm,url,'Data',function(){
		            vm.hotSale = vm.Data.result;
		        });
			},
		}
	}
</script>