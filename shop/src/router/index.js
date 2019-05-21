import Vue from 'vue'
import Router from 'vue-router'

// import navwx from '@/components/navwx'
// import index from '@/page/shopping/index'
// import search from '@/page/search/search'
// import item from '@/page/shopping/item'
// import onsaledetail from '@/page/shopping/onsaledetail'
// import cart from '@/page/cart/cart'
import zhifuye from '@/page/zhifuye/zhifuye'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:'/',name:'zhifuye',component:zhifuye,
      meta:{title:'确认订单'},
    },
    // {
    //   path:'/index',name:'index',component:index,
    //   meta:{title:'悦商城'},
    // }, 
    // {
    //   path:'/search/:sousuo',name:'search',component:search,
    //   meta:{title:'商品列表'}
    // },
    // {
    //   path:'/item',name:'item',component:item,
    //   meta:{title:'社区集市'}
    // },
    // {
    //   path:'/onsaledetail',name:'onsaledetail',component:onsaledetail,
    //   meta:{title:'商品详情'}
    // },
    // {
    //   path:'/cart',name:'cart',component:cart,
    //   meta:{title:'购物车'}
    // }
  ]
});


router.beforeEach((to,from,next)=>{
	changeTitle(to.meta.title)
	next();
});

function changeTitle(title) {
	title = title ? title : '光明悦生活';
	window.document.title = title;
};

export default router