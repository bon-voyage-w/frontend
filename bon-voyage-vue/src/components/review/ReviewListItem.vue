<template>
  <ul>
    <li>
      <div class="review-id">
        <div class="profile-image"></div>
        <p>helloworld</p>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        aliquam vel excepturi suscipit eos modi nam temporibus cupiditate eaque
        sapiente, repudiandae iure reiciendis, mollitia veniam fugiat
        exercitationem at adipisci? Nostrum!
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ReviewListItem",
};
</script>

<style scoped>
ul li {
  margin-bottom: 40px;
}
.review-id {
  margin-bottom: 10px;
  align-items: center;
  display: flex;
}
.profile-image {
  width: 50px;
  height: 50px;
  background-color: #eee;
  border-radius: 50%;
  display: inline-block;
}
.review-id p {
  margin: 0 0 0 8px;
}
</style>
