<style scoped>	
	[v-cloak] {
	 	display: none;
	}

	.zhifuye{font-family: PingFangSC-Regular;height: 100%;position: fixed;width: 100%
	      background-color: #fff;font-size: 14px;}	
	.fl{float: left;}
	.fr{float: right;}
	.fs15{font-size: 15px;}
	.fs14{font-size: 14px;}
	a{color: black;}
	.clear{clear:both}
	.ov{overflow: hidden;}
	.db{display: inline-block;}
/*one*/
	.shijian{width: 100%;height: 60px;background:#bd2630;line-height: 60px;color:white;}
	.shijian-left{font-size: 20px;padding-left: 10px;letter-spacing: 1px;}
	.shijian-right{font-size: 14px;padding-right: 10px;letter-spacing: 1px;}

	.xz-dz{width: 100%;height:60px;background:#F7F7F0;line-height: 60px;text-align: center;}
	.xz-addr{padding: 5px 30px;letter-spacing:2px;border:1px solid #cfa972;color: #cfa972;background: white;}
	.addr_area{background: #fff;}
	.shouhuo{background: #F7F7F0;padding: 10px;border-top: 1px solid #ccc;}
	.shouhuoren{font-size: 16px;color: #3b3937;line-height: 16px;}
	.shouhuotel{font-size: 16px;color: #3b3937;line-height: 16px;margin-right: 15px}
	.shouhuoadd{margin-top: 10px;}
	.addr-line{height: 5px;width: 100%;background: url(../../assets/image/common/addr.png);overflow: hidden;}
	.shouhuo-left{width: 80%;}
	.shouhuo-right{width: 10%;}
	/*.main{margin-top: 10px;}*/
	.list{list-style-type: none;}
	.list li{width: 100%;border-bottom: 1px solid #ccc;background: #fff;}
	.list-dp{width: 100%;font-size: 18px;color: #666;margin: 0 auto;background: #e0e0e038;line-height: 0.8rem;}
	.dp-icon{width: 22px;height: 22px;line-height: 0.8rem;top: 0.1rem; color: #999;font-size: 16px; display: inline-block;position:relative;left: 0.4rem;}
	.dp-icon span{width: 100%;height: 100%;margin: auto;display: inline-block;background-image: url(../../assets/image/common/sp.png);background-size: 100%;background-repeat: no-repeat;}
	.dp{margin-left: 5%;line-height: 0.8rem;font-size: 14px;}

	.item{width: 92%;height: 100px;margin: 5px auto 0px;overflow: hidden;border-bottom: 1px solid #e0e0e0;}
	.item-img{width: 25%;margin-top: 5px;border:1px solid #e0e0e0b5;}
	.item-img img{width: 100%;}
	.item-text{margin-left: 5%;width: 65%;}
	.item-text p:nth-child(1){color: #101010;font-size: 16px;padding: 10px 10px 0;height: 16px;width: 200px; line-height: 16px;text-overflow:ellipsis;white-space:nowrap;overflow: hidden;}
	.item-text p:nth-child(2){color: #999;font-size: 14px;padding:10px;}
	.item-text p:nth-child(3){color: red;font-size: 16px;}
	.shuliang{color: #101010;}

/*商品总额*/
	.line {padding: 15px 15px;border-bottom: 1px solid #e0e0e0; line-height: 18px;height: 30px;}
	.total{font-size: 18px;font-weight: 600;margin-top: 5px;}
	.dpxx{height: 40px;}
	.dpzj{display: block;font-size: 18px;color:black;margin-top: -2px;}
	.dpsl{display: block;font-size: 12px;color: black;margin-top: 2px;}

/*代金券*/
	.djj{width: 100%;margin: 0 auto;line-height: 1rem;padding: 10px 0;border-bottom: 1px solid #e0e0e0;}
	.djj-icon{width: 30px;height: 30px;line-height: 1rem;top: 0.2rem; color: #999;font-size: 16px; display: inline-block;position:relative;left: 0.4rem;}
	.djj-icon span{width: 100%;height: 100%;margin: auto;display: inline-block;background-image: url(../../assets/image/common/vouchers.png);background-size: 100%;background-repeat: no-repeat;}
	.djj-txt{margin-left: 6%;line-height: 1rem;font-size: 18px;font-weight: 600;letter-spacing: 2px;}
	.djj-ky{font-size: 14px;color: red;padding-right: 15px;}
/*配送费*/
	.psf{padding: 10px 15px;height: 30px;line-height: 30px;font-size: 18px;font-weight: 600;letter-spacing: 2px;border-bottom: 1px solid #e0e0e0;}
/*备注*/
	.bz{padding: 10px 15px;height: 35px;border-bottom: 1px solid #e0e0e0;letter-spacing: 2px;}
	.bz-span{display: inline-block;width: 25%;font-size: 16px;}
	.bz-input{display: inline-block; width: 72%;height: 35px;background: #eee;border:none;border-radius: 15px;text-indent: 16px;font-size: 14px;outline:none;}
	.bottom{width: 100%;height: 50px;background: #f7f7f1;line-height: 50px;text-align: center;position: fixed;bottom: 0;}
	.bottom-left{width: 70%;height: 50px; ;color: black;font-size: 16px;}
	.bottom-right{width: 30%;height: 50px;font-size: 22px;background: red;color: white;}

/*two*/
	.xzaddr{background: white;}
	.addr_item{overflow: hidden;border-bottom:1px solid #cccccc;width: 90%;margin:0 auto;}
	.checkbox { float:left; margin-top:15px;display: inline-block; width: 16px;height: 16px;
       background:url("../../assets/image/common/notcheck.png") no-repeat;background-size: 16px;margin-top: 25px;}
    .ischeck{ float:left; margin-top:15px;display: inline-block; width: 16px;height: 16px;
       background:url("../../assets/image/common/ischeck.png") no-repeat;background-size: 16px;margin-top: 25px;}   
    .addr_info{margin: 10px 0 10px 30px;}
    .addrList-name{width: 100px;}
    .addrList-tel{margin-left:50px;}
    .addrLiat-moren{color:#FF7E00;border:1px solid #FF7E00;
        padding: 4px 8px;border-radius: 2px;margin-right: 10px;}
    .addr_region_location{margin: 10px 0 10px 30px;}
    .addr_btn_area{text-align: center;margin-top:20px;overflow: hidden;}    
	.addr_btn_area{text-align: center;margin-top:20px;overflow: hidden;}
	.addr_btn_plain{padding: 10px 20px;border:1px solid #777777;color: black;
        border-radius: 4px;display: inline-block;}
/*three*/
	.addr_form{padding:0 15px}
	.input-wrap {overflow: hidden;line-height: 45px;}
	.lite-divider {border-bottom: 1px solid #d4cfc8;padding-left: 15px;}
	.hidden-input {height: 20px;margin-top: 12px;border: none;outline: none;
		background-color: transparent;text-align: right;}
	.hidden-input::-webkit-input-placeholder {
		font-size: 15px;color: #bfbfbf;}
	.menu-link {display: block;background: url("http://7xkdq7.com1.z0.glb.clouddn.com/icon_arrow.png") no-repeat;
	    background-size: 7px 12px;background-position: right center;padding-right: 15px;}
	.region{font-size: 12px;width: 32%;text-align: center;height: 30px;
		line-height: 30px;}
	.check{color: #f60;border-right: 1px solid #ddd;border-left: 1px solid #ddd;
		  border-top: 2px solid #f60;background: #fff;}
	.city{font-size: 14px;color: #000;background-color: #FFF;width: 25%;
		 height:40px;padding-top:10px;text-align: center;}
	.city2{font-size: 14px;color: #000;background-color: #E0E0E0;width: 25%;
		 height:40px;padding-top:10px;text-align: center;}
	.btn {display: block;margin: 15px;height: 44px;line-height: 44px;color: #fff!important;
		font-size: 15px;text-align: center;background-color: #ff8a00;border-radius: 3px;
		outline: none;border: none;text-decoration: none;}	
	/*高德地图*/
	.location-wrap {position: relative;/*padding: 0 10px;*/height: 49px;
		line-height: 49px;border-bottom: 1px solid #d4cfc8;width: 100%;}
	.location-input-wrap {position: relative;padding: 5px 10px ;
		margin-right: 80px;left:0px;}
	.location-input {display: block;height: 36px;width: 100%;outline: none;font-size: 15px;
		border: 1px solid #d4cfc8;border-radius: 4px;vertical-align: middle;text-indent: 16px;}	
	.location-btn-cancel {position: absolute;top: 5px;right: 4px;display: inline-block;
		height: 36px;width: 36px;background: url("../../assets/image/common/icon_cancel.png") no-repeat;background-size: 15px;background-position: center;}	
	.location-btn-ensure {position: absolute;display: block;top: 0;height: 36px;
		line-height:36px;margin-top:5px;right: 15px;color: #3b3937;border-radius: 4px;
		font-size: 15px;width: 65px;text-align:center;border:1px solid #d4cfc8;}
	.location-empty-tip {margin: 0 auto;margin-top: 105px;font-size: 12px;
		color: #888;width: 165px;text-align: center;line-height: 18px;}		
	.location-location {margin: 0 15px;padding: 15px 0;border-bottom: 1px solid #d4cfc8;}
	.box-bg {width: 100%;opacity: .5;height: 100%;position: fixed;
	    background-color: #666;top: 0;left: 0;z-index: 100;display: none}
</style>
<template>
	<div class="zhifuye">
		<div class="box-bg"></div>
		<div class="one" v-show="one">
			<!-- 时间 -->
			<!-- <div class="shijian">
				<div class="shijian-left fl">等待买家付款</div>
				<div class="shijian-right fr">距离订单关闭还剩{{minute}}分钟{{second}}秒</div>
				<div class="clear"></div>
			</div> -->
			<!-- 收货地址 -->
			
			<div class="addr_area" @click="chooseAddr" v-show="upAddr">
				<div class="addr-line"></div>
				<div class="xz-dz" v-if="!addr">
						<span class="xz-addr">选择收货地址</span>
				</div>
				<div class="shouhuo" v-else>
					<div class="ov">
						<span class="shouhuoren fl">{{addr.receiveName}}</span>
						<span class="shouhuotel fr">{{addr.tel}}</span>
					</div>
					<div class="shouhuoadd ov">
						<span class="fl shouhuo-left">
						{{addr.regionStr}}&nbsp;{{"("+addr.xiaoquName+")"}}&nbsp;{{addr.detailaddress}}
						</span>
						<span class="fr shouhuo-right"><strong>&gt;&gt;</strong></span>
					</div>
				</div>
				<div class="addr-line"></div>					
			</div>
			

			<div class="main">
				<ul class="list">
				    <!-- 列表循环 -->
					<li v-for="(item,index) in shangping">
						<!-- 商家 -->
						<p class="list-dp" >
							<span class="dp-icon"><span></span></span>&nbsp;
							<span class="dp">{{item.merchantName}}</span>&nbsp;
							<span>&gt;</span>
						</p>
						<!-- 图片产品名称价格数量展示 -->
						<div class="item" v-for="(model,index) in item.items">
							<!-- 商品图片 -->
							<div class="item-img fl">
								<img :src="model.sku.mainPicture" alt="tt">
							</div>
							<!-- 商品名称 -->
							<div class="item-text fl" >
								<p>{{model.sku.shortName}}</p>
								<p>
									
									<span class="item-jg">{{model.sku.spec1}}{{model.sku.spec2}}{{model.sku.spec3}}：</span>
									<span>{{model.sku.specVals}}</span>
								</p>
								<p>
									<span class="fl">￥{{model.sku.miniPrice}}</span>
									<span class="fr shuliang">x{{model.amount}}</span>
								</p>
							</div>					
							<div class="clear"></div>
						</div>
						<div class="line">
							<span class="total fl">商品总额</span>
							<p class="dpxx fr">
								<span class="dpzj">¥&nbsp;{{item.items | fun1}}</span>
								<span class="dpsl">共{{item.items | fun2}}个商品</span>
							</p>
							
						</div>
						<div class="djj">
							<span class="djj-icon"><span></span></span>
							<span class="djj-txt">代金券</span>
							<span class="djj-ky fr">可用代金券0个&nbsp;&gt;</span>
						</div>
						<div class="psf">
							<span class="fl">配送费</span>
							<span class="fr">￥{{item.items | fun3}}</span>
						</div>
						<div class="bz">
							<span class="bz-span">买家留言</span>
							<input type="text" class="bz-input" placeholder="选填:给商家留言(45字以内)">
						</div>
					</li>
				</ul>
			</div>
			<div style="width: 100%;height: 50px;"></div>
			<div class="bottom">
				<div class="bottom-left fl">
					合计金额：<span>￥&nbsp;{{allPrice}}</span>
				</div>
				<div class="bottom-right fl" @click="topay()">
					立即支付
				</div>
			</div>		
		</div>
		<!-- two -->
		<div class="two" v-show="two">
			<div class="xzaddr">
				<div class="addr_item" v-for="addrItem in addrList" @click="listClick(addrItem)">
					<i class="checkbox" :class="{ischeck:addrItem.main}"></i>
					<div class="addr_info ov">
						<span class="addrList-name db">{{addrItem.receiveName}}</span>
						<span class="addrList-tel">{{addrItem.tel}}</span>
						<span class="addrLiat-moren fr" v-show="addrItem.main">默认</span>
					</div>
					<div class="addr_region_location">{{addrItem.regionStr}}&nbsp;{{addrItem.xiaoquName}}&nbsp;{{addrItem.detailAddress}}</div>
				</div>
				<div class="addr_btn_area" @click="addDizhi">
					<span class="addr_btn_plain">新增收货地址</span>
				</div>
			</div>
			
		</div>	
		<!-- three -->
		<div class="three addr_form" v-show="three">
			<div v-show="currentPage=='addAddressForm'">
				<div class="input-wrap lite-divider">
					<span class="fl fs15">联系人</span>
					<input placeholder="请输入联系人姓名" class="fr fs14 hidden-input" v-model="receiveName"/>
				</div>
				<div class="input-wrap lite-divider">
					<span class="fl fs15">手机号</span>
					<input type="tel" placeholder="请输入手机号码" class="fr fs14 hidden-input" v-model="tel"/>
				</div>
				<div @click="chooseRegion" style="color: #3b3937"  class="input-wrap lite-divider menu-link">
					<span class="fl fs15">所在地区</span>
					<span class="fr fs14" style="color: #aeaeae" v-if="!distinct">请选择所在地区</span>
					<span class="fr fs14" v-else>{{distinct}}</span>
				</div>
				<div v-show="selectRegion==true">
					<div class="tc">
						<div class="region fl" @click="backRegion(1)" :class="{check:currentRegionType==1}">选择省</div>
						<div class="region fl" :class="{check:currentRegionType==2}" @click="backRegion(2)">市</div>
						<div class="region fl":class="{check:currentRegionType==3}">区县</div>
					</div>
					<div style="width:100%;clear:both;background-color: #e0dede;" >
						<div class="fs14 fl" :class="[Math.floor((index/4)%2)==0?'city':'',Math.floor((index/4)%2)==1?'city2':'',]" v-for="(region, index) in regions"  @click="updateRegion(region)">{{region.name}}</div>
					</div>
					<div> &nbsp;</div>
				</div>
				<div style="clear: both;" v-show="selectRegion==false">
					<div class="input-wrap lite-divider  menu-link"  style="color: #3b3937" @click="showLocation()" >
						<span class="fl fs15">小区或大厦</span>
						<span class="fr fs14"  style="color: #aeaeae" v-if="xiaoquName==''">请输入小区或大厦</span>
						<span class="fr fs14" v-else>{{xiaoquName}}</span>
					</div>
					<div class="input-wrap lite-divider">
						<span class="fl fs15">小区地址</span>
						<input placeholder="例如：三林路128弄" class="fr fs14 hidden-input" v-model="xiaoquAddress"/>
					</div>
					<div class="input-wrap lite-divider">
						<span class="fl fs15">楼栋门牌号</span>
						<input placeholder="例如：1号楼402室" class="fr fs14 hidden-input" v-model="homeAddress"/>
					</div>
					<span href="#" class="btn" @click="addAddress">保存</span>
				</div>
			</div>
			<!--	使用高德地图搜索-->
			<div style="background-color: #fffff8" v-show="currentPage=='location'">
				<div class="location-wrap">
					<div class="location-input-wrap">
						<input placeholder="请输入小区名称" class="location-input" v-model="location" @change="yuceaddr()"/>
						<i class="location-btn-cancel" @click="cancelLocation" v-show="suggestion"></i>
					</div>
					<span class="location-btn-ensure" @click="submitLocation">确定</span>
				</div>
				<div class="location-empty-tip" v-show="!suggestions.length">
					准确的小区、街道或大厦名称能加快送货速度
				</div>
				<div class="location-location" @click="chooseLocation(suggestion)" v-for="suggestion in suggestions" v-show="suggestions.length">
					<span style="position:relative;font-color:#cccccc">{{suggestion._name}} - {{suggestion._address}}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	let vm;
	import wx from 'weixin-js-sdk';
	export default {
		name:'zhiduye',
		data(){
			return {
				one:true,
				two:false,
				three:false,
				params:{
					ruleIds:this.$route.query.ruleIds,
					skuIds:this.$route.query.skuIds,
				},
				shangping:[],
				item:[],
				allPrice:'',
				upAddr:false,
				addr:"",
				addrId:'',
				// two
				addrList:'',
				// three
				receiveName:'',
				tel:'',
				distinct:'',
				selectRegion:false,
				currentRegionType:1,
				regions:[],
				xiaoquName:'',
				xiaoquAddress:'',
				homeAddress:'',
				provinces:[],
				citys:[],
				countys:[],
				province:{},
				suggestion:{},
    			suggestions:[],

				city:{},
				county:{},
				addresses:[],
				currentPage:'addAddressForm',
				location:"",
				amapId:"",
				addr:{
					receiveName:'',
					tel:'',
					regionStr:'',
					xiaoquName:'',
					detailaddress:'',
				},
				creatCart:'',
				creatpay:'',
			}
		},
		beforeCreate(){//刷新页面
			
		},
		created(){
			vm = this;
			
		},
		watch:{
			
		},
		computed:{
			regionAreaHeight (num) {
		    	return (parseInt(num/4)+1)*40+4;
		    },
		},
		mounted(){
			this.getTime();
			this.jsxinxi();
		},
		filters:{
			fun1(q) {
				let dpPrice = 0;
				//let price = q.sku.miniPrice;
				for (var i = 0; i < q.length; i++) {
					dpPrice+=q[i].sku.miniPrice*q[i].amount;
				};
				return dpPrice;	
			},
			fun2(a) {
				return a.length;
			},
			fun3(w){
				let youfei = 0;
				for (var i = 0; i < w.length; i++) {
					youfei+=w[i].postageFee;
				};
				return youfei;
			}
		},
		methods:{
			//倒计时
			getTime(){
				let time = 3600;//60分钟换成3600秒
				setInterval(function () {
					time = time - 1;
					vm.minute = parseInt(time/60);
					vm.second = parseInt(time%60);
				},1000)	
			},
			// //结算商品信息
			// jsxinxi(){
			// 	let url = '/buyer/trueBuy';
			// 	this.axios.post(
			// 		url,
			// 		{
			// 			ruleIds : vm.params.ruleIds,
			// 			skuIds : vm.params.skuIds
			// 		},)
			// 	.then(function(res){
			// 		vm.shangping =JSON.parse(res.data).result.buyerCart;
			// 		vm.addr = JSON.parse(res.data).result.addr;
			// 		
			// 		vm.Price();

			// 	})
				
			// },	
			//结算商品信息
			jsxinxi(){
				let url = '/buyer/trueBuy';
				this.axios.post(
					url,
					{
						ruleIds : vm.params.ruleIds,
						skuIds : vm.params.skuIds
					},)
				.then(function(res){
					vm.shangping =JSON.parse(res.data).result.buyerCart;
					for(let i=0;i<vm.shangping.length;i++){
						let goodsss = vm.shangping[i].items;
						for (var j = 0; j < goodsss.length; j++) {
							if(goodsss[j].inStock!=''){
								//alert(goodsss[j].inStock);
								alert(vm.shangping[i].merchantName+"的"+goodsss[j].sku.shortName+goodsss[j].inStock);
							}
						}
					}
					vm.upAddr = true;
					vm.addr = JSON.parse(res.data).result.addr;
					
					vm.Price();

				})
				
			},					
			Price(){
				let all = 0;
				for (var i = 0; i < vm.shangping.length; i++) {
					var  arr=this.shangping[i].items;
					for (var j = 0; j < arr.length; j++) {
						all+=arr[j].amount*arr[j].sku.miniPrice;
					};
					console.log(all)
					vm.allPrice = all;
				}
			},
			// //选择地址
			chooseAddr(){
				let url = "addresses"
				vm.receiveData.getData(vm,url,'Data',function(){
					vm.addrList = vm.Data.result;
				});
				vm.one=false;
				vm.two=true;
			},
			topay(){
				
				let buyerOrderReq = []
				vm.shangping.forEach(function(store){
					let skuIds = '';
					let ruleIds = '';
					// store.items.forEach(function(goods){
					// 	rulelds+=goods.ruleId;
					// 	skuIds+=goods.sku.id;
						
					// })
					
					let chang = store.items;
					for (var i = 0; i < chang.length; i++) {
						if(chang.length-1==i){
							ruleIds+=chang[i].ruleId;
							skuIds+=chang[i].sku.id;
						}else{
							ruleIds+=chang[i].ruleId+',';
							skuIds+=chang[i].sku.id+',';
						}
					}					
					buyerOrderReq.push({
						ruleIds,
						skuIds
					})
				});
				console.log(buyerOrderReq);
				let url = '/buyer/createOrder4Cart';
				//console.log(buyerOrderReq)
				this.axios.post(
					url,
					{
						serviceAddressId : vm.addr.id,
						buyerOrderReq : buyerOrderReq
					}
				).then(function (res) {
					vm.creatCart = JSON.parse(res.data).result;
					let orderId = '';
					for(let i=0;i<vm.creatCart.length;i++){
						if(vm.creatCart.length-1==i){
							orderId+=vm.creatCart[i].id;
						}else{
							orderId+=vm.creatCart[i].id+',';
						}
					}
					console.log(orderId);
					$('.box-bg').css("display",'block');
					let url2 = '/buyer/requestPay';
					// vm.receiveData.postData(vm,url2,{orderIds:orderId},'getpay',function() {
					// 	let qq = vm.getpay.result;
					// })
					
					vm.receiveData.getData(vm,url2,'getpay',function () {
						let qq = vm.getpay;
						wx.config({
							debug: false,
							appId: qq.result.appId, // 必填，公众号的唯一标识
		                    timestamp: qq.result.timestamp, // 必填，生成签名的时间戳
		                    nonceStr: qq.result.nonceStr, // 必填，生成签名的随机串
		                    signature: qq.result.signature,// 必填，签名，见附录1
		                    jsApiList: ['chooseWXPay'] // 
						});
						wx.chooseWXPay({
			                "timestamp":qq.result.timestamp,
			                "nonceStr":qq.result.nonceStr,
			                "package":qq.result.pkgStr,
			                "signType":qq.result.signType,
			                "paySign":qq.result.signature,
			                success:function (res) {
			                	alert('下单成功');
			                	let qa = "https://www.e-shequ.com/guangming/weixin/group/";
			                	location.href = qa+'success.html?orderId='+orderId;
			                },
			                fail:function (res) {
			                	console.log(JSON.stringify(res))
			                },
			                cancel:function (res) {
			                	alert('支付取消');
			                	$('.box-bg').css("display",'none');
			                }
						})
					},{orderIds:orderId},)
				})
			},

		//two
			addDizhi(){
				vm.two = false;
				vm.three = true;
				vm.one = false;
			},
			listClick(addrItem){
				vm.two = false;
				vm.one = true;
				vm.addr = addrItem;
				vm.addr.receiveName = "收货人："+ addrItem.receiveName;
				vm.addr.tel = addrItem.tel;
				vm.addr.regionStr = "收货地址："+ addrItem.regionStr;
				vm.addr.xiaoquName = addrItem.xiaoquName;
				vm.addr.detailaddress = addrItem.detailAddress;
				vm.addr.id = addrItem.id;
				
			},			

		// three
			//选择省市区
			chooseRegion(){
				vm.selectRegion = !vm.selectRegion;
				if(vm.selectRegion){
					vm.currentRegionType=1;
					vm.updateRegion();
				}
			},
			//点击省市县tab
			backRegion(regionType){
				if(regionType==1){
					vm.currentRegionType=regionType;
					if(vm.provinces.length<=0){
						updateRegion();
					}else{
						vm.regions=vm.provinces;
					}
				}else if (regionType==2) {
					if(vm.province!={}){
						vm.currentRegionType=regionType;
						updateRegion(vm.province);
					}
				}
			},
			//点击省市区菜单
			updateRegion(region){
				var e = function(n) {
					console.log("success:" + JSON.stringify(n));
					vm.provinces = n.result;
					vm.regions = vm.provinces;
			    },
			    r = function(n) {
					alert("网络异常，请稍后重试！");
			    };
				if(!region){
					if(vm.provinces.length==0){
						vm.getRegions(1,1,e,r);
					}else {
						vm.regions = vm.provinces;
					}
				}else{
					if(region.regionType == 1){
						if(vm.province.id != region.id || vm.citys.length == 0){
							e = function (n) {
								vm.citys = n.result;
								vm.regions = vm.citys;
								vm.currentRegionType = 2;
							},
							vm.getRegions(region.regionType+1,region.id,e,r);
						}else{
							vm.regions = vm.citys;
							vm.currentRegionType = 2;
						}
						vm.province = region;
					} else if(region.regionType == 2){
						if(vm.city.id != region.id || vm.countys.length==0){
							e = function (n) {
								vm.countys = n.result;
								vm.regions = vm.countys;
								vm.currentRegionType = 3;
							},
							vm.getRegions(region.regionType+1,region.id,e,r)
						}else{
							vm.regions = vm.countys;
							vm.currentRegionType = 3;
						}
						vm.city = region;
					}else if(region.regionType==3){
						vm.county = region;
						vm.distinct = vm.province.name+vm.city.name+vm.county.name;
						vm.selectRegion = false;
					}
				}
			},
			//省市区递归选择
			getRegions(type,id,sucfun,errfun){
				vm.currentRegionType=type;
				var n = "GET",
			    a = "regions/" +type+"/"+id,
			    i = null;
			    this.common.invokeApi(n, a, i, null, sucfun, errfun)
			},
			//点击小区时检测地区是否已选
			showLocation(){
				if(vm.city.name == null || vm.county.name == null || vm.province.name == null){
					alert('请先选择你所在的区域');
					return;
				}
				vm.suggestions = [];
				vm.currentPage = "location";
			},
			cancelLocation(){
				vm.location = '';
				vm.currentPage = 'addAddressForm';
			},
			//点击搜索
			submitLocation(){
				vm.xiaoquName = vm.location;
				vm.currentPage = 'addAddressForm';
			},
			//预测地址
			yuceaddr(){
				if(vm.location==""){
					return
				};
				let url ="amap/"+vm.city.name+"/"+vm.location;
				vm.receiveData.getData(vm,url,'res',function () {
					vm.suggestions = vm.res.result;
				})
			},
			//搜索结果
			chooseLocation(suggestion){
				vm.suggestion = suggestion;
				vm.suggestions = [];
				vm.location = suggestion._name;
				vm.amapId = suggestion._id;
				vm.xiaoquAddress = suggestion.detailaddress;
			},
			//点击保存
			addAddress(){
				if(vm.province.name==null||vm.city.name==null||vm.county.name==null){
					alert("请选择地址");
					return;
				}
				if(vm.xiaoquAddress==""||vm.receiveName==""||vm.tel==""||vm.xiaoquName==""){
					alert("请填写完整相关信息！");
					return;
				}
				if(!(/^1[3-9][0-9]\d{4,8}$/.test(vm.tel))){
					alert("请填写正确的手机号！");
					return;
				}
				vm.saveAddress()
			},
			//保存地址信息
			saveAddress(){
				let url = 'addAddress';
				this.axios.post(
				url,
				{
					provinceId: vm.province.id,
					province: vm.province.name,
					cityId: vm.city.id,
					city: vm.city.name,
					countyId: vm.county.id,
					county: vm.county.name,
					xiaoquName: vm.xiaoquName,
					receiveName: vm.receiveName,
					detailAddress: vm.xiaoquAddress + vm.homeAddress,
					amapId: vm.amapId,
					amapDetailAddr: vm.xiaoquAddress,
					tel: vm.tel
				},)
				.then(function(res){
					// console.log(JSON.parse(res.data).result) 
					//vm.$router.push('/zhifu');
					vm.addrList.unshift(JSON.parse(res.data).result)
					vm.three = false;
					vm.two = true;
					vm.one = false;
					

				})
			},
			
			
		}
	}
</script>