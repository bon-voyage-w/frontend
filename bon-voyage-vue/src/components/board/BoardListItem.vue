<template>
  <tr>
    <td>{{ article.noticeId }}</td>
    <td>
      <router-link
        :to="{ name: 'boardview', params: { articleno: article.articleNo } }"
      >
        {{ article.title }}
      </router-link>
    </td>
    <td>{{ article.userId }}</td>
    <td>{{ article.date }}</td>
    <td>{{ article.hit }}</td>
  </tr>
</template>

<script>
export default {
  name: "BoardListItem",
  props: {
    article: Object,
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
</style>
