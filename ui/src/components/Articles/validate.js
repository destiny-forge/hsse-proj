const validate = article => {
  const errors = {};

  if (!article.title) {
    errors.title = 'required';
  }

  if (!article.authors) {
    errors.authors = 'required';
  }

  if (!article.journal) {
    errors.journal = 'required';
  }

  return { ok: Object.keys(errors).length === 0, errors };
};

export default validate;
