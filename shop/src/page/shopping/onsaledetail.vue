<style scoped>
	[v-cloak]{display: none;}
	.fl{float: left;}
	.fr{float: right;}
	.por{position: relative;}
	.poa{position: absolute;}
	.height{width: 100%;height: 100px;background-color: white;}
	#onsaledetail{font-family: PingFangSC-Regular;
	      background-color: #f2f2f2;font-size: 14px;}
	.ban1{width:100%;/*height:162px;*//*margin: auto;*/}
	.ban1 img{width: 100%;/*height: 100%;margin:auto;*/}	

	.product-name{font-size: 20px;background-color: #fff;color: black;
		letter-spacing:1px;padding: 10px;line-height: 26px;height: 50px;}
	.product-price{background-color: white;}	
	.price-new{font-size: 26px;color: #bd2630;padding: 10px;}
	.price-old{font-size: 12px;color: #666;text-decoration:line-through; }

	.guige{padding: 0;background-color: white;list-style: none;margin-top: 0.3rem;}
	.guige li{padding: 0 0.2rem;
			height: 1rem;
			line-height: 1rem;
			border-bottom:1px solid #cecdc9;}
	.font-style{font-size: 16px;color: #6e6e6e;}
	.icon-style{font-size: 22px;color: #6e6e6e;opacity: .8;padding-right: 10px;}

	.can-use{
		/*display: inline-block;*/
		width: 1.35rem;
		height: 0.45rem;
		color:#c3c3c3;
		font-size: 14px;
		text-align: center;
		letter-spacing: 2px;
		/*opacity: 0.6;*/
	}
	.coupon{
		color: #ff8a05;
	}

	.payCount{
		padding: 0 0.2rem;
		height: 1rem;
		line-height: 1rem;
		background-color: #f6f7f1;
		color: #ff8a05;
		border:1px solid #cecdc9;
		margin-top: 0.3rem;
	}
	.bigfont{
		font-size: 0.32rem;
		-font-weight: bold;
	}

	.show-guige{display: none;}
	.box-bg {width: 100%;opacity: .5;height: 100%;position: fixed;
	    background-color: #666;top: 0;left: 0;z-index: 100;}
	.show-guige .choose-guige-main{ position: fixed;left: 0;bottom: 0;z-index: 101;
		width: 100%;/*height: 10.5rem;*/background-color: white;-webkit-transform: translateY(10rem);
	    transform: translateY(10rem);
	    -webkit-transition: -webkit-transform .2s cubic-bezier(0,0,.25,1);}
	.show {
	    -webkit-transform: translateY(0) !important;
	}
	.guige-top{width: 100%;height: 3rem;background-color: #fff;}
	.guige-top-tupian{width: 40%;height: 100%;float: left;}
	.guige-top-tupian img{width: 90%;height: 100%;margin-top: -20px;margin-left: 10%;}
	.guige-top-xq{float: left;width: 60%;height: 100%;}
	.box-close {width: 100%;height: 20px;}
	.box-close img{width: 20px;height: 20px;float: right;margin-top: 10px;margin-right: 10px;}
	.guige-price{font-size: 22px;color: red;padding: 10px 10px}
	.guige-kucun{font-size: 16px;color: #454545;padding-left: 10px;}
	.guige-danwei{font-size: 18px;color: #454546;padding: 10px 10px;}

	.guige-yanse{width: 100%;padding: 20px 20px 0 20px;}
	.guige-name{font-size: 18px;}
	.guige-yanse-main{width: 100%;overflow: hidden;}
	.guige-yanse-main ul{width: 100%;}
	.guige-yanse-li{width: 20%;height: 0.6rem;float: left;border:1px solid #ccc;text-align: center;line-height: 0.6rem;border-radius: 20px;margin-top:0.2rem;margin-right: 10%;}
	
	.noneActive {background-color: #ccc;opacity: 0.4;
        color: #000;pointer-events: none;}
	.productActive {background-color:#bd2630;color: #fff;/*border: 1px solid #1A1A29;*/}
	
	.guige-shuliang{width: 100%;padding: 20px 20px 0 20px;font-size: 18px;margin-bottom: 20px;}
	.shuliang-div{float: left;}
	.sl{float: right; padding-right: 50px;}
	.sl-jian{display: inline-block;background: #ccc;width: 40px;height: 28px;text-align: center; font-size: 20px;}
	.sl-zhi{width: 80px;height: 24px;line-height: 24px;text-align: center;background: #eee;}
	.sl-jia{display: inline-block;background: #ccc;font-size: 20px;width: 40px;height: 28px;text-align: center;}


	.inner2{width: 100%;height:40px;}
	.inner2-con{width: 202px;height: 100%;margin: 0 auto;}
	.inner21{width: 45px;height: 2px;background-color: #9c9c9c;left: 0px;top: 19px;}
	.inner22{width: 6px;height: 6px;background-color:#9c9c9c;left: 45px;top:17px; border-radius: 50%; }
	.inner231{width: 100px;height: 40px;line-height: 40px;color: #0e0e0e;font-size: 15px;left: 60px;letter-spacing: 1px;font-weight: bold;text-align: center;}
	.inner232{width: 100px;height: 40px;line-height: 40px;color: #0e0e0e;font-size: 15px;left: 60px;letter-spacing: 1px;font-weight: bold;text-align: center;}
	.inner233{width: 100px;height: 40px;line-height: 40px;color: #0e0e0e;font-size: 15px;left: 52px;letter-spacing: 1px;font-weight: bold;text-align: center;}
	.icon-xq{width: 20px;height: 20px;top: 5px;left: 10px}
	.icon-xq img{width: 100%;height: 100%;margin: auto;}
	.inner24{width: 6px;height: 6px;background-color:#9c9c9c;right: 45px;top:17px;border-radius: 50%;}
	.inner25{width: 45px;height: 2px;background-color: #9c9c9c;right: 0px;top: 19px;}


	.xq-img{width: 100%;background: #fff;}
	.xq-img >>> img{max-width: 100%;}
	.xq-div{width: 96%;/*display: block;position: relative;*/margin: 2px auto 2px;
 		border: 1px solid #f4eff8;padding: }
 	.xq-div img{width: 100%;}	
/*	.xq-div {width: 100%;height: 100%;margin: auto;}
*/	.product-ul{width: 98%;margin: 0 auto;height: 500px;overflow: hidden;}
	.product-li{width: 50%;height:250px;float: left;background-color: #fff; }
	.product{width: 100%;height: 150px;background-color: #fff;}
	.product img{width:98%;height: 146px;padding: 2px 1%;margin: auto; }
	.product-name-tuijian{font-size: 14px;padding-left: 5px;color: black;line-height: 20px;height: 40px;}
	.product-price-tuijian{margin-top: 10px;float: left;}
	.price-now{font-size: 18px;color:#ff8a00; }
	.price-danwei{font-size: 14px;color:#999; }
	.price-sale{margin-top: 15px;font-size: 14px;color:#ccc;;float: right;margin-right: 12px;}

	.bottom-nav{width: 100%;height: 60px;position: fixed;left: 0;bottom: 0;background-color: pink;}
	.bottom-nav>div{float: left;}
	.bottom-left{width:20%;height: 100%;background-color: #fff; text-align: center;color: #707070;font-size: 14px;letter-spacing: 2px;}
	.bottom-left div{width: 25px;height: 25px;margin: 5px auto;}
	.bottom-left img{width: 100%;height: 100%;margin: auto;}
	.cart-text{color: #707070;}
	.bottom-zhong{width: 40%;height: 100%;background-color:#7c7c7c;text-align: center;
		line-height: 60px;color: #fff;font-size: 20px;}
	.bottom-right{width: 40%;height: 100%;background-color: #bd2630;color: #fff;font-size: 20px;line-height: 60px;text-align: center;}
</style>
<template>
	<div id="onsaledetail" v-cloak>
<!-- 顶部banner图 -->
		<swiper :options="swiperOption" ref="mySwiper">
	      <swiper-slide v-for="(banner,index) in productData.pictureList">
	        <div class="ban1">
	            <img :src="banner" alt="tt">               
	        </div> 
	      </swiper-slide>
	      <!-- <swiper-slide v-for="(banner,index) in productData.pictureList">
	        <div class="ban1">
	            <img :src="banner" alt="tt">               
	        </div> 
	      </swiper-slide> -->
	      <!-- <swiper-slide>
	        <div class="ban1">
	            <img :src="productData.pictures" alt="tt">               
	        </div>
	      </swiper-slide> -->
	      <div class="swiper-pagination" slot="pagination"></div>    
	    </swiper>
	    <p class="product-name">{{rule.name}}</p>
	    <p class="product-price">
	    	<span class="price-new">￥{{rule.price}}</span>
	    	<span class="price-old">原价￥{{productData.oriPrice}}</span>
	    </p>
<!-- 规格 -->
    	<ul class="guige">
			<li class="ov">
				<div class="fl font-style">参数 <span class="can-use">&nbsp;<strong></strong>&nbsp;选择参数&nbsp;</span></div>
				<div class="fr icon-style"> &gt;</div> 
			</li>
			<li class="ov choose-guige" @click="chooseGuige()">
				<div class="fl font-style">规格 <span class="can-use">&nbsp;<strong></strong>&nbsp;选择规格&nbsp;</span></div>
				<div class="fr icon-style"> &gt;</div> 
			</li>
		</ul>
<!-- 选择规格弹窗 -->
		<div class="show-guige">
			<div class="box-bg"></div>
			<div class="choose-guige-main">
				<div class="guige-top">
					<div class="guige-top-tupian">
						<img v-bind:src="selectData.img" alt="">
					</div>
					<div class="guige-top-xq">
						<div class="box-close">
							<img src="../../assets/image/shopping/guige-top-close.png" alt="">
						</div>
						<p class="guige-price">￥{{selectData.price}}</p>
						<p class="guige-kucun">库存<strong>{{selectData.stock}}</strong>件</p>
						<p class="guige-danwei" v-if="selectData.ISdifference">已选择：<strong>{{selectData.difference}}</strong></p>
					</div>
				</div>
				<div class="guige-yanse" v-for="(ProductItem,n) in simulatedDATA.specifications">
					<p class="guige-name">{{ProductItem.name}}：</p>
					<div class="guige-yanse-main">
						<ul>
							<li class="guige-yanse-li" v-for="(oItem,index) in ProductItem.item" v-on:click="specificationBtn(oItem.name,n,$event,index,oItem.id)"  v-bind:class="[oItem.isShow?'':'noneActive',subIndex[n] == index?'productActive':'']">
								<div class="yanse-li">
									{{oItem.name}}
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="guige-shuliang">
					<div class="shuliang-div">数量：</div>
					<div class="sl">
						<span @click="decrace()" class="sl-jian">-</span>
						<input type="text" readonly class="sl-zhi" value="1">
						<span @click="add()" class="sl-jia">+</span>
					</div>
				</div>
				<!-- <div class="guige-daxiao">
					<p class="guige-name">尺寸</p>
					<div class="guige-daxiao-main">
						<ul>
							<li class="guige-daxiao-li" v-for="daxiaoli in daxiaolis">
								<div class="daxiao-li">
									{{daxiaoli.daxiao}}
								</div>
							</li>
						</ul>
					</div>
				</div> -->
			</div>
		</div>
<!-- 详情 -->
		<div class="inner2" v-show="xiangqing">
	      <div class="inner2-con por">
	        <div class="inner21 fl poa"></div>
	        <div class="inner22 fl poa"></div>
	        <div class="inner231 fl poa">
	          <span class="icon-xq fl poa"><img src="../../assets/image/shopping/icon-xiangqing.png" alt=""></span>&nbsp;&nbsp;<span>详情</span>
	        </div>
	        <div class="inner24 fl poa"></div>
	        <div class="inner25 fl poa"></div>
	      </div>
	    </div>
	    <div class="xq-img">
	    	<div class="xq-div" v-html="productData.serviceDesc"></div>
	    	<!-- <img src="../../static/image/index/xq1.png" alt="">
	    	<img src="../../static/image/index/xq2.png" alt="">
	    	<img src="../../static/image/index/xq3.png" alt=""> -->
	    </div>
<!-- 推荐 -->
	    <div class="inner2">
	      <div class="inner2-con por">
	        <div class="inner21 fl poa"></div>
	        <div class="inner22 fl poa"></div>
	        <div class="inner232 fl poa">
	          <span class="icon-xq fl poa"><img src="../../assets/image/shopping/icon-nb.png" alt=""></span>&nbsp;&nbsp;<span>推荐</span>
	        </div>
	        <div class="inner24 fl poa"></div>
	        <div class="inner25 fl poa"></div>
	      </div>
	    </div>
	    <ul class="product-ul">
			<li class="product-li" v-for="item in shopshow" >
				<!-- <a href="https://www.e-shequ.com/guangming/weixin/group/onsaledetail.html?ruleId=1234&type=30"> -->
				<router-link :to="{path:'/onsaledetail',query:{ruleId:item.id}}" @click.native="go()">
				<div class="product">
					<img :src="item.pictures" alt="">
				</div>
				<p class="product-name-tuijian">{{item.name}}</p>
				<p class="product-price-tuijian">
					<strong class="price-now">￥&nbsp;{{item.miniPrice}}</strong>
					<span class="price-danwei">/个</span> 	
				</p>
				<span class="price-sale">已售{{item.saledNum}}</span>
				</router-link>
				<!-- </a> -->
			</li>
		</ul>
		<div class="inner2">
	      <div class="inner2-con por">
	        <div class="inner21 fl poa"></div>
	        <div class="inner22 fl poa"></div>
	        <div class="inner233 fl poa">
	          <span>已经到底了</span>
	        </div>
	        <div class="inner24 fl poa"></div>
	        <div class="inner25 fl poa"></div>
	      </div>
	    </div>
		<div style="width:100%;height:1.2rem;background:#ccc;"></div>

<!-- 底部导航 -->
		<div class="bottom-nav">
			<div class="bottom-left">
				<router-link to="cart">
					<div>
						<img src="../../assets/image/shopping/shopp-cart.png" alt="">
					</div>
					<span class="cart-text">购物车</span>
				</router-link>
			</div>
			<div class="bottom-zhong" @click="addCart()">
				<span>加入购物</span>
			</div>
			<div class="bottom-right">
				<span>立即购买</span>
			</div>
		</div>
	</div>
</template>
<script>
	let vm;
	import wx from 'weixin-js-sdk';
	import {swiper,swiperSlide} from 'vue-awesome-swiper'
	import '../../assets/css/swiper.min.css'
	export default {
		name:'onsaledetail',
		data(){
			return {
				swiperOption:{
			        notNextTick:true,
			        autoplay:true,
			        autoplay:{
			          disableOnInteraction:false,
			          delay:3000
			        },
			        speed:1000,
			        pagination: {
			          el: '.swiper-pagination',
			          clickable:true,
			        },
			        loop: true,			        
			    },
			    xiangqing:true,
		        ruleId:"",
		        finished:false,
		        rule:"",
		        productData:"",
		        shopshow:"",
		        left:{
		        	days:"0",
		        	hours:"0",
		        	minitus:"0",
		        	seconds:"0"
		        },
		        routeParams:{
					ruleId : this.$route.query.ruleId,
				},
				simulatedDATA: { //模拟后台返回的数据 多规格
		            "difference": [{ //所有的规格可能情况都在这个数组里
                            "id": "19",
                            "price": "200.00",
                            "stock": "200",
                            "difference": "100,白色",
                            'img': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3680751882,564213255&fm=15&gp=0.jpg'
                        },
                        {
                            "id": "21",
                            "price": "300.00",
                            "stock": "36",
                            "difference": "100,黑丝",
                            'img': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1630872995,32039008&fm=15&gp=0.jpg'
                        },
                        {
                            "id": "23",
                            "price": "500.00",
                            "stock": "88",
                            "difference": "100,绿色",
                            'img': 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=139023837,291948899&fm=15&gp=0.jpg'
                        },
                        {
                            "id": "20",
                            "price": "300.00",
                            "stock": "23",
                            "difference": "200,白色",
                            'img': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=539863076,1083947395&fm=15&gp=0.jpg'
                        },
                        {
                            "id": "22",
                            "price": "300.00",
                            "stock": "18",
                            "difference": "200,黑丝",
                            'img': 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1482025596,1755224730&fm=27&gp=0.jpg'
                        },
                        {
                            "id": "24",
                            "price": "500.00",
                            "stock": "0",
                            "difference": "200,绿色",
                            'img': 'http://www.chijianfeng.com/uploads/allimg/170710/1-1FG0152P00-L.jpg'
                        }
                    ],
		            "specifications": [{ //这里是要被渲染字段
                            "name": "尺寸",
                            "item": [{
                                    'id': 19,
                                    "name": "100",
                                },
                                {
                                    "name": "200",
                                },
                            ]
                        },
                        {
                            "name": "颜色",
                            "item": [{
                                    "name": "白色",
                                },
                                {
                                    "name": "黑丝",
                                },
                                {
                                    "name": "绿色",
                                }
                            ]
                        }
                    ]
		        },
		        selectArr: [], //存放被选中的值
		        shopItemInfo: {}, //存放要和选中的值进行匹配的数据
		        subIndex: [], //是否选中 因为不确定是多规格还是但规格，所以这里定义数组来判断
				selectData: {
                    "id": 0,
                    "price": 0,
                    "stock": 0,
                    "difference": "",
                    "img": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=539863076,1083947395&fm=15&gp=0.jpg",
                },
			}
		},
		beforeCreate(){//刷新页面
			
		},
		created(){
			vm = this;
			for(var i in vm.simulatedDATA.difference){
				vm.shopItemInfo[vm.simulatedDATA.difference[i].difference]=vm.simulatedDATA.difference[i];
			}
			vm.checkItem();
		},
		watch:{
			
		},
		mounted(){
			if(vm.routeParams.ruleId != ""){
				console.log(vm.routeParams.ruleId)
				this.query();
				//this.collocation();
			};
			let url1 = "/shopping/detail/shopshow";
			vm.receiveData.getData(vm,url1,'data1',function(){
				vm.shopshow = vm.data1.result;
			})
	  		
		},
		computed:{
		    swiper(){
		      return this.$refs.mySwiper.SWIPER
		    },
		},
		methods:{
			go:function(){
				this.$router.go(0);
			},
			decrace:function(){
				var count = parseInt($('.sl-zhi').val());
				if(count>1){
					$('.sl-zhi').val(function(){
						return --count;
					})
				}
				
			},
			add:function(){
				var count = parseInt($('.sl-zhi').val());
				$('.sl-zhi').val(function(){
					return ++count;
				})
			},
			query(){
				// let url2 = "getOnSaleRule/" + vm.routeParams.ruleId;
				// vm.receiveData.getData(vm,url2,'data2',function(){
				// 	console.log(vm.data2);
				// 	vm.rule = vm.data2.result;
				// 	var productId = vm.rule.productId;
				// 	vm.product(productId);
				// });
				let url2 = "getOnSaleRule/" + vm.routeParams.ruleId;
				vm.receiveData.getData(vm,url2,'data2',function(){
					console.log(vm.data2);
					vm.rule = vm.data2.result;
					var productId = vm.rule.productId;
					vm.product(productId);
				});
			},

			collocation(){
				let url3 = "collocation/3/" + vm.ruleId;
				vm.receiveData.getData(vm,url3,'data3',function(){
					if(vm.data3&&vm.data3!=null){
						vm.collocation = vm.data3;
						this.formatItems()
					}
				})
			},
			product(productId){
				console.log(productId);
				let url4 = "getProduct/" + productId;
				vm.receiveData.getData(vm,url4,'data4',function(){
					vm.productData = vm.data4.result;
					if(vm.productData.serviceDesc==null&&vm.productData.serviceDescMore==null){
						vm.xiangqing = false;
					}
					console.log(vm.productData);
				})
			},

			formatItems(){
				if(vm.collocation.products!=null){
					var list = [];
					for(var i = 0; i<vm.collocation.products.length;i++){
						if(i%3==0){
							list[parseInt((i+1)/3)] = [];
						}
						list[parseInt(i/3)][i%3] = vm.collocation.products[i];
					}
					vm.formatItems = list;
				}	
			},

			//打开选择规格弹窗
			chooseGuige(){
				$('.show-guige').show();
				setTimeout(function(){
					$('.choose-guige-main').addClass('show');
				},0)
				$('.box-close').click(function(){
					vm.closeGuige();
				})
			},

			//关闭规格弹窗
			closeGuige(){
				$('.choose-guige-show').removeClass('show');
				setTimeout(function(){
					$('.show-guige').hide();
				})
			},

			//添加商品到购物车
			addCart(){
				let ak = {
					amount:"1",
					ruleId:vm.rule.id,
					skuId:vm.productData.id,
				};
				let urladdCart = "/shopping/buyerCart";
				vm.receiveData.getData(vm,urladdCart,"addCartData",function(){
					
				},ak)
			},
			specificationBtn: function (item, n, event, index,id) {
	            var vm = this;
	            if (vm.selectArr[n] != item) {
	                vm.selectArr[n] = item;
	                vm.subIndex[n] = index;
	                var shop_name = vm.selectArr.join(",");
                    if (vm.shopItemInfo[shop_name]) {
                        vm.selectData = {
                            id: vm.shopItemInfo[shop_name].id,
                            img: vm.shopItemInfo[shop_name].img,
                            price: vm.shopItemInfo[shop_name].price,
                            stock: vm.shopItemInfo[shop_name].stock,
                            ISdifference: true,
                            difference: shop_name,
                        };
                    }
	 
	            } else {
	                vm.selectArr[n] = "";
	                vm.subIndex[n] = -1; //去掉选中的颜色 
	                vm.selectData.ISdifference = false;
	            }
	            vm.checkItem();
	        },
	        checkItem: function () {
	            var vm = this;
	            console.log(vm.simulatedDATA.specifications)
	            var option = vm.simulatedDATA.specifications;
	            var result = [];  //定义数组存储被选中的值
	            for (var i in option) {
	                result[i] = vm.selectArr[i] ? vm.selectArr[i] : '';
	            }
	            for (var i in option) {
	                var last = result[i];  //把选中的值存放到字符串last去
	                for (var k in option[i].item) {
	                    result[i] = option[i].item[k].name; //赋值，存在直接覆盖，不存在往里面添加name值
	                    console.log(result[i]);
	                    option[i].item[k].isShow = vm.isMay(result); 
	                    //在数据里面添加字段isShow来判断是否可以选择
	                }
	                result[i] = last; //还原，目的是记录点下去那个值，避免下一次执行循环时避免被覆盖
	 
	            }
	            vm.$forceUpdate(); //重绘
	        },
	        isMay: function (result) {
	        	console.log(result);
	            for (var i in result) { 
	            	alert(111)
	                if (result[i] == '') {
	                    return true; //如果数组里有为空的值，那直接返回true
	                }
	                alert(222)
	            }
	            alert(333)
	            // console.log("+=+++="+this.shopItemInfo[result])
	            return  vm.shopItemInfo[result].stock == 0 ? false : true;
	            // return vm.shopItemInfo[result].stock == 0 ? false : true; //匹配选中的数据的库存，若不为空返回true反之返回false
	        }	
		},
		updataed(){
			$('.xq-div').addClass("xq-div");
		}
	}
</script>