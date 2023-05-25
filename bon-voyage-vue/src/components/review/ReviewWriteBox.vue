<template>
  <div class="wrap-review-write">
    <form>
      <input v-model="review" type="text" placeholder="리뷰를 써주세요" />
    </form>
    <button class="box-search-btn" @click="registerReview">
      <font-awesome-icon
        :icon="['fas', 'paper-plane']"
        style="color: #eabb4d"
      />
    </button>
  </div>
</template>

<script>
import {} from "@/api/";
export default {
  name: "ReviewWriteBox",
  components: {},
  data() {
    return {
      review:"",
    };
  },
  methods : {
    registerReview(){

    }
  }
};
</script>

<style scoped>
.wrap-review-write {
  width: 800px;
  text-align: center;
  margin: 0px auto 60px auto;
  padding-top: 40px;
}
.wrap-review-write form {
  display: inline-block;
}
.wrap-review-write input {
  width: 600px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  padding: 12px 20px;
}
.box-search-btn {
  display: inline-block;
  border: 2px solid #ccc;
  border-radius: 4px;
  width: 50px;
  padding: 12px 3px;
  /* margin-left: 10px; */
}
.box-search-btn {
  margin-left: 10px;
}
</style>
