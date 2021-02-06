export const MIME_XLXS = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
/*export const MIME_TXT = 'data:attachment/text';*/
export const MIME_TXT = 'text/plain';
export const MIME_7Z = 'application/x-7z-compressed';
export const MIME_XML = 'application/xml';

export const downloadXlsxFile = (response, fileName?: string, extension?: boolean) => {
  if (!fileName) {
    fileName = 'excel-file';
  }

  fileName = extension ? fileName : `${fileName}.xlsx`;
  downloadFile(response, fileName, MIME_XLXS);
};

export const downloadTxtFile = (response, fileName?: string) => {
  if (!fileName) {
    fileName = 'file-txt';
  }
  fileName = `${fileName}.txt`;
  downloadFile(response, fileName, MIME_TXT);
};

export const download7zFile = (response, fileName?: string) => {
  if (!fileName) {
    fileName = 'file-7z';
  }
  fileName = `${fileName}.7z`;
  downloadFile(response, fileName, MIME_7Z);
};

const downloadFile = (response, fileName: string, type: string) => {
  const blob = new Blob([response], {type: type});
  const blobURL = window.URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.download = fileName;
  anchor.href = blobURL;
  window.document.body.appendChild(anchor);
  anchor.click();
  window.document.body.removeChild(anchor);
  URL.revokeObjectURL(blobURL);
};
