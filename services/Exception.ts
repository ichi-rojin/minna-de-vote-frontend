import { Exception } from "@/consts/Exception";

const Dump = (msg: string) => {
  console.log(msg);
  return msg;
};

export const ErrorHandler = (error: Error | string): string => {
  if (error === Exception.INTERNAL_SERVER_ERROR) {
    return Dump("サーバーに異常がありました。");
  }
  if (error === Exception.UNREADABLE_FILE) {
    return Dump("ファイルが読み込めません。");
  }
  if (error instanceof Error) {
    return Dump(error.message);
  }
  if (typeof error === "string") {
    return Dump(error);
  }
  return Dump("想定外のエラーです。");
};
