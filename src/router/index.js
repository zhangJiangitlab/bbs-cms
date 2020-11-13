import Vue from "vue";
import VueRouter from "vue-router";
// const Error = () => import("@/views/404.vue");
const AdminLogin = () => import("@/views/AdminLogin.vue");
const Admin = () => import("@/views/Admin.vue");
const AdminHome = () => import("@/components/AdminHome.vue");
const AdminTablePage = () => import("@/components/AdminTablePage.vue");
const AdminUsers = () => import("@/components/AdminUsers.vue");
const AdminAdminUsers = () => import("@/components/AdminAdminUsers.vue");

Vue.use(VueRouter);

const routes = [
  // 管理员登录界面
  {
    path: "/",
    name: "adminLogin",
    component: AdminLogin
  },
  // 后台管理界面
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    redirect: "/admin/home",
    children: [
      // 首页
      {
        path: "home",
        name: "adminHome",
        component: AdminHome
      },
      // 文章列表
      {
        path: "post_lists",
        name: "adminPostLists",
        component: AdminTablePage
      },
      // 评论列表
      {
        path: "comments_lists",
        name: "adminCommentsLists",
        component: AdminTablePage
      },
      // 网站用户
      {
        path: "users",
        name: "users",
        component: AdminUsers
      },
      // 网站管理员
      {
        path: "admin_users",
        name: "adminUsers",
        component: AdminAdminUsers
      }
    ]
  }
  // // 404
  // {
  //   path: "*",
  //   name: "errorLink",
  //   component: Error
  // }
];

const router = new VueRouter({
  mode: "history",
  routes
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

export default router;
