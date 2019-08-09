import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import login from "./views/Login";
import manage from "./views/HomeManage";
import manageUser from "./views/ManageUser";
import addShop from "./views/AddShop";
import baseEcharts from "./views/BaseEcharts";
import editor from "./views/Editor";
import drafting from "./views/Drafting";

export default new Router({
  routes: [
    {
      path: "/",
      component: login
    },
    {
      path: "/manage",
      component: manage,
      name: ""
    },
    {
      path: "/manageUser",
      component: manageUser,
      meta: ["数据管理", "用户管理"]
    },
    {
      path: "/addShop",
      component: addShop,
      meta: ["添加店铺"]
    },
    {
      path: "/baseEcharts",
      component: baseEcharts,
      meta: ["图表"]
    },
    {
      path: "/editor",
      component: editor,
      meta: ["富文本编辑器"]
    },
    {
      path: "/drafting",
      component: drafting,
      meta: ["拖拽列表"]
    }
  ]
});
