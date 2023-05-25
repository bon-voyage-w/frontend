<template>
    <div class="card">
        <h3>{{ attraction.title }}</h3>
        <div class="num">{{ review.reviewContent }}</div>
    </div>
</template>
<script>
// import api.
// import { apiInstance } from "./index.js";
// import http from "@/api/http-common.js"

export default {
    created(){
    //     apiInstance().get("").
    }
}
</script>
<style>
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
</style>