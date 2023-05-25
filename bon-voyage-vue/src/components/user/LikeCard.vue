<template>
    <div style="width: 100% ; display: flex ; margin-right: 50px">
        <div>
            <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Two%20Hearts.png"
                 alt="Two Hearts" width="70"
                 class="head-icon"/>
        </div>
        <div class="likeGroup">
            <!--    <h4>좋아요 한 여행지</h4>-->
            <div style="display: flex; flex: 0 1 100%; flex-flow: wrap row">
                <circle-img-card-item
                        v-for="attraction in getLimitUserLikeAttractions"
                        :key="attraction.contentId"
                        :attraction="attraction"
                />
            </div>
        </div>

    </div>
</template>
<script>
import {mapGetters} from "vuex";

import CircleImgCardItem from "@/components/common/CircleImgCardItem.vue";
const attractionStore="attractionStore";

export default {
    name: 'LikeCard',

    data(){
        return{
        }
    },
    components: {
        CircleImgCardItem,
    },
    methods:{
    },
    computed : {
        ...mapGetters(attractionStore,["getLimitUserLikeAttractions"]),
        // ...mapState(attractionStore,["userLikeAttractions"]),
    },
}
</script>
<style>
.likeGroup {
    width: 20em;
    background: #ffffff;
    padding: 1em;
    border-radius: 6px;
    border: 1px solid #dee2e6;
    box-shadow: 0 3px 10px rgba(62, 85, 120, .045);
    margin: 10px 100px 15px -45px;
    flex: 0 1 100%;
    z-index: -1;
  flex-flow: wrap row;
}
.head-icon {
    margin-top: -5px;
    width: 90px;
}
</style>