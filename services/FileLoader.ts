export const FileLoader = async (target: HTMLInputElement) => {
  return new Promise<FileReader>((resolve, reject) => {
    const file = (target.files as FileList)[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader);
    reader.onerror = (e) => reject(e);

    return reader;
  });
};
