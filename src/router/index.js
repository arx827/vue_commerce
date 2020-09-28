import Vue from "vue";
import VueRouter from "vue-router";

import Dashboard from "@/views/Dashboard.vue";
import Login from "@/components/pages/Login.vue";
import Products from "@/components/pages/Products.vue";
import Coupons from "@/components/pages/Coupons.vue";
import Orders from "@/components/pages/Orders.vue";
import CustomerOrder from "@/components/pages/CustomerOrders.vue";
import CustomerCheckout from "@/components/pages/CustomerCheckout";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "login"
  },
  {
    path: "/Login",
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
      },
      {
        path: "customer_checkout/:orderId",
        name: "CustomerCheckout",
        component: CustomerCheckout
      }
    ]
  }
];

const router = new VueRouter({
  linkActiveClass: "active",
  routes
});

export default router;
