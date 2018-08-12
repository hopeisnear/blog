import sanity from 'utils/sanityProvider';

const query = `*[_type == "article"] {
  image,
  title,
  slug,
  publishedAt,
  teaser,
  comments,
  _id
}[0...50]
`;

const fetchArticleQuery = (slug) => `*[_type == "article" && slug.current=="${slug}"] {
  title,
  slug,
  content,
  comments,
  _id
}
`;

export function fetchArticles() {
  return sanity.fetch(query);
}

export function fetchArticle(articleSlug) {
  return sanity.fetch(fetchArticleQuery(articleSlug))
    .then((response) => {
      const [article] = response;
      return article;
    });
}
