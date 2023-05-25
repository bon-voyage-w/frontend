<template>
    <div class="card-icon">
        <div class="card-icon-body">
            <div class="card-icon-i">
                <img :src="attraction.firstImage" @error="replaceNoImg" >
            </div>
            <h3>{{attraction.title}}</h3>
        </div>
    </div>
</template>
<script>
export default {
    props : {
        attraction: Object,
    },
    methods : {
        replaceNoImg(e) {
            e.target.src = "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_640.jpg";
        },
    }
}
</script>
<style>
.card-icon {
    flex: 0 1 11%;
    background: #ffffff;
    border-radius: 6px;
    border: 1px solid #dee2e6;
    box-shadow: 0 3px 10px rgba(62, 85, 120, .045);
    margin: 0 8px 5px;
    flex-wrap: wrap;
}

.card-icon .card-icon-body {
    padding: 20px;
}

.card-icon-i {
    width: 90px;
    height: 90px;
    border-radius: 70%;
    background-color: #e5f4e7;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
}

.card-icon .card-icon-body h3 {
    text-align: center;
    margin-bottom: 0;
    margin-top: 10px;
    font-size: 18px;
    font-weight: 400;
}

.card-icon-i img {
    width: 100%;
    height:100%;
    object-fit: cover;
}
</style>