const ellipsis = (text, maxLength) => {
  let offset = 3;
  if (maxLength <= offset || !text) {
    return text;
  }

  let endFragment = text.slice(maxLength - offset, maxLength - 1);

  //# special cases to prevent cutting off end highlight tags </b>
  if (endFragment.match(/^\/b>/)) offset = offset - 3; //# don't replace those 3 characters
  if (endFragment.match(/^b>/)) offset = offset - 2; //# missing either '<' or '</' leave the max length one
  if (endFragment.match(/^>/)) offset = offset - 1; //# missing either '<b' or '</b' leave the max length one

  return text.length > maxLength
    ? text.slice(0, maxLength - (offset + 1)).trim() + '...'
    : text;
};

const slugify = (text) => {
  return text
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .trim();
};

module.exports = {
  slugify,
  ellipsis,
};
