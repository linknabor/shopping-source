<style>
[v-cloak] {
 display: none;
}
li{list-style: none;}
.fl{float: left;}
.fr{float: right;}
.por{position: relative;}
.poa{position: absolute;}
img{ vertical-align:top;}
/*.main{margin-top: 10px;}*/
#cart{background: #f2f2f2;}
.header{width: 100%;height:50px;/*background:#fff;*/ }
.header-div{width: 92%;height: 50px;margin: 0 auto;}
.header-div:nth-child(1){font-size: 20px;color: #666;text-align:center;line-height: 50px;}
.footer{width: 100%;height: 50px;background: #fff;position: fixed;bottom:0;z-index: 999;}
.list{list-style-type: none;}
.list li{width: 100%;background: #fff;margin-bottom: 5px;border-top: 1px solid #e0e0e0;}
.yuan{border:1px solid #ccc;width: 20px;height: 20px;display: inline-block;border-radius: 50%;position:relative;top:0.1rem;left: 0.3rem;}
.list-dp{width: 100%; background: #fff;line-height: 1rem;font-size: 18px;color: #666;margin: 0 auto;border-bottom: 1px solid #e0e0e0;}
.dp{margin-left: 5%;line-height: 0.8rem;font-size: 14px;}
.dp-icon{width: 22px;height: 22px;line-height: 0.8rem;top: 0.1rem; color: #999;font-size: 16px; display: inline-block;position:relative;left: 0.4rem;}
.dp-icon span{width: 100%;height: 100%;margin: auto;display: inline-block;background-image: url(../../assets/image/icon/sp.png);background-size: 100%;background-repeat: no-repeat;}
.main .list .item{width: 84%;height: 2.5rem;display: flex;margin: 0 auto;justify-content:center;align-items:center;border-bottom: 1px solid #e0e0e0;}
.item:last-child{border-bottom: none}
.item-select{width: 1.2rem;margin-top: 15px;}
.yuan1{border:1px solid #ccc;width: 20px;height: 20px;display: inline-block;border-radius: 50%;/*position: absolute;top: 50%;margin-top: -10px;*/}
.item-img{width: 2.5rem;height: 1.5rem; margin-top: .25rem;border:1px solid #e0e0e0;}
.item-img img{width: 100%;height: 100%;margin: auto;}
.item-text{height: 1.5rem;width: 95%;margin-left: 3%;margin-top: 0.35rem;overflow: hidden;}
.item-text p:nth-child(1){color: #666;font-size: 16px;/*padding: 10px;*/height: 20px;overflow: hidden;line-height: 20px;}
.item-sp{display: inline-block; width: 123px;text-overflow:ellipsis;
  white-space:nowrap;overflow: hidden;}
.bj{width: 22px;height: 22px; color: #999;font-size: 16px;float: right; display: inline-block;}
.bj span{width: 100%;height: 100%;margin: auto;display: inline-block;background-image: url(../../assets/image/icon/bj.png);background-size: 80%;background-repeat: no-repeat;}
.item-text p:nth-child(2){color: #999;padding-top:0.5rem;}
.item-jg{color: #dd0000;font-size: 12px;width: 55px;display: inline-block;}
.item-yj{color: #bbb;font-size: 12px;width: 60px;display: inline-block;text-decoration: line-through;}

.item-sl{color: #999;font-size: 16px;float: right;margin-right: 1%;display: inline-block;}

.footer{font-size: 12px;color: #666;display: flex;align-items:center;justify-content:space-around;}
.up{width: 2rem;height: 50px;color: #fff;font-size: 14px;line-height: 50px;text-align: center;background: #dd0000;margin-right: -6%;}
.all{margin-left: -7%;}
.bg{background:url(../../assets/image/common/selected.png);background-position: center;background-size: 30px 30px;}
.hj{margin-left: 15%}
.sl{width: 70%;height: 30px;line-height: 25px;margin-top: 15px;margin-left: 10px; display: inline-block;font-size: 12px;}
.sl span{font-size: 20px;width: 25%;height: 25px;display: inline-block;text-align: center;border:1px solid #ccc;background: #e0e0e0;}
.reduce{border-top-left-radius:50%;border-bottom-left-radius: 50%; }
.add{border-top-right-radius:50%;border-bottom-right-radius: 50%;}
.sl input{display: inline-block;font-size: 16px; width: 20%;height:30px;border:none;background: white;}
.sc{font-size: 14px;margin-top: 5px;}
.Hide{width: 20%;height: 1.3rem;background: #dd0000;display: inline-block;float: right; font-size: 12px;line-height: 1.3rem;text-align: center;color: #fff;}
/*[v-cloak] {
 display: none;
}*/
.notcart{width: 100%;height: 280px;background: white;}
.notcart-img{width: 100px;height: 100px;margin: 0 auto 30px;background: #fff;padding-top: 50px;}
.notcart-img img{width: 100%;height: 100%;margin: auto;}
.notcart-h2{text-align: center;}
.notcart-guang{text-align: center;margin-top: 20px;padding-bottom: 20px;}
.notcart-guang span{background: #bd2630;padding: 5px 10px;letter-spacing: 2px;
	font-size: 18px;border-radius: 5px;}

.inner2{width: 100%;height:40px;}
.inner2-con{width: 262px;height: 100%;margin: 0 auto;}
.inner21{width: 60px;height: 2px;background-color: #9c9c9c;left: 0px;top: 19px;}
.inner22{width: 6px;height: 6px;background-color:#9c9c9c;left: 60px;top:17px; border-radius: 50%;}
.inner231{width: 100px;height: 40px;line-height: 40px;color: #0e0e0e;font-size: 15px;left: 60px;letter-spacing: 1px;font-weight: bold;text-align: center;}
.inner232{width: 130px;height: 40px;line-height: 40px;color: #0e0e0e;font-size: 15px;left: 60px;letter-spacing: 1px;font-weight: bold;}
.inner233{width: 100px;height: 40px;line-height: 40px;color: #0e0e0e;font-size: 15px;left: 52px;letter-spacing: 1px;font-weight: bold;text-align: center;}
.icon-xq{width: 20px;height: 20px;top: 5px;left: 30px}
.icon-xq img{width: 100%;height: 100%;margin: auto;}
.text-xh{width: 70px;height: 40px;left: 65px;}
.inner24{width: 6px;height: 6px;background-color:#9c9c9c;right: 45px;top:17px;border-radius: 50%;}
.inner25{width: 45px;height: 2px;background-color: #9c9c9c;right: 0px;top: 19px;}

.product-ul{width: 98%;margin: 0 auto;height: 500px;overflow: hidden;}
.product-li{width: 50%;height:250px;float: left;background-color: #fff; }
.product{width: 100%;height: 150px;background-color: #fff;}
.product img{width:98%;height: 146px;padding: 2px 1%;margin: auto; }
.product-name-tuijian{font-size: 14px;padding-left: 5px;color: black;line-height: 20px;height: 40px;}
.product-price-tuijian{margin-top: 10px;float: left;}
.price-now{font-size: 18px;color:#ff8a00; }
.price-danwei{font-size: 14px;color:#999; }
.price-sale{margin-top: 15px;font-size: 14px;color:#ccc;;float: right;margin-right: 12px;}

.text-sl{text-align: center;width: 30%;background: #ccc;}

.inner5{width: 100%;height: 378px;background-color: #fff;margin: 0 auto 10px;overflow: hidden;}
.hot-ul{width: 100%;}
.hot-li{width: 31%;height: 180px;background-color: #fff;float: left;margin: 5px 0.84% 0px;text-align: left;border:1px solid #ededed;border-radius: 5px;}
.hot-img{height: 120px;width: 100%;border-bottom: 1px solid #ededed;}
.hot-img img{width: 100%;height: 120px;margin: auto;}
.hotli-name{font-size: 12px; color: #0e0e0e;padding: 5px 5px 0px;height: 28px;line-height: 14px;display: -webkit-box;-webkit-box-orient: vertical;
    -webkit-line-clamp:2;overflow: hidden;}
.hotli-price{font-size: 12px;color: #666;padding-left: 2px;margin-top: 4px;}
.price-color{font-size: 12px;color: #bd2630;font-weight: 600;}
.hotli-danwei{display:inline-block;font-size: 10px;transform: scale(0.8);}
.hotli-num{float: right;display:inline-block;font-size: 10px;transform: scale(0.8);color: #666;padding-top: 2px;}
.btn-deleted {  
    width: 2rem;
    height: 2.5rem;
    background: #ff4949;
    font-size: 17px;
    color: #fff;
    text-align: center;
    line-height: 2.5rem;
    position: absolute;
    /* top: 0; */
    right: -2.7rem;}

/* miut修改样式	 */
 .list .mint-cell-title {
    /* -webkit-box-flex: 1; */
    /* -ms-flex: 1; */
    /* flex: 1; */
}
.list .mint-cell-wrapper {
    background-image: -webkit-linear-gradient(top, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-size: 120% 1px;
    background-repeat: no-repeat;
    background-position: top left;
    background-origin: content-box;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 16px;
    line-height: 1;
    min-height: inherit;
    overflow: hidden;
    padding: 0px;
    width: 100%;
}
.list .mint-cell-wrapper .mint-cell-value {
    color: #888;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
}
.list .mint-cell-swipe-buttongroup {
    height: 100%;
	display:table;
	background-color:red;
}
.list .mint-cell-swipe-button {
    height: 100%;
    padding: 0 10px;
    line-height: 48px;
	vertical-align:middle;display:table-cell;
}
.chooseNum-main{display: none;}
.box-bg {width: 100%;opacity: .5;height: 100%;position: fixed;
	    background-color: #666;top: 0;left: 0;z-index: 100;}
.chooseNum{position: absolute;width:260px;height:160px;left:50%;top:50%; 
	margin-left:-130px;margin-top:-80px;background: white;z-index: 1001;
	padding: 15px 0 0;border-radius: 10px;overflow: hidden;}
.choose-txt{text-align: center;height: 20px;font-size: 16px;}	
.choose-num{width: 140px;margin-left: 60px;height: 30px;background: #8888883b;
	line-height: 30px;border: 1px solid #d1d6e4;border-radius: 5px;margin-top: 30px;}	
.choose-num .reducee, .choose-num .addd {background: #e0e0e038;
  float: left;width: 40px;display: inline-block;height: 30px;
  text-align: center;cursor: pointer;font-size: 30px;line-height: 30px;}
.choose-num .reducee{border-right: 1px solid #d1d6e4;}  
.choose-num .addd{border-left:1px solid #d1d6e4; }
.choose-num .numberr {float: left;width: 58px;height: 30px;
  border: none;text-align: center;font-size: 16px;line-height: 30px;}
.choose-click{width: 100%;height: 40px;text-align: center;line-height: 40px;font-size: 16px;margin-top: 40px;}  
.choose-false{width: 50%;background: #e0e0e038;}
.choose-true{width: 50%;background: #dd0000;color: white;}
</style>
<template>
	<div id="cart" v-cloak>
		<div class="notcart" v-show="notcart">
			<div class="notcart-img">
				<img src="../../assets/image/common/notcart.png" alt="">
			</div>
			<h2 class="notcart-h2">购物车空空如也</h2>						
			<div class="notcart-guang">
				<router-link to="/">
					<span>去逛逛</span>
				</router-link>
			</div>			
		</div>
		<div class="main" v-if="item">
			<ul class="list">
			    <!-- 列表循环 -->

				<li v-for="(item,index) in cart" @click.capture="mp(index,$event)" :key="index">
					<div class="chooseNum-main">
						<div class="box-bg"></div>
						<div class="chooseNum">
							<h2 class="choose-txt">修改购买数量</h2>
							<!-- <br><br> -->
							<div class="choose-num">
								<span class="reducee" @click="reducee">-</span>
								<input type="number" class="numberr" v-model="numqa" v-on:input="inputNum">
								<span class="addd" @click="addd">+</span>
							</div>
							<!-- <br><br> -->
							<div class="choose-click">
								<div class="choose-false fl" @click="choosefalse(index)">取消</div>
								<div class="choose-true fl" @click="choosetrue(index)">确定</div>
							</div>
						</div>
					</div>
					<!-- 商家 -->
					<p class="list-dp" >
						<span :class="[yuan1,{bg:item.b}]" @click.stop="dpSelected(index)"></span>
						<span class="dp-icon"><span></span></span>
						<span class="dp">{{item.merchantName}}</span>
					</p>
					<!-- 图片产品名称价格数量展示   左移删除-->
					<mt-cell-swipe 
					 	v-for="(pl,index) in cart[index].items" :key="pl.sku.id"
					 	:right="[{
							content: '删除',
							style: { background: 'red', color: '#fff' },
							handler: () => deleteSection(pl.ruleId,pl.sku.id,index)
						}]"
					 >	
						<div class="item"   ref="removes">
						
							<!-- 选择按钮 -->
							<p class="item-select">
								<span :class="[yuan,{bg:pl.c},animateAn]"  @click.capture="selected(index,$event)"></span>
							</p>
							<!-- 商品图片 -->
							<div class="item-img">
								<img :src="pl.sku.mainPicture" alt="tt">
							</div>
							<!-- 商品名称 -->
							<div v-if="pl.sku.endDate==index" class="item-text" :class="animate">
								<div class="sl">
									<span @click="reduce(index)" class="reduce">-</span>
									<input class="text-sl" type="number" :value="pl.amount" @click="chooseNum(index,item)">
									<!-- <input class="text-sl" type="text" readonly="readonly"   :value="pl.amount"
									@click="chooseNum(index,item)"> -->
									<span @click="add(index)" class="add">+</span>
									<!-- <p @click="del(pl.ruleId,index)" class="sc">删除</p> -->
								</div>
								<div  class="Hide" @click="Hide(index)">
									完成
								</div>
							</div>
							
							<div v-else class="item-text" :class="animate">
								<p>
									<span class="item-sp">{{pl.sku.name}}</span>
									<span  class="bj" @click='show(index)'><span></span></span>
								</p>
								<p>
									<span class="item-jg">￥{{pl.sku.miniPrice}}</span>
									<span class="item-yj">原价{{pl.sku.oriPrice}}</span>
									
									<span class="item-sl">x{{pl.amount}}</span>
								</p>
								<!-- <p class="item-sl">
									x{{pl.amount}}
								</p> -->
							</div>
						</div>
					</mt-cell-swipe>
					
				</li>
			</ul>
		</div>
	    <div style="width: 100%">
	    	<img src="../../assets/image/common/love.png" alt="" style="width: 100%">
	    </div>
		<div class="inner5">
			<ul class="hot-ul">
				<li class="hot-li" v-for="hotli in hotSale">
					<router-link :to="{path:'/onsaledetail',query:{ruleId:hotli.id}}">
						<div class="hot-img">
							<img :src="hotli.mainPicture" alt="" class="">
						</div>
						<p class="hotli-name">{{hotli.shortName}}</p>
						<p class="hotli-price">
							<span class="price-color">￥{{hotli.miniPrice}}
							</span>
							<span class="hotli-danwei">/个</span>
							<span class="hotli-num">已售{{hotli.totalSale}}</span>
						</p>
					</router-link>
				</li>
			</ul>
		</div>
		<div style="height:60px"></div>
		<div class="footer">
			<span :class="[yuan,{bg:allSelect}]" @click="AllSelect()"></span>
			<span class="all" >全选</span>
			<span class="hj">合计: ￥{{allPrice}}</span>
			<p class="up" @click='topay()'>结算({{allNum}})</p>
		</div>
	</div>
</template>
<script>
	let vm;
	// var pause = 200;
	import {Toast} from 'mint-ui';
	// import {  } from 'mint-ui';
	export default {
		name:'cart',
		data(){
			return {
				sjck:false,
				notcart:false,
				yuan:'yuan1',
				yuan1:'yuan',
				Index:'',
				cpIndex:'',
				allPrice:'0.00',
				allSelect:false,
				Show:-1,
				allNum:0,
				animated:'',
				goodsshow:"",
				numqa:'',
				item:true,
				cart:"",
				ruleIds:'',
				amounts:'',
				shangjia:false,
				shangjiashow:true,
				shangping:false,
				animate:"",
				animateAn:'',
				ischecked:false,
				hotSale:[],
				dpnumindex:'',
				goodsnumindex:'',
				dpthis:0,
				goodsthis:0,
				
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
			vm.toCart();
	  		vm.shopshow();
		},
		methods:{
			deleteSection(id,idd,index) {
				let ab = {
					amount:0,
					ruleId:id,
					skuId:idd,
				};
				let urladdCart = "/shopping/buyerCart";
				let that=this;
				vm.receiveData.getData(vm,urladdCart,"addCartData",function(){			
					for(var i=0;i<that.cart.length;i++) {
								for(var j=0;j<that.cart[i].items.length;j++) {
									if(that.cart[i].items[j].ruleId==id) {
										that.cart[i].items.splice(index,1)
									}
									if(that.cart[i].items.length==0) {
											that.cart.splice(i,1)
									}
									if(that.cart.length==0){
												location.reload();
									}
										}
								}
								this.toCart();

				},ab)
				},
			
			toCart(){

				let url = "/shopping/toCart";
				vm.receiveData.getData(vm,url,"Data",function(){
					vm.cart = vm.Data.result;
					
					if(vm.cart.length == 0){
						vm.notcart = true;
					} else {
						vm.notcart = false;
					};
					for (var i = 0; i < vm.cart.length; i++) {
						
						vm.cart[i].showw = true;
						vm.showw = vm.Data.result[i].showw;
						vm.cart[i].b=false;
						vm.cart[i].dpthis = vm.dpthis;
						vm.dpthis +=1;
						vm.cart[i].items = vm.Data.result[i].items;
						for (var j = 0; j < vm.cart[i].items.length; j++) {
							vm.cart[i].items[j].c = false;
							vm.cart[i].items[j].goodsthis = vm.goodsthis;
							vm.goodsthis+=1;
						}
					}
					console.log(vm.cart);
				})
			},
			//商品推荐
			shopshow(){				
				let url = 'getHotSaleItems/1/0';
		        vm.receiveData.getData(vm,url,'Data',function(){
		            vm.hotSale = vm.Data.result;
		        });
			},
			//获取店铺id冒泡事件捕获阶段触发
			mp(dpIndex){
				this.Index=dpIndex;
			},
			//获取商品id
			selected(cpIndex){ 
				
				var c=this.cart[this.Index].items[cpIndex].c;
				this.cart[this.Index].items[cpIndex].c=!c;
				this.cpIndex=cpIndex;
				var length=this.cart[this.Index].items.length;

				//商品全部选中，店铺才选中
				var c=true;
				for(var i=0;i<length;i++){
				    //叠加积累有false就为false
					c*=this.cart[this.Index].items[i].c;					
				}
				if(c==true){
					this.cart[this.Index].b=true;
				}else this.cart[this.Index].b=false;
				//判断商品是否全部选中，是的话，全选也选中
				var cart=this.cart.length;
				var all=true;
				for(var i=0;i<cart;i++){
					all*=this.cart[i].b;
				}
				if(all==true){
					this.allSelect=true;
				}
				this.allSl();//商品数量
				this.cancel();//商品没有全部选中就取消全选
				this.price();//总价			
			},	
			//结算商品数量
			allSl(){
				var cart=this.cart.length;
				var js=0;
				for(var i=0;i<cart;i++){
					var  arr=this.cart[i].items;
					for(var j=0;j<arr.length;j++){
						js+=this.cart[i].items[j].c;
					}					
				}	
				this.allNum=js;				
			},
			//计算价格
			price(){
				vm.ruleIds=[];
				vm.amounts=[];		
				var all=0;
				for(var j=0;j<this.cart.length;j++){//点击循环有多少个商家
					var arr=this.cart[j].items;//获取商家下面的列表产品
					for(var i=0;i<arr.length;i++){//循环产品列表
						if(arr[i].c===true){//列表里面那些为true
							all+=arr[i].sku.miniPrice*arr[i].amount//为true的价格加起来，为总价
							
							vm.ruleIds.push(arr[i]);
						}
						//all+=arr[i].sku.miniPrice*arr[i].amount
					}
				}
				this.allPrice=all.toFixed(2);//返回数据
			},
			//计算选择支付的账单
			topay(){
				if(this.allPrice==0){
					alert("请选择商品");
					return;
				}
				// alert("老板请支付："+this.allPrice+"元");
				let idArr = '';
				let skuArr = '';
				for (let i in vm.ruleIds) {
					if(vm.ruleIds.length-1==i){
						idArr+=vm.ruleIds[i].ruleId;
						skuArr+=vm.ruleIds[i].sku.id;
					}else{
						idArr+=vm.ruleIds[i].ruleId+',';
						skuArr+=vm.ruleIds[i].sku.id+','
					}
				};
				//生产跳转地址
				let header = 'https://www.e-shequ.com/pay/';
				let url = header+'topay.html?#/?ruleIds='+idArr+'&skuIds='+skuArr;
				location.href = url;
				
				//测试机跳转地址
				// let header = 'https://test.e-shequ.com/guangming/weixin/';
				// let url = header+'topay.html?#/?ruleIds='+idArr+'&skuIds='+skuArr;
				// location.href = url;
				
				// 本地跳转地址
				// this.$router.push({
				// 	path:'/zhifu',
				// 	query:{
				// 		ruleIds :idArr,
				// 		skuIds :skuArr
				// 	}
				// })

			},
			//选择属于某个商家的所有产品
			dpSelected(index){
				//商家选中
				var b=this.cart[index].b;
				this.cart[index].b=!b;
				//this.cart[this.Index]..toggleClass('bg');
				
				var arr=this.cart[index].items;//获取店铺下面的产品数量
				for(var i=0;i<arr.length;i++){//循环产品数量
					if(arr[i].c==false){//判断有那些产品未选中
						arr[i].c=true    //选中咯
					}
					if(this.cart[index].b===false){//当店铺取消全选的时候
						arr[i].c=false;        //产品全部没选中
					}									
				}
				var b=true;//创建一个为真的变量
				for(var i=0;i<this.cart.length;i++){
					if(this.cart[i].b==false){//如果有商家没选中全选则为false
						this.allSelect=false;
					}
					b*=this.cart[i].b;	
				}
				if(b==true){
					this.allSelect=true;
				}

				this.allSl();//商品数量
				this.price();
			},
			//有钱就全选咯
			AllSelect(){
				var selected=this.allSelect;
				this.allSelect=!selected;

				var dp=this.cart.length;//获取店铺数量
				for(var i=0;i<dp;i++){//循环店铺
					var  arr=this.cart[i].items;//获取每个店铺的商品
					for(var j=0;j<arr.length;j++){//循环每个店铺里面的商品为选中					
						if(this.allSelect==true){
							var c=this.cart[i].items[j].c;
							this.cart[i].items[j].c=true;	

						}
						if(this.allSelect==false){
							this.cart[i].items[j].c=false;	
						}
					}
					if(this.allSelect==true){
						this.cart[i].b=true;
					}else{
						this.cart[i].b=false;
					}
				}
				this.allSl();//商品数量
				this.price();
			},
			//商品没有全部选中就取消全选
			cancel(){
				if(this.cart[this.Index].items[this.cpIndex].c==false){
					this.allSelect=false;
				}
				// else{
				// 	this.allSelect=true;
				// }

			},
			//显示编辑商品
			show(index){
				this.cart[this.Index].items[index].sku.endDate = index;
			},
			Hide(index){
				this.cart[this.Index].items[index].sku.endDate=-1;
				
			},
			chooseNum(index,item){
				console.log(item);
				console.log(index);
				var isIPHONE = navigator.userAgent.toUpperCase().indexOf('IPHONE') != -1; 
				$('.text-sl').blur();
				
				vm.dpnumindex = item.dpthis;
				vm.goodsnumindex = index;
				$('.chooseNum-main').show();
				$('.numberr').val(item.items[index].amount);
				vm.numqa = item.items[index].amount;
				$('.numberr').focus();
			},
			inputNum(){
				if(vm.numqa>vm.cart[vm.dpnumindex].items[vm.goodsnumindex].currStock){
					Toast({
					  message: '亲，选购数量超过库存',
					  position: 'middle',
					  duration: 1500
					});
					vm.numqa=vm.cart[vm.dpnumindex].items[vm.goodsnumindex].currStock;
				} 	


	        },
	        //商品--
			reducee(){
				if(vm.numqa<=1){
					return;
				}
				vm.numqa--;
				let ab = {
					amount:-1,
					ruleId:vm.cart[vm.dpnumindex].items[vm.goodsnumindex].ruleId,
					skuId:vm.cart[vm.dpnumindex].items[vm.goodsnumindex].sku.id
				};
				let urladdCart = "/shopping/buyerCart";
				vm.receiveData.getData(vm,urladdCart,"addCartData",function(){
					
				},ab)
				vm.cart[vm.dpnumindex].items[vm.goodsnumindex].amount = vm.numqa;
				this.price();
			},
			addd(){
				if(vm.numqa>=vm.cart[vm.dpnumindex].items[vm.goodsnumindex].currStock){
					Toast({
					  message: '亲，该宝贝不能再买更多哦~',
					  position: 'middle',
					  duration: 1000
					});
					return;
				};
				vm.numqa++;
				let ab = {
					amount:1,
					ruleId:vm.cart[vm.dpnumindex].items[vm.goodsnumindex].ruleId,
					skuId:vm.cart[vm.dpnumindex].items[vm.goodsnumindex].sku.id
				};
				let urladdCart = "/shopping/buyerCart";
				vm.receiveData.getData(vm,urladdCart,"addCartData",function(){
					
				},ab)
				vm.cart[vm.dpnumindex].items[vm.goodsnumindex].amount = vm.numqa;
				this.price();
			},
	        choosefalse(){
	        	$('.chooseNum-main').hide();
	        	vm.cart[vm.dpnumindex].items[vm.goodsnumindex].sku.endDate=-1;
	        },
	        choosetrue(){
	        	console.log(vm.numqa);
	        	console.log(vm.cart[vm.dpnumindex].items[vm.goodsnumindex].amount)
	        	var df = vm.numqa;
	        	if(vm.numqa==""){
	        		vm.numqa = vm.numqa - vm.cart[vm.dpnumindex].items[vm.goodsnumindex].amount;
	        		this.choosefun(df);
	        		return;
	        	};
	        	if(vm.numqa>vm.cart[vm.dpnumindex].items[vm.goodsnumindex].amount){
	        		vm.numqa = vm.numqa - vm.cart[vm.dpnumindex].items[vm.goodsnumindex].amount;
	        		console.log(vm.numqa);
	        		this.choosefun(df);
	        		return;
	        	} ;
	        	if(vm.numqa == vm.cart[vm.dpnumindex].items[vm.goodsnumindex].amount){
	        		vm.numqa = vm.cart[vm.dpnumindex].items[vm.goodsnumindex].amount ;
	        		vm.cart[vm.dpnumindex].items[vm.goodsnumindex].sku.endDate=-1;
	        		$('.chooseNum-main').hide();
	        		return;
	        	};
	        	if (vm.numqa<vm.cart[vm.dpnumindex].items[vm.goodsnumindex].amount){
	        		vm.numqa = vm.numqa - vm.cart[vm.dpnumindex].items[vm.goodsnumindex].amount;
	        		console.log(vm.numqa)
	        		this.choosefun(df);
	        		return;
	        	};
			
				
	        },
	   //      choosetrue(){
	   //      	let df = vm.numqa;
	   //      	if(vm.numqa==""){
	   //      		vm.numqa = vm.numqa - vm.cart[vm.dpnumindex].items[vm.goodsnumindex].amount;
	   //      	}
	   //      	if(vm.numqa>vm.cart[vm.dpnumindex].items[vm.goodsnumindex].amount){
	   //      		vm.numqa = vm.numqa - vm.cart[vm.dpnumindex].items[vm.goodsnumindex].amount;
	   //      		console.log(vm.numqa);
	   //      	} else if(vm.numqa==vm.cart[vm.dpnumindex].items[vm.goodsnumindex].amount){
	   //      		vm.numqa = vm.cart[vm.dpnumindex].items[vm.goodsnumindex].amount ;
	   //      		vm.cart[vm.dpnumindex].items[vm.goodsnumindex].sku.endDate=-1;
	   //      		$('.chooseNum-main').hide();
	   //      		return
	   //      	} else if(vm.numqa<vm.cart[vm.dpnumindex].items[vm.goodsnumindex].amount){
	   //      		alert(1)
	   //      		vm.numqa = vm.numqa - vm.cart[vm.dpnumindex].items[vm.goodsnumindex].amount;
	   //      		console.log(vm.numqa)
	   //      	}
	   //      	let ab = {
	   //      		amount:vm.numqa,
	   //      		ruleId:vm.cart[vm.dpnumindex].items[vm.goodsnumindex].ruleId,
	   //      		skuId: vm.cart[vm.dpnumindex].items[vm.goodsnumindex].sku.id
	   //      	};
	   //      	let urladdCart = "/shopping/buyerCart";
				// vm.receiveData.getData(vm,urladdCart,"addCartData",function(){
				// 	if(vm.addCartData.success == false){
				// 		alert(vm.addCartData.message);
				// 		vm.cart[vm.dpnumindex].items[vm.goodsnumindex].sku.endDate=-1;
				// 		vm.cart[vm.dpnumindex].items[vm.goodsnumindex].amount = df
				// 		return;
				// 	}else{
				// 		vm.cart[vm.dpnumindex].items[vm.goodsnumindex].amount = df;
				// 	}
				// 	vm.cart[vm.dpnumindex].items[vm.goodsnumindex].sku.endDate=-1;
					
				// },ab);
				// //vm.cart[vm.dpnumindex].items[vm.goodsnumindex].amount = 0;
				// // this.toCart();
				// console.log("++"+df)
				
				// this.price();
	   //      	$('.chooseNum-main').hide();
	   //      	// let qwe = vm.numqa;
	   //      	// $('.numberr').val(qwe);
	   //      	// console.log(vm.numqa)			
	   //      },
	   		choosefun(df){
	        	console.log(df);
	        	let ab = {
	        		amount:vm.numqa,
	        		ruleId:vm.cart[vm.dpnumindex].items[vm.goodsnumindex].ruleId,
	        		skuId: vm.cart[vm.dpnumindex].items[vm.goodsnumindex].sku.id
	        	};
	        	let urladdCart = "/shopping/buyerCart";
				vm.receiveData.getData(vm,urladdCart,"addCartData",function(){
					if(vm.addCartData.success == false){
						alert(vm.addCartData.message);
						vm.cart[vm.dpnumindex].items[vm.goodsnumindex].sku.endDate=-1;
						//vm.cart[vm.dpnumindex].items[vm.goodsnumindex].amount = df-1;
						return;
					}else{
						vm.cart[vm.dpnumindex].items[vm.goodsnumindex].amount = df;
					}
					vm.cart[vm.dpnumindex].items[vm.goodsnumindex].sku.endDate=-1;
					
				},ab);
				//vm.cart[vm.dpnumindex].items[vm.goodsnumindex].amount = 0;
				// this.toCart();
				console.log("++"+df)
				
				this.price();
	        	$('.chooseNum-main').hide();
	        	// let qwe = vm.numqa;
	        	// $('.numberr').val(qwe);
	        	// console.log(vm.numqa)
	        	
	        },
			//商品--
			reduce(index){
				if(this.cart[this.Index].items[index].amount<=1){
					return;
				}
				this.cart[this.Index].items[index].amount--;
				let ab = {
					amount:-1,
					ruleId:this.cart[this.Index].items[index].ruleId,
					skuId:this.cart[this.Index].items[index].sku.id
				};
				let urladdCart = "/shopping/buyerCart";
				vm.receiveData.getData(vm,urladdCart,"addCartData",function(){
					
				},ab)
				this.price();
			},
			//商品++
			add(index){
				
				if(this.cart[this.Index].items[index].amount>=this.cart[this.Index].items[index].sku.canSaleNum){
					Toast({
					  message: '亲，该宝贝不能再买更多哦~',
					  position: 'middle',
					  duration: 1000
					});
					return;
				}
				this.cart[this.Index].items[index].amount++;
				let ab = {
					amount:1,
					ruleId:this.cart[this.Index].items[index].ruleId,
					skuId:this.cart[this.Index].items[index].sku.id
				};
				let urladdCart = "/shopping/buyerCart";
				let that = this;
				vm.receiveData.getData(vm,urladdCart,"addCartData",function(){
					if(vm.addCartData.success == false){
						alert(vm.addCartData.message);
						for(var i=0;i<that.cart.length;i++) {
							for(var j=0;j<that.cart[i].items.length;j++) {
								that.cart[i].items[j].amount--;
								return;
							}
						}
					}
				},ab)
				this.price();
			},			
			// del(id,index){
			// 	let ab = {
			// 		amount:0,
			// 		ruleId:this.cart[this.Index].items[index].ruleId,
			// 		skuId:this.cart[this.Index].items[index].sku.id
			// 	};
			// 	let urladdCart = "/shopping/buyerCart";
			// 	let that=this;
			// 	vm.receiveData.getData(vm,urladdCart,"addCartData",function(){			
			// 		for(var i=0;i<that.cart.length;i++) {
			// 			for(var j=0;j<that.cart[i].items.length;j++) {
			// 					if(that.cart[i].items[j].ruleId==id) {
			// 						that.cart[i].items.splice(index,1)
			// 					}
			// 					if(that.cart[i].items.length==0) {
			// 						that.cart.splice(i,1)
			// 					}
			// 					if(that.cart.length==0){
			// 								location.reload();
			// 					}
			// 			}
			// 		}
			// 	},ab)
			// 	// this.cart[this.Index].items.splice(index,1);
			
			// 	// if(this.cart[this.Index].items.length==0){
			// 		// location.reload();
			// 	// 	// this.cart[this.Index].showw=false;
			// 	// 	// alert(this.cart[this.Index].showw);
			// 	// }			
			// },
			
		}
	}
</script>