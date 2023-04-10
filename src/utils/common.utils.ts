export const removeUndefined = (obj: any, options?: { removeEmptyStrings: boolean }) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] && typeof obj[key] === 'object') removeUndefined(obj[key]);
    else if (obj[key] === undefined) delete obj[key];
    else if (options?.removeEmptyStrings && obj[key] === '') delete obj[key];
  });
};

export const copyTextToClipboard = text => navigator.clipboard.writeText(text);
