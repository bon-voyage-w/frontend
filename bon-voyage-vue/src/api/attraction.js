import { apiInstance } from "./index.js";

const api = apiInstance;
// const attraction = attractionInstance();

function attractionList(params, success, fail) {
  //   house.get(``, { params: params }).then(success).catch(fail);
  api.get(`/attraction`).then(success).catch(fail);
}

export { attractionList };
