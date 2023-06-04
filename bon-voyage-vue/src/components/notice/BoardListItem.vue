<template>
  <tr>
    <td>{{ article.noticeId }}</td>
    <td>
      <router-link
        :to="{ name: 'boardView', params: { noticeId: article.noticeId } }"
      >
        {{ article.title }}
      </router-link>
    </td>
    <td>관리자</td>
    <td>{{ article.date }}</td>
    <td>{{ article.hit }}</td>
  </tr>
</template>

<script>
export default {
  name: "BoardListItem",
  props: {
    article: Object,
    num: Number,
  },
};
</script>

<style scoped>
tr td {
  padding: 8px;
  box-shadow: 0 1px 0 0 #ccc;
}
tr td:not(:nth-child(2), :nth-child(3)) {
  text-align: center;
}
a {
  text-decoration: none;
  color: black;
}
</style>
