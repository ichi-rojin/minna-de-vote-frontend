const BASE_URL = process.env.VUE_APP_URL;
export class ApiUrls {
  static readonly POST_AUTH = BASE_URL + "/auth";
  static readonly GET_LIST = BASE_URL + "/list";
  static readonly GET_GROUP = BASE_URL + "/group";
  static readonly GET_DETAIL = BASE_URL + "/detail";
  static readonly GET_VOTE = BASE_URL + "/vote";
  static readonly POST_VOTE = BASE_URL + "/vote";
  static readonly POST_ELECTION = BASE_URL + "/election";
}
