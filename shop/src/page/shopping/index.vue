<style scoped>
html{font-size: 16px;}
.fl{float: left;}
.fr{float: right;}
.por{position: relative;}
.poa{position: absolute;}
.ban1{width:100%;/*height:162px;*//*margin: auto;*/}
.ban1 img{width: 100%;/*height: 100%;margin:auto;*/}
.search{position: fixed;width: 80%;height: 30px;background:rgba(60,60,60,0.52);margin-top: 10px;left:10%;z-index: 1001;}
.search-icon{width:10%;height: 30px;float: left;background-color: #ccc; }
.search-icon img{width: 100%;height: 100%;}
.search-input{display: inline-block;height: 30px;width:70%;background-color: #eee; float: left;border: 0;text-align: center;letter-spacing: 2px;}
.search-text{width: 20%;height: 30px;line-height: 30px;text-align: center;color: #dcdcdc;}
.index{font-family: PingFangSC-Regular;/*font-size: 0.8rem;*/text-align: center;}

.serach{position:fixed;width: 100%;height: 30px;top: 10px;left: 10px;}
.serach-input{ float: left;display: inline-block;width: 300px;height: 30px;}

.inner2{width: 100%;height:30px;}
.hot{margin-top: 10px;}
.inner2-con{width: 202px;height: 100%;margin: 0 auto;}
.inner21{width: 45px;height: 2px;background-color: #9c9c9c;left: 0px;top: 14px;}
.inner22{width: 6px;height: 6px;background-color:#9c9c9c;left: 45px;top:12px; border-radius: 50%; }
.inner23{width: 100px;height: 30px;line-height: 30px;color: #0e0e0e;font-size: 15px;left: 51px;letter-spacing: 1px;font-weight: bold;}
.inner24{width: 6px;height: 6px;background-color:#9c9c9c;right: 45px;top:12px;border-radius: 50%;}
.inner25{width: 45px;height: 2px;background-color: #9c9c9c;right: 0px;top: 14px;}

.inner3{width: 96%;height: 231px;margin: 0 auto;}
.inner3-left{width: 45%;height: 231px;/*background:url(../../assets/images/img2.png) 100% 100%;*/position: relative;}
.lingshou-bg{width:100%;height: 231px;}
.lingshou-bg img{width: 100%;height: 100%;margin:auto;}
.lingshou{background-color: #fff;width: 85px;height: 25px;border-radius: 8px; bottom: 10px;right: 10px;position: absolute;opacity: 0.63;/*line-height: 25px;letter-spacing: 1.14px;text-align: center;color: #000;*/}
h2{line-height: 25px;letter-spacing: 1.14px;color: #000;opacity: 1;}
.inner3-right{width: 54%;height:231px;}
.inner3-right-top{width: 100%;height: 113px;position: relative;}
.inner3-right-top img{width: 100%;height: 100%;margin: auto;}
.inner3-right-bottom{width: 100%;height: 113px;margin-top: 5px;position: relative;}
.inner3-right-bottom img{width: 100%;height: 100%;margin: auto;}

.inner4{width: 100%;height: 108px;margin-top: 5px;}
.inner4 img{width: 100%;height: 100%;margin: auto;}

.inner5{width: 96%;height: 440px;background-color: #fff;margin: 0 auto 10px;overflow: hidden;}
.hot-ul{width: 100%;overflow: hidden;}
.hot-li{width: 30%;height: 200px;background-color: #fff;float: left;margin: 15px 1.67% 0px;text-align: left;}
.hot-img{height: 120px;width: 100%;}
.hot-img img{width: 100%;height: 120px;margin: auto;}
.hotli-name{font-size: 12px;color: #0e0e0e;padding: 5px;height: 30px;line-height: 15px;}
.hotli-price{font-size: 11px;color: #666;padding-left: 5px;}
.price-color{font-size: 14px;color: #bd2630;}
.hotli-num{padding-left: 5px;font-size: 9px;color: #666;}

.height{height:50px;width:100%;background:white;}


</style>
<template>
	<div class="index">
		<div class="search">			
			<div class="search-icon">
				<img src="../../assets/image/search/serach.png" alt="">
			</div>
			<input type="text" class="search-input" placeholder="搜索商品" v-model="sousuo">
			<span class="search-text" @click="search()">搜索</span>
		</div>
		<swiper :options="swiperOption" ref="mySwiper">
	      <!-- <swiper-slide>
	        <div class="ban1">
	            <img src="../../assets/wuye/ysqban.png" alt="">                 
	        </div> 
	      </swiper-slide> -->
	      <swiper-slide v-for="banner in banners">
	        <div class="ban1">
	            <img :src="banner.picture" alt="">               
	        </div> 
	      </swiper-slide>
	      <div class="swiper-pagination" slot="pagination"></div>    
	    </swiper>
		
		<div class="inner2">
	      <div class="inner2-con por">
	        <div class="inner21 fl poa"></div>
	        <div class="inner22 fl poa"></div>
	        <div class="inner23 fl poa">
	          分类专区
	        </div>
	        <div class="inner24 fl poa"></div>
	        <div class="inner25 fl poa"></div>
	      </div>
	    </div>

	    <div class="inner3">
	      <div class="inner3-left fl">
	        <a href="https://www.e-shequ.com/guangming/weixin/group/onsalesitem.html?type=14&state=123">
	          <div class="lingshou-bg">
	            <img :src="classifys[0].picture" alt="">
	          </div>
	          <div class="lingshou">
	            <h2>零售专区</h2>
	          </div>
	        </a>
	        
	      </div>
	      <div class="inner3-right fr">
	        <div class="inner3-right-top">
	          <!-- <a href="https://www.e-shequ.com/guangming/weixin/group/onsalesitem.html?type=30">
	            <img src="http://img.e-shequ.com/FjFSL8eIN5viV6OQXtuv9RQJ-LjW"  alt="">
	            <div class="lingshou">
	              <h2>办公家具</h2>
	            </div>
	          </a> --> 
	          <router-link :to="{path:'/item',query:{type:30}}">
	          	<img :src="classifys[1].picture"  alt="">
	            <div class="lingshou">
	              <h2>办公家具</h2>
	            </div>
	          </router-link>        
	        </div>
	        <div class="inner3-right-bottom">
	          <a href="https://www.e-shequ.com/guangming/weixin/group/onsalesitem.html?type=31">
	            <img :src="classifys[2].picture" alt="">
	            <div class="lingshou">
	              <h2>办公用品</h2>
	            </div>
	          </a> 
	        </div>
	      </div>
	    </div>

	    <div class="inner4">
	      <a href="https://www.e-shequ.com/guangming/weixin/group/onsalesitem.html?type=32">
	        <img :src="classifys[3].picture" alt="">
	      </a>
	    </div>

		<div class="inner2 hot" >
	      <div class="inner2-con por">
	        <div class="inner21 fl poa"></div>
	        <div class="inner22 fl poa"></div>
	        <div class="inner23 fl poa">
	          热销产品
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
	    <div class="height"></div>
		<navwx></navwx>
	</div>
</template>
<script>
	let vm
	import wx from 'weixin-js-sdk';
	import {swiper,swiperSlide} from 'vue-awesome-swiper'
	import '../../assets/css/swiper.min.css'
	import navwx from '../../components/navwx.vue';
	export default {
		name:'index',
		components:{
			navwx
		},
		data(){
			return {
				swiperOption:{
			        notNextTick:true,
			        autoplay:true,
			        autoplay:{
			          disableOnInteraction:false,
			          delay:2000
			        },
			        speed:1000,
			        pagination: {
			          el: '.swiper-pagination',
			          clickable:true,
			        },
			        loop: true,			        
			    },
			    banners:"",
			    classifys:{
			    	picture:"",
			    },
				hotSale:[],
				sousuo:"",
				scrollH:true,
			}
		},
		beforeCreate(){//刷新页面
			
		},
		created(){
			vm = this;
			//this.initSession4Test();
			//this.userInfo();//获取用户授权
	        this.banner();
	        this.classify();
		},
		watch:{
			
		},
		mounted(){
			
			
	        this.shopshow();
	  		window.addEventListener('scroll', this.menu)
		},
		computed:{
		    swiper(){
		      return this.$refs.mySwiper.SWIPER
		    },

		},
		methods:{
			//模仿线上用户信息
			initSession4Test(){
				let url = '/initSession4Test/105';
					vm.receiveData.getData(vm,url,'Data',function(){
				});
			},
			//搜索框滚动监听			
			menu(){
				if(vm.scrollH){
					this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
	        		if(this.scroll>=1){
	        			$('.search').fadeOut(100);
	        		}else{
	        			$('.search').fadeIn(100);
	        		}
				}
				
			},
			//搜索页面跳转
			search(){
				if(vm.sousuo!=""){
					this.$router.push('/search/'+vm.sousuo);
				}
			},
			//获取用户信息
			userInfo(){
				let  n = "GET",
		        a = "userInfo",
		        i = null,
		        e = function(n) {
		          console.log(JSON.stringify(n));
		          console.log(n.result);
		        },
		        r = function() {     
		        };
		        this.common.invokeApi(n, a, i, null, e, r);
			},
			//获取底部商品信息
			shopshow(){
				let url = '/shopping/homepage/shopshow';
		        vm.receiveData.getData(vm,url,'Data',function(){
		            vm.hotSale = vm.Data.result;
		        });
			},
			//获取顶部轮播图
			banner(){
				let url = "banner/17";
				vm.receiveData.getData(vm,url,'Data',function(){
					vm.banners = vm.Data.result;
					
				})
			},
			//商品分类图片
			classify(){
				let url = "banner/20";
				vm.receiveData.getData(vm,url,'Data',function(){
					vm.classifys = vm.Data.result;
					vm.classifys[0].picture = vm.Data.result[0].picture;
					vm.classifys[1].picture = vm.Data.result[1].picture;
					vm.classifys[2].picture = vm.Data.result[2].picture;
					vm.classifys[3].picture = vm.Data.result[3].picture;
				})
			}
		}
	}
</script>