<template>
    <div class="main-content">
        <m-y-page-nav></m-y-page-nav>
        <my-Page-info></my-Page-info>
    </div>
</template>

<script>
import MyPageInfo from "@/components/user/MyPageInfo";
import MYPageNav from "@/components/user/MyPageNav.vue";
export default {
    name: "AppMyPage",
    components: {
        MyPageInfo,
        MYPageNav,
    },
};
</script>

<style scoped>
.main-content{
    min-height: 600px;
}
@media only screen and (max-width: 768px) {
    .main-content{
        margin-left: 0;
    }
}
</style>