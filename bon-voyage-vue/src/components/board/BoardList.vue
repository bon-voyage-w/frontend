<template>
  <div class="wrapper">
    <div class="placeinfo-list-title">
      <h2>공지사항</h2>
      <p>문의글은 1:1 문의 게시판에 남겨주세요</p>
    </div>
    <!-- <header> -->
    <!-- <h1>공지사항</h1> -->
    <button type="button" @click="movePage">글쓰기</button>
    <!-- </header> -->
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
              :key="article.articleNo"
              :article="article"
            ></board-list-item>
          </tbody>
        </table>
      </div>

      <ul class="notice-pagenation">
        <li>이전</li>
        <li class="active">1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>다음</li>
      </ul>
    </main>
  </div>
</template>

<script>
import BoardListItem from "@/components/board/BoardListItem";

export default {
  name: "BoardList",
  components: {
    BoardListItem,
  },
  data() {
    return {
      articles: [],
    };
  },
  created() {
    // 비동기
    // TODO : 글목록 얻기.
    this.articles = [
      {
        articleNo: 10,
        userName: "안효인",
        subject: "안녕하세요",
        hit: 10,
        registerTime: "2022-11-08",
      },
      {
        articleNo: 9,
        userName: "김싸피",
        subject: "안녕하세요2",
        hit: 102,
        registerTime: "2022-11-08",
      },
      {
        articleNo: 8,
        userName: "박싸피",
        subject: "안녕하세요7",
        hit: 24,
        registerTime: "2022-11-07",
      },
      {
        articleNo: 8,
        userName: "박싸피",
        subject: "안녕하세요7",
        hit: 24,
        registerTime: "2022-11-07",
      },
      {
        articleNo: 8,
        userName: "박싸피",
        subject: "안녕하세요7",
        hit: 24,
        registerTime: "2022-11-07",
      },
      {
        articleNo: 8,
        userName: "박싸피",
        subject: "안녕하세요7",
        hit: 24,
        registerTime: "2022-11-07",
      },
      {
        articleNo: 8,
        userName: "박싸피",
        subject: "안녕하세요7",
        hit: 24,
        registerTime: "2022-11-07",
      },
      {
        articleNo: 8,
        userName: "박싸피",
        subject: "안녕하세요7",
        hit: 24,
        registerTime: "2022-11-07",
      },
      {
        articleNo: 8,
        userName: "박싸피",
        subject: "안녕하세요7",
        hit: 24,
        registerTime: "2022-11-07",
      },
      {
        articleNo: 8,
        userName: "박싸피",
        subject: "안녕하세요7",
        hit: 24,
        registerTime: "2022-11-07",
      },
      {
        articleNo: 8,
        userName: "박싸피",
        subject: "안녕하세요7",
        hit: 24,
        registerTime: "2022-11-07",
      },
    ];
  },
  methods: {
    movePage() {
      this.$router.push({ name: "noticewrite" });
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 1000px;
  margin: 50px auto;
}
/* header h1 {
  text-align: center;
} */
header button {
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
.notice-pagenation {
  display: flex;
  max-width: 600px;
  margin: 40px auto;
  /* box-shadow: inset 0 0 10px red; */
}
.notice-pagenation li {
  width: calc(100% - 88px / 12);
  padding: 4px 0;
  text-align: center;
  /* box-shadow: inset 0 0 4px blue; */
  cursor: pointer;
}
.notice-pagenation li:not(:last-child) {
  margin-right: 8px;
}
.notice-pagenation li.active {
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #0d6efd;
  font-weight: bold;
}
.notice-pagenation li:not(.active):hover {
  background-color: rgba(150, 165, 212, 0.2);
  border-radius: 4px;
}
.placeinfo-list-title {
  text-align: center;
  margin: 120px 0 80px 0;
}
</style>
