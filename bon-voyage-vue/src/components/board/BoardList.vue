<template>
  <div class="wrapper">
    <div class="placeinfo-list-title">
      <h2>공지사항</h2>
      <p>문의글은 1:1 문의 게시판에 남겨주세요</p>
    </div>

    <button type="button" class="btn-notice-write" @click="movePage">
      글쓰기
    </button>
    <main>
      <div v-if="articles.length">
        <table>
          <colgroup>
            <col style="width: 10%" />
            <col style="width: 50%" />
            <col style="width: 10%" />
            <col style="width: 20%" />
            <col style="width: 10%" />
          </colgroup>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            <board-list-item
              v-for="article in articles"
              :key="article.noticeId"
              :article="article"
            ></board-list-item>
          </tbody>
        </table>
      </div>
    </main>
    <the-page-nation-vue />
  </div>
</template>

<script>
import BoardListItem from "@/components/board/BoardListItem";
import { listArticle } from "@/api/notice";
import ThePageNationVue from "@/components/common/ThePageNation.vue";

export default {
  name: "BoardList",
  components: {
    BoardListItem,
    ThePageNationVue,
  },
  data() {
    return {
      articles: {},
    };
  },
  created() {
    let param = {
      // pageNumber: 0,
      // pageSize: 15,
    };
    listArticle(
      param,
      ({ data }) => {
        this.articles = data;
      },
      (error) => {
        console.log(error);
      }
    );
  },
  methods: {
    movePage() {
      this.$router.push({ name: "noticewrite" });
    },
    viewArticle(article) {
      this.$router.push({
        name: "noticeview",
        params: { articleno: article.articleno },
      });
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 1000px;
  margin: 50px auto;
}

.btn-notice-write {
  float: right;
  background: #eabb4d;
  color: #fff;
  border-radius: 8px;
  margin: 0px 0 20px 0;
  padding: 10px 40px;
}
main table {
  width: 100%;
}
main table thead {
  background-color: rgba(150, 165, 212, 0.2);
  border-top: 2px solid #222;
}
main table th {
  box-shadow: 0 1px 0 0 #ccc;
  padding: 8px;
}
main table th:not(:nth-child(2), :nth-child(3)) {
  text-align: center;
}
</style>
