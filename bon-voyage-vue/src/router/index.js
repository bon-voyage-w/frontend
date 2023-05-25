import Vue from "vue";
import VueRouter from "vue-router";
import AppMain from "@/views/AppMain";
import AppNotice from "@/views/AppNotice";
import AppShareBoard from "@/views/AppShareBoard";
import AppAttraction from "@/views/AppAttraction";
import AppRoute from "@/views/AppRoute";
import AppAttractionBoardDetail from "@/views/AppAttractionBoardDetail";

import BoardList from "@/components/board/BoardList";
import BoardWrite from "@/components/board/BoardWrite";
import BoardModify from "@/components/board/BoardModify";
import AppLogin from "@/views/AppLogin";
import KakaoAuth from "@/components/auth/KakaoAuth"
import AppSignUp from "@/views/AppSignUp.vue";
import AppMyPage from "@/views/AppMyPage.vue";
import BoardView from "@/components/board/BoardView";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: AppMain,
  },
  {
    path: "/attractions",
    name: "attraction",
    component: AppAttraction,
    // children: [
    //   {
    //     path: "/attractions/:contentId",
    //     name: "attractiondetail",
    //     component: AttractionBoardDetail,
    //   },
    // ],
  },
  {
    path: "/attractions/:contentId",
    name: "attractiondetail",
    component: AppAttractionBoardDetail,
  },
  {
    path: "/routes",
    name: "route",
    component: AppRoute,
  },
  {
    path: "/share-boards",
    name: "share-board",
    component: AppShareBoard,
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
      {
        path: "/:noticeId",
        name: "boardView",
        component: BoardView,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: AppLogin,
  },
  {
    path: "/oauth/kakao/callback",
    name: "kakaoauth",
    component: KakaoAuth,
  },
  {
    path: "/sign-up",
    name: "signup",
    component: AppSignUp,
  },
  {
    path: "/my-page",
    name: "mypage",
    component: AppMyPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
