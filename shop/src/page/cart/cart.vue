<style scoped>
/*[v-cloak] {
 display: none;
}*/
.fl{float: left;}
.fr{float: right;}
.por{position: relative;}
.poa{position: absolute;}
.main{margin-top: 10px;}
#cart{background: #f2f2f2;}
.header{width: 100%;height:50px;/*background:#fff;*/ }
.header-div{width: 92%;height: 50px;margin: 0 auto;}
.header-div:nth-child(1){font-size: 20px;color: #666;text-align:center;line-height: 50px;}
.footer{width: 100%;height: 50px;background: #fff;position: fixed;bottom:0;z-index: 999;}
.list{list-style-type: none;}
.list li{width: 100%;border-bottom: 1px solid #ccc;background: #fff;}
.yuan{border:1px solid #ccc;width: 20px;height: 20px;display: inline-block;border-radius: 50%;position:relative;top:0.1rem;left: 0.3rem;}
.list-dp{width: 100%; background: #fff;line-height: 0.8rem;font-size: 18px;color: #666;margin: 0 auto;/*margin-top: 0.2rem*/}
.dp{margin-left: 5%;line-height: 0.8rem;font-size: 14px;}
.item{width: 92%;height: 1.5rem;display: flex;margin: 0 auto;justify-content:center;align-items:center;}
.item-select{width: 1.2rem;height: 1.5rem;}
.item-img{width: 1.5rem;height: 1.5rem;margin-top: 0.3rem}
.item-img img{width: 100%;}
.item-text{height: 1.5rem;width: 95%;margin-left: 3%;margin-top: 0.35rem;overflow: hidden;}
.item-text p:nth-child(1){color: #666;font-size: 12px;/*padding: 10px;*/}
.item-text p:nth-child(2){color: #999;font-size: 12px;padding-top:0.1rem;}
.item-jg{color: #f40;padding-right:10px;}
.item-sl{color: #999;line-height: 1.5rem;font-size: 12px;}
.yuan1{border:1px solid #ccc;width: 20px;height: 20px;display: inline-block;border-radius: 50%;}
.footer{font-size: 12px;color: #666;display: flex;align-items:center;justify-content:space-around;}
.up{width: 2rem;height: 50px;color: #fff;font-size: 14px;line-height: 50px;text-align: center;background: #f40;margin-right: -6%;}
.all{margin-left: -7%;}
.bg{background:url(/assets/image/common/selected.png);background-position: center;background-size: 30px 30px;}
.hj{margin-left: 15%}
.bj{color: #999;font-size: 12px;float: right;margin-right: 5%;}
.sl{width: 70%;height: 1.5rem;display: inline-block;font-size: 12px;}
.sl span{font-size: 20px;width: 20%;height: 0.5rem;display: inline-block;text-align: center;}
.sl input{display: inline-block;width: 50%;height: 0.5rem;}
.Hide{width: 30%;height: 1.3rem;background: #f40;display: inline-block;float: right; font-size: 16px;line-height: 1.3rem;text-align: center;color: #fff;}
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
.inner2-con{width: 202px;height: 100%;margin: 0 auto;}
.inner21{width: 45px;height: 2px;background-color: #9c9c9c;left: 0px;top: 19px;}
.inner22{width: 6px;height: 6px;background-color:#9c9c9c;left: 45px;top:17px; border-radius: 50%;}
.inner231{width: 100px;height: 40px;line-height: 40px;color: #0e0e0e;font-size: 15px;left: 60px;letter-spacing: 1px;font-weight: bold;text-align: center;}
.inner232{width: 100px;height: 40px;line-height: 40px;color: #0e0e0e;font-size: 15px;left: 60px;letter-spacing: 1px;font-weight: bold;text-align: center;}
.inner233{width: 100px;height: 40px;line-height: 40px;color: #0e0e0e;font-size: 15px;left: 52px;letter-spacing: 1px;font-weight: bold;text-align: center;}
.icon-xq{width: 20px;height: 20px;top: 5px;left: 10px}
.icon-xq img{width: 100%;height: 100%;margin: auto;}
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
</style>
<template>
	<div id="cart" v-cloak>
		<div class="notcart" v-show="notcart">
			<div class="notcart-img">
				<img src="assets/common/notcart.png" alt="">
			</div>
			<h2 class="notcart-h2">购物车空空如也</h2>						
			<div class="notcart-guang">
				<router-link to="/">
					<span>去逛逛</span>
				</router-link>
			</div>			
		</div>
		<!-- <div class="header">
			<div class="header-div">
				<span>购物车</span>
			</div>
		</div> -->
		<div class="main" v-if="item">
			<ul class="list">
			    <!-- 列表循环 -->
				<li v-for="(item,index) in json" @click.capture="mp(index,$event)">
					<!-- 商家 -->
					<p class="list-dp" v-show="item.show">
						<span :class="[yuan1,{bg:item.select},bg]" @click.stop="dpSelected(index)"></span>
						<span class="dp">{{item.sj}}</span>
					</p>
					<!-- 图片产品名称价格数量展示 -->
					<div class="item" v-for="(pl,index) in json[index].items" >
						<!-- 选择按钮 -->
						<p class="item-select">
							<span :class="[yuan,{bg:pl.select},pl.animateAn,bg]"  @click.capture="selected(index,$event)"></span>
						</p>
						<!-- 商品图片 -->
						<div class="item-img">
							<img :src="pl.img" alt="">
						</div>
						<!-- 商品名称 -->
						<div v-if="pl.id==index" class="item-text" :class="pl.animate">
							<div class="sl">
								<span @click="reduce(index)">-</span>
								<input type="text" v-model="pl.sl">
								<span @click="add(index)">+</span>
								<p @click="del(index)">删除</p>
							</div>
							<div  class="Hide" @click="Hide(index)">
								完成
							</div>
						</div>
						
						<div v-else class="item-text" :class="pl.animate">
							<p>{{pl.cp}}</p>
							<p>
								<span class="item-jg">${{pl.jg}}</span>
								{{pl.kg}}kg
								<span  class="bj" @click='show(index)'>编辑</span>
							</p>
						</div>					
						<p class="item-sl">
							x{{pl.sl}}
						</p>
					</div>
				</li>
			</ul>
		</div>

		<div class="inner2">
	      <div class="inner2-con por">
	        <div class="inner21 fl poa"></div>
	        <div class="inner22 fl poa"></div>
	        <div class="inner232 fl poa">
	          <span class="icon-xq fl poa"><img src="../../assets/image/cart/icon-nb.png" alt=""></span>&nbsp;&nbsp;<span>猜你喜欢</span>
	        </div>
	        <div class="inner24 fl poa"></div>
	        <div class="inner25 fl poa"></div>
	      </div>
	    </div>
	    <ul class="product-ul">
			<li class="product-li" v-for="item in goodsshow" >
				<!-- <a href="https://www.e-shequ.com/guangming/weixin/group/onsaledetail.html?ruleId=1234&type=30"> -->
				<router-link to="/">
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

		<div style="height:100px"></div>
		<div class="footer">
			<span :class="[yuan,{bg:allSelect}]" @click="AllSelect()"></span>
			<span class="all" >全选</span>
			<span class="hj">合计: ￥{{allPrice}}</span>
			<p class="up" @click='js()'>结算({{allNum}})</p>
		</div>
	</div>
</template>
<script>
	let vm;
	// var pause = 200;
	export default {
		name:'cart',
		data(){
			return {
				notcart:true,
				yuan:'yuan1',
				yuan1:'yuan',
				Index:'',
				cpIndex:'',
				bg:false,
				allPrice:'0.00',
				allSelect:false,
				Show:-1,
				allNum:0,
				animated:'',
				goodsshow:"",
				item:true,
				json:[
				{
					sj:'健康是福商城',
					select:false,
					show:true,
					items:[
						{animateAn:'',animate:'',id:1,cp:'心相印抽纸 经典系列2层180抽*6包抽取式软包面纸巾',jg:200,sl:2,select:false,
						img:'https://gw.alicdn.com/bao/uploaded/i2/690213114/TB2xNf.fxxmpuFjSZFNXXXrRXXa_!!690213114.jpg_100x100q90s150.jpg_.webp',kg:'0.91'},
						{animateAn:'',animate:'',id:2,cp:'男士背心男 夏季宽肩纯棉背心 运动修身紧身打底无袖T恤青年无袖',jg:100,sl:5,select:false,
						img:'https://gw.alicdn.com/bao/uploaded/i4/1025830091/TB2ysmZdXXXXXbVXpXXXXXXXXXX_!!1025830091.jpg_100x100q90s150.jpg_.webp',kg:'0.91'}					
					]
				},
				{
					sj:'秀尚化妆品专营店',
					select:false,
					show:true,
					items:[
						{animate:'',id:1,cp:'24k黄金美容棒瘦脸棒电动瘦脸神器面部脸部按摩器提拉紧致强效仪',jg:20,sl:1,select:false,
						img:'https://gw.alicdn.com/bao/uploaded/i2/245897709/TB2GLAgtpXXXXb9XXXXXXXXXXXX_!!245897709.jpg_200x200q50s150.jpg_.webp',kg:'0.91'},
						{animate:'',id:2,cp:'博倩 发胶喷雾定型男强力持久清香 干胶蓬松啫喱水保湿头发造型女',jg:14.8,sl:2,select:false,
						img:'https://gw.alicdn.com/bao/uploaded/i2/690213114/TB2xNf.fxxmpuFjSZFNXXXrRXXa_!!690213114.jpg_100x100q90s150.jpg_.webp',kg:'0.91'},
						{animate:'',id:3,cp:'天猫正品！莎贝龙发胶蓬松定型喷雾女士男士发蜡啫喱水干胶420ml',jg:30,sl:6,select:false,
						img:'https://gw.alicdn.com/bao/uploaded/i1/1750239480/TB1n8Uxh3nH8KJjSspcXXb3QFXa_!!0-item_pic.jpg_200x200q50s150.jpg_.webp',kg:'0.91'}										
					]
				},
													
				],
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
			toCart(){
				let url = "/shopping/toCart";
				vm.receiveData.getData(vm,url,"Data",function(){
					
				})
			},
			//商品推荐
			shopshow(){
				let url = "/shopping/cart/shopshow";
				vm.receiveData.getData(vm,url,"Data",function(){
					vm.goodsshow = vm.Data.result;
				})
			},
			//获取店铺id冒泡事件捕获阶段触发
			mp(dpIndex){
				this.Index=dpIndex;
				// console.log("1---选择的是店铺------"+this.Index);
			 //    console.log(e.currentTarget);
			},
			//获取商品id
			selected(cpIndex){ 
				if(this.json[this.Index].items[cpIndex].animateAn=='animated tada'){
					this.json[this.Index].items[cpIndex].animateAn='animated';
				}else this.json[this.Index].items[cpIndex].animateAn='animated tada';
				
				var select=this.json[this.Index].items[cpIndex].select;
				this.json[this.Index].items[cpIndex].select=!select;
				this.cpIndex=cpIndex;
				var length=this.json[this.Index].items.length;

				// console.log(length);
				//商品全部选中，店铺才选中
				var select=true;
				for(var i=0;i<length;i++){
				    //叠加积累有false就为false
					select*=this.json[this.Index].items[i].select;					
				}
				if(select==true){
					this.json[this.Index].select=true;
				}else this.json[this.Index].select=false;
				//判断商品是否全部选中，是的话，全选也选中
				var json=this.json.length;
				var all=true;
				for(var i=0;i<json;i++){
					all*=this.json[i].select;
				}
				if(all==true){
					this.allSelect=true;
				}
				// console.log("2---店铺----"+this.Index+"商品序列---"+cpIndex);	
				// console.log(e.currentTarget);	
				this.allSl();//商品数量
				this.cancel();//商品没有全部选中就取消全选
				this.price();//总价			
			},	
			//结算商品数量
			allSl(){
				var json=this.json.length;
				var js=0;
				for(var i=0;i<json;i++){
					var  arr=this.json[i].items;
					for(var j=0;j<arr.length;j++){
						js+=this.json[i].items[j].select;
					}					
				}	
				this.allNum=js;				
			},
			//计算价格
			price(){		
				var all=0;
				for(var j=0;j<this.json.length;j++){//点击循环有多少个商家
					var arr=this.json[j].items;//获取商家下面的列表产品
					for(var i=0;i<arr.length;i++){//循环产品列表
						if(arr[i].select===true){//列表里面那些为true
							all+=arr[i].jg*arr[i].sl//为true的价格加起来，为总价
						}
					}
				}
				this.allPrice=all.toFixed(2);//返回数据
			},
			//选择属于某个商家地所有产品
			dpSelected(index){
				//商家选中
				var select=this.json[index].select;
				this.json[index].select=!select;
				
				var arr=this.json[index].items;//获取店铺下面的产品数量
				for(var i=0;i<arr.length;i++){//循环产品数量
					if(arr[i].select==false){//判断有那些产品未选中
						arr[i].select=true    //选中咯
					}
					if(this.json[index].select===false){//当店铺取消全选的时候
						arr[i].select=false;        //产品全部没选中
					}									
				}
				var select=true;//创建一个为真的变量
				for(var i=0;i<this.json.length;i++){
					if(this.json[i].select==false){//如果有商家没选中全选则为false
						this.allSelect=false;
					}
					select*=this.json[i].select;	
				}
				console.log(select);
				if(select==true){
					this.allSelect=true;
				}

				this.allSl();//商品数量
				this.price();
				// console.log(arr.length);
			},
			//有钱人就全选咯
			AllSelect(){
				var selected=this.allSelect;
				this.allSelect=!selected;

				var dp=this.json.length;//获取店铺数量
				for(var i=0;i<dp;i++){//循环店铺
					var  arr=this.json[i].items;//获取每个店铺的商品
					for(var j=0;j<arr.length;j++){//循环每个店铺里面的商品为选中					
						if(this.allSelect==true){
							var select=this.json[i].items[j].select;
							this.json[i].items[j].select=true;	

						}
						if(this.allSelect==false){
							this.json[i].items[j].select=false;	
						}
					}
					if(this.allSelect==true){
						this.json[i].select=true;
					}else{
						this.json[i].select=false;
					}
				}
				this.allSl();//商品数量
				this.price();
			},
			//商品没有全部选中就取消全选
			cancel(){
				if(this.json[this.Index].items[this.cpIndex].select==false){
					this.allSelect=false;
				}

			},
			//显示编辑商品
			show(index){
				this.json[this.Index].items[index].id=index;
				//this.json[this.Index].items[index].animate='animated bounceInLeft';
				console.log(index);
			},
			Hide(index){
				this.json[this.Index].items[index].id=-1;
				this.json[this.Index].items[index].animate='animated bounceInRight';
			},
			//商品--
			reduce(index){
				if(this.json[this.Index].items[index].sl<=1){
					return;
				}
				this.json[this.Index].items[index].sl--;
				this.price();
			},
			//商品++
			add(index){
				if(this.json[this.Index].items[index].sl>999999){
					return;
				}
				this.json[this.Index].items[index].sl++;
				this.price();
			},			
			del(index){
				this.json[this.Index].items.splice(index,1);
				if(this.json[this.Index].items.length==0){
					this.json[this.Index].show=false;
				}
			},
			//结算支付
			js(){
				if(this.allPrice==0){
					alert("请选择商品");
					return;
				}
				alert("老板请支付："+this.allPrice+"元");
			}

		}
	}
</script>