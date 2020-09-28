import Vue from "vue";
import VueRouter from "vue-router";

// import Home from "../views/Home.vue";
// import About from "../views/About.vue";

import Dashboard from "../views/Dashboard.vue";
import Login from "@/components/pages/Login.vue";
import Products from "@/components/pages/Products.vue";
import Coupons from "@/components/pages/Coupons.vue";
import Orders from "@/components/pages/Orders.vue";
import CustomerOrder from "@/components/pages/CustomerOrders.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/admin/products"
  },
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  //   meta: { requiresAuth: true }
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () =>
  //   //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  //   component: About
  // },
  {
    path: "/Signin",
    name: "Login",
    component: Login
  },
  {
    path: "/admin",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "products",
        name: "Products",
        component: Products,
        meta: { requiresAuth: true }
      },
      {
        path: "coupons",
        name: "Coupons",
        component: Coupons,
        meta: { requiresAuth: true }
      },
      // {
      //   path: "*",
      //   redirect: "products"
      // },
      {
        path: "orders",
        name: "Orders",
        component: Orders,
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "customer_order",
        name: "CustomerOrder",
        component: CustomerOrder
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
