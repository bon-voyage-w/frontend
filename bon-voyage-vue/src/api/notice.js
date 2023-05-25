import { noticeInstance } from "@/api/index.js";

const notice = noticeInstance();

function listArticle(params, success, fail) {
  // [수정필요] 페이지 관련 파라미터 임시로 넘기기
  notice
    .get(`?pageNumber=0&pageSize=6`, { params: params })
    .then(success)
    .catch(fail);
}

function writeArticle(article, success, fail) {
  notice.post(JSON.stringify(article)).then(success).catch(fail);
}

function getArticle(articleno, success, fail) {
  notice.get(`/${articleno}`).then(success).catch(fail);
}

function modifyArticle(article, success, fail) {
  notice.put(JSON.stringify(article)).then(success).catch(fail);
}

function deleteArticle(articleno, success, fail) {
  notice.delete(`/${articleno}`).then(success).catch(fail);
}

export { listArticle, writeArticle, getArticle, modifyArticle, deleteArticle };
