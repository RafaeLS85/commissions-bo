export const validationFileExtension = (file: File) => {
  const fileName = String(file.name);
  return fileName.includes(".xlsx") || fileName.includes(".xls");
};
