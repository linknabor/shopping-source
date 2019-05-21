import Vue from 'vue'
import Router from 'vue-router'

import navwx from '@/components/navwx'  //底部导航
import index from '@/page/index' //首页
import search from '@/page/search/search' //搜索商品展示页
import classify from '@/page/classify/classify' //商品分类页面
import item from '@/page/classify/item' //二级分类商品列表
import onsaledetail from '@/page/detail/onsaledetail' //商品详情页
import cart from '@/page/cart/cart' //购物车页面
import pay from '@/page/pay/zhifu' //结算页面
import success from '@/page/success/success'  //支付成功页面


Vue.use(Router)

const router= new Router({
  mode: 'history',
  routes: [
    {
      path:'/',name:'index',component:index,
      meta:{title:'悦商城'},
    }, 
    {
      path:'/search/:sousuo',name:'search',component:search,
      meta:{title:'商品列表'}
    },
    {
      path:'/classify',name:'classify',component:classify,
      meta:{title:'商品分类'}
    },
    {
      path:'/item',name:'item',component:item,
      meta:{title:'社区集市'}
    },
    {
      path:'/onsaledetail',name:'onsaledetail',component:onsaledetail,
      meta:{title:'商品详情'}
    },
    {
      path:'/cart',name:'cart',component:cart,
      meta:{title:'购物车'}
    },
    {
      path:'/pay',name:'pay',component:pay,
      meta:{title:'确认订单'}
    },
    {
      path:'/success',name:'success',component:success,
      meta:{title:'支付成功'}
    },  
  ]
});

//路由的钩子函数，
//在每一次路由跳转之前会进入这个方法 to：到哪去  from：从哪来 next() 调用这个方法来完成这个钩子函数
router.beforeEach((to, from, next) => {
    //动态改变title
    changeTitle(to.meta.title)
    next();
});

//动态改变title
function changeTitle(title) {
    title = title ? title : '';
    window.document.title = title;
};

export default router
