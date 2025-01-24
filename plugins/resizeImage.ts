const Base64ToBlob = (base64: string, mime: string) => {
  const base64Data = base64.split(",")[1]; // Base64のデータ部分のみ
  const data = window.atob(base64Data); // base64形式の文字列をデコード
  const buff = new ArrayBuffer(data.length);
  const arr = new Uint8Array(buff);
  const dataLen = data.length;
  // blobの生成
  for (let i = 0; i < dataLen; i++) {
    arr[i] = data.charCodeAt(i);
  }
  const blob = new Blob([arr], { type: mime });
  return blob;
};

const loadImage = async (base64: string) => {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "Anonymous";
    image.onload = () => resolve(image);
    image.onerror = (e) => reject(e);
    image.src = base64;

    return image;
  });
};

export const ErrorHandler = (error: Error | string): string => {
  let msg = "";
  if (error === "UnreadableFile") {
    msg = "ファイルが読み込めません。";
    console.log(msg);
    return msg;
  } else if (error instanceof Error) {
    msg = error.message;
    console.log(msg);
    return msg;
  } else if (typeof error === "string") {
    msg = error;
    console.log(error);
    return msg;
  }
  msg = "想定外のエラーです。";
  console.log(msg);
  return msg;
};

export const ResizeImage = async (base64: string): Promise<string> => {
  const mime = base64.split(";")[0].split("data:")[1];

  const SIZE = 128 * 2;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const image = await loadImage(base64).catch(() => {
    throw "UnreadableFile";
  });

  let dstWidth, dstHeight;
  const imageWidth = image.width;
  const imageHeight = image.height;
  const imageRate = imageWidth / imageHeight;
  interface IImagePosition {
    x: number;
    y: number;
  }
  const imagePos: IImagePosition = {
    x: 0,
    y: 0,
  };
  if (SIZE < imageWidth || SIZE < imageHeight) {
    if (imageRate >= 1) {
      // 横長
      dstWidth = (imageWidth * SIZE) / imageHeight;
      dstHeight = SIZE;
      imagePos.x = -(dstWidth - SIZE) / 2;
    } else {
      // 縦長
      dstHeight = (imageHeight * SIZE) / imageWidth;
      dstWidth = SIZE;
      imagePos.y = -(dstHeight - SIZE) / 2;
    }
    canvas.width = SIZE;
    canvas.height = SIZE;
  } else {
    dstWidth = imageWidth;
    dstHeight = imageHeight;
    canvas.width = dstWidth;
    canvas.height = dstHeight;
  }

  ctx?.drawImage(
    image,
    0,
    0,
    imageWidth,
    imageHeight,
    imagePos.x,
    imagePos.y,
    dstWidth,
    dstHeight
  );

  // 圧縮
  let binary = canvas.toDataURL(mime);

  const resize_max = SIZE / 2;
  const processingCapacity = (resize_max * resize_max * 24) / 8; //サイズ上限
  const originalBinary = binary;
  const originalBlob = Base64ToBlob(originalBinary, mime);

  if (processingCapacity <= originalBlob["size"]) {
    const capacityRatio = processingCapacity / originalBlob["size"];
    //画質落とす
    binary = canvas.toDataURL(mime, capacityRatio);
  }

  return binary;
};
