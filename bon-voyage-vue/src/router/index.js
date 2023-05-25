import Vue from "vue";
import VueRouter from "vue-router";
import AppMain from "@/views/AppMain";
import AppNotice from "@/views/AppNotice";
import AppShareBoard from "@/views/AppShareBoard";
import AppAttraction from "@/views/AppAttraction";
import BoardList from "@/components/board/BoardList";
import BoardWrite from "@/components/board/BoardWrite";
import BoardModify from "@/components/board/BoardModify";
import AppLogin from "@/views/AppLogin";
import KakaoAuth from "@/components/auth/KakaoAuth"
import AppSignUp from "@/views/AppSignUp.vue";
import AppMyPage from "@/views/AppMyPage.vue";



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
    //     path: "/:contentId",
    //     component:AppAttractionDetail
    //   }
    // ]
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
