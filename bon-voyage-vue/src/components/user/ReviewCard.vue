<template>
    <div style="flex: 0 1 100% ; margin-right: 50px">
        <div>
            <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Placard.png"
                 alt="Writing Hand Light Skin Tone" class="head-logo"/>
        </div>
        <div class="reviewGroup">
            <br>
            <div class="cards">
                <text-card-item></text-card-item>
            </div>
        </div>
    </div>
</template>

<style>
.reviewGroup {
    flex: 1 1 100%;
    background: #ffffff;
    padding: 1em;
    border-radius: 6px;
    border: 1px solid #dee2e6;
    box-shadow: 0 3px 10px rgba(62, 85, 120, .045);
    margin: -60px 0px 0px 45px;
    z-index: -1;
}

.reviewGroup h3 {
    border-bottom: 1px solid #eee;
    padding: 0px 0px 10px 5px;
}
.head-logo{
    width: 90px;
    z-index: 55;
}
.cards {
    flex: 0 1 40%;
    flex-wrap: wrap;
    z-index: -1;
}

.card {
    border-radius: 6px;
    border: 1px solid #deebfd;
    box-shadow: 0 3px 10px rgba(62, 85, 120, .045);
    margin: 15px 8px 10px;
    position: relative;
    background-color: #5CAD8A;
    height: 80px;
    padding: 10px;
    z-index: 0;
}

.card .icon {
    color: rgba(0, 0, 0, 0.1);
    position: absolute;
    right: 38px;
    bottom: 69px;
}

.card .num, .card h3 {
    position: relative;
    margin: 0;
    padding: 0;
}

.card .num {
    font-size: 15px;
}

.card h3 {
    font-size: 15px;
    font-weight: bold;
}

@media only screen and (max-width: 768px) {
    .cards {
        flex: 1 1 100%;
    }

    .card .icon {
    }

    .card .num, .card h3 {
    }
}
</style>
<script>
import TextCardItem from "@/components/common/TextCardItem.vue";
export default {
    data() {
        return {
        }
    },
    components : {
        TextCardItem,
    },
    created() {
        console.log("reviewCard나옴");
    }
}
</script>