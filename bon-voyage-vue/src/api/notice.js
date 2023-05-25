import { noticeInstance } from "@/api/index.js";

const notice = noticeInstance();

function listArticle(param, success, fail) {
  notice.get({ params: param }).then(success).catch(fail);
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
