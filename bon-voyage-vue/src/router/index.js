import Vue from "vue";
import VueRouter from "vue-router";
import AppMain from "@/views/AppMain";
import AppNotice from "@/views/AppNotice";
import BoardList from "@/components/board/BoardList";
import BoardWrite from "@/components/board/BoardWrite";
import BoardModify from "@/components/board/BoardModify";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: AppMain,
  },
  {
    path: "/notices",
    name: "notice",
    component: AppNotice,
    redirect: "/notices/list",
    children: [
      {
        path: "list",
        name: "noticelist",
        component: BoardList,
      },
      {
        path: "write",
        name: "noticewrite",
        component: BoardWrite,
      },
      {
        path: "modify",
        name: "noticemodify",
        component: BoardModify,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
