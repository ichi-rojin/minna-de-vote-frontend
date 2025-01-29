const BASE_URL = process.env.VUE_APP_URL;
export class ApiUrls {
  static readonly GET_LIST = BASE_URL + "/api/list";
  static readonly GET_DETAIL = BASE_URL + "/api/detail";
  static readonly GET_VOTE = BASE_URL + "/api/vote";
  static readonly POST_VOTE = BASE_URL + "/api/vote";
  static readonly POST_ELECTION = BASE_URL + "/api/election";
}
