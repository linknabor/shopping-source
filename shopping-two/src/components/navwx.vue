<style scoped>
.footer{width: 100%;height: 49px;background-color: #fff; position:fixed;bottom: 0px;box-shadow: 0 0 5px rgba(0,0,0,.2);}
.footer li{width: 25%;float: left;text-align: center;height: 100%;}
.footer a{color:#777;font-size: 10px;position: relative;height: 100%;padding-top: 10px;}
.footer span{letter-spacing: 0.1rem;}
.icon{width: 100%;height: 30px;position: relative;}
.icon-box{width: 30%;height: 23px;position: absolute;left: 35%;top:6px;}
.icon-box img{width:100%;height: 100%;margin:auto;}	
a{ -webkit-tap-highlight-color: transparent;}
</style>
<template>
	<div>
		<footer class="footer">
	        <ul style="width: 100%;">
	        	<a href="https://www.e-shequ.com/guangming/weixin/home/index.html">
	          <li >
	            
	              <div class="icon">
	                <div class="icon-box">
	                  <img src="../assets/image/icon/yuefuwu.png" alt="tt">
	                </div>             
	              </div>
	              <span>悦服务</span>
	            
	          </li>
	          </a>
	          <li >
	            <a href="https://www.e-shequ.com/guangming/weixin/group/onsalesindex.html">
	              <div class="icon">
	                <div class="icon-box">
	                  <img src="../assets/image/icon/ysc.png" alt="tt">
	                </div>              
	              </div>
	              <span>悦商城</span>
	            </a>
	          </li>
	          <li >
	            <a href="https://www.e-shequ.com/guangming/weixin/wuye/index.html">
	              <div class="icon">
	                <div class="icon-box">
	                  <img src="../assets/image/icon/yueshequ.png" alt="tt">
	                </div>              
	              </div>
	              <span>悦社区</span>
	            </a>
	          </li>
	          <li >
	            <a href="https://www.e-shequ.com/guangming/weixin/person/index.html">
	              <div class="icon">
	                <div class="icon-box">
	                  <img src="../assets/image/icon/yyz.png" alt="tt">
	                </div>             
	              </div>
	              <span>悦业主</span>
	            </a>
	          </li>
	        </ul>
	     </footer>
	</div>
</template>
<script>
	let vm;
	export default {
		data(){
			return {
				scrollH:false,
			}
		},
		beforeCreate(){//刷新页面
			
		},
		created(){

		},
		watch:{
			
		},
		mounted(){
			
	  		
		},
		methods:{
			

		}
	}
</script>